# Search Application

## Overview

This project is a React-based search application that allows users to search through a list of items and view detailed search results. The application includes a search bar with suggestions, paginated search results, and dynamic search result timing. It also features a clickable banner that navigates to the homepage.

## Features

-   **Search Bar with Suggestions:** Users can type in the search bar to get suggestions based on the current query. Suggestions are dynamically updated as the user types.
-   **Paginated Search Results:** Results are paginated, with 10 items displayed per page. Users can navigate between pages using "Previous" and "Next" buttons.
-   **Dynamic Search Timing:** The application calculates and displays the time taken to perform the search.
-   **Clickable Banner:** The banner image at the top of the page is a clickable link that redirects users to the homepage.
-   **Remembered Suggestions:** Frequently searched terms are remembered and prioritized in the suggestions list.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd <project-directory>
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Start the Development Server:**

    ```bash
    npm start
    ```

5. **Open Your Browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

1. **Search for Items:** Type a search query into the search bar. As you type, suggestions will appear based on the query.

2. **Select a Suggestion:** Click on a suggestion to navigate to the search results page for that term.

3. **Navigate Results:** Use the "Previous" and "Next" buttons to navigate through paginated search results.

4. **Clear Search:** Click the "Clear" button (represented by an 'X' icon) to reset the search input.

5. **Homepage Navigation:** Click on the banner image to return to the homepage.

## Testing with the Word "react"

To see the most comprehensive results and test the functionality thoroughly, use the word "react" in the search bar. This query returns a higher number of results, allowing you to experience the full range of features including suggestions, pagination, and search timing.

## Project Structure

-   **`/src/components/SearchBar.js`** - Contains the Search Bar component with auto-suggestions and search handling logic.
-   **`/src/pages/SearchResults.js`** - Displays search results, including pagination and search timing.
-   **`/src/data/fake-database.js`** - A mock database containing items to be searched.
-   **`/src/App.js`** - Main application entry point and routing configuration.

## Technologies Used

-   **React:** JavaScript library for building user interfaces.
-   **React Router:** For handling navigation and routing.
-   **Font Awesome:** For icons in the UI.
-   **Tailwind CSS:** For styling the components.
