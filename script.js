 // ── URL base del sistema PQRS ──
  // auto-login.html es la página intermediaria que procesa el token
  const PQRS_AUTO_LOGIN = "http://200.119.114.225/auto-login.html";
 
  // ── Tokens estáticos por usuario ──
  // Estos valores vienen del SELECT que ejecutaste en SSMS
  // (columna access_token de la tabla usuarios).
  // Reemplaza cada valor con el token real de tu BD.
  const TOKENS = {
    usuario:   "REEMPLAZAR_CON_TOKEN_DEL_USUARIO",    // ← pegar token de BD
    analista:  "REEMPLAZAR_CON_TOKEN_DEL_ANALISTA",   // ← analista@nomina.com
    encargado: "REEMPLAZAR_CON_TOKEN_DEL_ENCARGADO"   // ← encargado2@example.com
  };
 
  let usuarioActual = null;
 
  // ── Step 1 ──
  function registrar() {
    const usuario  = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");
 
    if (!usuario || !password) {
      errorMsg.textContent = "Completa todos los campos.";
      errorMsg.style.display = "block";
      return;
    }
 
    errorMsg.style.display = "none";
    usuarioActual = usuario;
 
    document.getElementById("registro").style.display = "none";
    document.getElementById("menu").style.display     = "block";
    document.getElementById("bienvenida").textContent  = "Bienvenido, " + usuario;
  }
 
  // ── Step 2: redirigir con token opaco ──
  function irComoUsuario() {
    redirigir(TOKENS.usuario);
  }
 
  function irComoAnalistaDeNomina() {
    redirigir(TOKENS.analista);
  }
 
  function irComoEncargado() {
    redirigir(TOKENS.encargado);
  }
 
  function redirigir(token) {
    // El token va como parámetro opaco — no contiene contraseñas
    window.location.href = `${PQRS_AUTO_LOGIN}?token=${token}`;
  }
