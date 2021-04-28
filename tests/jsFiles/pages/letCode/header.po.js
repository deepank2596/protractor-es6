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
exports.Header = void 0;
const protractor_1 = require("protractor");
const base_po_1 = require("../base.po");
class Header extends base_po_1.BasePage {
    constructor() {
        super(...arguments);
        this.letCode_tab = protractor_1.element(protractor_1.by.css("img[alt='letcode']"));
    }
    clickLetCodeTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.letCode_tab);
            yield this.waitForPageLoad();
            return this;
        });
    }
}
exports.Header = Header;
