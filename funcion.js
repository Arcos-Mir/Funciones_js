/* las funciones son bloques de codigo que nos sirven cuando queremos utilizar el 
codigo varias veces es decir reutilizar codigo*/

/*aqui estamos repitiendo codigo para poder hacer las operaciones:
var num1 = 10;
var num2 = 5;
var res = num1 + num2;

document.write(res);
document.write('<br>');

var num1 = 7;
var num2 = 3;
var res = num1 + num2;

document.write(res);*/

/* ESTRUCTURA DE UNA FUNCION

las fuunciones se escriben de la siguiente manera:
    - se coloca la palabra reservada function
    - se le agrega un nombre a la funcion por ejemplo nombre 
    - parentesis (se le pasan argumentos, pueden ser opcionales y dependen de cada funcion)
    - llaves 
    - y el codigo que queremos ejecutar "se parece a un ciclo"

    function nombre(arg1, arg2) {
        //codigo que ejecutaremos
    }*/

    /*function suma (num1, num2) {
        document.write (res = num1 + num2);
        document.write ('<br>');
    }

    suma (10, 5);//10 se agrega a num1 y 5 a num2
    suma (3 , 2);
    suma (1 , 13);*/

    //OPTIMIZAR CON RETURN

    /*function suma (num1, num2) {
        var res = num1 + num2;
        return res;/* o se puede escribir de la siguiente manera return num1 + num2;
        para colocar una sola linea de codigo
    }

    document.write(suma(3, 7));//para mostrar en pantalla*/

    /*NOTA : una funcion no se ejecutan hasta que se les llama, se puede ejecutar 
    en pantalla o en la consola si es en pantalla se escribe y si es en concola 
    se omite en el codigo para acceder a ella desde la consola*/

//se puede guardar la funcion dentro de una variable y ejecutarla desde ahi
 
 
/*var suma = function (num1 , num2) {
    return num1 + num2;
}
document.write(suma(3, 7));*/

/* ----- Funciones autoinvocadas 

son aquellas que se ejectan atomaticamente, el codigo que tengan dentro lo ejecuto a
automaticamente sin hacer nada, sirve para proteger nuestras variables de que otros codigos no
pueda acceder a ellas */

(function(){
    alert('Hola Mundo!');
}());