/* 
    Para probar que realmente nuestro index.js esta recibiendo código JavaScript
    de nuestro archivo script.js descomente el código de console.log("");
    y recargue nuestro index.html en cualquier navegador y 1.- clic derecho
    2.- inspeccionar 3.- consola y ahi podra ver Soy Kevin en inglés.
    console.log("I am Kevin"); 
*/
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i +" Fizz");
    }
    if (i % 5 == 0) {
        console.log(i + " Buzz");
    }
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i + " FizzBuzz");
    }
    if ((i % 3 != 0) && (i % 5 != 0)) {
        console.log(i);
    }
}