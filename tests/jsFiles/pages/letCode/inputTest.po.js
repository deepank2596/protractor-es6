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
exports.InputTest = void 0;
const protractor_1 = require("protractor");
const base_po_1 = require("../base.po");
class InputTest extends base_po_1.BasePage {
    constructor() {
        super(...arguments);
        this.fullname_txt = protractor_1.element(protractor_1.by.css("input#fullName"));
        this.append_txt = protractor_1.element(protractor_1.by.css("input#join"));
        this.get_txt = protractor_1.element(protractor_1.by.css("input#getMe"));
        this.clear_txt = protractor_1.element(protractor_1.by.css("input#clearMe"));
        this.noEdit_txt = protractor_1.element(protractor_1.by.css("input#noEdit"));
        this.dontwrite_txt = protractor_1.element(protractor_1.by.css("input#dontwrite"));
    }
    testInputPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.and(protractor_1.ExpectedConditions.presenceOf(this.fullname_txt), protractor_1.ExpectedConditions.presenceOf(this.append_txt)), 5000);
            yield this.sendKeys(this.fullname_txt, "Deepank Gupta");
            yield this.sendKeys(this.append_txt, " hello");
            let text = yield this.get_txt.getAttribute('innerText');
            console.log(text);
            yield this.clear_txt.clear();
            let enable = yield this.noEdit_txt.isEnabled();
            console.log(enable);
            let readonly = yield this.dontwrite_txt.getAttribute("readonly");
            console.log(readonly == null ? "readonly" : "not read only");
        });
    }
}
exports.InputTest = InputTest;
