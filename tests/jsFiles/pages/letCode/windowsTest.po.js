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
exports.WindowsTest = void 0;
const protractor_1 = require("protractor");
const base_po_1 = require("../base.po");
class WindowsTest extends base_po_1.BasePage {
    constructor() {
        super(...arguments);
        this.homePage_btn = protractor_1.element(protractor_1.by.id("home"));
        this.multi_btn = protractor_1.element(protractor_1.by.id("multi"));
    }
    singleWindowTest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.homePage_btn);
            let parentWindow = yield protractor_1.browser.getWindowHandle();
            let windows = yield protractor_1.browser.getAllWindowHandles();
            windows.shift();
            let childWindow = windows[Symbol.iterator]().next().value;
            //console.log(parentWindow,windows,childWindow)
            yield protractor_1.browser.switchTo().window(childWindow);
            yield protractor_1.browser.sleep(5000);
            yield protractor_1.browser.close();
            yield protractor_1.browser.switchTo().window(parentWindow);
        });
    }
    multiWindowTest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.homePage_btn);
            let parentWindow = yield protractor_1.browser.getWindowHandle();
            let windows = yield protractor_1.browser.getAllWindowHandles();
            windows.shift();
            yield protractor_1.browser.switchTo().window(windows[Symbol.iterator]().next().value);
            yield protractor_1.browser.close();
        });
    }
}
exports.WindowsTest = WindowsTest;
