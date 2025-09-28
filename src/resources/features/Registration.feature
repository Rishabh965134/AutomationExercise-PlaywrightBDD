Feature: User Registration

    @registerUserWithValidCreds
    Scenario: Successful registration with valid email and password
        Given I am on the homepage
        When I navigate to the signup page
        And I register a new user with valid credentials
        Then I should see a registration success message
