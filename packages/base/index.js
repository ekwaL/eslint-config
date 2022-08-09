const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  extends: [
    'standard',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended'
  ],
  plugins: ['html', 'unicorn'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs'] }
    }
  },
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'dist',
    'build',
    'output',
    'coverage',
    'CHANGELOG.md',
    'LICENSE*',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock'
  ],
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js', 'test/**/*.js'],
      env: {
        jest: true
      }
    },
    {
      files: ['**/*.yaml', '**/*.yml'],
      parser: 'yaml-eslint-parser'
    },
    {
      files: ['**/*.json', '**/*.json5'],
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
    },
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown'
    },
    {
      files: ['**/*.md/*.js', '**/*.md/*.javascript'],
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
    'no-restricted-globals': ['error', ...confusingBrowserGlobals],

    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['^README']
      }
    ]
  }
}
