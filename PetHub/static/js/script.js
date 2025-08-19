console.log("hola mundo mi script funciona");

let nombre = "Raul";
console.log(nombre);
console.log(`Bienvenido a ${nombre}`);

function saludar() {
    console.log("Hola desde la función saludar");
    }

saludar();

if (nombre === "Raul") {
    console.log("El nombre es Raul");
    saludar
} else {
    console.log("El nombre no es Raul");
}

let datoUsuarioAdmin = {
    "nombreCompleto": "Raul",
    "usuario": "RaulAdmin",
    "contraseña": "1234ñ",
    "estado": true
}

window.onload = function() {
    if(window.location.pathname.endsWith("perfil.html")) {
        let usuarioLogeado = JSON.parse(localStorage.getItem("datosUsuarios"));
        if(usuarioLogeado.estadoLogin) {
            document.getElementById("tituloHome").textContent = "Bienvenido " + usuarioLogeado.nombreCompleto;
        } 
    }
}




function datosUsuarios() {
    let usuarios = document.getElementById("usuario").value
    let contraseñas = document.getElementById("password").value


    console.log(usuarios)
    if (usuarios == "" || contraseñas == "") {
        alert("Por favor, ingresa todos los campos requeridos.");
    }
    else if (usuarios.length < 3 || contraseñas.length < 3) {
        alert("El nombre de usuario y la contraseña deben tener al menos 3 caracteres.");
    }
    else if (usuarios == datoUsuarioAdmin.usuario && contraseñas === datoUsuarioAdmin.contraseña) {
        window.location.href = "PetHub/static/html/perfil.html";
    }
    else
        window.location.href = "PetHub/static/html/home.html";
        let usuarioLogeado = {
            "nombreCompleto": datoUsuarioAdmin.nombreCompleto,
            "estadoLogin": datosUsuarios.estado
        }
        localStorage.setItem("datosUsuarios", JSON.stringify(usuarioLogeado))
        window.location.href = "PetHub/static/html/perfil.html";




    

}