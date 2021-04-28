import {browser, Config} from 'protractor'

export const config:Config ={
    directConnect: true,
    capabilities:{
        browserName:'chrome'
    },
    SELENIUM_PROMISE_MANAGER:false,
    framework:'jasmine',
    specs:['../specs/*.js'],
    onPrepare: async function (){
        require('dotenv').config();
        await browser.manage().deleteAllCookies();
        await browser.manage().window().maximize();
    }
}