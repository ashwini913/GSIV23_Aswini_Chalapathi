# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# List of challenges

## The Usage of redux to display list of movies , movie view and the searched movie list

Consider if we have a complex model where a state of component is being used in siblings ,parent etc . Redux(state management) will help us use that state anywhere we want .In this movie app i used movieList state which we use for both latest movie and searched movies

## creation of reusable components

Using reusable component will make our code much simpler and will remove redundant code ,if there is an bug it is easy to fix , if there is any change easy to implement

## search functionality implementation

by using material UI i have implemented search which i think is very easy to implemented and very easy to customize

# If i had more time

## I would have implemented the automated testing which i am very keen to do

I think automated testing will make sure the code which we have implemented will work for all the cases and indeed working fine . I will definitely will work on the automated testing as this is my new learning topic as i have not invested my time on this

## In redux i have made the state mutable as per requirement

In redux i made state mutable because the search movie list must replace the latest movie list and again if search is cancelled it should the latest movie list ,so rather that make state immutable i made it mutable , but i would like to find a way to make it immutable and also which should be simple to implement
