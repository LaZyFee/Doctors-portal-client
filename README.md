# Doctors Portal

Doctors Portal is a full-stack appointment booking application where users can view available slots for various services by day, book appointments, and make payments using **Stripe**. The project also includes an admin dashboard, enabling administrators to manage bookings, promote users to admins, view doctor lists, and add new doctors.

## Features

- **User Booking System**: Users can view available slots by day and book a service in a specific time slot.
- **Payment Integration**: Secure payment processing using Stripe.
- **Admin Dashboard**:
  - View all bookings.
  - Promote users to admins.
  - Manage doctor list (view and add doctors).
- **Dynamic Scheduling**: Available slots are displayed dynamically based on selected dates.

## Tech Stack

- **Frontend**: React, Tailwind CSS, DaisyUI, React Router, React Icons
- **Backend**: Express, MongoDB
- **Form Management**: react-hook-form
- **Date and Time**: date-fns, react-day-picker
- **State Management**: tanstack/react-query
- **Payment Processing**: Stripe (using react-stripe-js)

## Project Structure

- **client/**: React frontend with Tailwind CSS and DaisyUI.
- **server/**: Express backend with routes for bookings, user management, and Stripe integration.

## Key Functionality

### Booking System

- Users can select a date to view available services and time slots.
- After choosing a slot, users can book an appointment.
- Payment for booking is processed through Stripe's CardElement.

### Admin Dashboard

- **Manage Bookings**: Admins can view all appointments.
- **User Management**: Admins can promote users to admin status.
- **Doctor Management**: Admins can view and add doctors.

## Dependencies

### Frontend

- **React**: Core frontend library.
- **Tailwind CSS** and **DaisyUI**: Styling and UI components.
- **react-day-picker**: For date selection in the booking system.
- **react-hook-form**: For handling form input and validation.
- **@tanstack/react-query**: For data fetching and server-state synchronization.
- **@stripe/react-stripe-js**: Stripe integration for payments.

### Backend

- **Express**: Server framework.
- **MongoDB**: Database for storing user, booking, and doctor data.
- **Stripe**: Payment processing.

## Usage

1. **User Booking**:
   - Navigate to the booking page, select a date, and choose a time slot.
   - Confirm the booking and proceed to payment via Stripe.
  
2. **Admin Actions**:
   - Access the dashboard to manage bookings, users, and doctors.


## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/LaZyFee/Doctors-portal-client
    cd doctors-portal
    ```

2. **Install dependencies**:

    ```bash
    # For client
    cd client
    npm install
    
    # For server
    cd ../server
    npm install
    ```

3. **Set up environment variables**:

    - In the `client` directory, create a `.env` file with your Stripe key:
    
      ```bash
      REACT_APP_STRIPE_KEY=your_stripe_public_key
      ```

    - In the `server` directory, create a `.env` file with the following:

      ```bash
      MONGO_URI=your_mongodb_connection_string
      STRIPE_SECRET_KEY=your_stripe_secret_key
      ```

4. **Start the application**:

    ```bash
    # In the server folder
    npm start

    # In the client folder
    npm start
    ```

   The client will run on `http://localhost:3000` and the server on `http://localhost:5000`.


## License

This project is licensed under the MIT License.

## Acknowledgments

- [React](https://reactjs.org/)
- [Stripe](https://stripe.com/docs) for payment integration.
- [MongoDB](https://www.mongodb.com/)



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
