module.exports = {
  siteMetadata: {
    title: `Concours Médecine Maroc`,
    description: `Préparation du concours de médecine, de pharmacie et de médecine dentaire au Maroc. Plateforme numérique en ligne pour préparer le concours de médecine, de pharmacie et de médecine dentaire au Maroc. Annales corrigées de Maths, Physique, Chimie, SVT. Quiz interactifs. Exercices corrigés. Conseils. Coaching. Communauté.`,
    author: `concours-medecine.ma`,
    siteUrl: `https://concours-medecine.ma/`,
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
