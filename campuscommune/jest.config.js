const nextJest = require('next/jest');

const createNextJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/components$1",
        "^@pages(.*)$": "<rootDir>/pages$1",
    },
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createNextJestConfig(customJestConfig);