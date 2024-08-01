# Mern Stack Developer Asssingment

## Features

- **Vite**: A fast build tool and development server for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Recoil**: A state management library for React that provides a flexible and efficient way to manage application state.

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (package managers)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/devansh301/ReactAssignment.git
    cd rewardsAssignment
    ```

2. **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

### Development

To start the development server and view the application in your browser:

```bash
npm run dev
```

The development server will start, and you can view the app at `http://localhost:5173`.


### Project Structure

- **`src/`**: Contains the source code of the application.
  - **`components/`**: React components.
  - **`pages/`**: Application pages.
  - **`store/`**: Recoil state management files.
  - **`styles/`**: Custom styles (including Tailwind CSS configurations).
  - **`App.js`**: Main application component.
  - **`index.js`**: Entry point of the application.

- **`public/`**: Static assets and HTML files.
- **`vite.config.js`**: Vite configuration file.
- **`tailwind.config.js`**: Tailwind CSS configuration file.

### Tailwind CSS

Tailwind CSS is used for styling the application. You can customize the design by modifying the `tailwind.config.js` file and using Tailwind's utility classes in your components.

### Recoil

Recoil is used for state management. You'll find state atoms and selectors in the `store/` directory. Atoms represent pieces of state, and selectors provide derived state and asynchronous queries.