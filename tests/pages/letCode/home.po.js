import { browser, by, element} from 'protractor';
import {BasePage} from  '../base.po';

class HomePage extends BasePage{
    constructor(){
        super();
        this.signIN_btn= element(by.linkText('Log in'));
        this.username_txt= element(by.name('email'));
        this.password_txt= element(by.name('password'));
        this.login_btn= element(by.buttonText('LOGIN'));
    }

    async launchApp(){
        await this.get('https://letcode.in/');
    };

    async loginUser(username, password){
        await this.click(this.signIN_btn);
        await this.sendKeys(this.username_txt,username);
        await this.sendKeys(this.password_txt,password);
        await this.click(this.login_btn);
    };


}

exports.HomePage=HomePage;