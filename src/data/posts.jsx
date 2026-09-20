const posts = [
  {
    id: 1,
    slug: "react-hooks-deep-dive",
    title: "React Hooks: A Practical Deep Dive",
    description:
      "Understand how useState, useEffect, useMemo and custom hooks work together in modern React applications.",
    category: "React",
    tags: ["React", "Hooks", "JavaScript"],
    author: "Merin John",
    date: "September 18, 2026",
    readingTime: "8 min read",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",

    content: [
      {
        type: "paragraph",
        text: "React Hooks changed the way developers build React applications by allowing functional components to use state and other React features without writing class components.",
      },
      {
        type: "heading",
        text: "What are React Hooks?",
      },
      {
        type: "paragraph",
        text: "Hooks are special functions that allow functional components to use React features such as state, effects, references and performance optimizations.",
      },
      {
        type: "heading",
        text: "The useState Hook",
      },
      {
        type: "paragraph",
        text: "The useState Hook allows a component to store and update information that can change over time. When the state changes, React re-renders the component with the updated value.",
      },
      {
        type: "code",
        language: "jsx",
        code: `import { useState } from "react";
          
          function Counter() {
            const [count, setCount] = useState(0);
          
            return (
              <button onClick={() => setCount(count + 1)}>
                Count: {count}
              </button>
            );
          }`,
      },
      {
        type: "heading",
        text: "The useEffect Hook",
      },
      {
        type: "paragraph",
        text: "useEffect is used when a component needs to perform a side effect, such as fetching data, setting up a subscription or working with browser APIs.",
      },
      {
        type: "heading",
        text: "Performance Hooks",
      },
      {
        type: "paragraph",
        text: "Hooks such as useMemo and useCallback can help avoid unnecessary calculations or function recreations when used appropriately.",
      },
      {
        type: "heading",
        text: "Custom Hooks",
      },
      {
        type: "paragraph",
        text: "Custom Hooks allow developers to extract reusable stateful logic into their own functions. A custom Hook normally starts with the word use.",
      },
      {
        type: "heading",
        text: "Final Thoughts",
      },
      {
        type: "paragraph",
        text: "Understanding Hooks is essential for modern React development. Rather than memorizing individual Hooks, focus on understanding what problem each Hook solves and when it should be used.",
      },
    ],
  },

  {
    id: 2,
    slug: "javascript-closures",
    title: "JavaScript Closures Explained Simply",
    description:
      "A practical explanation of closures, lexical scope and why they matter when writing modern JavaScript.",
    category: "JavaScript",
    tags: ["JavaScript", "Closures", "Programming"],
    author: "Merin John",
    date: "September 15, 2026",
    readingTime: "6 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 3,
    slug: "tailwind-css-guide",
    title: "Building Better Interfaces with Tailwind CSS",
    description:
      "Learn how utility-first CSS can help you build consistent and responsive interfaces faster.",
    category: "CSS",
    tags: ["Tailwind", "CSS", "Frontend"],
    author: "Merin John",
    date: "September 12, 2026",
    readingTime: "7 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 4,
    slug: "frontend-project-structure",
    title: "How to Structure a Modern Frontend Project",
    description:
      "A practical look at organizing components, pages, data and application logic in a scalable React project.",
    category: "Frontend",
    tags: ["React", "Architecture", "Frontend"],
    author: "Merin John",
    date: "September 9, 2026",
    readingTime: "9 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 5,
    slug: "developer-career-roadmap",
    title: "Building Your First Frontend Developer Portfolio",
    description:
      "A practical roadmap for choosing projects, presenting your skills and building a portfolio that demonstrates real ability.",
    category: "Career",
    tags: ["Career", "Portfolio", "Frontend"],
    author: "Merin John",
    date: "September 5, 2026",
    readingTime: "5 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 6,
    slug: "modern-web-development",
    title: "What Makes a Modern Web Application?",
    description:
      "Explore the core ideas behind modern frontend applications, from component architecture to responsive UI.",
    category: "Web Development",
    tags: ["Web Development", "React", "Frontend"],
    author: "Merin John",
    date: "September 2, 2026",
    readingTime: "6 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

export default posts;
