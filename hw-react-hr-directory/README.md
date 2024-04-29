# HR Directory Application

## Learning Objectives

- Apply routing in React applications to manage navigation.
- Use localStorage to persist and manage data locally in the browser.

## Project Overview

This HR directory application is designed to manage employee information effectively. It allows users to view a list of all employees, access detailed information for each employee, and add new employees to the system.

## Features

### Dashboard

- **View All Employees**: A scrollable list displays all employees. Users can click on an employee's name to view their detailed information.

### Employee Information Page

- **View Employee Details**: Displays detailed information including name, role, and emergency contact details.
- **Navigation**: A "Back" button allows users to return to the Dashboard.

### Employee Information Form

- **Add New Employee**: From the Dashboard, users can navigate to the Employee Information Form to enter and submit new employee data.

## Technical Specifications

- **Local Storage**: The application uses localStorage to store and retrieve employee data, ensuring information persistence across sessions.
- **Unit Testing**: The project aims for a unit test coverage of at least 60% to ensure reliability and maintainability of the code.

## Setup

To get the application up and running on your local machine, follow these steps:

```bash
git clone <repository-url>
cd hw-react-hr-directory
npm install
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Technologies

- **React** for building the user interface.
- **Redux Toolkit** for state management.
- **React Router** for handling in-app navigation.
- **Vite** for more efficient and faster builds.
- **Tailwind CSS** for utility-first styling.
- **Jest** for robust testing frameworks.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
