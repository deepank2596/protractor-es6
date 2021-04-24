import { browser, by, element, ExpectedConditions as EC } from 'protractor';
import {BasePage} from '../base.po'

class SelectTest extends BasePage{
    constructor(){
        super();
        this.fruits_sel= element(by.css("#fruits"));
        this.language_sel= element(by.id("lang"));
        this.apple_opt= element(by.cssContainingText('option','Apple'));
        this.antman_opt= element(by.cssContainingText('option','Ant-Man'));
        this.batman_opt= element(by.cssContainingText('option','Batman'));

    }

    async validateSelectTestPage(){
        await browser.wait(EC.presenceOf(this.fruits_sel),3000);
        await this.click(this.apple_opt);
        await browser.sleep(2000);
        await this.click(this.batman_opt);
        await this.click(this.antman_opt);
        let selectFlag= await this.apple_opt.isSelected();
        console.log(selectFlag);
        await this.language_sel.all(by.tagName("option"))
            .each((element,index)=> {
                element.getText().then(function (text) {
                    console.log(index, text);
                  });
            });
        await this.language_sel.all(by.tagName("option")).last().click();
        await browser.sleep(2000);
    }
}

exports.SelectTest=SelectTest;