import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const guideSidebar = [
  {
    text: '📖 Foundations',
    items: [
      { text: 'The Manifesto', link: '/guide/manifesto' },
      { text: '🚀 Start Here', link: '/guide/start-here' },
      { text: 'Why Teams Fail', link: '/guide/why-teams-fail' },
      { text: 'The 5 Core Principles', link: '/guide/principles' },
    ],
  },
  {
    text: '📐 The Framework',
    items: [
      { text: 'Introduction', link: '/guide/introduction' },
      { text: 'The Lifecycle at a Glance', link: '/guide/lifecycle' },
      { text: 'The 4-Layer Hierarchy', link: '/guide/hierarchy' },
      { text: 'The 4-Layer Hierarchy (Deep Dive)', link: '/four-layers' },
      { text: 'Framework Overview', link: '/framework-overview' },
      { text: 'How Teams Actually Run This', link: '/guide/parallel-work' },
      { text: '📖 The Narrative Framework', link: '/guide/narrative' },
    ],
  },
  {
    text: '🧭 The Growth Path',
    items: [
      { text: 'Ship Clean', link: '/guide/ship-clean' },
      { text: 'Shape Before You Build', link: '/guide/shape-before-you-build' },
      { text: 'Discover Before You Shape', link: '/guide/discover-before-you-shape' },
      { text: 'Own What You Ship', link: '/guide/own-what-you-ship' },
      { text: 'Close the Loop', link: '/guide/close-the-loop' },
    ],
  },
  {
    text: '⚖️ Scale & Roles',
    items: [
      { text: 'Scale Tiers (1→3)', link: '/guide/scale-tiers' },
      { text: 'Roles', link: '/guide/roles' },
      { text: 'Lite Mode (Small Teams)', link: '/guide/lite-mode' },
    ],
  },
  {
    text: '🗺️ Using This Book',
    items: [
      { text: 'How to Use This Book', link: '/guide/how-to-use' },
    ],
  },
  {
    text: '📋 Portfolio',
    items: [
      { text: 'Overview', link: '/portfolio/' },
      { text: 'Roadmap Planning', link: '/portfolio/roadmap' },
      { text: 'Cross-team Dependencies', link: '/portfolio/dependencies' },
    ],
  },
]

const fieldGuideSidebar = [
  {
    text: '📘 The Field Guide',
    items: [
      { text: 'About the Field Guide', link: '/field-guide/' },
    ],
  },
  {
    text: 'Part 1 — Discovery Craft',
    items: [
      { text: 'How to Run a Discovery Interview', link: '/field-guide/discovery-interview' },
    ],
  },
  {
    text: 'Part 2 — Shaping Craft',
    items: [
      { text: 'Story Mapping Workshop', link: '/field-guide/story-mapping-workshop' },
    ],
  },
  {
    text: 'Part 3 — Design Craft',
    items: [
      { text: 'The Designer in Discovery', link: '/field-guide/designer-in-discovery' },
    ],
  },
  {
    text: 'Part 4 — Build Craft',
    items: [
      { text: 'Code Review as Craft', link: '/field-guide/code-review' },
    ],
  },
  {
    text: 'Part 5 — Operations Craft',
    items: [
      { text: 'Blameless Post-Mortem Facilitation', link: '/field-guide/blameless-postmortem' },
    ],
  },
  {
    text: 'Part 6 — Growth Craft',
    items: [
      { text: 'Feedback to Signal', link: '/field-guide/feedback-to-signal' },
    ],
  },
  {
    text: 'Part 7 — Tension Scenarios',
    items: [
      { text: 'P0 Drops Mid-Sprint', link: '/field-guide/tension-p0-mid-sprint' },
      { text: 'PM Promised 3 Weeks, Engineer Says 3 Months', link: '/field-guide/tension-scope-mismatch' },
    ],
  },
]

const referenceSidebar = [
  {
    text: '📋 Reference',
    items: [
      { text: 'Overview', link: '/reference/' },
      { text: 'The 10 Non-Negotiables', link: '/reference/non-negotiables' },
      { text: 'Phase Gate Checklists', link: '/reference/phase-gates' },
      { text: 'Escalation Paths', link: '/reference/escalation' },
      { text: 'Master Cadence Table', link: '/reference/master-cadence' },
      { text: 'Glossary', link: '/reference/glossary' },
    ],
  },
  {
    text: 'Templates',
    items: [
      { text: 'Initiative Template', link: '/reference/initiative-template' },
      { text: 'Master Doc Template', link: '/reference/master-doc-template' },
      { text: 'Epic Template', link: '/reference/epic-template' },
      { text: 'Story Template', link: '/reference/story-template' },
      { text: 'Bug Report Template', link: '/reference/bug-template' },
      { text: 'Project Health Template', link: '/reference/project-health-template' },
    ],
  },
  {
    text: '📐 Standards',
    items: [
      { text: 'Overview', link: '/standards/' },
      { text: 'Jira Issue Type Guide', link: '/standards/jira-issue-types' },
      { text: 'Bug Label System', link: '/standards/bug-labels' },
      { text: 'Gherkin Tagging Standard', link: '/standards/gherkin-tags' },
      { text: 'Tooling Conventions', link: '/standards/tooling' },
      { text: 'Communication Tone', link: '/standards/tone' },
    ],
  },
  {
    text: '📂 Examples',
    items: [
      { text: 'Examples Gallery', link: '/examples/' },
      { text: 'Initiative — Pninei Halacha', link: '/examples/initiative-pninei-halacha' },
      { text: 'Initiative — Analytics Layer', link: '/examples/initiative-analytics-layer' },
      { text: 'Feature — Living Wondrously Journal', link: '/examples/feature-living-wondrously' },
      { text: 'RCA — Wallet Balance Bug', link: '/examples/rca-wallet-balance' },
      { text: 'Post-Mortem — JWT Outage', link: '/examples/postmortem-jwt-outage' },
      { text: 'Story — Journal Entry', link: '/examples/story-journal-entry' },
    ],
  },
]

export default withMermaid(
  defineConfig({
  base: '/udoo-playbook/',
  title: 'UDOO Playbook',
  description: 'A battle-tested R&D operating framework: Upstream (discovery), Downstream (delivery), Onstream (operations), Offstream (growth). From idea to value — and back.',
  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/udoo-playbook/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#1A3C5E' }],
    ['meta', { property: 'og:title', content: 'UDOO Playbook — R&D Operating Framework' }],
    ['meta', { property: 'og:description', content: 'A battle-tested framework for product teams. Upstream discovery, lean delivery, SRE operations, and customer growth — in one continuous loop.' }],
    ['meta', { property: 'og:image', content: 'https://200-nwire.github.io/udoo-playbook/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'UDOO Playbook — R&D Operating Framework' }],
    ['meta', { name: 'twitter:description', content: 'Upstream → Downstream → Onstream → Offstream. A complete operating guide for product teams.' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'R&D Framework',

    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      {
        text: 'Phases',
        items: [
          { text: '🔵 Upstream — Product & Discovery', link: '/upstream/' },
          { text: '🟢 Downstream — Engineering & Execution', link: '/downstream/' },
          { text: '🟠 Onstream — Service Delivery & SLA', link: '/onstream/' },
          { text: '🟣 Offstream — Growth & Customer Success', link: '/offstream/' },
        ],
      },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Field Guide', link: '/field-guide/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'The Weight of Knowing', link: '/novel/' },
    ],

    sidebar: {
      '/guide/': guideSidebar,
      '/portfolio/': guideSidebar,
      '/four-layers': guideSidebar,
      '/framework-overview': guideSidebar,

      '/upstream/': [
        {
          text: '🔵 Upstream — Discovery',
          items: [
            { text: 'Overview', link: '/upstream/' },
            { text: 'Roles & Ownership', link: '/upstream/roles' },
          ],
        },
        {
          text: '5 Discovery Stations',
          items: [
            { text: 'Station 1 — Vision & Context', link: '/upstream/station-1-vision' },
            { text: 'Station 2 — Problem Framing', link: '/upstream/station-2-problem' },
            { text: 'Station 3 — User Journey & Slices', link: '/upstream/station-3-journey' },
            { text: 'Station 4 — Solution Options', link: '/upstream/station-4-options' },
            { text: 'Station 5 — Decision & Scope', link: '/upstream/station-5-decision' },
          ],
        },
        {
          text: 'Entry Points',
          items: [
            { text: 'What Kind of Discovery Do I Need?', link: '/upstream/discovery-types' },
            { text: 'Idea Triage — Where Does This Belong?', link: '/upstream/idea-triage' },
            { text: 'Epic or Feature? How to Tell', link: '/upstream/epic-vs-feature' },
            { text: 'What Bad Framing Costs', link: '/upstream/framing-matters' },
            { text: 'Business Goals → KPIs → Initiatives', link: '/upstream/business-goals' },
          ],
        },
        {
          text: 'Quality Gates & Practices',
          items: [
            { text: 'Definition of Ready (DoR)', link: '/upstream/definition-of-ready' },
            { text: 'Experience Snapshot', link: '/upstream/experience-snapshot' },
            { text: 'Initiative Brief', link: '/upstream/initiative-brief' },
            { text: 'Story Mapping', link: '/upstream/story-mapping' },
            { text: 'The Cut', link: '/upstream/the-cut' },
            { text: 'Discovery Backbone', link: '/upstream/discovery-backbone' },
            { text: 'User Journey Mapping', link: '/upstream/user-journey' },
            { text: 'Discovery Frameworks Catalog', link: '/upstream/discovery-frameworks' },
            { text: 'Scrum for Discovery', link: '/upstream/scrum-for-discovery' },
          ],
        },
        {
          text: 'The Upstream Spiral',
          items: [
            { text: '🌀 The Upstream Spiral', link: '/upstream/spiral-model' },
            { text: 'Project Master Document', link: '/upstream/project-master-doc' },
            { text: 'Initiative Discovery', link: '/upstream/activities-sprint' },
            { text: 'Feature Discovery', link: '/upstream/feature-activities' },
            { text: 'Epic Refinement', link: '/upstream/epic-activities' },
            { text: 'Jira Setup for the Spiral', link: '/upstream/jira-setup' },
          ],
        },
        {
          text: 'Sprint Operations',
          items: [
            { text: 'Grooming Session', link: '/upstream/grooming-session' },
            { text: 'Cadence & Meeting Recipes', link: '/upstream/cadence' },
            { text: 'Anti-Patterns', link: '/upstream/anti-patterns' },
            { text: 'Initiative Walkthrough', link: '/upstream/initiative-walkthrough' },
          ],
        },
      ],

      '/downstream/': [
        {
          text: '🟢 Downstream — Delivery',
          items: [
            { text: 'Overview', link: '/downstream/' },
            { text: 'Roles & Ownership', link: '/downstream/roles' },
          ],
        },
        {
          text: 'Execution',
          items: [
            { text: 'Story Workflow', link: '/downstream/story-workflow' },
            { text: 'Subtask Checklist', link: '/downstream/subtask-checklist' },
            { text: 'Kanban Flow', link: '/downstream/kanban-flow' },
            { text: 'Feature Branches & SSDLC', link: '/downstream/feature-branches' },
            { text: 'Release Slicing', link: '/downstream/release-slicing' },
          ],
        },
        {
          text: 'Quality',
          items: [
            { text: 'Definition of Done (DoD)', link: '/downstream/definition-of-done' },
            { text: 'Gherkin & BDD Patterns', link: '/downstream/gherkin' },
            { text: 'Developer Workflow E2E', link: '/downstream/dev-workflow-e2e' },
          ],
        },
        {
          text: 'Operations',
          items: [
            { text: 'Cadence & Ceremonies', link: '/downstream/cadence' },
            { text: 'Anti-Patterns', link: '/downstream/anti-patterns' },
          ],
        },
      ],

      '/onstream/': [
        {
          text: '🟠 Onstream — Operations',
          items: [
            { text: 'Overview', link: '/onstream/' },
            { text: 'Roles & Ownership', link: '/onstream/roles' },
          ],
        },
        {
          text: 'Reliability',
          items: [
            { text: 'SLA & SLO Framework', link: '/onstream/sla-slo' },
            { text: 'Incident Management', link: '/onstream/incident-management' },
            { text: 'On-Call Runbook Template', link: '/onstream/runbook-template' },
          ],
        },
        {
          text: 'Bug & Issue Management',
          items: [
            { text: 'Bug Taxonomy', link: '/onstream/bug-taxonomy' },
            { text: 'RCA Template', link: '/onstream/rca-template' },
            { text: 'Post-Mortem Template', link: '/onstream/post-mortem-template' },
          ],
        },
        {
          text: 'Operations',
          items: [
            { text: 'Cadence & Service Reviews', link: '/onstream/cadence' },
            { text: 'Anti-Patterns', link: '/onstream/anti-patterns' },
          ],
        },
      ],

      '/offstream/': [
        {
          text: '🟣 Offstream — Growth',
          items: [
            { text: 'Overview', link: '/offstream/' },
            { text: 'Roles & Ownership', link: '/offstream/roles' },
            { text: 'Customer Lifecycle Model', link: '/offstream/customer-lifecycle' },
            { text: 'Health Score Framework', link: '/offstream/health-score' },
            { text: 'The Feedback Loop', link: '/offstream/feedback-loop' },
            { text: 'Strategic Synthesis', link: '/offstream/strategic-synthesis' },
            { text: 'Account & Revenue Cadence', link: '/offstream/account-cadence' },
            { text: 'Anti-Patterns', link: '/offstream/anti-patterns' },
          ],
        },
      ],


      '/tutorials/': [
        {
          text: '🎓 Tutorials',
          items: [
            { text: 'Tutorial Hub', link: '/tutorials/' },
            { text: 'Your First Week with UDOO', link: '/tutorials/first-week' },
            { text: 'From Chaos to Flow', link: '/tutorials/from-chaos-to-flow' },
            { text: 'Recovering an Existing Project', link: '/tutorials/recovery' },
            { text: 'The Wrong Way (Then the Right Way)', link: '/tutorials/wrong-way-right-way' },
            { text: 'Your First Upstream Sprint', link: '/tutorials/zero-to-ready' },
            { text: 'E2E Initiative Lifecycle', link: '/tutorials/e2e-initiative' },
            { text: 'BDD Workshop', link: '/tutorials/bdd-workshop' },
            { text: 'Two Products, One Team', link: '/tutorials/two-products-one-team' },
            { text: 'From Incident to Improvement', link: '/tutorials/incident-to-improvement' },
          ],
        },
      ],

      '/novel/': [
        {
          text: '📕 The Weight of Knowing',
          items: [
            { text: 'About the Novel', link: '/novel/' },
          ],
        },
        {
          text: 'Part One — Upstream',
          items: [
            { text: '1. Tuesday', link: '/novel/chapter-01' },
            { text: '2. The Standup', link: '/novel/chapter-02' },
            { text: '3. The Postmortem That Wasn\'t', link: '/novel/chapter-03' },
            { text: '4. The Client', link: '/novel/chapter-04' },
            { text: '5. Alignment', link: '/novel/chapter-05' },
            { text: '6. Eran Writes a Document', link: '/novel/chapter-06' },
            { text: '7. Velocity', link: '/novel/chapter-07' },
            { text: '8. The Offer', link: '/novel/chapter-08' },
            { text: '9. The Sprint That Solved Nothing', link: '/novel/chapter-09' },
          ],
        },
        {
          text: 'Part Two — Downstream',
          items: [
            { text: '10. Technical Debt Has a Half-Life', link: '/novel/chapter-10' },
            { text: '11. The Shape of Debt', link: '/novel/chapter-11' },
            { text: '12. What Michal Learned at the Conference', link: '/novel/chapter-12' },
            { text: '13. Bounded Context', link: '/novel/chapter-13' },
            { text: '14. The Language of the Domain', link: '/novel/chapter-14' },
            { text: '15. Dani\'s Spreadsheet', link: '/novel/chapter-15' },
            { text: '16. The Product Owner', link: '/novel/chapter-16' },
            { text: '17. The Board', link: '/novel/chapter-17' },
            { text: '18. Yoav', link: '/novel/chapter-18' },
            { text: '19. The Story That Bounced', link: '/novel/chapter-19' },
            { text: '20. Story Mapping', link: '/novel/chapter-20' },
            { text: '21. Releases', link: '/novel/chapter-21' },
          ],
        },
        {
          text: 'Part Three — Onstream',
          items: [
            { text: '22. Tamir', link: '/novel/chapter-22' },
            { text: '23. Netta', link: '/novel/chapter-23' },
            { text: '24. Three AM', link: '/novel/chapter-24' },
            { text: '25. The SLO Conversation', link: '/novel/chapter-25' },
            { text: '26. Shira\'s Postmortem', link: '/novel/chapter-26' },
            { text: '27. What Carmit Said', link: '/novel/chapter-27' },
          ],
        },
        {
          text: 'Part Four — Offstream',
          items: [
            { text: '28. Netta\'s Loop', link: '/novel/chapter-28' },
            { text: '29. The OKR Conversation', link: '/novel/chapter-29' },
            { text: '30. The Clinic That Left', link: '/novel/chapter-30' },
            { text: '31. Michal\'s Portfolio', link: '/novel/chapter-31' },
            { text: '32. Leading Signals', link: '/novel/chapter-32' },
            { text: '33. Eran\'s Last Scene', link: '/novel/chapter-33' },
            { text: '34. Dina\'s Tuesday', link: '/novel/chapter-34' },
            { text: '35. The New Project', link: '/novel/chapter-35' },
          ],
        },
      ],

      '/field-guide/': fieldGuideSidebar,

      '/reference/': referenceSidebar,
      '/standards/': referenceSidebar,
      '/examples/': referenceSidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/200-nwire/udoo-playbook' },
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/200-nwire/udoo-playbook/blob/main/LICENSE">MIT License</a>.',
      copyright: '© 2025 <a href="https://github.com/200-nwire">200apps / NWIRE</a>. Built with ❤️ for product teams everywhere.',
    },

    editLink: {
      pattern: 'https://github.com/200-nwire/udoo-playbook/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },
  },

  async enhanceApp({ app }) {
    const Mermaid = (await import('vitepress-plugin-mermaid/Mermaid.vue')).default
    app.component('Mermaid', Mermaid)
  },

  vite: {
    resolve: {
      alias: [
        { find: '@braintree/sanitize-url/dist/index.js', replacement: '@braintree/sanitize-url' },
      ],
    },
    optimizeDeps: {
      include: [
        'dayjs',
        '@braintree/sanitize-url',
        'debug',
        'cytoscape',
        'cytoscape-cose-bilkent',
        'mermaid',
      ],
      esbuildOptions: {
        mainFields: ['module', 'main'],
      },
    },
    ssr: {
      noExternal: ['mermaid', '@braintree/sanitize-url', 'dayjs'],
    },
  },

  mermaid: {
    theme: 'base',
    themeVariables: {
      primaryColor: '#e8f4f8',
      primaryTextColor: '#1A3C5E',
      primaryBorderColor: '#1A3C5E',
      lineColor: '#1A3C5E',
      secondaryColor: '#f0f7fc',
      tertiaryColor: '#fff',
    },
  },
  }),
)
