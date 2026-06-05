# Shabnam Ahmadi - Developer Portfolio

## Live URL
https://6a22afa582b0fd93fb90f64a--heartfelt-rugelach-78724c.netlify.app/
## About This Portfolio
My personal developer portfolio built with React for Week 7 assignment. Features include contact form with validation, feedback wall, live preview, theme toggle, and more.

## Features
- Contact Form with validation & auto-save
- Feedback Wall with 5-star ratings
- Live Preview of form input
- Theme Toggle (Light Pink / Dark mode)
- Animated skill progress bars
- Interactive project cards

## Technologies Used
- React (Vite)
- CSS3
- localStorage
- useState & useEffect

## My Projects
1. Freelance-flow - Invoice & Client Manager
2. Rush Theatre - Movie theater website
3. Reading Championship - Reading tracker

## Week 7 Reflection
### What I Learned
This week I learned how to build a professional React application with proper routing using React Router. I now understand how to create dynamic routes like /projects/:id and how to use NavLink for active link highlighting. I also learned about Context API to solve prop drilling - it's much cleaner to share global state (theme, favorites, user info) across multiple components instead of passing props through every level.

### Biggest Challenge
The biggest challenge was understanding how Context API works and organizing my code into separate folders (components, pages, contexts, data). Getting all the imports correct was tricky at first - I had to make sure file names matched exactly. I also struggled with deploying to Netlify at first, but once I figured out the build command and publish directory, it worked perfectly.

### Favorite Improvement
My favorite improvement is the project detail page with dynamic routing! Clicking on a project and seeing a whole new page with detailed information makes my portfolio feel like a real professional application. I also love the favorite/star feature using Context API - it's satisfying to ❤️ projects and see them stay saved even after refreshing the page!

### Features Implemented
- ✅ React Router with 6 pages (Home, About, Projects, Contact, Project Details, 404)
- ✅ Dynamic routes for each project (/projects/:id)
- ✅ Context API for Theme, Favorites, and User Info
- ✅ Reusable components (ProjectCard, TechBadge, Navbar)
- ✅ Search and filter functionality
- ✅ Favorite/star projects with localStorage persistence
- ✅ Status badges (Featured/Completed)
- ✅ Progress bars with ARIA roles for accessibility
- ✅ Responsive design (mobile + desktop)
- ✅ Theme persistence (light/dark mode saves to localStorage)
**Key lessons learned:** Using useEffect for localStorage persistence and debounced validation, implementing controlled components with useState, and creating a polling system with setInterval.

**Biggest challenge:** Setting up debounced email validation with setTimeout cleanup.

**Favorite feature:** The clickable avatar that cycles through different reactions!
