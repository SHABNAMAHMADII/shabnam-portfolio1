export const projects = [
  {
    id: 1,
    name: 'Freelance-flow',
    description: 'Invoice & Client Manager with API integration, localStorage persistence, and real-time dashboard analytics.',
    fullDescription: 'A complete freelance management system that allows users to manage clients, create invoices, track payments, and view revenue analytics. Integrated with Random User API for sample data and ZenQuotes API for motivational quotes.',
    tech: 'JavaScript',
    techStack: ['JavaScript', 'HTML/CSS', 'REST APIs', 'localStorage'],
    status: 'Completed',
    progress: 100,
    featured: false,
    image: 'FF',
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    liveDemo: 'https://shabnamahmadii.github.io/Freelance-flow/',
    github: 'https://github.com/SHABNAMAHMADII/Freelance-flow'
  },
  {
    id: 2,
    name: 'Rush Theatre',
    description: 'Responsive movie theater website with showtimes, booking system, newsletter subscription, and interactive alerts.',
    fullDescription: 'A complete movie theater website featuring now showing movies, showtimes display, newsletter subscription with validation, and interactive booking alerts. Fully responsive design works on desktop, tablet, and mobile.',
    tech: 'HTML/CSS',
    techStack: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
    status: 'Completed',
    progress: 100,
    featured: false,
    image: 'RT',
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    liveDemo: 'https://shabnamahmadii.github.io/movie-theatre-page/',
    github: 'https://github.com/SHABNAMAHMADII/movie-theatre-page'
  },
  {
    id: 3,
    name: 'Reading Championship',
    description: 'Reading progress tracker that calculates completion rates and determines champions with a dynamic scoring system.',
    fullDescription: 'A JavaScript console application that tracks reading progress across multiple competitors. Uses array methods (reduce, map) to calculate averages and determine winners based on pages read and completion rates.',
    tech: 'JavaScript',
    techStack: ['JavaScript', 'Console Application', 'Array Methods'],
    status: 'Featured',
    progress: 85,
    featured: true,
    image: '📚',
    bgGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    liveDemo: null,
    github: 'https://github.com/SHABNAMAHMADII/reading-championship'
  }
];

// Get unique tech stacks for filtering
export const getTechOptions = () => {
  const techs = projects.map(project => project.tech);
  return ['All', ...new Set(techs)];
};

// Get project by id
export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};