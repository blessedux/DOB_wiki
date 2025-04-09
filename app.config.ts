export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'DOB Protocol Documentation',
      description: 'Documentation for the DOB Protocol - Building the financial backbone for DePIN',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'DOB Protocol',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [
        {
          title: 'Documentation',
          to: '/getting-started/introduction',
        },
        {
          title: 'GitHub',
          to: 'https://github.com/DOBProtocol',
          target: '_blank',
        },
      ],
      links: [
        {
          icon: 'lucide:edit',
          to: '/editor',
          target: '_self',
          label: 'Edit Content'
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/DOBProtocol',
          target: '_blank',
        }
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
      navigation: [
        {
          title: 'Getting Started',
          items: [
            {
              title: 'Introduction',
              to: '/getting-started/introduction',
            },
            {
              title: 'Quick Start',
              to: '/getting-started/quick-start',
            },
            {
              title: 'Installation',
              to: '/getting-started/installation',
            },
          ],
        },
        {
          title: 'Core Components',
          items: [
            {
              title: 'AI Agents',
              to: '/components/ai-agents',
            },
            {
              title: 'Revenue Distribution',
              to: '/components/revenue-distribution',
            },
            {
              title: 'Tokenization',
              to: '/components/tokenization',
            },
            {
              title: 'Liquidity Management',
              to: '/components/liquidity-management',
            },
            {
              title: 'Lending System',
              to: '/components/lending-system',
            },
          ],
        },
        {
          title: 'Technical Guides',
          items: [
            {
              title: 'Getting Started',
              to: '/guides/getting-started',
            },
            {
              title: 'Device Integration',
              to: '/guides/device-integration',
            },
            {
              title: 'Smart Contract Interaction',
              to: '/guides/smart-contract-interaction',
            },
            {
              title: 'API Reference',
              to: '/guides/api-reference',
            },
          ],
        },
        {
          title: 'Technology',
          items: [
            {
              title: 'Architecture',
              to: '/technology/architecture',
            },
            {
              title: 'Security',
              to: '/technology/security',
            },
            {
              title: 'Supported Devices',
              to: '/technology/supported-devices',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              title: 'Contributing',
              to: '/CONTRIBUTING',
            },
            {
              title: 'FAQ',
              to: '/resources/faq',
            },
            {
              title: 'Roadmap',
              to: '/resources/roadmap',
            },
          ],
        },
      ],
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024 DOB Protocol',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/DOBProtocol',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Join Our Community',
        icon: 'lucide:users',
        to: 'https://discord.gg/dobprotocol',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});