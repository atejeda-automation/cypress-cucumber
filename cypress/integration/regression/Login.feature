@regression
Feature: Test cases for login module

    Scenario Outline: As visitor user, i want to log in with invalid credentials
        Given I visit the "<url_page>" page
        When I enter the "<username>" and "<password>"
        And I click on continue button
        Then i can see the alert with "<text>"
        Examples:
            | url_page | username | password | text |
            | /login | FakeUser | FakePassword | Your username is invalid! |
            | /login | tomsmith | FakePassword | Your password is invalid! |

    Scenario: As visitor user, i want to log in with valid credentials
        Given I visit the "/login" page
        When I make a login attempt with valid credentials
        Then i can see the succes alert

    Scenario: As loggin user, i want to log out
        Given i click on logout button
        Then i can see the logout alert with logout text