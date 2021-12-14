/*
// Solicitar al usuario su nombre y mostrarlo por alert. Luego Mostrar un alert que salude diciendo Hola y el nombre de la persona. Luego solicitar el apellido y que salude por alert con el nombre completo (Ej: Hola Florencia Andres).

let nombre = prompt("¿Cual es tu nombre?");
alert("Hola: " + nombre);

let apellido = prompt("¿Cual es tu apellido?");
alert("Hola: " + nombre + " " + apellido);

// Solicitar al usuario dos números y mostrar por alert el resultado de la suma de ambos.
alert("Ingrese 2 números para realizar una suma");
let primerNumero = prompt("Ingrese un número");
let segundoNumero = prompt("Ingrese otro numero");
let resultado = parseFloat(primerNumero)+parseFloat(segundoNumero);
alert("El resultado es: " + resultado);

//Solicitar al usuario la edad que cumple o cumplió este año y calcular en qué año nació y mostrar un mensaje por alert (Ej: Usted nació en 1974)
let edad = prompt("¿Que edad cumple o cumplió este año?");
let ano = 2021;
let anoNaci = ano-parseFloat(edad);
alert("Su año de nacimiento es: " +anoNaci);

//Mostrar al usuario su balance de cuenta (inventar un número de cuenta). Consultar cuánto dinero desea retirar y mostrar el nuevo balance.

let saldo = 1000;
alert("Su saldo es: " + saldo);
let retiro = prompt("¿Cuanto dinero desea retirar?");
let saldoFinal = parseFloat(saldo)-parseFloat(retiro);
alert("Saldo restante: " + saldoFinal);

//Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por alert.
let primeraNota = prompt("Ingrese la primera nota");
let segundaNota = prompt("Ingrese la segunda nota");
let terceraNota = prompt("Ingrese la tercera nota");
let promedio = (parseFloat(primeraNota)+parseFloat(segundaNota)+parseFloat(terceraNota))/ 3;
alert("El promedio es: " + promedio)

//Crear un conversor de medida. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centímetros y pulgadas. Mostrar por alert los tres resultados.

// let metro = 1;
let centimetro = 100;
let pie = 3.28084;
let pulgada = 39.3701;
let medida = prompt("Ingrese una medida en metro: ");
alert("Su medida en centimetros es: " +medida *centimetro);
alert("Su medida en pie es: " +medida *pie);
alert("Su medida en pulgada es: " +medida *pulgada);

//Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.
alert("Ingrese 2 números para realizar una suma");
let primerNumero = prompt("Ingrese un número");
let segundoNumero = prompt("Ingrese un número");
let resultado = parseFloat(primerNumero)+parseFloat (segundoNumero);
alert("Su resultado es: " +resultado);
alert("Ingrese el número por el cual quiere multiplicar el resultado anterior");
let tercerNumero = prompt("Ingrese un número");
let resultadoFinal = parseFloat(tercerNumero)*parseFloat(resultado);
alert("Su resultado es: "+resultadoFinal); 


// Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.
alert("Conversor de minutos a segundos");
let numeroMin = prompt("Ingrese la cantidadde minutos que quiere convertir: ");
let segundos = numeroMin*60;
alert("Son segundos: " +segundos);


// Solicitar al usuario la medida de la base y de la altura de un rectángulo y devolver el área.
alert("Por favor ingresa la medidas de base y altura de un rectángulo.");
let base = prompt("Ingresa la medida de la base");
let altura = prompt("Ingresa la medida de la altura");
let area = parseFloat(base)*parseFloat(altura);
alert("El area del rectángulo es: "+area);



// Solicitar al usuario la medida de la base y de la altura de un triángulo equilátero y devolver el área.
alert("Ingresa las medidas de base y altura de un triángulo equilátero.");
let base = prompt("Ingresa la medida de la base");
let altura = prompt("Ingresa la medida de la altura");
let area = (parseFloat(base)*parseFloat(altura))/2;
alert("El area del triángulo equilatero es: "+area);


// Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.
let monto = prompt("Ingresa un monto de dinero");
let descuento = prompt("Ingresa el descuento en % que se le realizara a tu compra");
descuento =  parseFloat(monto)*parseFloat(descuento) /100;
let precioFinal = parseFloat(monto)-parseFloat(descuento);
alert("Precio final: " +precioFinal);



// Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"

let nombre = prompt("Ingrese su nombre");
let edad = prompt("¿Que edad cumple o cumplió este año?");
let ano = 2021;
let anoNaci = ano-parseFloat(edad);
alert("Hola, " + nombre + " usted nació en el año " +anoNaci);



// Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por alert su equivalente en Farenheit junto con un mensaje que incluya ambos datos. 

alert("Conversor de grados Celsius a Farenheit");
let nombre = prompt("Ingrese su nombre");
let celsius = prompt("Ingrese una temperatura en ° Celsius");
let farenheit = parseFloat(celsius)*32;
alert("Hola, " + nombre + " sus grados Celsius son " + farenheit + " grados Farenheit");
*/




// Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.


alert("Conversor de grados Farenheit a Celsius");
let nombre = prompt("Ingrese su nombre");
let farenheit = prompt("Ingrese una temperatura en ° Farenheit");
let celsius = parseFloat(farenheit)/17.78;
alert("Hola, " + nombre + " sus grados Celsius son " + celsius + " grados Farenheit");





/*
// Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10 y sacar el resto de su división por 3. Mostrar el resultado sin comas.


//BONUS:

// Solicitar dos números y mostrar la suma de sus cifras. (Ejemplo: 15 y 29, mostrar 1529).

// Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por alert o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)

// Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)


// Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. No contempla impuesto a las ganancias ni sindicatos.


ej: Sueldo bruto: $70.000
    Deducciones:
    Obra social: $2100
    Ley 19032: $2100
   Jubilación: $7700
   Neto a pagar: $58100
   */














