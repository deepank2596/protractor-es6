import { browser, ExpectedConditions as EC } from "protractor";

class BasePage {

    async get(url) {
        await browser.get(url);
        await this.waitForPageLoad();
    };

    async waitForPageLoad(){
        await browser
            .wait(()=> browser.executeScript("return document.readyState=='complete';"),30000);
    };

    async click(element){
        await browser.wait(EC.presenceOf(element),5000);
        await element.click();
    };

    async sendKeys(element, text){
        await browser.wait(EC.presenceOf(element),5000);
        await element.sendKeys(text);
    };
}

exports.BasePage= BasePage;