module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/src/**/*.test.ts',
    '**/spec/**/*.spec.ts'
  ],
  coverageThreshold: {
    global: {
      functions: 0,
      lines: 0,
      branches: 0,
      statements: 0
    }
  },
  coverageReporters: [
    'text-summary',
    'html'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,ts}'
  ]
}
