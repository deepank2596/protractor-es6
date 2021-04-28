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
exports.SelectTest = void 0;
const protractor_1 = require("protractor");
const base_po_1 = require("../base.po");
class SelectTest extends base_po_1.BasePage {
    constructor() {
        super(...arguments);
        this.fruits_sel = protractor_1.element(protractor_1.by.css("#fruits"));
        this.language_sel = protractor_1.element(protractor_1.by.id("lang"));
        this.apple_opt = protractor_1.element(protractor_1.by.cssContainingText('option', 'Apple'));
        this.antman_opt = protractor_1.element(protractor_1.by.cssContainingText('option', 'Ant-Man'));
        this.batman_opt = protractor_1.element(protractor_1.by.cssContainingText('option', 'Batman'));
    }
    validateSelectTestPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.fruits_sel), 3000);
            yield this.click(this.apple_opt);
            yield protractor_1.browser.sleep(2000);
            yield this.click(this.batman_opt);
            yield this.click(this.antman_opt);
            let selectFlag = yield this.apple_opt.isSelected();
            console.log(selectFlag);
            yield this.language_sel.all(protractor_1.by.tagName("option"))
                .each((element, index) => {
                element.getText().then(function (text) {
                    console.log(index, text);
                });
            });
            yield this.language_sel.all(protractor_1.by.tagName("option")).last().click();
            yield protractor_1.browser.sleep(2000);
        });
    }
}
exports.SelectTest = SelectTest;
exports.SelectTest = SelectTest;
