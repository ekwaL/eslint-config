module.exports = {
  extends: 'plugin:prettier/recommended',
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        bracketSpacing: true,
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        quoteProps: 'consistent',
        arrowParens: 'avoid',
        htmlWhitespaceSensitivity: 'strict',
        endOfLine: 'auto'
      }
    ],
    'jsonc/array-bracket-spacing': 'off',
    'jsonc/array-bracket-newline': 'off',
    'jsonc/array-element-newline': 'off',
    'jsonc/comma-style': 'off',
    'jsonc/indent': 'off',
    'jsonc/key-spacing': 'off',
    'jsonc/object-curly-spacing': 'off',
    'jsonc/object-curly-newline': 'off',
    'jsonc/object-property-newline': 'off',
    'jsonc/quote-props': 'off',
    'jsonc/quotes': 'off',
    'jsonc/space-unary-ops': 'off'
  },
  overrides: [
    {
      files: ['**/*.md/*.*'],
      rules: {
        'prettier/prettier': 'off'
      }
    }
  ]
}
