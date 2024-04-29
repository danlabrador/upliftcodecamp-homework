Feature: Employee Dashboard Navigation and Display

  Background:
    Given the application uses React Router for navigation
    And localStorage is used to manage employee data

  Scenario: Display Employee List
    Given the application is accessed
    When the dashboard is loaded
    Then a scrollable list of employees is displayed

  Scenario: Redirect to Employee Information
    Given an employee name is visible on the dashboard
    When the employee name is clicked
    Then the application redirects to the Employee Information Page

  Scenario: Return to Dashboard from Information
    Given the Employee Information Page is being viewed
    When the Back button is clicked
    Then the application returns to the dashboard
