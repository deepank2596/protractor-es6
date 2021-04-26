import { browser, by, element, ExpectedConditions as EC} from 'protractor';
import {BasePage} from  '../base.po';

class HomePage extends BasePage{
    constructor(){
        super();
        this.signIN_btn= element(by.linkText('Log in'));
        this.username_txt= element(by.name('email'));
        this.password_txt= element(by.name('password'));
        this.login_btn= element(by.buttonText('LOGIN'));
        this.testPage_button= element(by.buttonText("Let's Go"));
        this.inputPage_btn= element(by.css("button[name='input']"));
        this.selectPage_btn= element(by.css("button#select"));
        this.windowPage_btn= element(by.name("windows"));

    }

    async launchApp(){
        await this.get('https://letcode.in/');
        return this;
    };

    async loginUser(username, password){
        await this.click(this.signIN_btn);
        await this.sendKeys(this.username_txt,username);
        await this.sendKeys(this.password_txt,password);
        await this.click(this.login_btn);
        return this;
    };

    async navigateToTestPage(){
        await this.click(this.testPage_button);
        await this.waitForPageLoad();
    }

    async openInputPageTest(){
        await this.click(this.inputPage_btn);
        await this.waitForPageLoad();
    }

    async openSelectPageTest(){
        await this.click(this.selectPage_btn);
        await this.waitForPageLoad();
    }

    async openWindowPageTest(){
        await this.click(this.windowPage_btn);
        await this.waitForPageLoad();
    }

}

exports.HomePage=HomePage;