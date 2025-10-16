News Reader Application: Frontend Capstone Project

Project Description
This project is a modern, responsive News Reader application built with React. The goal of this application is to simulate a real-world development scenario, focusing on asynchronous data fetching, state management, and building a flexible, user-friendly interface. It allows users to browse the latest news articles fetched from a public news API, offering detailed views and dynamic search/filtering capabilities.

This project demonstrates proficiency in building controlled components, managing global state for data caching, and applying modern CSS utility frameworks for responsive design.

✨ Key Features

Functional Requirements

Dynamic Article Fetching: Uses the TheNewsAPI to retrieve and display the latest news articles in real-time.

Comprehensive Article List: Displays key information for each article, including Title, Image Thumbnail, Summary, and Published Date.

Article Details View: Users can click any news card to access a dedicated details page showing the Full Content, Author, Source, and a link to the Original Article.

Search & Filtering:

Search Bar: Filters the displayed articles instantly by matching keywords in the title or summary.

Category Filters: Allows users to narrow down the feed by common categories (e.g., Technology, Business, Sports).

Robust Error Handling: Implements user-friendly error messages for network failures, invalid API responses, and zero search results.

Responsive UI: Fully adapts the layout and component visibility for optimal viewing on Desktop, Tablet, and Mobile devices.

🛠️ Technical Stack

Category, Technology and Purpose

Frontend Framework(react with hooks) - To build a single-page application and manage component lifecyle.

Styling(Tailwind css) - To use a utility first css framework for rapid and responsive styling

Data Fetching(Fetch API) - To handle asynchronous requests to the external news API

State Management(useState and useQuery) -Core state management for data, loading, errors and user unput

Build Tool(Vite) - For fast project scaffolding and bundling

⚙️ Core Technical Implementation Details

API Integration

API calls are encapsulated in a dedicated utility function to keep components clean.

Component Architecture

NewsCard.jsx: A reusable component designed to display article summaries in the list view.

ArticleDetails.jsx: Handles the full rendering of the selected article, including links to the source.

SearchBar.jsx: A controlled component managing user input for filtering.

Performance & State

Client-side Filtering: Articles are filtered using JavaScript array methods (.filter()) on the client side for speed, ensuring a responsive search experience after the initial fetch.

Conditional Rendering: Loading states (isLoading) and error states (isError) are handled explicitly using conditional returns to prevent crashes and inform the user.
