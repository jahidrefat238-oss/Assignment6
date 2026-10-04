# FitLog

## Project Overview

FitLog is a web-based workout library and workout planning application developed using Next.js and React. The application allows users to browse workout exercises, view detailed workout information, add exercises to their daily workout plan, save exercises for later, and manage their workout activities through a centralized interface.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- DaisyUI
- React Toastify
- Lucide React
- Context API
- REST API

## Key Features

1. **Workout Library**
   - Displays workout exercises retrieved from the FitLog API.
   - Provides information such as workout name, muscle group, equipment, duration, calories, and rating.

2. **Workout Details**
   - Provides detailed information about individual workouts.
   - Includes workout description, difficulty, sets, repetitions, duration, calories, rating, and instructions.

3. **Today's Plan**
   - Allows users to add workouts to their daily workout plan.
   - Displays the total number of exercises, workout duration, and calories.

4. **Saved Workouts**
   - Allows users to save workouts for later use.
   - Provides a separate section for managing saved workouts.

5. **Workout Management**
   - Users can mark completed workouts as done.
   - Users can remove workouts from their plan or saved list.

6. **Workout Sorting**
   - Allows users to sort workouts based on duration, calories, and rating.

7. **Toast Notifications**
   - Provides feedback when workouts are added, saved, completed, or removed.

8. **Responsive Design**
   - The application is designed to provide a consistent user experience across desktop, tablet, and mobile devices.

## Application Structure

The application consists of the following major sections:

- Home Page
- Workout Library
- Workout Details Page
- My Plan Page
- Saved Workouts
- Navigation Bar
- Footer

## API

### All Workouts

https://api.abcz.workers.dev/api/fitlog

### Single Workout

https://api.abcz.workers.dev/api/fitlog/:id

## Project Purpose

The primary purpose of FitLog is to provide users with a simple and organized platform for discovering workouts and managing their daily workout activities. The application demonstrates the implementation of modern web development concepts including component-based architecture, client-side state management, API integration, responsive design, and dynamic routing.

## Development Tools

- Next.js App Router
- React
- Tailwind CSS
- DaisyUI
- Visual Studio Code
- Git and GitHub
