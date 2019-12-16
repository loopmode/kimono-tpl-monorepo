module.exports = {
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
  ],
  clearMocks: true,
  globals: {
    __webpack_public_path__: '',
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
