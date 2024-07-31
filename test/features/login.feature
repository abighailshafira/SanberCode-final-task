@all
Feature: Login

    Background:
        Given I am on the login page
    
    @negative
    Scenario Outline: Fail to login with invalid credentials 
        When I enter email "<email>" and password "<password>"
        Then I should see an error message

        Examples:
            | email                     | password      |
            | unregistered@gmail.com    | password      |
            | tokotiki@gmail.com        | incorrectpass |

    @positive
    Scenario: Successfully login with valid credentials
        When I enter email "tokotiki@gmail.com" and password "password"
        Then I should be redirected to the dashboard page