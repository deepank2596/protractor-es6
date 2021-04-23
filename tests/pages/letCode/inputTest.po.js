import { browser, by, element, ExpectedConditions as EC} from 'protractor';
import {BasePage} from '../base.po'

class InputTest extends BasePage{

    constructor(){
        super();
        this.fullname_txt= element(by.css("input#fullName"));
        this.append_txt= element(by.css("input#join"));
        this.get_txt= element(by.css("input#getMe"));
        this.clear_txt= element(by.css("input#clearMe"));
        this.noEdit_txt= element(by.css("input#noEdit"));
        this.dontwrite_txt= element(by.css("input#dontwrite"));
    }

    async testInputPage(){
        await browser.wait(EC.and(EC.presenceOf(this.fullname_txt),EC.presenceOf(this.append_txt)),5000);
        await this.sendKeys(this.fullname_txt,"Deepank Gupta");
        await this.sendKeys(this.append_txt," hello");
        let text= await this.get_txt.getAttribute('innerText');
        console.log(text);
        await this.clear_txt.clear();
        let enable = this.noEdit_txt.isEnabled();
        console.log(enable);
        let readonly=await this.dontwrite_txt.getAttribute("readonly");
        console.log(readonly==null?"readonly":"not read only");
    }

}

exports.InputTest=InputTest;