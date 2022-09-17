import type { JestConfigWithTsJest } from 'ts-jest'

// import { defaults as tsjPreset } from 'ts-jest/presets'
// import { defaultsESM as tsjPreset } from 'ts-jest/presets';
// import { jsWithTs as tsjPreset } from 'ts-jest/presets';
// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets';
// import { jsWithBabel as tsjPreset } from 'ts-jest/presets';
// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets';

// console.log(tsjPreset) -> { transform: { '^.+\\.tsx?$': 'ts-jest' } }

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
}

export default jestConfig

// old jest.config.js
// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'jsdom',
//     globals: {
//       'ts-jest': {
//         tsconfig: 'tsconfig.test.json'
//       }
//     }

//     // Runs special logic, such as cleaning up components
//     // when using React Testing Library and adds special
//     // extended assertions to Jest
//     // setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

//     // Code coverage config
//     // collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
//     // coverageDirectory: "<rootDir>/coverage/",
//     // coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "(.*).d.ts$"],
//   }
