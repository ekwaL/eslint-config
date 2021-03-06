const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
  parserOptions: {
    ecmaVersion: '2021',
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
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:md/recommended'
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
              'publishConfig',
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
    },
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser'
    },
    {
      files: ['*.md.js', '*.md.javascript'],
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
    'no-restricted-globals': ['error', ...confusingBrowserGlobals]
  }
}
