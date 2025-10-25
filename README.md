# Daily Dispatch - React News Feed App

A clean and modern news feed application built with React and styled with Tailwind CSS, created as part of the AppDost Web Developer Internship assignment. The app fetches live news articles from the NewsAPI.org and allows users to search for news by keyword.

![Screenshot of Daily Dispatch App](./public/screenshot.png)

## Features

- **Live News:** Displays top headlines from the US or search results from NewsAPI.org.
- **Search Functionality:** Allows users to search for news articles by keyword.
- **Article Display:** Shows article title, image (with fallback), description, and a link to the full article.
- **Loading & Error States:** Provides user feedback during data fetching and if errors occur.
- **Responsive Design:** Basic responsive layout using Tailwind CSS.
- **(Optional Bonus)** Category Filters: Allows filtering news by category (e.g., Technology, Sports).

## Tech Stack

- **Frontend:** React.js (Vite, Functional Components, Hooks - `useState`, `useEffect`)
- **Styling:** Tailwind CSS (using Play CDN)
  - _Note: Used Play CDN due to local build environment issues._ _(Remove this note if you used the build setup)_
- **API:** [NewsAPI.org](https://newsapi.org/)

## Getting Started Locally

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_GITHUB_REPO_URL]
    cd [YOUR_PROJECT_FOLDER_NAME]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Get API Key:**
    - Sign up for a free API key at [NewsAPI.org](https://newsapi.org/).
    - Open `src/App.jsx` and replace the placeholder `API_KEY` constant with your actual key.
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The app should now be running on `http://localhost:5173` (or another port).

## Live Demo

View the deployed application here: **[YOUR_NETLIFY/VERCEL_DEPLOYMENT_URL]**

## GitHub Repository

Find the source code here: **[YOUR_GITHUB_REPO_URL]**

---

_This project was created by Sri Vishnu for the AppDost Web Developer Internship assignment._
