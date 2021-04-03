@regression
Feature: Test cases for login module

Scenario Outline: As visitor user, i want to log in

Given I visit the "<url_page>" page
When I enter the "<username>" and "<password>"
And I click on continue button
Then i can see the alert with "<text>"

Examples:
    | url_page | username | password | text |
    | /login | FakeUser | FakePassword | Your username is invalid! |
    | /login | tomsmith | FakePassword | Your password is invalid! |
    | /login | tomsmith | SuperSecretPassword! | You logged into a secure area! |