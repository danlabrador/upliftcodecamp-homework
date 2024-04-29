Feature: Adding New Employee

  Background:
    Given the Employee Information Form is designed to capture employee details

  Scenario: Add Employee
    Given the Employee Information Form is accessed
    When valid details are entered
    Then a new employee is added to localStorage

  Scenario: Form Access from Dashboard
    Given the dashboard is currently viewed
    When the Add New Employee button is hit
    Then the Employee Information Form is displayed
