//datos personales

var nombre = document.getElementById("");
var usuario = document.getElementById("usuario__id");
var password = document.getElementById("usuario__pass");
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
	
		mensajeError.join(" ,");
		
	return false;
}