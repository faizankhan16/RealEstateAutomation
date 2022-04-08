Feature: Login

    I want to log into Samtrygg

    Scenario: Samtrygg login
        Given I am on the login page
        When I enter my 
            | email | password |
            | mohsin+020@samtrygg.se | Admin@123 |
        And I click the login button
        Then I should be logged in