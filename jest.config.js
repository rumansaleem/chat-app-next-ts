/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  setupFilesAfterEnv: ['./tests/__setup.ts'],
  testEnvironment: 'jsdom',
};
