# Random Image Fetcher & Simple Editor

A free, browser-based tool to instantly generate and edit random placeholder images from Unsplash. This project provides a fast and intuitive interface for developers, designers, and content creators to get contextual placeholder images with on-the-fly filtering and transformations.

## Features

- **Dynamic Image Generation**: Fetch random images based on keywords, width, and height.
- **Unsplash Integration**: Leverages the powerful `source.unsplash.com` API for a virtually limitless supply of high-quality images.
- **Simple Image Editor**:
  - Apply common filters: **Grayscale**, **Sepia**, **Blur**.
  - **Flip** images horizontally.
- **Responsive Design**: A clean, modern, and fully responsive UI that works on all devices.
- **No Backend Needed**: A complete client-side application built with React and TypeScript.
- **Animated Background**: A beautiful, subtly animated galaxy background for an enhanced user experience.
- **Simulated Multi-Page Experience**: Includes virtual pages for a blog, contact, and static content, all managed within a single-page application architecture.

## Tech Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS** (via CDN for rapid styling)
- **Unsplash Source API**

## How It Works

This is a single-page application (SPA) built to run in a simple web environment that serves an `index.html` file. 

- **`index.html`**: The main entry point. It includes the Tailwind CSS CDN and sets up the root div for the React app.
- **`index.tsx`**: The main script that renders the React application into the DOM.
- **`App.tsx`**: The core of the application. It manages a state-based routing system to simulate navigation between different "pages" (components).
- **`components/*.tsx`**: The application is broken down into logical components for each page (Home, Blog, Contact, etc.).
- **`lib/*.ts`**: Static data for the blog and static pages are stored here.
- **`style.css`**: Contains global styles, including the animated background.

This setup ensures the application is fast, self-contained, and works without any server-side logic or complex build process.
