module.exports = {
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  collectCoverageFrom: [
    'packages/*/src/**/*.{ts,tsx}',
    '!**/index.{ts,tsx}',
    '!**/*.stories.{ts,tsx}',
  ],
  clearMocks: true,
  globals: {
    __webpack_public_path__: '',
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
