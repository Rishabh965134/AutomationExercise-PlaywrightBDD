module.exports = {
    default: {
        paths: ["src/resources/features/*.feature"],
        require: [
            "src/resources/step_definations/*.spec.js",
            "src/setup/CucumberHooks.js"
        ],
        format: [
            "html:test-results/html/cucumber-report.html",
            "json:test-results/json/cucumber-report.json",
        ],
        publishQuiet: true,
        parallel: 2,
    }
};