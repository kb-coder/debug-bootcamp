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

module.exports = {
  plugins: [
    postCssImport,
    autoPrefixer,
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
