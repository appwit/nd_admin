const path = require('path')

const projectRoot = path.resolve(__dirname, '..')

module.exports = {
  roots: [projectRoot],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Handle ts path aliases
    '^@/(.*)$': `${projectRoot}/src/$1`,
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  snapshotResolver: './snapshotResolver.js',
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary', 'cobertura'],
  collectCoverageFrom: ['../src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
