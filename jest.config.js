const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleDirectories: ["node_modules", "/"],
  testEnvironment: "jest-environment-jsdom",
  coverageThreshold: {
    global: {
      lines: 70,
      statements: 70,
    },
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
