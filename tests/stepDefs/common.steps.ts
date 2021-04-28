import {After, Given, Then, When} from '@cucumber/cucumber';
import { browser } from 'protractor';
import {HomePage,Header,InputTest,SelectTest,WindowsTest} from '../pages/letCode/index'

let homePage= new HomePage();
let header= new Header();
let inputTestPage= new InputTest();
let selectTest= new SelectTest();
let windowsTest= new WindowsTest();

After({tags:"@testpage",timeout: 4* 5000},async ()=>{
    await homePage.navigateBack();
    await browser.sleep(5000);
});

Given("Open LetCode in browser", {timeout: 24* 5000}, async()=>{
    await homePage.launchApp();
});

When("Perform login with {string} and {string}", {timeout: 5 * 5000},async(username, password)=>{
    await homePage.loginUser(username, password);
});

When("Perform login with default user", {timeout: 5 * 5000},async()=>{
    await homePage.loginUser(process.env.email, process.env.password);
});

Then("Navigate to testpage",{timeout:5*3000}, async()=>{
    await homePage.navigateToTestPage();
});

Then("Validate Inputs test page",{timeout:5*3000}, async()=>{
    await homePage.openInputPageTest();
    await homePage.getTitle();
    await inputTestPage.testInputPage();
});

Then("Validate Select test page",{timeout:5*3000}, async()=>{
    await homePage.openSelectPageTest();
    await browser.sleep(3000);
    let title= await browser.getTitle();
    console.log(title);
    await homePage.getTitle();
    await selectTest.validateSelectTestPage();
});

Then("Validate Windows test page",{timeout:5*5000}, async function (){
    await homePage.openWindowPageTest();
    await windowsTest.singleWindowTest();
    await browser.sleep(2000);
});