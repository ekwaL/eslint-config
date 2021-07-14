module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    '@ekwal/eslint-config-ts'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    {
      files: ['**/*shims*.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/no-duplicates': 'off'
      }
    }
  ],
  rules: {
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 3,
          allowFirstLine: true
        },
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
    // this rule, if on, would require explicit return type on the `render` function
    // '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
