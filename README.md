# AutomationExercise-PlaywrightBDD

This project is an automated end-to-end testing framework for the [Automation Exercise](https://automationexercise.com) website, using Playwright for browser automation and Cucumber for BDD-style feature definitions.

## Project Structure

```
AutomationExercise-PlaywrightBDD/
│
├── cucumber.config.js           # Cucumber configuration file
├── cucumber.js                  # (Optional) Cucumber entry point
├── package.json                 # Project dependencies and scripts
├── playwright.config.js         # Playwright configuration file
├── README.md                    # Project documentation
├── src/                         # Main source folder
│   ├── resources/               # Test resources
│   │   ├── features/            # Gherkin feature files
│   │   ├── pageElements/        # Page element locators
│   │   ├── pageObjects/         # Page Object Model classes
│   │   └── step_definations/    # Step definitions for Cucumber
│   ├── setup/                   # Test setup and hooks
│   │   ├── basePage.js
│   │   └── CucumberHooks.js
│   └── test-data/               # Test data files
│       └── userData.js
└── test-results/                # Playwright/Cucumber test results
```

## How It Works
- **Feature Files**: Written in Gherkin syntax, e.g., `Registration.feature` describes user registration scenarios.
- **Step Definitions**: Implement the steps in JavaScript using Playwright for browser actions.
- **Page Objects & Elements**: Encapsulate selectors and actions for maintainability.
- **Setup & Hooks**: Manage browser and context lifecycle for each test run.

## Getting Started

1. **Install dependencies**
	```sh
	npm install
	```
2. **Run tests**
	```sh
	npm run test
	```
	This will execute scenarios tagged with `@registerUserWithValidCreds`.

## Key Files
- `cucumber.config.js`: Main config for Cucumber, points to step definitions and feature files.
- `playwright.config.js`: Playwright settings for browser automation.
- `src/resources/features/Registration.feature`: Example feature for user registration.
- `src/resources/step_definations/`: Step implementations for features.
- `src/resources/pageObjects/` & `pageElements/`: Page Object Model and selectors.
- `src/setup/CucumberHooks.js`: Hooks for browser/context setup and teardown.
- `src/test-data/userData.js`: Test data for scenarios.

## Author
Rishabh Jha

---
Feel free to extend this framework for additional scenarios and pages!