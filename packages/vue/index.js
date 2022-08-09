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
        parser: {
          js: 'espree',
          jsx: 'espree',
          ts: '@typescript-eslint/parser',
          tsx: '@typescript-eslint/parser'
        },
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'no-unused-vars': 'off'
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
          max: 3
        },
        multiline: {
          max: 1
        }
      }
    ]
  }
}
