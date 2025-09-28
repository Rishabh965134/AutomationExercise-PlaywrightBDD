const { BeforeAll, Before, After, AfterAll, setDefaultTimeout } = require("@cucumber/cucumber")
const { chromium } = require("@playwright/test")

setDefaultTimeout(360000);

BeforeAll(async function () {
    global.browser = await chromium.launch({ headless: false });
})

Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
})

After(async function () {
    await global.page.close();
    await global.context.close();
})

AfterAll(async function () {
    await global.browser.close();
})