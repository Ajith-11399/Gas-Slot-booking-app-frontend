# Gas Slot Booking App Frontend

This project serves as the frontend for the Gas Slot Booking application.

## About Us

At CloudNiine, we're committed to transforming the way you refuel. Our innovative gas slot booking app is designed to eliminate the hassles of traditional refueling by providing a seamless, efficient, and stress-free experience. With CloudNiine, you can book your gas slots in advance, skip the long lines, and enjoy peace of mind knowing that you'll never run out of gas. Our mission is to deliver convenience, reliability, and satisfaction to every driver, ensuring that your journey is always smooth and enjoyable. Join us at CloudNiine and elevate your refueling experience to new heights.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: Library for routing in React applications.
- **Axios**: Promise-based HTTP client for making API requests.
- **Formik**: Form handling library for React.
- **React Icons**: Library for popular icons in React components.
- **React Spinners**: Library for loading spinners and indicators.
- **Yup**: Library for form validation in React.
- **RazorPay**: Razorpay is used for Payment gateway.

## Features

- User Authentication
- Product Selection
- Date and Time Slot Selection

## BASE URL

**URL** - https://cloudniine.netlify.app

## Routes

| **Component** | **Path**    | **Description**                                       |
| ------------- | ----------- | ----------------------------------------------------- |
| `Register`    | `/`         | Renders the user registration page.                   |
| `Login`       | `/sign-in`  | Renders the Login page.                               |
| `Home`        | `/home`     | Renders the homepage with featured products.          |
| `About Us`    | `/about-us` | Renders the about us page with company details.       |
| `Gas`         | `/gas`      | Renders the gas products selection page.              |
| `GasDetails`  | `/gas/:id`  | Renders details of a specific gas product.            |
| `AfterOrder`  | `/thanks`   | Renders the confirmation page after placing an order. |

## Structure

- **src/**
  - **components/**: React components for different sections.
  - **pages/**: React components representing different pages/routes.
  - **services/**: Utility functions and API services.
  - **App.js**: Main component handling routing and layout.
  - **index.js**: Entry point of the application.
  - **.env**: Environment configuration for API base URL and other settings.

## Usage

1. **Home Page**: View featured products and promotions.
2. **Product Selection**: Browse gas products and add them to cart.
3. **Date and Time Slot Selection**: Choose delivery date and preferred time slot.

## Repository Link

For more details on the Gas Slot Booking App Frontend, visit the [GitHub Repository](https://github.com/Ajith-11399/Gas-Slot-booking-app-frontend).
