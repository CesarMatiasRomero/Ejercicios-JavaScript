/* EJERCICIOS


Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.
Solicitar un texto y mostrarlo todo menos la primera letra.
Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.


// Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.

let texto = prompt("Ingrese un texto");
if(texto .includes("a")){
    alert("¡Excelente!");
}
else(alert("ERROR"));


//Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.

let textoMayusculas = prompt("Ingrese un texto");
alert(textoMayusculas.toUpperCase(+textoMayusculas));

let textoMinusculas = prompt("Ingrese un texto");
alert(textoMinusculas.toLowerCase(+textoMinusculas));


//Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.
let texto = prompt("Ingrese un texto");
alert("Su texto comienza con la letra: " + texto.charAt(0));


//Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.

let texto = prompt("Ingrese un texto");
alert("La cantidad de caracteres de se texto es: " + texto.length);


//Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.

let numeros = prompt("Ingrese un número");
alert("Su numero tiene: " + numeros.length + " dígitos");


//Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.

let texto = prompt("Ingrese un texto");
alert("Su texto termina con la letra: " + texto.charAt(texto.length-1));
*/

//Ingresar una cadena de texto y reemplazar los espacios por asteriscos.




