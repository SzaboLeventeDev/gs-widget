# gs-widget
Interview project for Greenspark

## Summary
This project's goal is to customize Greenspark widgets by changing colors, activation and publication state. At the same time, only one widget can be activated.

## Stack
The application is based on a NodeJS frontend framework using global state management and type safe solution.
Stack:
- Vue.js
- Vuex
- Node (20.18.0)

## First steps

Download the repository via HTTP or SSH.
1. Install NVM and Node 20.18.0 using 
```bash 
nvm install 20.18.0
```

2. Install Yarn with 
```bash 
npm i -g yarn.
```

3. Open the repository with VS Code or other code editor which are capable to run Vue.js application.

4. Change to the ```/widget`` folder.

5. Install dependencies with 
```bash 
yarn
```

6. Run the application in development mode with 
```bash 
yarn dev.
```

## Pages
The application contains two pages:
- Home page
- Settings page

The home screen shows the published widget of the user and the settings page lists all of the available widgets with personalization options.


## State management
The state management tool in the application is Vuex. It has one module currently.

## Deployment
The application is currently hosted on Netlify.
URL: https://greeenspark-widget-szabolevente.netlify.app/

### Steps of deployment
To deploy the app, first run 
```bash
yarn build
```
and tests if the app builds successfully.

In case of successful deployment, the ``widget`` folder has to include the ``dist`` folder.

1. Open Netlify and authenticate with GitHub profile.
2. Select the project and choose Deploys.
3. Trigger deploy.

Currently the application is deployed manually from the development branch.