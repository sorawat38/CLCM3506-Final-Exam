# React Medical Dashboard

This project is a medical dashboard built with React and TypeScript. It provides a user interface for managing appointments, viewing upcoming meetings, and accessing lab and test results.

## Features

- **Upcoming Appointments**: Displays the upcoming appointments with details like the patient's name and appointment time.
- **Next Meetings**: Shows the next meetings with doctors along with their roles and profile pictures.
- **Lab and Test Results**: Provides a list of lab and test results for different patients.
- **Medical Records**: A comprehensive view of patient medical records. It includes features to view, edit, and delete records.

## Tech Stack

- React
- TypeScript
- Vite

## Project Structure

- `src/pages/Dashboard.tsx`: This is the main dashboard page. It contains components for upcoming appointments, next meetings, and lab and test results.
- `src/pages/MedicalRecord.tsx`: This page is for displaying medical records.
- `src/App.tsx`: This is the main entry point of the application. It sets up the routing for the application.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm run dev`.

## ESLint Configuration

This project uses ESLint for linting. The configuration can be expanded to enable type aware lint rules:

```javascript
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
