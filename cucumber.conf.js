require('@babel/register');
require('@babel/polyfill');

exports.config={
    //directConnect: true,
    //seleniumAddress: "http://192.168.1.3:4444/wd/hub",
    capabilities:{
        browserName: 'chrome'
    },
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs:['./tests/features/letCodeTest.feature'],
    cucumberOpts:{
        require:['./tests/stepDefs/*.js'],
        format:[]
    },
    onPrepare: function () {
        //let {setDefaultTimeout} = require('@cucumber/cucumber');
        //setDefaultTimeout(50*1000);
        //browser.waitForAngularEnabled(false);
        require('dotenv').config();
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
}