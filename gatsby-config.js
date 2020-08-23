const path = require('path')

module.exports = {
    assetPrefix: '/~alian',
    siteMetadata: {
        title: 'Parsa Alian',
        author: 'Parsa Alian',
        description: 'Personal webpage by Parsa Alian.',
        siteUrl: 'http://localhost:8000',
        social: {
            twitter: '@parsaalian',
            linkedin: 'parsa-alian-394431147',
            github: 'parsaalian',
        },
    },
    /* Your site config here */
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-theme-ui',
        'gatsby-plugin-emotion',
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    default: path.resolve('./src/components/MDXLayout.jsx'),
                },
            },
        },
    ],
}
