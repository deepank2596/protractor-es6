require('@babel/register');
require('@babel/polyfill');

exports.config={
    directConnect: true,
    capabilities:{
        browserName: 'chrome'
    },
    SELENIUM_PROMISE_MANAGER:false,
    framework:'jasmine2',
    specs:['./tests/specs/*.js'],
    onPrepare:()=>{
        //browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
        browser.manage().window().maximize();
    }
}