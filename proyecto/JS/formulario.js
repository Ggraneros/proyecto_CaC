//datos personales

var nombre = document.getElementById("nombre");
var usuario = document.getElementById("usuario");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

//Datos contacto

var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");


//Error

var error = document.getElementById("formulario__mensaje")


function enviarFormulario(){
	console.log("Enviando formulario...");

	var mensajeError = []
	if(nombre.value === null || nombre.value === "") {
		mensajeError.push("Ingresa tu nómbre");
	}

	var mensajeError = []
	if(password.value === null || nombre.value === "") {
		mensajeError.push("Ingresa tu password");
	}
	
	return false;
}