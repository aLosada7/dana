/* eslint-disable */
export default {
    displayName: 'food-delivery',
    preset: '../../jest.preset.js',
    transform: {
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../coverage/apps/food-delivery',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
