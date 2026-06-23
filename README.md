# Pet Shop Frontend

A responsive e-commerce web application for pet products built with React, Redux Toolkit, React Router, Axios, React Hook Form, and CSS Modules.

## Live Demo

Frontend: https://pet-shop-frontend-nine.vercel.app/

Backend API: https://pet-shop-backend-fjyp.onrender.com/

## Features

* Responsive home page with hero section, categories preview, discount form, and sale products
* Product categories page
* Category products page
* All products page
* Discounted products page
* Product details page
* Shopping cart with quantity controls
* Order form with validation
* Discount request form
* Successful order modal
* Empty cart state
* 404 page
* Header cart counter
* Filtering and sorting products
* Backend integration with Axios

## Tech Stack

* React
* Vite
* Redux Toolkit
* React Router DOM
* Axios
* React Hook Form
* CSS Modules

## Architecture

The project follows Feature-Sliced Design principles.

```txt
src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
└── shared/
```

## API

The application uses a deployed Node.js backend:

```txt
https://pet-shop-backend-fjyp.onrender.com
```

Main endpoints:

```txt
GET    /categories/all
GET    /categories/:id
GET    /products/all
GET    /products/:id
POST   /sale/send
POST   /order/send
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=https://pet-shop-backend-fjyp.onrender.com
```

For local backend development:

```env
VITE_API_URL=http://localhost:3333
```

## Getting Started

Clone the repository:

```
git clone https://github.com/Timofey86/pet_shop_frontend
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build the project:

```
npm run build
```

Preview production build:

```
npm run preview
```

## What I Practiced

* Building a multi-page React application
* Client-side routing with React Router
* Global state management with Redux Toolkit
* Asynchronous data fetching using createAsyncThunk
* API integration with Axios
* Form handling and validation with React Hook Form
* Shopping cart implementation with Redux
* Product filtering, sorting, and search functionality
* Debounced search using a custom useDebounce hook
* Creating reusable components following Feature-Sliced Design
* Responsive layout development with CSS Modules

