module.exports = {
  siteMetadata: {
    title: `Tenyson`,
    description: `Rojah portfolio Website - Developer, Technology and CyberSecurity enthusiast based in Jamaica`,
    author: `Tenyson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tenyson05`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2F3845`,
        theme_color: `#64FFDA`,
        display: `minimal-ui`,
        icon: `src/images/tenylogo.png`, // This path is relative to the root of the site.
      },
	},
	{
		resolve: 'gatsby-plugin-google-analytics',
		options: {
			trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
		}
	}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
