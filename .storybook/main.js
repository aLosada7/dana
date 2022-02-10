module.exports = {
    stories: [],
    addons: [
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-docs',
            options: {
                sourceLoaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
        '@storybook/addon-controls',
        '@storybook/addon-viewport',
        'storybook-mobile',
        '@storybook/addon-actions',
        '@storybook/addon-measure',
    ],
    // uncomment the property below if you want to apply some webpack config globally
    // webpackFinal: async (config, { configType }) => {
    //   // Make whatever fine-grained changes you need that should apply to all storybook configs

    //   // Return the altered config
    //   return config;
    // },
};
