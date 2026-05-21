// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

// Usuario inicial de pruebas (opcional)
const DEMO_USERS = [
  {
    id: '1',
    name: 'Rowling Garcia',
    email: 'rowling@universidad.edu',
    password: '123456',
    role: 'estudiante',
    career: 'Desarrollo de Sistemas de Informacion'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('academic_user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función de registro
  const register = async (userData) => {
    setError(null);
    try {
      // 1. Validar que el email no exista ya
      const users = JSON.parse(localStorage.getItem('academic_users') || '[]');
      const existingUser = users.find(u => u.email === userData.email);
      if (existingUser) {
        throw new Error('Ya existe una cuenta con este correo electrónico.');
      }

      // 2. Crear nuevo usuario (sin guardar contraseña en texto plano en producción)
      const newUser = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        name: userData.name,
        email: userData.email,
        password: userData.password, // ⚠️ En producción hashear con bcrypt
        role: userData.role || 'estudiante',
        career: userData.career || '',
        avatar: userData.avatar || null
      };

      // 3. Guardar en "base de datos" simulada
      users.push(newUser);
      localStorage.setItem('academic_users', JSON.stringify(users));

      // 4. Opcional: iniciar sesión automáticamente después de registrarse
      // Para este ejemplo, registramos y luego redirigimos al login
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Función de login
  const login = async (email, password) => {
    setError(null);
    try {
      // Obtener usuarios de localStorage (o API)
      const users = JSON.parse(localStorage.getItem('academic_users') || '[]');
      // Si no hay usuarios, cargar los demo (para facilitar pruebas)
      if (users.length === 0) {
        localStorage.setItem('academic_users', JSON.stringify(DEMO_USERS));
        users.push(...DEMO_USERS);
      }

      const foundUser = users.find(u => u.email === email && u.password === password);
      if (!foundUser) {
        throw new Error('Credenciales incorrectas. Verifica tu email y contraseña.');
      }

      // No guardamos la contraseña en el estado del usuario
      // eslint-disable-next-line no-unused-vars
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('academic_user', JSON.stringify(userWithoutPassword));
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('academic_user');
    navigate('/');
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    setError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};