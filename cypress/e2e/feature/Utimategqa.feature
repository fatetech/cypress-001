Feature: A user should be able to login to ultimateqa and sign-in to get a course

    Every user must have an account

    Scenario: Creating an ultimate user account
        Given I visit the ultimateqa site
        And I click on the courses tab
        And I click on the sign in button
        Then I should see an empty form with a sign-up text below
        And I click on the sign-up button
        And I enter my First Name and LastName
        And I enter my Email address
        And I enter my correct Password
        And I check the checkbox
        When I click the submit button
        Then I should see the captcha popup
