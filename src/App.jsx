<<<<<<< HEAD
// DashboardAcademico.jsx

import { useState } from "react";
import {
  UserPlus,
  GraduationCap,
  BookOpen,
  X,
} from "lucide-react";

import "./app.css";

export default function DashboardAcademico() {
  const [modal, setModal] = useState(null);

  const cards = [
    {
      title: "Nuevos\nEstudiantes",
      icon: UserPlus,
      gradient: "gradient-purple",
      modal: "nuevo",
    },

    {
      title: "Estudiantes",
      icon: GraduationCap,
      gradient: "gradient-blue",
      modal: "estudiante",
    },

    {
      title: "Reingresantes",
      icon: BookOpen,
      gradient: "gradient-green",
      modal: "reingresante",
    },
  ];
=======
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
>>>>>>> 8cd1d9ec10d92cc680d4ef40203d954bf02ce7df

  return (
<<<<<<< HEAD
    <div className="dashboard">

      {/* HERO */}
      <div className="hero">

        <div className="hero-icon">
          <BookOpen size={40} />
        </div>

        <h1>Portal Académico</h1>

        <p>
          Selecciona la opción que deseas gestionar
        </p>

      </div>

      {/* CARDS */}
      <div className="cards-container">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div className="card" key={card.title}>

              <div className={`card-icon ${card.gradient}`}>
                <Icon size={38} />
              </div>

              <h2 className="card-title">
                {card.title}
              </h2>

              <button
                className={`card-button ${card.gradient}`}
                onClick={() => setModal(card.modal)}
              >
                Registrar
              </button>

            </div>
          );
        })}

      </div>

      {/* MODALES */}
      {modal && (
        <Modal onClose={() => setModal(null)}>

          {modal === "nuevo" && (
            <NuevoEstudiante />
          )}

          {modal === "estudiante" && (
            <Estudiante />
          )}

          {modal === "reingresante" && (
            <Reingresante />
          )}

        </Modal>
      )}
    </div>
  );
}

/* ====================================================== */
/* MODAL */
/* ====================================================== */

function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-top">

          <h2>Registro Académico</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>

        <div className="modal-content">
          {children}
        </div>

      </div>

    </div>
  );
}

/* ====================================================== */
/* FORMULARIOS */
/* ====================================================== */

function NuevoEstudiante() {
  return (
    <form className="form-grid">

      <Input label="Nombres" />
      <Input label="Apellidos" />
      <Input label="DNI" />
      <Input label="Correo" />
      <Input label="Carrera" />
      <Input label="Teléfono" />

      <button className="submit-btn">
        Registrar Nuevo
      </button>

    </form>
  );
}

function Estudiante() {
  return (
    <form className="form-grid">

      <Input label="Código Estudiantil" />
      <Input label="Facultad" />
      <Input label="Semestre" />
      <Input label="Promedio" />
      <Input label="Estado" />
      <Input label="Correo Institucional" />

      <button className="submit-btn">
        Guardar Datos
      </button>

    </form>
  );
}

function Reingresante() {
  return (
    <form className="form-grid">

      <Input label="Código" />
      <Input label="Periodo de Reingreso" />
      <Input label="Carrera" />
      <Input label="Motivo" />
      <Input label="Correo" />
      <Input label="Teléfono" />

      <button className="submit-btn">
        Registrar Reingreso
      </button>

    </form>
  );
}

/* ====================================================== */
/* INPUT */
/* ====================================================== */

function Input({ label }) {
  return (
    <div className="input-group">

      <label>{label}</label>

      <input type="text" />

    </div>
  );
}
=======
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
>>>>>>> 8cd1d9ec10d92cc680d4ef40203d954bf02ce7df
