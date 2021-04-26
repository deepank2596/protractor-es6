import { browser, by, element } from 'protractor';
import {BasePage} from '../base.po'

class WindowsTest extends BasePage{
    constructor(){
        super();
        this.homePage_btn= element(by.id("home"));
        this.multi_btn= element(by.id("multi"));
    }

    async singleWindowTest(){
        await this.click(this.homePage_btn);
        let parentWindow=await browser.getWindowHandle();
        let windows=await browser.getAllWindowHandles();
        windows.shift();
        let childWindow= windows[Symbol.iterator]().next().value;
        //console.log(parentWindow,windows,childWindow)
        await browser.switchTo().window(childWindow);
        await browser.sleep(5000);
        await browser.close();
        await browser.switchTo().window(parentWindow);
    }

    async multiWindowTest(){
        await this.click(this.homePage_btn);
        let parentWindow=await browser.getWindowHandle();
        let windows=await browser.getAllWindowHandles();
        windows.pop(parentWindow);
        await browser.switchTo().window(windows[Symbol.iterator]().next());
        await browser.close();
    }
}

exports.WindowsTest=WindowsTest;