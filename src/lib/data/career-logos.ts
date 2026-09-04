// Logos for the homepage "Career" section — organizations across my
// work history: employers, clients, investors of companies I worked
// at, and education. Sourced from each org's own site favicon where
// one exists and is legible; three (Sun Microsystems, 70 Million Jobs,
// NHS Wales) redirect or return a generic icon today, so those come
// from Wikipedia/Wikimedia Commons' hosted copy of the real logo
// instead. All cropped/padded to 64x64 PNG.
import sunMicrosystems from '$lib/assets/logos/sun-microsystems.png';
import menloVentures from '$lib/assets/logos/menlo-ventures.png';
import berkeley from '$lib/assets/logos/berkeley.png';
import yCombinator from '$lib/assets/logos/y-combinator.png';
import commissaryClub from '$lib/assets/logos/commissary-club.png';
import boxbee from '$lib/assets/logos/boxbee.png';
import thoughtworks from '$lib/assets/logos/thoughtworks.png';
import intel from '$lib/assets/logos/intel.png';
import creditSuisse from '$lib/assets/logos/credit-suisse.png';
import delta from '$lib/assets/logos/delta.png';
import neimanMarcus from '$lib/assets/logos/neiman-marcus.png';
import sevenyMillionJobs from '$lib/assets/logos/70-million-jobs.png';
import nhsWales from '$lib/assets/logos/nhs-wales.png';
import wested from '$lib/assets/logos/wested.png';

export interface CareerLogo {
	id: string;
	name: string;
	image: string;
}

export const careerLogos: CareerLogo[] = [
	{ id: 'nhs-wales', name: 'NHS Wales', image: nhsWales },
	{ id: 'thoughtworks', name: 'ThoughtWorks', image: thoughtworks },
	{ id: 'commissary-club', name: 'Commissary Club', image: commissaryClub },
	{ id: 'boxbee', name: 'Boxbee', image: boxbee },
	{ id: 'credit-suisse', name: 'Credit Suisse', image: creditSuisse },
	{ id: 'delta', name: 'Delta', image: delta },
	{ id: 'neiman-marcus', name: 'Neiman Marcus', image: neimanMarcus },
	{ id: 'intel', name: 'Intel', image: intel },
	{ id: 'sun-microsystems', name: 'Sun Microsystems', image: sunMicrosystems },
	{ id: 'wested', name: 'WestEd', image: wested },
	{ id: '70-million-jobs', name: '70 Million Jobs', image: sevenyMillionJobs },
	{ id: 'y-combinator', name: 'Y Combinator', image: yCombinator },
	{ id: 'menlo-ventures', name: 'Menlo Ventures', image: menloVentures },
	{ id: 'berkeley', name: 'UC Berkeley', image: berkeley }
];
