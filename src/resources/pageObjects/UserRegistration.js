const PageElements = require("../pageElements/UserRegistration");
const userData = require("../../test-data/userData");

class Registration {

    async registerNewUser() {
        const name = await page.getByRole(PageElements.locate_registerNameField.role, { name: PageElements.locate_registerNameField.name });
        const email = await page.locator(PageElements.locate_registerEmailField);
        const signUpBtn = await page.getByRole(PageElements.locate_signUpBtn.role, { name: PageElements.locate_signUpBtn.name });

        await name.fill(userData.validUserName.name);
        await email.fill(userData.validUserName.email);
        await signUpBtn.click();
    }
}

module.exports = Registration