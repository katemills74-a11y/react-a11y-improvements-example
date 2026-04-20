react-a11y-improvements-example

A small React project demonstrating practical accessibility (A11y) improvements using semantic HTML, ARIA attributes, keyboard‑friendly interactions, and clean component structure.
This project is designed as a before → after example to showcase your ability to refactor UI for accessibility and clarity.

⭐ Overview

This project takes a simple React interface and enhances it with:

    - Accessible button labels

    - Semantic structure

    - Keyboard‑friendly interactions

    - Clear visual focus states

    - Clean, modular styling

    - Improved component readability

It serves as a portfolio example of how to apply accessibility best practices in real‑world React components.

⭐ Key Accessibility Improvements

1. ARIA Labels

Buttons now include descriptive aria-label attributes where needed, improving screen reader clarity.

2. Semantic HTML

Navigation, content, and interactive elements use appropriate semantic tags.

3. Keyboard Interactions

Buttons respond to keyboard focus and hover states using React useState.

4. Visible Focus Styles

Custom focus outlines ensure keyboard users can see where they are on the page.

5. Modular Styles

All inline styles were moved into a dedicated Styles.js file for clarity and reusability.

6. Clean Component Structure

Components were refactored for readability, maintainability, and accessibility.

⭐ Project Structure

react-a11y-improvements-example/
│
├── src/
│   ├── A11y.jsx
│   ├── Styles.js
│   ├── constants.js
│   ├── assets/
│   │   └── react.svg
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md

⭐ Screenshots

/screenshots
  ├── before.png
  ├── after.png

Example Markdown:

### Before
![Before screenshot](./screenshots/before/before.png)

### After
![After screenshot](./screenshots/after/after.png)


⭐ How to Run the Project

bash

npm install
npm run dev

Then open:

Code

http://localhost:5173

⭐ Technologies Used

 - React

 - Vite

 - JavaScript (ES6+)

 - ARIA attributes

 - Semantic HTML

 - Inline style objects via Styles.js

⭐ What This Project Demonstrates

This project shows your ability to:

 - Identify accessibility issues

 - Refactor UI components for clarity and usability

 - Apply ARIA attributes correctly

 - Improve keyboard navigation

 - Use React hooks (useState) for interactive states

 - Organise styles in a modular, scalable way

 - Produce clean, readable, maintainable code