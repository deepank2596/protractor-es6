import { browser } from 'protractor';
import {HomePage} from '../pages/letCode/index';

let homePage = new HomePage();

describe("LetCode Launch test",()=>{
    beforeAll(async()=>{
        await homePage.launchApp();
    });

    it("Validate Home Page Title", async()=>{
        let title=await browser.getTitle();
        await expect(title).toBe("LetCode - Testing Hub");
    },10000);

    it("Validate user login", async ()=>{
        await homePage.loginUser( process.env.email,process.env.password);
        await browser.sleep(5000);
    },20000);

});