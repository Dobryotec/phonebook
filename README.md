# Phonebook

The Phonebook App is a web application that allows users to register, add, delete, and save personal contacts. The application provides a secure and personalized contact management system, ensuring that only the user has access to their contacts. The data is persisted in the backend, allowing users to retrieve their contacts even after exiting the application.

## Features

- User Registration: Users can create an account to securely store and manage their contacts.
- Add Contact: Users can add new contacts with details such as name, phone number, and email address.
- Delete Contact: Users can remove contacts from their contact list.
- Data Persistence: The application saves contact data in the backend, ensuring that the data is available even after the user logs out or closes the application.
- Theme Support: Users can switch between dark and light themes, providing a personalized user interface experience. The selected theme is also persisted, eliminating the need to switch themes repeatedly.
- React Router: The application utilizes react-router-dom for client-side routing and navigation.
- State Management: Redux and Redux Toolkit are used for managing application state, providing a centralized data store and actions for contact-related operations.
- Backend Communication: Axios is used for making HTTP requests to the backend API for handling contact data.
- Persistence with Redux Persist: The redux-persist library is used to persist the Redux state, allowing the application to restore the previous state upon reloading or restarting.
  UI Styling: The application's user interface is designed using the Tailwind CSS framework, providing a modern and responsive design.
- Loading Indicators: The react-spinners library is used to display loading spinners during asynchronous operations.

## Technologies Used

- React
- Redux
- Axios
- react-dom
- react-router-dom
- redux-persist
- Redux Toolkit
- react-spinners
- Tailwind CSS

## How to Use

1. Register a new account or log in with your existing credentials.
2. Use the provided interface to add, delete, and manage your contacts.
3. Customize the theme according to your preference.
4. The application will automatically save your contacts and selected theme for future use.

Feel free to explore the codebase and make any modifications or enhancements as needed.
