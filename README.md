# DevSpace — Developer Blog Platform

A modern, responsive developer blog platform built with React.js, Vite and Tailwind CSS.

DevSpace allows users to explore developer articles, search and filter content by category, read detailed articles, create posts, and bookmark articles for later reading.

##  Live Demo

https://merin-devspace.vercel.app/

---

##  Features

- Modern dark developer-focused UI
- Responsive design for desktop, tablet and mobile
- Homepage with hero section and featured article
- Latest articles section
- Popular categories with article counts
- Blog article listing
- Search articles by title, description, category and tags
- Filter articles by category
- Dynamic article detail pages
- Related articles
- Bookmark articles
- Bookmarked articles page
- Create new blog posts
- My Posts section
- LocalStorage-based data persistence
- Dynamic routing with React Router
- Custom favicon and branded DevSpace identity

---

##  Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- React Router DOM
- Tailwind CSS
- Vite

## Data & Storage
- Browser LocalStorage

## Development Tools
- Git
- GitHub
- VS Code
- Vite

---

##  Project Structure

```text
src/
├── components/
│   ├── BlogCard.jsx
│   ├── CategoryBadge.jsx
│   ├── Navbar.jsx
│   └── SearchBar.jsx
│
├── data/
│   └── posts.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Blog.jsx
│   ├── BlogDetails.jsx
│   ├── CreatePost.jsx
│   ├── MyPosts.jsx
│   └── Bookmarks.jsx
│
├── utils/
│   └── storage.js
│
├── App.jsx
├── main.jsx
└── index.css
```
--- 

## React Concepts Demonstrated

This project demonstrates practical React development concepts including:

Functional Components
Props
State Management with useState
Side Effects with useEffect
Memoization with useMemo
Dynamic Routing
URL Search Parameters
Conditional Rendering
List Rendering
Component Reusability
Form Handling
LocalStorage
Data Filtering and Searching
Responsive UI development

---

## Data Persistence

DevSpace currently uses browser LocalStorage instead of a backend database.

Blog posts and bookmarks are stored locally in the browser, making the project suitable for demonstrating frontend development and React application architecture without requiring a backend server.

---

## Purpose

DevSpace was developed as a portfolio project to demonstrate practical frontend development skills through a complete React-based application.

The project focuses on component-based architecture, client-side routing, reusable UI components, state management, local data persistence and responsive interface design.

---

## Author

Merin John

Frontend Developer | React.js Developer

GitHub: https://www.github.com/Merinjohnv/
LinkedIn: https://www.linkedin.com/in/merinjohnv/
