const { PATHS, globalVars } = require('./build-constants.js')

module.exports = {
  ident: 'postcss',
  plugins: [
    require('postcss-import')({
      resolve: function(importName, base, options) {
        // replace __reseller__ on the value during css imports
        if(importName.indexOf('__reseller__') > -1) {
          importName = importName.replace('__reseller__', globalVars.__reseller__);
        }

        if(importName.indexOf('styleVars') > -1) {
          importName = PATHS.styleVariables;
        }

        return require('postcss-import/lib/resolve-id.js')(importName, base, options);
      }
    }),
    require('postcss-global-import')({
      globalizeKeyframes: true,
    }),
    require('postcss-custom-properties')({
      variables: {
        'reseller': globalVars.__reseller__,
        'theme': globalVars.__theme__,
      }
    }),
    require("postcss-color-function"),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
};
