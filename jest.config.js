module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  }

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  // setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  // Code coverage config
  // collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  // coverageDirectory: "<rootDir>/coverage/",
  // coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "(.*).d.ts$"],
}
