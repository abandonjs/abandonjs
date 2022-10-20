module.exports = {
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "ts"
  ],
  extensionsToTreatAsEsm: [
    ".ts"
  ],
  preset: "ts-jest/presets/default-esm",
  testMatch: [
    "**/__test__/**/*.test.ts",
  ],
  transform: {
    "^.+\\.tsx?$": ["ts-jest/legacy", ],
    "^.+\\.ts?$": ["ts-jest", {
      tsconfig: "tsconfig.json",
      useESM: true
    }]
  }
}