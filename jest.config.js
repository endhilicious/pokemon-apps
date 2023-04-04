module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|tsx|ts)$': 'babel-jest',
    '.+\\.(css|sass|scss)$':
      '<rootDir>/node_modules/jest-css-modules-transform',
  },
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
