let usuarioActual = null;

function registrar(){

const usuario = document.getElementById("usuario").value;

const password = document.getElementById("password").value;

if(usuario==="" || password===""){

alert("Complete todos los campos");

return;

}

usuarioActual={

usuario:usuario,
password:password

};

document.getElementById("registro").style.display="none";

document.getElementById("menu").style.display="block";

document.getElementById("bienvenida").innerHTML=
"Bienvenido "+usuario;

}

function irPaginaB(){

const token=btoa(JSON.stringify(usuarioActual));

window.location.href=
"https://bornacelly.github.io/paginaB/?token="+token;

}