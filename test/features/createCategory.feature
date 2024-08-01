Feature: Create Category

    Background: 
        Given I am logged in and on the category page
    
    Scenario: Successfully create new category
        When I click add button
        When I enter name "Dairy" and description "Dairy products are food products made from milk"
        Then I should see a success message
        And I should see "Dairy" in the category list