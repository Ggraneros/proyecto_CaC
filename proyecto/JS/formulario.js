//datos personales
var usuario = document.getElementById("usuario__id");
var password = document.getElementById("usuario__pass");

//Error
var error = document.getElementById("error")

function enviarFormulario(){
	console.log("Enviando formulario...");

	var mensajeError = [];

	if(usuario === null || usuario === "") {
		alert("ERROR: Debe ingresar un usuario válido.");
	}
	else {
		if(usuario != "Gaston" || "gaston" || "Gastón" || "gastón") {
		alert("Su nombre de usuario, no se encuentra registrado")
	};
	}

	var mensajeError = []

	if(password === null || password === "") {
		
		alert("ERROR: El campo <<Contraseña>> no puede estar vacio.");
	}
	
		error.innerHTML = mensajeError.join(" ,");
		
	return false;
}

