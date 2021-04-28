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
const protractor_1 = require("protractor");
const index_1 = require("../pages/letCode/index");
let homePage = new index_1.HomePage();
describe("LetCode Launch test", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield homePage.launchApp();
    }));
    it("Validate Home Page Title", () => __awaiter(void 0, void 0, void 0, function* () {
        let title = yield protractor_1.browser.getTitle();
        yield expect(title).toBe("LetCode - Testing Hub");
    }), 10000);
    it("Validate user login", () => __awaiter(void 0, void 0, void 0, function* () {
        yield homePage.loginUser(process.env.email, process.env.password);
        yield protractor_1.browser.sleep(5000);
    }), 20000);
});
