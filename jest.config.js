module.exports = {
  testEnvironment: 'node',
  coverageReporters: [
    'text'
  ],
  coverageThreshold: {
    global: {
      functions: 80,
      lines: 80
    }
  },
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  testMatch: [
    '**/*.test.(ts)'
  ]
}
