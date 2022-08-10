const typescriptConfig = require('eslint-config-standard-with-typescript')
  .overrides[0]

typescriptConfig.extends = [
  'plugin:import/typescript',
  'plugin:@typescript-eslint/recommended-requiring-type-checking'
]

module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['@ekwal/eslint-config-base'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
    }
  },
  overrides: [
    typescriptConfig,
    {
      files: ['**/*.test.ts', '**/*.spec.ts', 'test/**/*.ts'],
      env: {
        jest: true
      }
    },
    {
      files: ['**/*.md/*.ts', '**/*.md/*.typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        }
      },
      rules: {
        'no-console': 'off',
        'import/no-unresolved': 'off',
        'eol-last': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'padded-blocks': 'off',
        'strict': 'off',
        'unicode-bom': 'off'
      }
    }
  ],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
