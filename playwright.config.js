const config = {
    use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    },
    reporter: [
    ['list'],
    [
    'playwright-qase-reporter',
    {
    mode: 'testops',
    debug: false,
    testops: {
    api: {
    token: '4b946e53e7773402dacaeb1e4e089878fd90a9ef9cf042b30cb1104c578a9a33',
    },
    project: 'DEMO', // Replace <DEMO> with your project code
    uploadAttachments: true,
    run: {
    complete: true,
    },
    },
    },
    ],
    ],
    };
    
    module.exports = config;