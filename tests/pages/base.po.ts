import { browser, ExpectedConditions as EC } from "protractor";

export class BasePage {

    async get(url) {
        await browser.get(url);
        await this.waitForPageLoad();
        return this;
    };

    async waitForPageLoad(){
        await browser
            .wait(()=> browser.executeScript("return document.readyState=='complete';"),30000);
        return this;
    };

    async click(element){
        await browser.wait(EC.presenceOf(element),5000);
        await element.click();
        return this;
    };

    async sendKeys(element, text){
        await browser.wait(EC.presenceOf(element),5000);
        await element.sendKeys(text);
        return this;
    };

    async navigateBack(){
        await browser.navigate().back();
        await this.waitForPageLoad();
        return this;
    };

    async getTitle(){
        let title=await browser.getTitle();
        console.log(title);
        return typeof title=="string" ? title:undefined;
    };
}

