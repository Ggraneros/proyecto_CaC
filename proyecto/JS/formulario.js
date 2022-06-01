function enviarFormulario() {

var nombre = document.getElementById("nombre");
var usuario = document.getElementById("usuario");
var contraseña = document.getElementById("contraseña");
var contraseña2 = document.getElementById("contraseña2");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");

//Expresiones regulares
expresion = /\w+@+\w+\.+[a-z]/;


    if(nombre.value === "" || null) {
        alert("El campo NOMBRE no debe estar en blanco.");
        return false;
    }
    
    if(usuario.value === "" || null) {
        alert("El campo USUARIO no debe estar en blanco.");
        return false;
    }
        else if(usuario.value.length<5) {
            alert("El nombre de usuario debe tener entre 5 y 10 caracteres.");
            return false;
        }
        else if(usuario.value.length>10) {
            alert("El nombre de usuario debe tener entre 5 y 10 caracteres.");
            return false;
        }
    
    if(contraseña.value === "" || null) {
        alert("El campo CONTRASEÑA no debe estar en blanco.");
        return false;
        }

    if(contraseña2.value === "" || null) {
        alert("El campo REPETIR CONTRASEÑA no puede quedar en blanco.");
        return false;
    }
        else if(contraseña2.value != contraseña.value) {
            alert("Las contraseñas no son iguales entre si.");
            return false;
    }

    if(correo.value === "" || null) {
        alert("El campo CORREO ELECTRONICO no puede quedar en blanco.");
        return false;
    }
        else if(!expresion.test(correo)); {
            alert("El campo CORREO no esta escrito en un formato válido.");
            return false;
        }
    
    if(telefono.value === "" || null) {
        alert("El campo REPETIR CONTRASEÑA no puede quedar en blanco.");
        return false;
    }
        else if(isNaN(telefono)) {
            alert("El campo TELÉFONO debe ser llenado solamente con números.")
            return false;
        }





}