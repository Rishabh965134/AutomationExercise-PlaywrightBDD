const { Given, When, Then, defineStep } = require('@cucumber/cucumber');

const UserRegistration = require('../pageObjects/UserRegistration');
const userRegistration = new UserRegistration();


defineStep('I register a new user with valid credentials',async()=>{
    await userRegistration.registerNewUser();
});

Then('I should see a registration success message',async()=>{
    
});