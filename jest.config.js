module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@helpers(.*)$': '<rootDir>/src/helpers$1'
  },
  preset: 'ts-jest',
  testEnvironment: 'node'
};
