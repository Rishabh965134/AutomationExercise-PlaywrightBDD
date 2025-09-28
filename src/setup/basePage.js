class BasePage {

    async loadURL() {
        await page.goto('https://automationexercise.com', { timeout: 120000 })
    }
}
module.exports = BasePage