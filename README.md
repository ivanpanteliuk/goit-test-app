## Test Task Tweet Cards - README

The goal of this project is to create tweet cards and add interactivity when clicking the button.
This repository contains the implementation of the Tweet Cards project, which showcases interactive tweet cards with a follow/following system. Users can click a button to toggle between the follow and following states, with the follower count dynamically updated.

## Features

Display tweet cards with two states: Follow and Following.
Fixed layout using pixel-based design for consistency.
Semantically correct and valid HTML structure.
Error-free implementation with no console errors.
Built with either native JavaScript or React.
Interactive functionality as per the provided technical requirements.
Well-formatted and commented code.
Includes a README.md file for project documentation.

## Technical Requirements

Tweet cards are created based on the provided design.
Clicking the Follow button changes its text to "Following," updates the button color, and increments the follower count by one.
User actions persist even after page refresh. The button remains in the Following state with the correct color, and the follower count does not reset to the initial value.
Clicking the button again reverts its text, color, and follower count to the initial state. The follower count decreases by one.
The follower count is based on a constant value (e.g., 100,500) and is displayed with comma separation in the UI (e.g., 100,500).

## Backend Setup

The project utilizes a custom backend created using the UI service mockapi.io.
A "users" resource is defined with the following fields: id, user, tweets, followers, and avatar.
The backend contains at least 12 users with various values for testing purposes.
Pagination is implemented to display three tweets per page, with additional tweets loaded upon clicking the "Load More" button.

## Additional Task (Optional)

Enhance the application's navigation by implementing routing using React Router:

Create the following routes:
'/' - Home component, the main homepage of the application.
'/tweets' - Tweets component, a page displaying the tweets.
Include a Back button on the Tweets page to allow users to navigate back to the homepage

## Libraries Used

The project utilizes the following libraries:

@emotion/react: ^11.11.0
@emotion/styled: ^11.11.0
@mui/material: ^5.13.3
@testing-library/jest-dom: ^5.16.5
@testing-library/react: ^13.4.0
@testing-library/user-event: ^13.5.0
axios: ^1.4.0
notiflix: ^3.2.6
react: ^18.2.0
react-dom: ^18.2.0
react-router-dom: ^6.11.1
react-scripts: 5.0.1
web-vitals: ^2.1.4

## Getting Started

To get started with the project, follow these steps:

Clone the repository: git clone <repository-url>
Install the dependencies: npm install
Start the application: npm start
Open your browser and visit http://localhost:3000 to view the application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the MIT License. Feel free to modify and use it according to your needs.
