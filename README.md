# Password Generator

This generates a random password based on user-selected character sets (lowercase letters, uppercase letters, numbers, and symbols). The password is automatically updated whenever any checkbox is clicked.

# Pizza Ordering System

This is a simple pizza ordering system built using Laravel and Vue.js. The application allows users to order pizzas of different sizes with optional add-ons like pepperoni and extra cheese. Users can also delete individual orders and empty the entire order.

## Minimum Requirements

- PHP version: 8.0 or higher
- npm version: 10.0 or higher
- Composer verison: 2 or higher

## Installation Instructions

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone <repository_url>
   cd <repository_folder>

2. **Install PHP Dependencies**

   Install the required PHP dependencies using Composer:

   ```sh
   composer install

3. **Install Node.js Dependencies**

   Install the required Node.js dependencies using npm:

   ```sh
   npm install

4. **Environment Configuration**

   Copy the .env.example file to .env and generate an application key:

   ```sh
   cp .env.example .env
   php artisan key:generate

5. **Compile Assets**

    Compile the front-end assets using Vite Mix:

    ```sh
    npm run dev

6. **Run the Development Server**

   Start the Laravel development server:
    This will start the server at http://127.0.0.1:8000
    ```sh
    php artisan serve
