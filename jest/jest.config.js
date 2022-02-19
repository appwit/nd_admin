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
  collectCoverageFrom: ['../src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
