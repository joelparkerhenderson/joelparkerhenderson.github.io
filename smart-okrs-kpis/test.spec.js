// Playwright test for SMART + OKRs + KPIs generator.
// Run from this directory with:
//   npx playwright test test.spec.js --browser=chromium --workers=1

const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const PAGE_URL = 'file://' + path.resolve(__dirname, 'index.html');

test.describe('SMART + OKRs + KPIs', () => {
    test('loads the page with all expected fields and both buttons', async ({ page }) => {
        await page.goto(PAGE_URL);
        await expect(page).toHaveTitle('SMART + OKRs + KPIs');
        await expect(page.locator('h1')).toHaveText('SMART + OKRs + KPIs');

        const inputIds = ['verb', 'topic', 'delta', 'timing', 'metric', 'update', 'source'];
        for (const id of inputIds) {
            await expect(page.locator(`#${id}`)).toBeVisible();
        }

        const textareaIds = ['specific', 'measurable', 'actionable', 'relatable', 'timely', 'kpi', 'markdown'];
        for (const id of textareaIds) {
            await expect(page.locator(`#${id}`)).toBeVisible();
        }

        await expect(page.locator('#generate-button')).toBeVisible();
        await expect(page.locator('#download-button')).toBeVisible();
    });

    test('markdown output textarea is read-only', async ({ page }) => {
        await page.goto(PAGE_URL);
        await expect(page.locator('#markdown')).toHaveAttribute('readonly', '');
    });

    test('suggester inputs start empty so placeholder is visible', async ({ page }) => {
        await page.goto(PAGE_URL);
        await page.waitForFunction(() => window.Alpine !== undefined);
        await expect(page.locator('#verb')).toHaveValue('');
        await expect(page.locator('#topic')).toHaveValue('');
    });

    test('dropdown opens on button click and selects a suggestion', async ({ page }) => {
        await page.goto(PAGE_URL);
        await page.waitForFunction(() => window.Alpine !== undefined);

        const verbWrapper = page.locator('#verb').locator('..');
        const dropdown = verbWrapper.locator('.suggestable_dropdown');

        await expect(dropdown).toBeHidden();
        await verbWrapper.locator('button').click();
        await expect(dropdown).toBeVisible();

        await dropdown.locator('li', { hasText: 'Increase' }).first().click();
        await expect(page.locator('#verb')).toHaveValue('Increase');
        await expect(dropdown).toBeHidden();
    });

    test('Generate Markdown populates the output textarea with all sections', async ({ page }) => {
        await page.goto(PAGE_URL);
        await page.waitForFunction(() => window.Alpine !== undefined);

        await page.locator('#verb').fill('Increase');
        await page.locator('#topic').fill('customer satisfaction');
        await page.locator('#delta').fill('by 10 percent');
        await page.locator('#timing').fill('by end of Q4');
        await page.locator('#metric').fill('Measure by NPS');
        await page.locator('#update').fill('with updates monthly');
        await page.locator('#source').fill('via our CRM system');

        await page.locator('#generate-button').click();

        const md = await page.locator('#markdown').inputValue();
        expect(md).toContain('## Objective & Key Result');
        expect(md).toContain('Increase customer satisfaction by 10 percent by end of Q4.');
        expect(md).toContain('Measure by NPS with updates monthly via our CRM system.');
        expect(md).toContain('## SMART criteria');
        expect(md).toContain('### Specific');
        expect(md).toContain('### Measurable');
        expect(md).toContain('### Actionable');
        expect(md).toContain('### Relatable');
        expect(md).toContain('### Timely');
        expect(md).toContain('## Key Performance Indicator (KPI)');
    });

    test('Generate Markdown does not trigger a file download', async ({ page }) => {
        await page.goto(PAGE_URL);
        await page.waitForFunction(() => window.Alpine !== undefined);

        let downloaded = false;
        page.on('download', () => { downloaded = true; });

        await page.locator('#generate-button').click();
        await page.waitForTimeout(300);

        expect(downloaded).toBe(false);
    });

    test('Download Markdown triggers a download with current form values', async ({ page }) => {
        await page.goto(PAGE_URL);
        await page.waitForFunction(() => window.Alpine !== undefined);

        await page.locator('#verb').fill('Decrease');
        await page.locator('#topic').fill('latency');

        const downloadPromise = page.waitForEvent('download');
        await page.locator('#download-button').click();
        const download = await downloadPromise;

        expect(download.suggestedFilename()).toBe('smart-okrs-kpis.md');

        const tmpPath = path.join(require('os').tmpdir(), 'smart-okrs-kpis-test.md');
        await download.saveAs(tmpPath);
        const contents = fs.readFileSync(tmpPath, 'utf8');
        expect(contents).toContain('Decrease latency');
        expect(contents).toContain('## SMART criteria');
        expect(contents).toContain('## Key Performance Indicator (KPI)');
        fs.unlinkSync(tmpPath);
    });

    test('Download Markdown reflects latest edits even without re-generating', async ({ page }) => {
        await page.goto(PAGE_URL);
        await page.waitForFunction(() => window.Alpine !== undefined);

        await page.locator('#verb').fill('Increase');
        await page.locator('#generate-button').click();
        // Edit AFTER generate; download should still see the new value.
        await page.locator('#verb').fill('Decrease');

        const downloadPromise = page.waitForEvent('download');
        await page.locator('#download-button').click();
        const download = await downloadPromise;

        const tmpPath = path.join(require('os').tmpdir(), 'smart-okrs-kpis-test2.md');
        await download.saveAs(tmpPath);
        const contents = fs.readFileSync(tmpPath, 'utf8');
        expect(contents).toContain('Decrease');
        expect(contents).not.toMatch(/^Increase\s/m);
        fs.unlinkSync(tmpPath);
    });

    test('clicking either button does not submit the form', async ({ page }) => {
        await page.goto(PAGE_URL);
        await page.waitForFunction(() => window.Alpine !== undefined);

        const urlBefore = page.url();
        await page.locator('#generate-button').click();
        await page.waitForTimeout(100);
        expect(page.url()).toBe(urlBefore);

        const downloadPromise = page.waitForEvent('download');
        await page.locator('#download-button').click();
        await downloadPromise;
        expect(page.url()).toBe(urlBefore);
    });
});
