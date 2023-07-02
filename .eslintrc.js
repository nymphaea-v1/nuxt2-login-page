module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'standard',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    'max-len': ['warn', {
      code: 120,
      comments: 120
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below'
    }]
  }
}
