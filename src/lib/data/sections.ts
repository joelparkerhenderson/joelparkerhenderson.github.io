// Generated from the original index.html link list, regrouped into a
// business-outcome-oriented information architecture. Every link from the
// prior homepage is preserved; see /Users/jph/.claude/plans for the redo plan.

export interface LinkItem {
	title: string;
	href: string;
}

export interface LinkGroup {
	label: string;
	items: LinkItem[];
}

export interface Section {
	id: string;
	heading: string;
	blurb: string;
	groups: LinkGroup[];
	collapsed?: boolean;
}

export const sections: Section[] = [
	{
		id: "leadership-culture",
		heading: "Leadership & culture",
		blurb:
			"Frameworks for setting direction, building trust, and running healthy teams: vision and mission statements, ground rules, feedback, crucial conversations, and how project participants are organized.",
		groups: [
			{
				label: "Leadership",
				items: [
					{ title: "Leadership: selected notes & advice", href: "https://github.com/joelparkerhenderson/leadership" },
					{ title: "Vision statements & mission statements", href: "https://github.com/joelparkerhenderson/vision_statements" },
					{ title: "Intent plan", href: "https://github.com/joelparkerhenderson/intent_plan" },
					{ title: "Company culture", href: "https://github.com/joelparkerhenderson/company_culture" },
				]
			},
			{
				label: "Teamwork",
				items: [
					{ title: "TEAM FOCUS teamwork framework", href: "https://github.com/joelparkerhenderson/team_focus" },
					{ title: "Feedback request template", href: "https://github.com/joelparkerhenderson/feedback_request_template" },
					{ title: "First aid kit for teams", href: "https://github.com/joelparkerhenderson/first_aid_kit" },
				]
			},
			{
				label: "Culture",
				items: [
					{ title: "Ground rules for teams", href: "https://github.com/joelparkerhenderson/ground_rules" },
					{ title: "Code of conduct guidelines", href: "https://github.com/joelparkerhenderson/code_of_conduct_guidelines" },
					{ title: "Crucial conversations", href: "https://github.com/joelparkerhenderson/crucial_conversations" },
					{ title: "Social value orientation (SVO)", href: "https://github.com/joelparkerhenderson/social_value_orientation" },
				]
			},
			{
				label: "Project participants",
				items: [
					{ title: "Responsibility assignment matrix (RAM)", href: "https://github.com/joelparkerhenderson/responsibility_assignment_matrix" },
					{ title: "Stakeholder analysis", href: "https://github.com/joelparkerhenderson/stakeholder_analysis" },
					{ title: "Wordbooks: glossaries, lexicons, terminology", href: "https://github.com/joelparkerhenderson/wordbooks" },
				]
			},
		]
	},
	{
		id: "goals-performance",
		heading: "Goals & performance",
		blurb:
			"Ways to set goals and track whether they are being met — OKRs, KPIs, KRIs, CSFs, SMART criteria — plus how to report progress and distinguish outputs from outcomes.",
		groups: [
			{
				label: "Goals",
				items: [
					{ title: "Objectives & Key Results (OKR)", href: "https://github.com/joelparkerhenderson/objectives_and_key_results" },
					{ title: "Key Performance Indictor (KPI)", href: "https://github.com/joelparkerhenderson/key_performance_indicator" },
					{ title: "Key Risk Indicator (KRI)", href: "https://github.com/joelparkerhenderson/key_risk_indicator" },
					{ title: "Critical success factor (CSF)", href: "https://github.com/joelparkerhenderson/critical_success_factor" },
					{ title: "Goals Ideas Steps Tasks (GIST)", href: "https://github.com/joelparkerhenderson/goals_ideas_steps_tasks" },
					{ title: "SMART criteria", href: "https://github.com/joelparkerhenderson/smart_criteria" },
				]
			},
			{
				label: "Progress",
				items: [
					{ title: "Metrics: ideas & examples", href: "https://github.com/joelparkerhenderson/metrics" },
					{ title: "Milestones: ideas & examples", href: "https://github.com/joelparkerhenderson/milestones" },
					{ title: "Outputs vs. outcomes (OVO)", href: "https://github.com/joelparkerhenderson/outputs_vs_outcomes" },
				]
			},
		]
	},
	{
		id: "decisions-thinking",
		heading: "Decisions & thinking",
		blurb:
			"Templates for recording and defending decisions, including Decision Records, ADRs, SPADE, and OODA, alongside tools for structured and creative thinking.",
		groups: [
			{
				label: "Decisions",
				items: [
					{ title: "Decision Record (DR) template", href: "https://github.com/joelparkerhenderson/decision_record" },
					{ title: "Architecture Decision Record (ADR)", href: "https://github.com/joelparkerhenderson/architecture_decision_record" },
					{ title: "SPADE decision framework", href: "https://github.com/joelparkerhenderson/spade_decision_framework" },
					{ title: "OODA loop: Observe Orient Decide Act", href: "https://github.com/joelparkerhenderson/ooda_loop" },
				]
			},
			{
				label: "Thinking",
				items: [
					{ title: "Oblique strategies for creative thinking", href: "https://github.com/joelparkerhenderson/oblique_strategies" },
					{ title: "Powerful questions: insight, innovation, action", href: "https://github.com/joelparkerhenderson/powerful_questions" },
					{ title: "Always improving: book summaries", href: "https://github.com/joelparkerhenderson/always-improving" },
					{ title: "Quad chart", href: "https://github.com/joelparkerhenderson/quad_chart" },
					{ title: "Queueing theory", href: "https://github.com/joelparkerhenderson/queueing_theory" },
				]
			},
		]
	},
	{
		id: "delivery-projects",
		heading: "Delivery & projects",
		blurb:
			"Running the work itself: statements of work, functional specifications, change management, project checklists, and assessments of agile, architecture, and process maturity.",
		groups: [
			{
				label: "Projects",
				items: [
					{ title: "Statement Of Work (SOW) template", href: "https://github.com/joelparkerhenderson/statement_of_work" },
					{ title: "Functional specifications template", href: "https://github.com/joelparkerhenderson/functional_specifications_template" },
					{ title: "Functional specifications tutorial", href: "https://github.com/joelparkerhenderson/functional_specifications_tutorial" },
					{ title: "ADKAR change management model", href: "https://github.com/joelparkerhenderson/adkar_change_management_model" },
					{ title: "Project management checklist", href: "https://github.com/joelparkerhenderson/project_management_checklist" },
					{ title: "Issues", href: "https://github.com/joelparkerhenderson/issues" },
					{ title: "System quality attributes (SQAs)", href: "https://github.com/joelparkerhenderson/system_quality_attributes" },
				]
			},
			{
				label: "Business assessments",
				items: [
					{ title: "Discovery assessment", href: "https://github.com/joelparkerhenderson/discovery_assessment" },
					{ title: "Strategic Balanced Scorecard (SBS)", href: "https://github.com/joelparkerhenderson/strategic_balanced_scorecard" },
					{ title: "Maturity models (MMs)", href: "https://github.com/joelparkerhenderson/maturity_models" },
					{ title: "Value Stream Mapping (VSM)", href: "https://github.com/joelparkerhenderson/value_stream_mapping" },
					{ title: "Agile assessment", href: "https://github.com/joelparkerhenderson/agile_assessment" },
					{ title: "Enterprise architecture assessment", href: "https://github.com/joelparkerhenderson/enterprise_architecture_assessment" },
					{ title: "Lean business lists", href: "https://github.com/joelparkerhenderson/lean_business_lists" },
				]
			},
		]
	},
	{
		id: "startups-strategy",
		heading: "Startups & strategy",
		blurb:
			"Early-stage and go-to-market tools: pitch decks, business model canvases, thought leadership writing, and measuring customer sentiment.",
		groups: [
			{
				label: "Startups",
				items: [
					{ title: "Pitch deck quick start", href: "https://github.com/joelparkerhenderson/pitch_deck_quick_start" },
					{ title: "Business model canvas (BMC)", href: "https://github.com/joelparkerhenderson/business_model_canvas" },
					{ title: "Thought leadership writing", href: "https://github.com/joelparkerhenderson/thought_leadership_writing" },
					{ title: "Net promoter score (NPS)", href: "https://github.com/joelparkerhenderson/net_promoter_score" },
					{ title: "Software development methodologies", href: "https://github.com/joelparkerhenderson/software_development_methodologies" },
				]
			},
		]
	},
	{
		id: "risk-security",
		heading: "Risk, security & legal",
		blurb:
			"Coordinated vulnerability disclosure, and the consulting and confidentiality agreements used to formalize engagements.",
		groups: [
			{
				label: "Consulting agreements",
				items: [
					{ title: "Consulting agreement", href: "https://github.com/sixarm/sixarm_company_consulting_agreement" },
					{ title: "Confidentiality agreement", href: "https://github.com/sixarm/sixarm_company_confidentiality_agreement" },
				]
			},
			{
				label: "Coordinated disclosure",
				items: [
					{ title: "Coordinated disclosure", href: "https://github.com/joelparkerhenderson/coordinated_disclosure" },
				]
			},
		]
	},
	{
		id: "healthcare-interoperability",
		heading: "Healthcare interoperability",
		blurb:
			"Rust implementations of core healthcare data standards, developed alongside software engineering leadership work at Digital Health and Care Wales (NHS Wales).",
		groups: [
			{
				label: "Healthcare interoperability",
				items: [
					{ title: "HL7® Rust - Health Level Seven", href: "https://github.com/hl7-rust/hl77-rust" },
					{ title: "ER7® Rust - Encoding Rules 7 pipe-hat flat file format", href: "https://github.com/fhir-rust/er7-rust" },
					{ title: "FHIR® Rust - Fast Healthcare Interoperability Resources", href: "https://github.com/fhir-rust/fhir-rust" },
					{ title: "SNOMED® Rust - Systematized Nomenclature of Medicine", href: "https://github.com/snomed-rust/snomed-rust" },
					{ title: "openEHR® Rust - Open Electronic Health Record", href: "https://github.com/openehr-rust/openehr-rust" },
				]
			},
		]
	},
	{
		id: "engineering-reference",
		heading: "Engineering reference",
		blurb:
			"Git workflow references and a long tail of small demo repositories, one focused example per language, framework, or API.",
		collapsed: true,
		groups: [
			{
				label: "Git & version control",
				items: [
					{ title: "Git branch name: ideas & examples", href: "https://github.com/joelparkerhenderson/git_branch_name" },
					{ title: "Git commit message: ideas & examples", href: "https://github.com/joelparkerhenderson/git_commit_message" },
					{ title: "Git commit template", href: "https://github.com/joelparkerhenderson/git_commit_template" },
					{ title: "Git workflow help", href: "https://github.com/joelparkerhenderson/git_workflow_help" },
					{ title: "Git hooks: examples & helpers", href: "https://github.com/joelparkerhenderson/git_hooks" },
					{ title: "GitHub special files and paths", href: "https://github.com/joelparkerhenderson/github_special_files_and_paths" },
					{ title: "Versioning: ideas & examples", href: "https://github.com/joelparkerhenderson/versioning" },
					{ title: "Monorepo vs. polyrepo", href: "https://github.com/joelparkerhenderson/monorepo_vs_polyrepo" },
				]
			},
			{
				label: "Demo code",
				items: [
					{ title: "AWS Lamba", href: "https://github.com/joelparkerhenderson/demo_aws_lambda" },
					{ title: "Consul", href: "https://github.com/joelparkerhenderson/demo_consul" },
					{ title: "D3 Divs", href: "https://github.com/joelparkerhenderson/demo_d3_divs" },
					{ title: "D3 Stickies", href: "https://github.com/joelparkerhenderson/demo_d3_stickies" },
					{ title: "D3 Target", href: "https://github.com/joelparkerhenderson/demo_d3_target" },
					{ title: "Schema transforms", href: "https://github.com/joelparkerhenderson/demo_data_schema_transforms" },
					{ title: "Date-Time Format", href: "https://github.com/joelparkerhenderson/demo_date_time_format" },
					{ title: "Elixir &Phoenix", href: "https://github.com/joelparkerhenderson/demo_elixir_phoenix" },
					{ title: "Java Spring Boot Rest", href: "https://github.com/joelparkerhenderson/demo_java_spring_boot_rest" },
					{ title: "Job title descriptions", href: "https://github.com/joelparkerhenderson/demo_job_title_descriptions" },
					{ title: "JSON API beginner", href: "https://github.com/joelparkerhenderson/demo_json_api_beginner" },
					{ title: "JSON API hello world", href: "https://github.com/joelparkerhenderson/demo_json_api_hello_world" },
					{ title: "JSON API specifications", href: "https://github.com/joelparkerhenderson/demo_json_api_specification" },
					{ title: "Liquibase hello world", href: "https://github.com/joelparkerhenderson/demo_liquibase_hello_world" },
					{ title: "Liquibase YAML", href: "https://github.com/joelparkerhenderson/demo_liquibase_yaml" },
					{ title: "Demo of Swift items", href: "https://github.com/joelparkerhenderson/demo_of_swift_items" },
					{ title: "Oracle SQL todo", href: "https://github.com/joelparkerhenderson/demo_oracle_sql_todo" },
					{ title: "Python Flask hello world", href: "https://github.com/joelparkerhenderson/demo_python_flask_hello_world" },
					{ title: "Ruby Sinatra hello world", href: "https://github.com/joelparkerhenderson/demo_ruby_sinatra_hello_world" },
					{ title: "Swagger a.k.a. OpenAPI", href: "https://github.com/joelparkerhenderson/demo_swagger" },
					{ title: "Swift Alamofire for networking", href: "https://github.com/joelparkerhenderson/demo_swift_alamofire" },
					{ title: "Swift Carthage for package management", href: "https://github.com/joelparkerhenderson/demo_swift_carthage" },
					{ title: "Swift Charts", href: "https://github.com/joelparkerhenderson/demo_swift_charts" },
					{ title: "Swift Excel XLSX reader/writer", href: "https://github.com/joelparkerhenderson/demo_swift_excel_xlsx_reader_writer" },
					{ title: "Swift Hello World", href: "https://github.com/joelparkerhenderson/demo_swift_hello_world" },
					{ title: "Swift items", href: "https://github.com/joelparkerhenderson/demo_swift_items" },
					{ title: "Swift master/detail", href: "https://github.com/joelparkerhenderson/demo_swift_master_detail" },
					{ title: "Swift news", href: "https://github.com/joelparkerhenderson/demo_swift_news" },
					{ title: "Swift ObjectMapper for JSON models", href: "https://github.com/joelparkerhenderson/demo_swift_objectmapper" },
					{ title: "Swift Quick Nimble for TDD BDD testing", href: "https://github.com/joelparkerhenderson/demo_swift_quick_nimble" },
					{ title: "Swift Realm mobile database", href: "https://github.com/joelparkerhenderson/demo_swift_realm" },
					{ title: "Swift REST", href: "https://github.com/joelparkerhenderson/demo_swift_rest" },
					{ title: "Swift REST master/detail page", href: "https://github.com/joelparkerhenderson/demo_swift_rest_master_detail_page" },
					{ title: "Swift SQLite", href: "https://github.com/joelparkerhenderson/demo_swift_sqlite" },
					{ title: "Swift Taylor", href: "https://github.com/joelparkerhenderson/demo_swift_taylor" },
					{ title: "Swift text view", href: "https://github.com/joelparkerhenderson/demo_swift_text_view" },
					{ title: "Terraform", href: "https://github.com/joelparkerhenderson/demo_terraform" },
					{ title: "Terraform 2", href: "https://github.com/joelparkerhenderson/demo_terraform_2" },
					{ title: "Vagrant VirtualBox AWS", href: "https://github.com/joelparkerhenderson/demo_vagrant_virtualbox_aws" },
					{ title: "YAML files to Swift classes", href: "https://github.com/joelparkerhenderson/demo_yaml_files_to_swift_classes" },
				]
			},
			{
				label: "Demo of media APIs",
				items: [
					{ title: "Gracenote API scripts", href: "https://github.com/joelparkerhenderson/gracenote_api_scripts" },
					{ title: "International Showtimes API scripts", href: "https://github.com/joelparkerhenderson/internationalshowtimes_api_scripts" },
				]
			},
			{
				label: "Miscellaneous code",
				items: [
					{ title: "Brewfile", href: "https://github.com/joelparkerhenderson/brewfile" },
					{ title: "Excel VBA Save As CSV", href: "https://github.com/joelparkerhenderson/excel_vba_save_as_csv" },
					{ title: "Excel VBA Save As JSON", href: "https://github.com/joelparkerhenderson/excel_vba_save_as_json" },
					{ title: "RubyMotion easy UI tableview", href: "https://github.com/joelparkerhenderson/rubymotion_easy_ui_table_view" },
					{ title: "Perl CGI utility code", href: "https://github.com/joelparkerhenderson/joelparkerhenderson_perl_cgi_util_1990s" },
				]
			},
		]
	},
];
