import { useMemo, useState } from "react";

const MODULOS = {
  arquitectura: "Arquitectura de computadoras y desarrollo de software",
  disenoTI: "Diseño y administración de los sistemas de información y TI",
  webMoviles: "Implementación de aplicaciones web y móviles",
};

const unidadesBase = [
  // id, ciclo, módulo, unidad didáctica, horas, créditos
  [1, 1, MODULOS.arquitectura, "Lenguaje de Programación", 5, 3],
  [2, 1, MODULOS.arquitectura, "Diagnóstico y Mantenimiento Lógico de PC", 6, 4],
  [3, 1, MODULOS.arquitectura, "Fundamentos de Programación", 5, 3],
  [4, 1, MODULOS.arquitectura, "Planificación y Configuración de Redes", 5, 3],
  [5, 1, MODULOS.arquitectura, "Fundamentos de Inteligencia Artificial", 3, 2],
  [6, 1, MODULOS.arquitectura, "Comunicación Oral", 3, 2],
  [7, 1, MODULOS.arquitectura, "Ofimática", 3, 2],
  [8, 1, MODULOS.arquitectura, "Experiencias Formativas en Situación Real de Trabajo", 4, 4],

  [9, 2, MODULOS.arquitectura, "Análisis y Diseño de Sistemas", 3, 2],
  [10, 2, MODULOS.arquitectura, "Herramientas de Programación Distribuida", 6, 4],
  [11, 2, MODULOS.arquitectura, "Herramientas de Programación Concurrente", 6, 4],
  [12, 2, MODULOS.arquitectura, "Administración de Servidores", 5, 3],
  [13, 2, MODULOS.arquitectura, "Lógica de Programación", 4, 2],
  [14, 2, MODULOS.arquitectura, "Interpretación y Producción de Textos", 3, 2],
  [15, 2, MODULOS.arquitectura, "Aplicaciones en Internet", 3, 2],
  [16, 2, MODULOS.arquitectura, "Experiencias Formativas en Situación Real de Trabajo", 4, 4],

  [17, 3, MODULOS.disenoTI, "Estructura de Base de Datos", 3, 2],
  [18, 3, MODULOS.disenoTI, "Programación Distribuida", 6, 4],
  [19, 3, MODULOS.disenoTI, "Programación Concurrente", 6, 4],
  [20, 3, MODULOS.disenoTI, "Programación Orientada a Objeto", 6, 4],
  [21, 3, MODULOS.disenoTI, "Modelamiento de Software", 3, 2],
  [22, 3, MODULOS.disenoTI, "Inglés para la Comunicación Oral", 3, 2],
  [23, 3, MODULOS.disenoTI, "Comportamiento Ético", 3, 2],
  [24, 3, MODULOS.disenoTI, "Experiencias Formativas en Situación Real de Trabajo", 4, 4],

  [25, 4, MODULOS.disenoTI, "Implementación de Estructuras de Base de Datos", 6, 4],
  [26, 4, MODULOS.disenoTI, "Desarrollo de Software Colaborativo", 6, 4],
  [27, 4, MODULOS.disenoTI, "Seguridad Informática", 6, 4],
  [28, 4, MODULOS.disenoTI, "Diseño de Soluciones Gráficas", 6, 4],
  [29, 4, MODULOS.disenoTI, "Comprensión y Redacción en Inglés", 3, 2],
  [30, 4, MODULOS.disenoTI, "Estrategias para la Solución de Problemas", 3, 2],
  [31, 4, MODULOS.disenoTI, "Experiencias Formativas en Situación Real de Trabajo", 4, 4],

  [32, 5, MODULOS.webMoviles, "Gestión y Administración Web", 5, 3],
  [33, 5, MODULOS.webMoviles, "Animación Gráfica", 5, 3],
  [34, 5, MODULOS.webMoviles, "Diseño Web", 7, 4],
  [35, 5, MODULOS.webMoviles, "Desarrollo de Aplicaciones Móviles", 7, 4],
  [36, 5, MODULOS.webMoviles, "Fundamentos de Innovación", 3, 2],
  [37, 5, MODULOS.webMoviles, "Oportunidades de Negocio", 3, 2],
  [38, 5, MODULOS.webMoviles, "Experiencias Formativas en Situación Real de Trabajo", 4, 4],

  [39, 6, MODULOS.webMoviles, "Programación Web", 8, 5],
  [40, 6, MODULOS.webMoviles, "Inteligencia Artificial y Soluciones Tecnológicas", 7, 4],
  [41, 6, MODULOS.webMoviles, "Inteligencia de Negocios", 4, 3],
  [42, 6, MODULOS.webMoviles, "Producción Audiovisual", 5, 3],
  [43, 6, MODULOS.webMoviles, "Innovación Tecnológica", 3, 2],
  [44, 6, MODULOS.webMoviles, "Plan de Negocios", 3, 2],
  [45, 6, MODULOS.webMoviles, "Experiencias Formativas en Situación Real de Trabajo", 4, 4],
];

const datosMallaInicial = unidadesBase.map(
  ([id, ciclo, modulo, unidad, horas, creditos]) => ({
    id,
    ciclo,
    modulo,
    unidad,
    horas,
    creditos,
    estado: "Activo",
  })
);

const ciclos = [1, 2, 3, 4, 5, 6];
const estadosUnidad = ["Activo", "Suspendido"];

const nombresCiclo = {
  1: "I Ciclo",
  2: "II Ciclo",
  3: "III Ciclo",
  4: "IV Ciclo",
  5: "V Ciclo",
  6: "VI Ciclo",
};

const coloresCiclo = {
  1: {
    borde: "border-green-300 bg-green-50",
    header: "bg-gradient-to-r from-green-600 to-green-700",
  },
  2: {
    borde: "border-blue-300 bg-blue-50",
    header: "bg-gradient-to-r from-blue-600 to-blue-700",
  },
  3: {
    borde: "border-yellow-300 bg-yellow-50",
    header: "bg-gradient-to-r from-yellow-600 to-yellow-700",
  },
  4: {
    borde: "border-purple-300 bg-purple-50",
    header: "bg-gradient-to-r from-purple-600 to-purple-700",
  },
  5: {
    borde: "border-red-300 bg-red-50",
    header: "bg-gradient-to-r from-red-600 to-red-700",
  },
  6: {
    borde: "border-indigo-300 bg-indigo-50",
    header: "bg-gradient-to-r from-indigo-600 to-indigo-700",
  },
};

const nuevaUnidadVacia = {
  id: null,
  ciclo: 1,
  modulo: MODULOS.arquitectura,
  unidad: "",
  horas: 1,
  creditos: 1,
  estado: "Activo",
};

const getClaseEstado = (estado) => {
  return estado === "Activo"
    ? "bg-green-100 text-green-700 border-green-300"
    : "bg-red-100 text-red-700 border-red-300";
};

const agruparPorModulo = (items) => {
  const mapa = new Map();

  items.forEach((item) => {
    if (!mapa.has(item.modulo)) {
      mapa.set(item.modulo, []);
    }
    mapa.get(item.modulo).push(item);
  });

  return Array.from(mapa.entries()).map(([modulo, unidades]) => ({
    modulo,
    unidades,
  }));
};

const Cursos = () => {
  const [malla, setMalla] = useState(datosMallaInicial);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");
  const [cicloSeleccionado, setCicloSeleccionado] = useState("todos");
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("todos");
  const [buscarTexto, setBuscarTexto] = useState("");
  const [modoVista, setModoVista] = useState("tabla");
  const [unidadActual, setUnidadActual] = useState(nuevaUnidadVacia);

  const mostrarMensaje = (tipo, texto) => {
    if (tipo === "error") {
      setMensajeError(texto);
      setMensajeExito("");
      setTimeout(() => setMensajeError(""), 3000);
      return;
    }

    setMensajeExito(texto);
    setMensajeError("");
    setTimeout(() => setMensajeExito(""), 3000);
  };

  const mallaFiltrada = useMemo(() => {
    const texto = buscarTexto.trim().toLowerCase();

    return malla.filter((item) => {
      const coincideCiclo =
        cicloSeleccionado === "todos" || item.ciclo === Number(cicloSeleccionado);

      const coincideEstado =
        estadoSeleccionado === "todos" || item.estado === estadoSeleccionado;

      const coincideTexto =
        !texto ||
        item.unidad.toLowerCase().includes(texto) ||
        item.modulo.toLowerCase().includes(texto) ||
        item.estado.toLowerCase().includes(texto);

      return coincideCiclo && coincideEstado && coincideTexto;
    });
  }, [malla, cicloSeleccionado, estadoSeleccionado, buscarTexto]);

  const estadisticas = useMemo(() => {
    const unidadesActivas = malla.filter((item) => item.estado === "Activo");
    const unidadesSuspendidas = malla.filter((item) => item.estado === "Suspendido");

    return {
      totalUnidades: malla.length,
      totalActivas: unidadesActivas.length,
      totalSuspendidas: unidadesSuspendidas.length,
      totalHoras: malla.reduce((total, item) => total + Number(item.horas || 0), 0),
      totalCreditos: malla.reduce(
        (total, item) => total + Number(item.creditos || 0),
        0
      ),
      porCiclo: ciclos.map((ciclo) => {
        const unidadesDelCiclo = malla.filter((item) => item.ciclo === ciclo);

        return {
          ciclo,
          cantidad: unidadesDelCiclo.length,
          activas: unidadesDelCiclo.filter((item) => item.estado === "Activo").length,
          suspendidas: unidadesDelCiclo.filter((item) => item.estado === "Suspendido").length,
          horas: unidadesDelCiclo.reduce(
            (total, item) => total + Number(item.horas || 0),
            0
          ),
          creditos: unidadesDelCiclo.reduce(
            (total, item) => total + Number(item.creditos || 0),
            0
          ),
        };
      }),
    };
  }, [malla]);

  const abrirModalAgregar = (ciclo = 1) => {
    const moduloPorCiclo =
      malla.find((item) => item.ciclo === ciclo)?.modulo || nuevaUnidadVacia.modulo;

    setUnidadActual({
      ...nuevaUnidadVacia,
      ciclo,
      modulo: moduloPorCiclo,
      estado: "Activo",
    });
    setModalEditar(false);
    setMensajeError("");
    setMostrarModal(true);
  };

  const abrirModalEditar = (unidad) => {
    setUnidadActual({ ...unidad });
    setModalEditar(true);
    setMensajeError("");
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setMensajeError("");
  };

  const guardarUnidad = () => {
    const unidadLimpia = unidadActual.unidad.trim();
    const moduloLimpio = unidadActual.modulo.trim();
    const horasNumero = Number(unidadActual.horas);
    const creditosNumero = Number(unidadActual.creditos);

    if (!unidadLimpia || !moduloLimpio) {
      mostrarMensaje("error", "❌ Complete el módulo y la unidad didáctica.");
      return;
    }

    if (Number.isNaN(horasNumero) || horasNumero <= 0) {
      mostrarMensaje("error", "❌ Las horas deben ser un número mayor a 0.");
      return;
    }

    if (Number.isNaN(creditosNumero) || creditosNumero <= 0) {
      mostrarMensaje("error", "❌ Los créditos deben ser un número mayor a 0.");
      return;
    }

    if (!estadosUnidad.includes(unidadActual.estado)) {
      mostrarMensaje("error", "❌ Seleccione un estado válido.");
      return;
    }

    const yaExiste = malla.some(
      (item) =>
        item.ciclo === Number(unidadActual.ciclo) &&
        item.unidad.toLowerCase() === unidadLimpia.toLowerCase() &&
        item.id !== unidadActual.id
    );

    if (yaExiste) {
      mostrarMensaje(
        "error",
        "❌ Esa unidad didáctica ya existe en el ciclo seleccionado."
      );
      return;
    }

    const datosGuardar = {
      ...unidadActual,
      ciclo: Number(unidadActual.ciclo),
      unidad: unidadLimpia,
      modulo: moduloLimpio,
      horas: horasNumero,
      creditos: creditosNumero,
      estado: unidadActual.estado,
    };

    if (modalEditar) {
      setMalla((prev) =>
        prev.map((item) => (item.id === datosGuardar.id ? datosGuardar : item))
      );
      mostrarMensaje("exito", "✅ Unidad didáctica actualizada correctamente.");
    } else {
      setMalla((prev) => [...prev, { ...datosGuardar, id: Date.now() }]);
      mostrarMensaje("exito", "✅ Unidad didáctica agregada correctamente.");
    }

    cerrarModal();
  };

  const cambiarEstadoUnidad = (id) => {
    setMalla((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              estado: item.estado === "Activo" ? "Suspendido" : "Activo",
            }
          : item
      )
    );

    mostrarMensaje("exito", "✅ Estado de la unidad actualizado correctamente.");
  };

  const eliminarUnidad = (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar esta unidad didáctica?");

    if (!confirmar) return;

    setMalla((prev) => prev.filter((item) => item.id !== id));
    mostrarMensaje("exito", "✅ Unidad didáctica eliminada correctamente.");
  };

  const ciclosParaMostrar =
    cicloSeleccionado === "todos" ? ciclos : [Number(cicloSeleccionado)];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
                📘 Módulos Profesionales y Unidades Didácticas
              </h1>
              <p className="mt-2 text-gray-600">
                Programa de Estudios: Desarrollo de Sistemas de Información
              </p>
            </div>

            <button
              onClick={() => setModoVista(modoVista === "tabla" ? "tarjetas" : "tabla")}
              className="rounded-lg bg-gray-800 px-4 py-2 font-semibold text-white transition hover:bg-gray-900"
            >
              {modoVista === "tabla" ? "📋 Vista Tarjetas" : "📊 Vista Tabla"}
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-sm text-blue-600">Total de unidades</p>
              <p className="text-2xl font-bold text-blue-700">
                {estadisticas.totalUnidades}
              </p>
            </div>

            <div className="rounded-lg bg-green-50 p-4">
              <p className="text-sm text-green-600">Activas</p>
              <p className="text-2xl font-bold text-green-700">
                {estadisticas.totalActivas}
              </p>
            </div>

            <div className="rounded-lg bg-red-50 p-4">
              <p className="text-sm text-red-600">Suspendidas</p>
              <p className="text-2xl font-bold text-red-700">
                {estadisticas.totalSuspendidas}
              </p>
            </div>

            <div className="rounded-lg bg-yellow-50 p-4">
              <p className="text-sm text-yellow-700">Total de horas</p>
              <p className="text-2xl font-bold text-yellow-700">
                {estadisticas.totalHoras}
              </p>
            </div>

            <div className="rounded-lg bg-purple-50 p-4">
              <p className="text-sm text-purple-600">Total de créditos</p>
              <p className="text-2xl font-bold text-purple-700">
                {estadisticas.totalCreditos}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="🔍 Buscar por unidad, módulo o estado..."
              value={buscarTexto}
              onChange={(e) => setBuscarTexto(e.target.value)}
              className="min-w-[220px] flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={cicloSeleccionado}
              onChange={(e) => setCicloSeleccionado(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="todos">Todos los ciclos</option>
              {ciclos.map((ciclo) => (
                <option key={ciclo} value={ciclo}>
                  {nombresCiclo[ciclo]}
                </option>
              ))}
            </select>

            <select
              value={estadoSeleccionado}
              onChange={(e) => setEstadoSeleccionado(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="todos">Todos los estados</option>
              {estadosUnidad.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>

          {mensajeExito && (
            <div className="mt-4 rounded-lg border border-green-400 bg-green-100 p-3 text-green-700">
              {mensajeExito}
            </div>
          )}

          {mensajeError && (
            <div className="mt-4 rounded-lg border border-red-400 bg-red-100 p-3 text-red-700">
              {mensajeError}
            </div>
          )}
        </div>

        {modoVista === "tabla" && (
          <div className="space-y-10">
            {ciclosParaMostrar.map((ciclo) => {
              const unidadesDelCiclo = mallaFiltrada.filter(
                (item) => item.ciclo === ciclo
              );

              if (unidadesDelCiclo.length === 0) return null;

              const grupos = agruparPorModulo(unidadesDelCiclo);
              const resumenCiclo = estadisticas.porCiclo.find(
                (item) => item.ciclo === ciclo
              );

              return (
                <section key={ciclo}>
                  <div className={`${coloresCiclo[ciclo].header} rounded-t-xl p-4 shadow-lg`}>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          {nombresCiclo[ciclo]}
                        </h2>
                        <p className="mt-1 text-sm text-white/90">
                          {resumenCiclo?.cantidad || 0} unidades | {resumenCiclo?.activas || 0} activas | {resumenCiclo?.suspendidas || 0} suspendidas | {resumenCiclo?.horas || 0} horas | {resumenCiclo?.creditos || 0} créditos
                        </p>
                      </div>

                      <button
                        onClick={() => abrirModalAgregar(ciclo)}
                        className="rounded-lg bg-white px-4 py-2 font-semibold text-gray-800 transition hover:bg-gray-100"
                      >
                        ➕ Agregar unidad
                      </button>
                    </div>
                  </div>

                  <div className={`overflow-x-auto rounded-b-xl border bg-white shadow-lg ${coloresCiclo[ciclo].borde}`}>
                    <table className="w-full min-w-[850px] border-collapse text-sm">
                      <thead>
                        <tr className={`${coloresCiclo[ciclo].header} text-white`}>
                          <th className="border px-3 py-3 text-left">Módulo</th>
                          <th className="border px-3 py-3 text-left">Unidad Didáctica</th>
                          <th className="border px-3 py-3 text-center">H</th>
                          <th className="border px-3 py-3 text-center">N° Cred.</th>
                          <th className="border px-3 py-3 text-center">Estado</th>
                          <th className="border px-3 py-3 text-center">Acciones</th>
                        </tr>
                      </thead>

                      <tbody>
                        {grupos.map((grupo) =>
                          grupo.unidades.map((item, index) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                              {index === 0 && (
                                <td
                                  rowSpan={grupo.unidades.length}
                                  className="w-56 border bg-gray-100 px-3 py-3 align-middle font-semibold uppercase text-gray-700"
                                >
                                  {grupo.modulo}
                                </td>
                              )}

                              <td className="border px-3 py-3 font-medium text-gray-800">
                                {item.unidad}
                              </td>

                              <td className="border px-3 py-3 text-center font-semibold">
                                {item.horas}
                              </td>

                              <td className="border px-3 py-3 text-center font-semibold">
                                {item.creditos}
                              </td>

                              <td className="border px-3 py-3 text-center">
                                <span
                                  className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${getClaseEstado(item.estado)}`}
                                >
                                  {item.estado === "Activo" ? "✅ Activo" : "⏸ Suspendido"}
                                </span>
                              </td>

                              <td className="border px-3 py-3">
                                <div className="flex flex-wrap justify-center gap-2">
                                  <button
                                    onClick={() => abrirModalEditar(item)}
                                    className="rounded bg-yellow-500 px-3 py-1 text-xs font-semibold text-white transition hover:bg-yellow-600"
                                  >
                                    Editar
                                  </button>

                                  <button
                                    onClick={() => cambiarEstadoUnidad(item.id)}
                                    className={`rounded px-3 py-1 text-xs font-semibold text-white transition ${
                                      item.estado === "Activo"
                                        ? "bg-orange-500 hover:bg-orange-600"
                                        : "bg-green-600 hover:bg-green-700"
                                    }`}
                                  >
                                    {item.estado === "Activo" ? "Suspender" : "Activar"}
                                  </button>

                                  <button
                                    onClick={() => eliminarUnidad(item.id)}
                                    className="rounded bg-red-500 px-3 py-1 text-xs font-semibold text-white transition hover:bg-red-600"
                                  >
                                    Eliminar
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {modoVista === "tarjetas" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mallaFiltrada.map((item) => (
              <article
                key={item.id}
                onClick={() => abrirModalEditar(item)}
                className={`cursor-pointer overflow-hidden rounded-xl border bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl ${coloresCiclo[item.ciclo].borde}`}
              >
                <div className={`${coloresCiclo[item.ciclo].header} p-4`}>
                  <h3 className="font-bold text-white">{item.unidad}</h3>
                  <p className="mt-1 text-sm text-white/90">
                    {nombresCiclo[item.ciclo]}
                  </p>
                </div>

                <div className="space-y-2 p-4 text-gray-700">
                  <p>
                    <span className="font-semibold">Módulo:</span> {item.modulo}
                  </p>
                  <p>
                    <span className="font-semibold">Horas:</span> {item.horas}
                  </p>
                  <p>
                    <span className="font-semibold">Créditos:</span> {item.creditos}
                  </p>
                  <p>
                    <span className="font-semibold">Estado:</span>{" "}
                    <span
                      className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${getClaseEstado(item.estado)}`}
                    >
                      {item.estado === "Activo" ? "✅ Activo" : "⏸ Suspendido"}
                    </span>
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      cambiarEstadoUnidad(item.id);
                    }}
                    className={`mt-3 w-full rounded-lg px-4 py-2 font-semibold text-white transition ${
                      item.estado === "Activo"
                        ? "bg-orange-500 hover:bg-orange-600"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {item.estado === "Activo" ? "Suspender unidad" : "Activar unidad"}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      eliminarUnidad(item.id);
                    }}
                    className="w-full rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600"
                  >
                    Eliminar unidad
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {mallaFiltrada.length === 0 && (
          <div className="rounded-xl bg-white p-8 text-center shadow">
            <p className="text-lg font-semibold text-gray-700">
              No se encontraron unidades didácticas.
            </p>
            <p className="mt-2 text-gray-500">
              Cambia el filtro o agrega una nueva unidad.
            </p>
          </div>
        )}

        <div className="mt-8 rounded-lg bg-blue-50 p-4 shadow">
          <h3 className="mb-3 font-semibold text-blue-800">💡 Recomendación</h3>
          <p className="text-sm text-blue-700">
            Ahora la tabla está más limpia: se quitaron SE, REP, E.E., CON. y Obs. En su lugar se agregó Estado para controlar si una unidad está activa o suspendida.
          </p>
        </div>
      </div>

      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              {modalEditar ? "✏️ Editar unidad didáctica" : "➕ Agregar unidad didáctica"}
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Ciclo *
                </label>
                <select
                  value={unidadActual.ciclo}
                  onChange={(e) =>
                    setUnidadActual({ ...unidadActual, ciclo: Number(e.target.value) })
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {ciclos.map((ciclo) => (
                    <option key={ciclo} value={ciclo}>
                      {nombresCiclo[ciclo]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Estado *
                </label>
                <select
                  value={unidadActual.estado}
                  onChange={(e) =>
                    setUnidadActual({ ...unidadActual, estado: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {estadosUnidad.map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Horas *
                </label>
                <input
                  type="number"
                  min="1"
                  value={unidadActual.horas}
                  onChange={(e) =>
                    setUnidadActual({ ...unidadActual, horas: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Créditos *
                </label>
                <input
                  type="number"
                  min="1"
                  value={unidadActual.creditos}
                  onChange={(e) =>
                    setUnidadActual({ ...unidadActual, creditos: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Módulo *
                </label>
                <input
                  type="text"
                  value={unidadActual.modulo}
                  onChange={(e) =>
                    setUnidadActual({ ...unidadActual, modulo: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: Implementación de aplicaciones web y móviles"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Unidad didáctica *
                </label>
                <input
                  type="text"
                  value={unidadActual.unidad}
                  onChange={(e) =>
                    setUnidadActual({ ...unidadActual, unidad: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: Programación Web"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={guardarUnidad}
                className="flex-1 rounded-lg bg-blue-500 py-2 font-semibold text-white transition hover:bg-blue-600"
              >
                {modalEditar ? "Actualizar" : "Agregar"}
              </button>
              <button
                onClick={cerrarModal}
                className="flex-1 rounded-lg bg-gray-300 py-2 font-semibold text-gray-800 transition hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cursos;
