// src/components/Register.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    career: ''
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error del campo al escribir
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El correo es obligatorio';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Correo inválido';
    if (!formData.password) newErrors.password = 'La contraseña es obligatoria';
    else if (formData.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setServerError('');
    const result = await register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      career: formData.career
    });

    if (result.success) {
      // Registro exitoso, redirigir al login
      navigate('/');
    } else {
      setServerError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] relative overflow-hidden font-sans p-4">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] w-full max-w-lg z-10 text-white">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-2">
          Crear cuenta
        </h2>
        <p className="text-center text-gray-300 text-sm mb-6">Completa tus datos para registrarte</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Nombre completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Rowling Garcia"
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all ${errors.name ? 'border-red-500' : 'border-white/10'}`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="rowling@universidad.edu"
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all ${errors.email ? 'border-red-500' : 'border-white/10'}`}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Carrera (opcional)</label>
            <input
              type="text"
              name="career"
              value={formData.career}
              onChange={handleChange}
              placeholder="Desarrollo de Sistemas de Información"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all ${errors.password ? 'border-red-500' : 'border-white/10'}`}
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition-all ${errors.confirmPassword ? 'border-red-500' : 'border-white/10'}`}
            />
            {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          {serverError && (
            <div className="bg-red-500/20 border border-red-400/50 text-red-200 px-4 py-2 rounded-xl text-sm text-center">
              {serverError}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-purple-500/30 transform transition-all duration-300 hover:scale-[1.02]"
          >
            Registrarse
          </button>

          <p className="text-center text-gray-400 text-sm">
            ¿Ya tienes cuenta?{' '}
            <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;