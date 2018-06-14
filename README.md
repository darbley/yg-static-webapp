# yg-static-webapp
Yeoman Generator Static Web App packaged with Webpack

Initial setup comes comes ready for development with Bootstrap, jQuery, Font Awesome, SASS

# Setup Instructions
*   Create Project Directory
*   cd into project directory and run `yo static-webapp`
*   Run `npm install`
*   Run `npm run build:watch`

# Development Instructions
Dev server points to 'en' folder.
* Run `npm run start:dev` to boot up webserver
* Run `npm run build:watch` to build for PROD and restart dev server

Note: When editing SASS, CSS, or JS files, the webserver will reload the assets. 

When editing an HTML file, you will need to run `npm run build:watch` to see your changes.

# Deployment Instructions
*  Upload 'dist' folder to apache server
* The 'dist' folder contains an .htaccess file that will point to the en folder
