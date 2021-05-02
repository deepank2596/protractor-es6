import * as fs from "fs";
import * as path from "path";
import * as mkdirp from 'mkdirp';
import { browser, Config } from "protractor";

const reportDirectory=path.join(process.cwd(),"/reports")

export const config:Config={
    directConnect: true,
    //seleniumAddress: "http://192.168.1.3:4444/wd/hub",
    // multiCapabilities:[
    //     {
    //        browserName: 'chrome',
    //        unexpectedAlertBehaviour: 'accept',
    //        chromeOptions: {
    //           // args: ['--headless', '--no-sandbox', 'window-size=1920,1080', '--disable-dev-shm-usage', '--disable-browser-side-navigation', '--disable-setuid-sandbox', '--disable-gpu', '--ignore-certificate-errors', '--ignore-ssl-errors', '--disable-infobars=true', 'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'],
    //            prefs: {
    //                download: {
    //                    'prompt_for_download': false,
    //                    'directory_upgrade': true,
    //                }
    //            }
    //        },
    //        logName: 'Neptune Script-1',
    //        shardTestFiles: false,
    //        maxInstances: 1
    //     }
    // ],
    capabilities:{
        browserName: 'chrome'
    },
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs:['../../features/letCodeTest.feature'],
    cucumberOpts:{
        require:['../stepDefs/*.js'],
        format:[`json:${reportDirectory}/json/cucumber_report.json`]
    },
    onPrepare: async function () {
        //let {setDefaultTimeout} = require('@cucumber/cucumber');
        //setDefaultTimeout(50*1000);
        //browser.waitForAngularEnabled(false);
        if(!fs.existsSync(reportDirectory)){
            mkdirp.sync(`${reportDirectory}/json`);
            mkdirp.sync(`${reportDirectory}/html`);
        }
        require('dotenv').config();
        await browser.manage().deleteAllCookies();
        await browser.manage().window().maximize(); // maximize the browser before executing the feature files
    },
    onComplete: async function () {
        
    let reporter = require('cucumber-html-reporter');

    let options = {
        theme: 'bootstrap',
        jsonDir: `${reportDirectory}/json`,
        output: `${reportDirectory}/html/cucumber_report.html`,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        // metadata: {
        //     "App Version":"0.3.2",
        //     "Test Environment": "STAGING",
        //     "Browser": "Chrome  54.0.2840.98",
        //     "Platform": "Windows 10",
        //     "Parallel": "Scenarios",
        //     "Executed": "Remote"
        // }
    };
    reporter.generate(options);
    }
}