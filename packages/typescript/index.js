const typescriptConfig =
  require('eslint-config-standard-with-typescript').overrides

module.exports = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json']
  },
  extends: [
    '@ekwal/eslint-config-base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
    }
  },

  overrides: [
    ...typescriptConfig,
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
  ]
}
