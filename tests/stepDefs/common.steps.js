import {Given, When} from '@cucumber/cucumber';
import {HomePage} from '../pages/letCode/index'

let homePage= new HomePage();

Given("Open LetCode in browser", {timeout: 24* 5000}, async()=>{
    await homePage.launchApp();
});

When("Perform login with {string} and {string}", {timeout: 5 * 5000},async(username, password)=>{
    await homePage.loginUser(username, password);
})

When("Perform login with default user", {timeout: 5 * 5000},async()=>{
    await homePage.loginUser(process.env.email, process.env.password);
})