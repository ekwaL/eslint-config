module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:jsonc/prettier',
    'plugin:yml/prettier'
  ],
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
    ]
  }
}
