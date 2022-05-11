module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'clover',
    'cobertura',
    'json',
    'json-summary',
    'lcov',
    'text'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@helpers(.*)$': '<rootDir>/src/helpers$1'
  },
  preset: 'ts-jest',
  testEnvironment: 'node'
};
