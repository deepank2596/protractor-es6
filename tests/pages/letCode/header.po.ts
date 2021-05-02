import { browser, by, element, ExpectedConditions as EC } from 'protractor';
import {BasePage} from '../base.po'


export class Header extends BasePage{
    
    public letCode_tab=element(by.css("img[alt='letcode']"));
    


    async clickLetCodeTab(){
        await this.click(this.letCode_tab);
        await this.waitForPageLoad();
        return this;
    }
}
