# ShopSwift - Responsive Ecommerce Project

ShopSwift is an ecommerce project developed with React that aims to provide a seamless and user-friendly shopping experience. The project features dynamic product filtering, dark mode and light mode options for enhanced user preference, secure Firebase Authentication, and a real-time database for efficient data management.

## Key Features

- **Responsive Design:** Crafted a responsive ecommerce site to ensure an optimal shopping experience across various devices and screen sizes.

- **Dynamic Product Filtering:** Implemented dynamic product filtering to enhance user navigation, making it easy to find desired products quickly.

- **Dark Mode and Light Mode:** Enhanced user experience by offering both dark and light mode options throughout all pages for user preference.

- **Firebase Authentication:** Utilized Firebase Authentication to ensure secure and seamless user authentication.

- **Real-time Database:** Integrated Firebase Real-time Database for efficient and real-time data management, ensuring the latest product information is always available.

- **Admin Dashboard:** Designed an admin dashboard with protected routes for user activity monitoring and order management.

- **Dynamic Shopping Cart:** Implemented a dynamic shopping cart using Local Storage, allowing users to add and remove items with ease.

- **Technologies Used:**
  - ReactJS
  - React Router
  - React Hooks
  - Context API
  - Redux
  - Razorpay Integration
  - Local Storage
  - Firebase Authentication and Real-time Database

## Project Structure

The ShopSwift project is organized with a modular structure to enhance code maintainability and scalability. Here's an overview of the main directories:

- **`src/`**: The source code for the React application.

  - **`assets/`**: Contains public assets such as images and icons.

  - **`components/`**: Includes various reusable React components used across different pages.
    - `Layout`, `Header`, `Footer`: Components defining the structure of the website.
    - `Navbar`: Navigation bar component for easy navigation.
    - `Modal`: Reusable modal component.
    - `ProductCard`: Component representing product information.
    - `Filter`: Component for dynamic product filtering.
    - `Testimonial`, `HeroSection`: Components for displaying testimonials and hero sections.

  - **`context/`**: Manages the global state of the application.
    - `MyContext`, `MyState`: Context and state management for the application.

  - **`firebase/`**: Stores configuration files for Firebase.

  - **`pages/`**: Components representing different pages of the website.
    - `Admin`, `AllProducts`, `Orders`: Components for admin-related pages.
    - `Cart`, `Home`, `NoPage`, `ProductInfo`, `Registration`: Components for various user-facing pages.

  - **`redux/`**: Manages Redux-related files for state management.
    - `Slices`, `Store`: Redux slices and store configuration.

- **`public/`**: Includes public assets such as images and icons.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Saumya-07/Ecommerce.git
2. **Install Dependencies:**
   ```bash
   cd ShopSwift
   npm install
3. **Run the Application:**
   ```bash
   npm start
4. **Open in Browser::**
   ```bash
   Open your browser and navigate to http://localhost:3000

## Deployment
The application is deployed on Firebase. You can access it at https://shopswift-8d6f1.web.app/signup

## License
This project is for learning purpose. Feel free to use, modify, and distribute the code.

## Happy Shopping with ShopSwift! 🛒✨