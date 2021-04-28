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
exports.BasePage = void 0;
const protractor_1 = require("protractor");
class BasePage {
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(url);
            yield this.waitForPageLoad();
            return this;
        });
    }
    ;
    waitForPageLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser
                .wait(() => protractor_1.browser.executeScript("return document.readyState=='complete';"), 30000);
            return this;
        });
    }
    ;
    click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(element), 5000);
            yield element.click();
            return this;
        });
    }
    ;
    sendKeys(element, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(element), 5000);
            yield element.sendKeys(text);
            return this;
        });
    }
    ;
    navigateBack() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.navigate().back();
            yield this.waitForPageLoad();
            return this;
        });
    }
    ;
    getTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            let title = yield protractor_1.browser.getTitle();
            console.log(title);
            return typeof title == "string" ? title : undefined;
        });
    }
    ;
}
exports.BasePage = BasePage;
