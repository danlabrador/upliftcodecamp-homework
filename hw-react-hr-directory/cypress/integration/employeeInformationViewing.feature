Feature: Employee Information Viewing

  Background:
    Given an employee's data is stored in localStorage

  Scenario: View Employee Details
    Given an employee's information is in localStorage
    When the Employee Information Page is accessed
    Then the employee's name, role, and emergency contact details are shown

  Scenario: Navigate to Employee Form from Dashboard
    Given the dashboard is displayed
    When the Add New Employee button is clicked
    Then the application navigates to the Employee Information Form
