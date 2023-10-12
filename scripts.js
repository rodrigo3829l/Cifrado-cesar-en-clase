let letras_norm = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<>?@[]^_{}|~";
let letras_cif = "FGHIJKLMNOPQRSTUVWXYZ00123456789!#$%&'()*+,-./:;<>?@[]^_{}|~ABCDE";

function descifrar(mensaje) {
    let nuevo_mensaje = [];
    for (let letra of mensaje) {
        if (letras_cif.includes(letra)) {
            let indice = letras_cif.indexOf(letra);
            let nueva_letra = letras_norm.charAt(indice);
            nuevo_mensaje.push(nueva_letra);
        } else {
            nuevo_mensaje.push(letra);
        }
    }
    return nuevo_mensaje.join('');
}

function cifrar(mensaje) {
    let nuevo_mensaje = [];
    for (let letra of mensaje) {
        if (letras_norm.includes(letra)) {
            let indice = letras_norm.indexOf(letra);
            let nueva_letra = letras_cif.charAt(indice);
            nuevo_mensaje.push(nueva_letra);
        } else {
            nuevo_mensaje.push(letra);
        }
    }
    return nuevo_mensaje.join('');
}

function cifrarMensaje() {
    let mensaje = document.getElementById("mensaje").value.toUpperCase();
    let resultado = cifrar(mensaje);
    document.getElementById("resultado").value = resultado;
}

function descifrarMensaje() {
    let mensaje = document.getElementById("mensajeCifrar").value.toUpperCase();
    console.log(mensaje)
    let resultado = descifrar(mensaje);
    document.getElementById("resultadoCifrar").value = resultado;
}