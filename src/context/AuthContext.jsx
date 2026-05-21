// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const DEFAULT_STATS = {
  promedio: "20",
  promedioSubtitle: "↑ 18 desde el mes pasado",
  cursosActivos: "6",
  cursosSubtitle: "2 tareas pendientes",
  creditos: "124",
  creditosSubtitle: "De 160 requeridos"
};

const DEMO_USERS = [
  {
    id: '1',
    name: 'Rowling Garcia',
    email: 'rowling@universidad.edu',
    password: '123456',
    role: 'estudiante',
    career: 'Desarrollo de Sistemas de Informacion',
    stats: DEFAULT_STATS
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Cargar sesión guardada al iniciar la app
  useEffect(() => {
    const storedUser = localStorage.getItem('academic_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

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

      // 2. Crear nuevo usuario
      const newUser = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role || 'Estudiante',
        career: userData.career || 'Desarrollo de Sistemas de Información',
        avatar: userData.avatar || null,
        stats: DEFAULT_STATS
      };

      // 3. Guardar en "base de datos" simulada
      users.push(newUser);
      localStorage.setItem('academic_users', JSON.stringify(users));

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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
