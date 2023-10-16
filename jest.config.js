/** @returns {Promise<import('jest').Config>} */
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/TYPES/**/*',
    '!src/helpers/**/*',
    '!src/typings/**/*',
    '!src/models/**/types.ts',
    '!src/index.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  verbose: true,
  moduleNameMapper: {
    '^@helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@modules(.*)$': '<rootDir>/src/modules$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@typings(.*)$': '<rootDir>/src/typings$1'
  }
}
