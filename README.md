# Source Code Directory (`src/`) 📂

This directory contains the source code for the application, built using React. It follows a component-based architecture to ensure maintainability and scalability. Below is an overview of the main folders and files:

## Core Components 🚀

These are the foundational files that bootstrap and style the application:

*   **`App.css`**: 🎨 Global styles for the application, including theming and base styles.
*   **`App.jsx`**: ⚛️ The main application component, serving as the root component and setting up the layout and routing of the application.
*   **`main.jsx`**: 🚪 The entry point for the React application. It initializes the React environment and renders the main `App` component into the DOM.
*   **`index.css`**: 🌐 Base styles for the application, often including resets and default settings.
*   **`Particle.jsx`**: ✨ Component responsible for rendering the interactive background particle effect, enhancing the visual appeal.

## Assets 🖼️

The `assets` directory holds static assets such as images, logos, and other media files used throughout the application. This helps in organizing and managing the project's visual resources.

## Components 🧩

This directory contains reusable UI components that are the building blocks of the application's user interface. Each subdirectory represents a specific section or feature:

*   **`Contact/`**: ✉️ Components related to the contact section, likely including forms and display elements for contact information.
*   **`Education/`**: 🎓 Components for displaying the user's educational background and qualifications.
*   **`Experience/`**: 💼 Components for showcasing the user's work experience and professional history.
*   **`Footer/`**: ⚓ The application's footer component, typically containing copyright information and links.
*   **`Hero/`**: 🦸 The main hero section of the application, usually the first section users see, introducing the purpose of the site.
*   **`Navbar/`**: 🧭 The navigation bar component, providing links to different sections of the application.
*   **`Projects/`**: 🛠️ Components for displaying a portfolio of the user's projects and work samples.
*   **`Skills/`**: 💪 Components for listing and visualizing the user's skills and expertise.

## Context ⚙️

The `context` directory likely contains React Context providers for managing application-wide state, making data accessible across different components without prop drilling.

*   **`ThemeContext.jsx`**: 🌙 Context for managing the application's theme, such as toggling between light and dark mode.

## Data 📊

This directory holds data files (usually in JSON or JavaScript format) used by the application to populate various sections dynamically.

*   **`educationData.js`**: Data for the education section, including details about degrees and institutions.
*   **`experienceData.js`**: Data for the work experience section, detailing roles, responsibilities, and achievements.
*   **`projectsData.js`**: Data for the projects section, providing information about each project, like descriptions and links.
*   **`skillsData.js`**: Data for the skills section, listing the user's technical and soft skills.

## Styles 🎨

The `styles` directory might contain additional style files, such as variable definitions or shared style configurations, to maintain a consistent look and feel.

## Visitor Counter (`visitor-counter/`) 🔢

This directory contains the code for a visitor counter feature. It likely includes a server-side component (`server.js`) and related configuration files (`package.json`, `package-lock.json`) to track and display the number of visitors to the application.