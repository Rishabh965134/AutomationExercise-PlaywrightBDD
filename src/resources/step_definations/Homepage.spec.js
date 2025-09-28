const { Given, When, Then, defineStep } = require('@cucumber/cucumber');

const BasePage = require('../../setup/basePage');
const Homepage = require('../pageObjects/Homepage');

const basePage = new BasePage();
const homepage = new Homepage();

Given('I am on the homepage',async()=>{
    await basePage.loadURL();
});

When('I navigate to the signup page',async()=>{
    await homepage.clickOnSignUpLoginLink();
});