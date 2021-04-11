module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    './src'
  ],
  setupFiles: ['./src/test/setup.ts']
};