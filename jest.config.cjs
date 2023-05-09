module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    // testEnvironment: 'jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/tests/_jest/__mocks__/styleMock.js',
        // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/_jest/__mocks__/fileMock.js',
    },
}