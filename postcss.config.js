module.exports = {
  plugins: [
      require('postcss-import')(),
      require('postcss-extend')(),
      require('postcss-nesting')(),
      require('postcss-pxtorem')({
          mediaQuery: false,
          minPixelValue: 0,
          propWhiteList: [],
          replace: true,
          rootValue: 16,
          selectorBlackList: ['html'],
          unitPrecision: 5
      }),
      require('postcss-preset-env')({
          stage: 3
      })
  ]
}
