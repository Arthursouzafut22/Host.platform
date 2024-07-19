

import React, { createContext, useState, useEffect } from 'react';

// Crie o contexto
const AuthContext = createContext();

// Crie o provedor do contexto
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    // Carregar os dados dos usuários do arquivo JSON
    fetch('user.json')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const login = (username, email, password) => {
    const user = users.find(user => 
      user.username === username && 
      user.email === email && 
      user.password === password
    );

    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const register = (username, email, password) => {
    const newUser = { 
      id: users.length + 1, 
      username, 
      email, 
      password 
    };
    setUsers([...users, newUser]);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };







