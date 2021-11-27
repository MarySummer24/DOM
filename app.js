
const enviar = document.getElementById('mensaje');//**Se va a tomar como referencia el boton */
/*el boton tiene un ID que tiene como nombre mensaje y es el paramentro que se le esta pasando*/

function mensaje_uno() {
   alert('mensaje enviado');
}

function mensaje_dos() {
    alert('mensaje guardado');
}

/*ACCIONES DEL BOTON*/ 
const enviar2 = document.getElementById('mensaje');
function evento_uno() {
    console.log('Numero de Clicks')
    alert('Numero de clicks');
}
enviar2.addEventListener('click', evento_uno);


/*ACCIONES DEL FORMULARIO */ 
/*ACCION DE LA ETIQUETA NOMBRE */ 
const nombre = document.getElementById('txtNombre');
function evento_dos() {
    console.log('NUMERO DE LETRAS');
    alert('Numero de letras');
}
nombre.addEventListener('input', evento_dos);

/*ACCION DE LA ETIQUETA TELEFONO */ 
const tele = document.getElementById('txtTelefono');
function evento_tres() {
    console.log('Numero de digitos');
    alert('Numero de digitos');
}
tele.addEventListener('input', evento_tres);

/*ACCION DE LA ETIQUETA EMAIL */ 
const mail = document.getElementById('txtEmail');
function evento_cuatro() {
    console.log('Numero de caracteres');
    alert('Numero de caracteres');
}
mail.addEventListener('input', evento_cuatro);

/*ACCION DE LA ETIQUETA MENSAJE/COMENTARIO */ 
const comen = document.getElementById('txtMensaje');
function evento_cinco() {
    console.log('Numero de caracteres en comentarios');
    alert('Numero de caracteres en comentarios');
}
comen.addEventListener('input', evento_cinco);

/**REMOVER EVENTOS */
/* nombre.removeEventListener('input', evento_dos); */
/**En ocasiones puede ser que  removeEventListener() no funciones.
/* enviar2.removeEventListener('click', evento); */

