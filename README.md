# Second Brain App (Frontend)

A TypeScript + React frontend for the Second Brain application.

## Overview

This application is a learning and content curation interface that allows users to collect and organize reference links, videos, tweets, and documents into a personal "second brain." Users can register, sign in, manage saved content, and generate a shareable brain link for public viewing.

## Features

- User registration and authentication
- Dashboard with paginated content cards
- Search and filter saved items by title and content type
- Add new content entries for YouTube, Twitter, and Docs
- Delete saved content items
- Generate a shareable brain link for public access
- Protected profile page with logout support
- Responsive UI built with Tailwind CSS

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Axios
- react-router-dom
- react-hot-toast
- JWT-based auth integration

## Project Structure

- `src/App.tsx` - Application router and route definitions
- `src/pages/SignIn.tsx` - Sign-in page
- `src/pages/SignUp.tsx` - Sign-up page
- `src/pages/Dashbord.tsx` - Main content dashboard
- `src/pages/Profile.tsx` - Authenticated user profile page
- `src/pages/SharedBrain.tsx` - Public shared brain viewer
- `src/components/UI` - Reusable UI components for buttons, inputs, cards, sidebar, and modal forms

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with:

   ```env
   VITE_API_BASE_URL=http://localhost:4000/api/v1
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Notes

- The frontend expects a running backend API at the URL configured by `VITE_API_BASE_URL`.
- Authentication flows mix JWT in localStorage with HTTP-only cookies for backend authorization.
- The share experience depends on the backend share link API.
