module.exports = {
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.css$': 'jest-css-modules-transform'
    },
    testEnvironment: 'jsdom'
};
