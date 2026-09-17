# Commercial Sensors Website

## Overview

Commercial Sensors Website is a web-based agricultural technology platform called **Agro Tech**. The project presents agricultural sensors and smart farming technologies through a multi-page website and includes a PHP and MySQL backend for product database management and related administrative data.

The website is designed to help users explore sensor technologies used in agriculture, view product information, learn about installation, and access contact and company information.

## Project Highlights

- Agricultural sensor product catalogue
- Product filtering by sensor category
- Product detail pages with supporting images
- Home page with video-based hero section
- Installation information and documentation
- About Us and Contact pages
- Sign-in and sign-out page flow
- Shopping cart interface
- Product database management using PHP and MySQL
- Product insertion and product listing from a database
- Administrative employee and payroll-related PHP modules
- Large collection of product and website media assets
- Supporting IoT documentation in DOCX format

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Responsive web layout
- HTML forms
- Embedded video
- Product image sliders and filtering

### Backend

- PHP
- MySQL
- MySQLi
- XAMPP

### Database

The repository contains PHP database functionality for:

- `productdatabase`
- `payroll_management`

The product database stores sensor catalogue information such as name, type, description, and price. The payroll-related module uses employee, department, and position data.

## Main Website

The main landing page is `Comercial Sensors Website/index.html`.

The website is branded as **Agro Tech** and contains navigation for:

- Home
- Product
- Installation
- About Us
- Contacts
- Sign In
- Sign Out
- Add to Cart

The home page uses a background video and graphical navigation cards for the major sections.

## Product Catalogue

The main product catalogue is implemented in `Product.html`.

Products are grouped into different agricultural and electronic sensing categories. The catalogue includes examples such as:

### IoT and Agricultural Sensors

- Soil Moisture Sensor
- Leaf Wetness Sensors
- Soil Temperature Sensors
- Weather Stations
- Nutrient Sensors
- Optical Sensors
- Remote Sensing Sensors

### Electronic Sensors

- Potentiometric Sensors
- Voltammetric Sensors
- FET Sensors
- ISEs Sensors
- Optical Fibre Sensors
- Colorimetric Sensors
- Conductivity Sensors

### Drone and Remote Sensing Products

- Aerial Drone
- LiDAR Drone
- Additional drone and agricultural sensing products represented by the product-detail image collection

Each product section contains product images, a short description, price information, and an Add to Cart interface.

The catalogue also provides a filter for:

- All Sensors
- IoT Sensors
- Electronic Sensors
- Drone Sensors

## Product Database

The PHP product database module is implemented in `Product-database.php`.

It provides functionality to:

1. Connect to a MySQL database
2. Accept new product information through a form
3. Store product name, type, description, and price
4. Retrieve existing products
5. Display products in a table
6. Provide update and delete action interfaces

Supported product types include:

- IoT
- Electronic
- AI
- Drone

The product database uses the `products` table in the `productdatabase` database.

### Product Data Fields

| Field | Description |
| --- | --- |
| ID | Product identifier |
| Name | Sensor or product name |
| Type | Product category |
| Description | Product description |
| Price | Product price |

## Employee and Payroll Module

The repository also contains PHP functionality connected to a `payroll_management` MySQL database.

The employee module includes data handling for:

- Employee name
- Gender
- Age
- Department
- Position
- Salary

`add_employee.php` retrieves the corresponding position and department identifiers before inserting employee information into the `Employees` table.

The database connection is provided through `db_connect.php`.

> The payroll functionality appears alongside the main sensor website as an additional database-backed module in the repository.

## Installation Section

`Installation.html` provides installation-related information for the project and sensor ecosystem.

The repository also contains installation-related assets and documentation used by the website.

## About Us and Contact Sections

The website contains dedicated pages for:

- Company or project information
- Contact information
- Navigation and visual assets

Supporting files include:

- `about.html`
- `about.css`
- `contactus.html`
- Contact-related styling and assets

## Product Detail Assets

The `Product-detail` directory contains image pairs for different agricultural sensor and drone products.

Examples include:

- Aerial
- Agricultural
- Digital
- IoT
- LiDAR
- Livestock
- Nutrient
- Pollen
- Precision
- Seed
- Soil
- Temperature

These assets are used to support product descriptions and visual presentation.

## Website Media

The `Mini-Images` directory contains the main website visual assets, including:

- Logo
- Home icon
- Product icon
- Installation icon
- About Us icon
- Contacts icon
- Cart icon
- Background video

## Documentation

The repository also includes supporting documents:

- `IoT.docx`
- `Untitled document.docx`
- `Untitled.txt`

These files provide additional project or IoT-related information associated with the website.

## Project Structure

```text
Comercial-Sensors-Website/
│
├── README.md
├── .gitattributes
│
└── Comercial Sensors Website/
    ├── index.html
    ├── Product.html
    ├── Product-database.html
    ├── Product-database.php
    ├── Installation.html
    ├── about.html
    ├── about.css
    ├── contactus.html
    ├── add_employee.php
    ├── db_connect.php
    │
    ├── Mini-Images/
    │   ├── Logo.png
    │   ├── Home.png
    │   ├── Product.png
    │   ├── Installation.png
    │   ├── About us.png
    │   ├── Contacts.png
    │   ├── cart-icon.png
    │   └── Background.mp4
    │
    ├── Product-detail/
    │   └── Product-specific images
    │
    ├── IoT.docx
    ├── Untitled document.docx
    └── Untitled.txt
```

Additional HTML, CSS, JavaScript, PHP, image, and interface files are included in the project directory for the website's different pages and functions.

## How the Website Works

### 1. Home Page

The user enters through `index.html`, where the Agro Tech landing page introduces the platform and provides navigation to the main sections.

### 2. Product Catalogue

The user opens `Product.html` to browse agricultural sensors and related technologies. Products are presented with images, descriptions, prices, and category information.

### 3. Product Database

The Product Database section uses PHP and MySQL to add and retrieve product records from the database.

### 4. Installation

Users can access the installation section for sensor installation-related information.

### 5. About and Contact

Users can learn about the project and access contact information through the corresponding pages.

### 6. Cart and Authentication Interfaces

The website provides navigation for shopping cart, sign-in, and sign-out interfaces.

## Local Setup

### Prerequisites

Install the following software:

- XAMPP
- Apache
- MySQL
- A modern web browser
- A code editor such as VS Code

### Step 1: Clone the Repository

```bash
git clone https://github.com/anjani-sah/Comercial-Sensors-Website.git
```

### Step 2: Copy the Project to XAMPP

Place the project inside the XAMPP web root:

```text
C:/xampp/htdocs/
```

For example:

```text
C:/xampp/htdocs/Comercial-Sensors-Website/
```

### Step 3: Start XAMPP

Open XAMPP Control Panel and start:

- Apache
- MySQL

### Step 4: Open the Website

Open the project through Apache in a browser, for example:

```text
http://localhost/Comercial-Sensors-Website/Comercial%20Sensors%20Website/index.html
```

### Step 5: Configure MySQL

Create the databases expected by the PHP files before using database-backed features.

The current source expects:

```text
productdatabase
payroll_management
```

Create the required tables and columns according to the PHP queries in the repository.

## Database Notes

The current PHP source contains local development database credentials. For deployment, move database credentials into environment variables or a protected configuration file and do not commit real passwords to GitHub.

The repository currently uses MySQLi for database connectivity.

## Important Files

| File | Purpose |
| --- | --- |
| `index.html` | Main Agro Tech landing page |
| `Product.html` | Sensor product catalogue |
| `Installation.html` | Installation information |
| `about.html` | About Us page |
| `contactus.html` | Contact page |
| `Product-database.php` | Product database management |
| `Product-database.html` | Product database HTML page placeholder |
| `db_connect.php` | MySQL connection for payroll module |
| `add_employee.php` | Adds employee records to the payroll database |
| `about.css` | About page styling |
| `Mini-Images/` | Main website graphics and video |
| `Product-detail/` | Product-specific images |
| `IoT.docx` | IoT-related documentation |

## Learning Objectives

This project demonstrates practical integration of:

- Frontend web development
- HTML page design
- CSS styling
- JavaScript interactions
- PHP server-side programming
- MySQL database connectivity
- Form processing
- Product catalogue design
- Database CRUD concepts
- Agricultural IoT presentation
- Sensor technology communication through a web interface

## Future Improvements

Potential improvements include:

- Replace inline database credentials with environment variables
- Use prepared statements consistently for all database queries
- Implement complete product update and delete endpoints
- Add proper user authentication and session management
- Connect the cart to a persistent database
- Add server-side validation for all forms
- Improve responsive design for mobile devices
- Add a dedicated product API
- Add search and advanced product filtering
- Add an administration dashboard
- Deploy the website using a production database and secure hosting

## Author

Developed by **Anjani Sah** as a web and database project focused on commercial agricultural sensors, IoT technologies, and smart farming solutions.

## Repository

urlComercial-Sensors-Website on GitHubhttps://github.com/anjani-sah/Comercial-Sensors-Website
