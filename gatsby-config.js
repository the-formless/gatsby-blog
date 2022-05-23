
module.exports = {
  siteMetadata: {
    title: 'TicklingGenre',
    author: 'Vandit Narain Tyagi'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
          //'gatsby-remark-relative-images',
        ]
      }
    }
  ],
}
