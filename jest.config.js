/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest",
  // },
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  // moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: [
    "**/*/*.test.ts"
  ],
  transformIgnorePatterns: [
    "/node_modules/",
  ],
};