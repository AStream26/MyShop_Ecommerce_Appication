# 🎁 MyShop MERN Ecommerce  Application 


### This application is deployed on Heroku. Please check it out :smile: [Live Site](https://myshop-mern-ecommerce.herokuapp.com/)

<a href="https://imgbox.com/1ISGULNN" target="_blank"><img src="https://images2.imgbox.com/07/62/1ISGULNN_o.png" alt="image host"/></a>

## Description

An ecommerce store built with MERN stack, Redux , and React-Router . This ecommerce store enable two main different flows :

1. Buyers browse the store categories, products and brands
2. Admins manage and control the entire store components 

### Features 😊

  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * MongoDB for storing Data
  * Mongoose schemas to model the application data
  * React for displaying UI components
  * Redux to manage application's state management
  * Redux Thunk middleware to handle asynchronous redux actions
  * React-Router for handling routing in the client side
  * Multer middleware is used to upload images and files 
  * Paypal API is used for Payment Process

## What's Next 🙃🙃

  * Add Stripe Api Payment gateway
  * Add Seller section to manage their own products
  * Add more feauters to Admin and user's screen for better management 
  
 ## Install 😎

Some basic Git commands are:

```
$ git clone https://github.com/AStream26/MyShop_Ecommerce_Appication.git
$ cd MyShop_Ecommerce_Appication
$ npm install
```

## Setup

```
 Create .env file that include:

  * URL(mongodb url) & JWT_SECRET & JWT_EXPIRE
  * PORT,Node_ENV(production & development) & USERNAME
  * PAYPAL_CLIENT_KEY & EXPIRES
```

## Heroku Deployment

```
> Create a Procfile in the root directory of your application with the following command **web: npm run start:production**
```
 
 
 ## Simple build for production

```
$ npm run build
```

## Run the application for development

```
$ npm start dev
```

## Run the application for production

```
$ npm start
```

## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

- [Redux](https://redux.js.org/)
