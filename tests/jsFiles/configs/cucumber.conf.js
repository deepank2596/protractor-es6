"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    //seleniumAddress: "http://192.168.1.3:4444/wd/hub",
    capabilities: {
        browserName: 'chrome'
    },
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../../features/letCodeTest.feature'],
    cucumberOpts: {
        require: ['../stepDefs/*.js'],
        format: []
    },
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function* () {
            //let {setDefaultTimeout} = require('@cucumber/cucumber');
            //setDefaultTimeout(50*1000);
            //browser.waitForAngularEnabled(false);
            require('dotenv').config();
            yield protractor_1.browser.manage().deleteAllCookies();
            yield protractor_1.browser.manage().window().maximize(); // maximize the browser before executing the feature files
        });
    }
};
