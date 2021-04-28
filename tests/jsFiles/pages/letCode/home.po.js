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
exports.HomePage = void 0;
const protractor_1 = require("protractor");
const base_po_1 = require("../base.po");
class HomePage extends base_po_1.BasePage {
    constructor() {
        super(...arguments);
        this.signIN_btn = protractor_1.element(protractor_1.by.linkText('Log in'));
        this.username_txt = protractor_1.element(protractor_1.by.name('email'));
        this.password_txt = protractor_1.element(protractor_1.by.name('password'));
        this.login_btn = protractor_1.element(protractor_1.by.buttonText('LOGIN'));
        this.testPage_button = protractor_1.element(protractor_1.by.buttonText("Let's Go"));
        this.inputPage_btn = protractor_1.element(protractor_1.by.css("button[name='input']"));
        this.selectPage_btn = protractor_1.element(protractor_1.by.css("button#select"));
        this.windowPage_btn = protractor_1.element(protractor_1.by.name("windows"));
    }
    launchApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get('https://letcode.in/');
            return this;
        });
    }
    ;
    loginUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.signIN_btn);
            yield this.sendKeys(this.username_txt, username);
            yield this.sendKeys(this.password_txt, password);
            yield this.click(this.login_btn);
            return this;
        });
    }
    ;
    navigateToTestPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.testPage_button);
            yield this.waitForPageLoad();
        });
    }
    openInputPageTest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.inputPage_btn);
            yield this.waitForPageLoad();
        });
    }
    openSelectPageTest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.selectPage_btn);
            yield this.waitForPageLoad();
        });
    }
    openWindowPageTest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.windowPage_btn);
            yield this.waitForPageLoad();
        });
    }
}
exports.HomePage = HomePage;
