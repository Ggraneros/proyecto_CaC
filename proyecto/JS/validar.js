function validar() {
    
var usuario = document.getElementById("usuario").value;
var contraseña = document.getElementById("contraseña").value;

if(usuario === "" || null) {
    alert("El campo nombre no puede estar vacio.");
    return false;
}
    else if(usuario.length>10) {
        alert("El nombre de usuario no debe contener mas de 10 caracteres.");
}
    else if(usuario.length<5) {
        alert("El nombre de usuario no debe tener menos de 5 caracteres. ");
}
    else if (usuario.value != "gaston" || "Gaston" || "gastón" || "Gastón") {
        alert("El usuario ingresado no se encuentra registrado.");
}

if(contraseña === "" || null) {
    alert("El campo contraseña no puede estar vacio.");
}
else if(contraseña === "cooper") {
    alert("Bienvenido!!")
}


}