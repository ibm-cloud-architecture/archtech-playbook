module.exports = {
  siteMetadata: {
    title: 'Application Modernization Playbook',
    description: 'Prescriptive guidance to modernizing your existing enterprise applications for the cloud',
    keywords: 'cloud, modernization, application, integration',
  },
  pathPrefix: `/archtech-playbook`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/archtech-playbook',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl:
            'https://github.com/ibm-cloud-architecture/archtech-playbook',
        },
	titleType: 'append'
      },
    },
  ],
};
