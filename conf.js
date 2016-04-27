exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    restartBrowserBetweenTests: true,
    specs: ['fakeDateSpec.js'],
    capabilities: {
        browserName: 'firefox'
    }
};