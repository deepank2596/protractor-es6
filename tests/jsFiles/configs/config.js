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
    capabilities: {
        browserName: 'chrome'
    },
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine',
    specs: ['../specs/*.js'],
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function* () {
            require('dotenv').config();
            yield protractor_1.browser.manage().deleteAllCookies();
            yield protractor_1.browser.manage().window().maximize();
        });
    }
};
