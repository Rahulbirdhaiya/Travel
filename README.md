# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# `npm install sweetalert2` install a library for creating alerts.
-Folder created under src/components/SafetyAlert
-File created safetyAlert.js
-Added Safety msg on Mount.

# Adding Search on Header
`npm install @fortawesome/fontawesome-free` to import the search icon. Added a search bar with a FontAwesome magnifying glass icon button. Applied a scale property on the search button and added a box shadow.
Added animation effect on header for smooth transition.

# Adding Text to Speech on Search

Created a button and added an icon element using Unicode. Created a function `startVoiceSearch` that uses `SpeechRecognition` to transcribe voice input into text in the search input field. It handles voice search automatically and submits the transcribed text into the input field.

# Created About Page 
We created an About Page to provide information about the application and its purpose. The content includes a brief description of the app, its features, and the team behind it. We used a clean and modern design with a background color to enhance the visual appeal.

The About Page contains the following sections:

- **Introduction**: A brief overview of the application and its main functionalities.
- **Features**: A list of key features that the application offers.
- **Team**: Information about the team members who contributed to the project.

### Styling

To give the About Page an awesome look, we applied the following styles:

- **Background Color**: We used a gradient background color to make the page visually appealing.
- **Text Styling**: We applied custom fonts and colors to the text to improve readability and aesthetics.
- **Layout**: We used a responsive layout to ensure the page looks great on all devices.

By incorporating these styles, we ensured that the About Page not only provides valuable information but also offers an engaging user experience.


# `npm run build` To Creating an optimized production build
# `serve -s build` To create or run server
# `npm run start` To start created server.

