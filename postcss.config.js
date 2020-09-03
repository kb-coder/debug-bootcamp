require('postcss-font-magician')
const postCssImport = require('postcss-import')
const autoPrefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue'
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
})

const postcssFontMagician = require('postcss-font-magician')({
  variants: {
    'Roboto Condensed': {
      300: [],
      400: [],
      700: []
    }
  },
  foundries: ['google']
})

module.exports = {
  plugins: [
    postCssImport,
    postcssFontMagician,
    autoPrefixer,
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
