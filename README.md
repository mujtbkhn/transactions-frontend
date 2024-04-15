 # [Transactions Web Application](https://mujtabas-transaction-app.vercel.app/)

## Overview
This web application allows users to interact with each other by sending or receiving money. Users receive a dummy currency upon signing up, and they can also receive additional funds if their balance falls below $2500. Users can view all other users, search for them, and send them money, with transactions reflected in real-time and wallet balances updated accordingly.

## Features
- **User Interactions**: Users can send and receive money to and from other users.
- **Dummy Currency**: Upon signup, users receive a dummy currency for transactions.
- **Additional Funds**: Users can receive additional funds if their balance falls below $2500.
- **Real-time Updates**: Transactions are reflected in real-time, and wallet balances are updated accordingly.
- **Protected Routes**: Only signed-in users can navigate the application; unauthorized users are redirected to the login page.
- **JWT Authentication**: Authentication is implemented using JSON Web Tokens for secure access.
- **Transaction History**: Users can view their last 10 transaction history.

## Purpose
This application was created with a focus on learning how transactions work, primarily emphasizing backend functionality.

## Technologies Used
- **Backend**: Node.js
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: JSON Web Tokens (JWT)

## How to Use
1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and configure the connection string in the application.
4. Run the application using `npm start`.
5. Navigate to `http://localhost:3000` in your web browser.
6. Sign up or log in to start using the application.

## Contributors
- [Your Name] - [Your Contact Information]

## License
This project is licensed under the [MIT License](LICENSE).

  
