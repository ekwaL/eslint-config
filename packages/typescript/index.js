const typescriptConfig =
  require('eslint-config-standard-with-typescript').overrides

module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['@ekwal/eslint-config-base', 'plugin:import/typescript'],
  overrides: [
    ...typescriptConfig,
    {
      files: ['**/*.test.ts', '**/*.spec.ts', 'test/**/*.ts'],
      env: {
        jest: true
      }
    }
  ]
}
