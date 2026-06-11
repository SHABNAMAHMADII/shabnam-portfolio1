import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoriteProjects');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteProjects', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (projectId) => {
    if (!favorites.includes(projectId)) {
      setFavorites([...favorites, projectId]);
    }
  };

  const removeFavorite = (projectId) => {
    setFavorites(favorites.filter(id => id !== projectId));
  };

  const isFavorite = (projectId) => {
    return favorites.includes(projectId);
  };

  const toggleFavorite = (projectId) => {
    if (isFavorite(projectId)) {
      removeFavorite(projectId);
    } else {
      addFavorite(projectId);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};