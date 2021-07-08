const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:jsonc/recommended-with-jsonc'
  ],
  plugins: ['html', 'unicorn'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] }
    }
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js', 'test/**/*.js'],
      env: {
        jest: true
      }
    },
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser'
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'files',
              'exports',
              'main',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'eslintConfig'
            ]
          }
        ]
      }
    }
  ],
  rules: {
    'no-restricted-globals': ['error', ...confusingBrowserGlobals]
  }
}
