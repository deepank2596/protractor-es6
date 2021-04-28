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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const index_1 = require("../pages/letCode/index");
let homePage = new index_1.HomePage();
let header = new index_1.Header();
let inputTestPage = new index_1.InputTest();
let selectTest = new index_1.SelectTest();
let windowsTest = new index_1.WindowsTest();
cucumber_1.After({ tags: "@testpage", timeout: 4 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.navigateBack();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Given("Open LetCode in browser", { timeout: 24 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.launchApp();
}));
cucumber_1.When("Perform login with {string} and {string}", { timeout: 5 * 5000 }, (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.loginUser(username, password);
}));
cucumber_1.When("Perform login with default user", { timeout: 5 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.loginUser(process.env.email, process.env.password);
}));
cucumber_1.Then("Navigate to testpage", { timeout: 5 * 3000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.navigateToTestPage();
}));
cucumber_1.Then("Validate Inputs test page", { timeout: 5 * 3000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.openInputPageTest();
    yield homePage.getTitle();
    yield inputTestPage.testInputPage();
}));
cucumber_1.Then("Validate Select test page", { timeout: 5 * 3000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.openSelectPageTest();
    yield protractor_1.browser.sleep(3000);
    let title = yield protractor_1.browser.getTitle();
    console.log(title);
    yield homePage.getTitle();
    yield selectTest.validateSelectTestPage();
}));
cucumber_1.Then("Validate Windows test page", { timeout: 5 * 5000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homePage.openWindowPageTest();
        yield windowsTest.singleWindowTest();
        yield protractor_1.browser.sleep(2000);
    });
});
