const PageElements = require("../pageElements/Homepage");

class Homepage {

    async clickOnSignUpLoginLink() {
        await page.getByRole(PageElements.locate_signUpLink.role, { name: PageElements.locate_signUpLink.name }).click();
    }

    async clickOnContactUs() {
        await page.getByRole(PageElements.locate_contactUsLink.role, { name: PageElements.locate_contactUsLink.name }).click();
    }

    async clickOnTestCases() {
        await page.getByRole(PageElements.locate_testCasesBtn.role, { name: PageElements.locate_testCasesBtn.name }).click();
    }
}

module.exports = Homepage;
