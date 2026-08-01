// ─────────────────────────────────────────────────────────────────
// PÁGINA A — Script de acceso por rol al sistema PQRS
//
// Credenciales por rol (hardcoded aquí porque página A no tiene BD):
//   Usuario   → cualquier usuario aprobado del sistema
//   Analista  → analista de nómina (prueba)
//   Encargado → encargado general
//
// El token que se manda a página B es:
//   btoa(JSON.stringify({ email, contrasena, rol }))
// ─────────────────────────────────────────────────────────────────

// URL base de la página B (sistema PQRS)
const PAGINA_B_URL = "http://200.119.114.225/";

// Credenciales por rol
// Cuando la página A tenga su propio sistema de usuarios,
// estos datos vendrán dinámicamente. Por ahora son fijos para la prueba.
const CREDENCIALES_ROL = {
  usuario: {
    email: "usuario@example.com",   // ← reemplaza con un usuario real registrado
    contrasena: "password123",       // ← su contraseña
    rol: "Usuario"
  },
  analista: {
    email: "analista@nomina.com",
    contrasena: "Nomina123*",
    rol: "Analista"
  },
  encargado: {
    email: "encargado2@example.com",
    contrasena: "Encargado123*",
    rol: "Encargado"
  }
};

let usuarioActual = null;

// ── Paso 1: registrar/ingresar en página A ──
function registrar() {
  const usuario  = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!usuario || !password) {
    alert("Completa todos los campos");
    return;
  }

  usuarioActual = { usuario, password };

  document.getElementById("registro").style.display = "none";
  document.getElementById("menu").style.display     = "block";
  document.getElementById("bienvenida").textContent  = "Bienvenido, " + usuario;
}

// ── Paso 2: redirigir con el rol elegido ──

function irComoUsuario() {
  redirigirConRol(CREDENCIALES_ROL.usuario);
}

function irComoAnalistaDeNomina() {
  redirigirConRol(CREDENCIALES_ROL.analista);
}

function irComoEncargado() {
  redirigirConRol(CREDENCIALES_ROL.encargado);
}

// ── Función base: genera el token y redirige ──
function redirigirConRol(credenciales) {
  // Codificar credenciales igual que el ejemplo de página A/B
  const token = btoa(JSON.stringify(credenciales));
  window.location.href = PAGINA_B_URL + "?token=" + token;
}
