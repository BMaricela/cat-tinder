# Cat Tinder Example App

This is a sample front and backend application for the LEARN class.

## getting started
```
$ git clone git@github.com:notch8/cat-tinder.git
```
## Backend
To start up the backend:
```
$ cd backend
$ yarn install
$ createdb cat-tinder-development
$ sequelize db:migrate
$ node index.js
```

## Front end
The frontend is a create-react-app.  It requires a backend server to be running on port 4000.  To get it running:
```
$ cd frontend
$ yarn install
$ yarn start
```

## Git Branches
There are several branches in this repository:

* master - The starting point of the Redux lessons.
* redux-refactor - The app refactored to use the Redux pattern
