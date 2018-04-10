const { globalVars } = require('./build-constants.js');

const changeObjValuesToTrue = (obj) => {
  let newObj = {};
  for(let propName in obj) {
    newObj[propName] = true;
  }

  return newObj;
};

module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  env: {
    browser: true,
    node: true
  },
  globals: {
    ...changeObjValuesToTrue(globalVars)
  },
  rules: {
    // enable additional rules
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // override default options for rules from base configurations
    'comma-dangle': ['error', 'always-multiline'],
    'no-cond-assign': ['error', 'always'],

    // disable rules from base configurations
    'no-console': 'off',
    'no-debugger': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
