const path = require('path');

const buildFolder = path.resolve(__dirname, './public');
const temp = path.resolve(__dirname, './temp');
const src = path.resolve(__dirname, './src');
const assets = path.resolve(__dirname, './assets');
const images = path.resolve(assets, './images');
const locales = path.resolve(src, 'i18n');
const styleVariables = path.resolve(src, 'styles/variables/index.css');

module.exports = {
  PATHS: {
    buildFolder,
    temp,
    src,
    assets,
    images,
		styleVariables,
		locales,
  },
  // available in react app
  globalVars: { 
    __dev__: process.env.NODE_ENV !== 'production',
    __reseller__: process.env.reseller || 'croc',
    __theme__: process.env.theme || 'main',
  },
};
