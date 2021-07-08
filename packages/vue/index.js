module.exports = {
  extends: ['plugin:vue/vue3-recommended', '@ekwal/eslint-config-ts'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    "vue/max-attributes-per-line": ["warn", {
      "singleline": {
        "max": 3,
        "allowFirstLine": true
      },      
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  }
}
