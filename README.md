# Realhub React Project

## Overview

This application is for demonstration purposes. The application use data from a static JSON file to create a comments dropdown where the user can mark comments as read and be alerted when comments exist that are unread.

## Installation & Prerequisites

![Dependent Packages](https://github.com/nick-ramsay/readme-images/blob/master/rh-react-project/dependent-packages.jpg?raw=true)

The Realhub React Project application is dependent upon three packages...

 1. React
 2. Moment.js
 3. React-Router-Dom
 
If you have cloned the repository with the package.json file, these packages can be installed using the ```npm-install``` command.

## Instructions

Realhub React Project is deployed on Heroku for usage [here](http://rh-react-project.herokuapp.com/).

Users start with the page below. Notice that the right-most button alert button is coloured blue with a red badge stating two comments are unread...

![Realhub React Project Create Account](https://github.com/nick-ramsay/readme-images/blob/master/rh-react-project/starting-page.jpg?raw=true)

Upon clicking the button, a dropdown will appear showing all comments. For unread comments, a "Mark As Read" element will appear for users to mark the comment as read...

![Realhub React Project Create Account](https://github.com/nick-ramsay/readme-images/blob/master/rh-react-project/starting-dropdown.jpg?raw=true)

After marking the first unread comment as read, notice that the "Mark As Read" element is removed from the comment and the badge now shows one less unread comment...

![Realhub React Project Create Account](https://github.com/nick-ramsay/readme-images/blob/master/rh-react-project/first-click-dropdown.jpg?raw=true)

Once all comments are marked as read, the button will be given a white background and the red unread comment count badge will disappear...

![Realhub React Project Create Account](https://github.com/nick-ramsay/readme-images/blob/master/rh-react-project/all-clicked-dropdown.jpg?raw=true)

Once all comments are marked as read, the page will look as follows...

![Realhub React Project Create Account](https://github.com/nick-ramsay/readme-images/blob/master/rh-react-project/final-page.jpg?raw=true)


## Built With
- Realhub React Project application was built using React.js, Bootstrap, Node.js and the following Node Package Manager modules:

 1. React.js
 2. Moment.js
 3. React-Router-Dom

## Authors 
- Developer: Nick Ramsay (@nick-ramsay)
