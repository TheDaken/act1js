console.clear()
/* 
const sumarCuadrados = function(a,b){
    
    const elevarAlCuadrado = function(a){
        return a*a
    }
    return elevarAlCuadrado(a) + elevarAlCuadrado(b)
}

console.log(sumarCuadrados(2,2)); */

/* const calcular = function(a,b){

    const suma = function(){
        return a+b
    }
    const resta = function(){
        return a-b
    }

    return suma
}
const computar = calcular(10,10)
console.log(computar()) */

/* const mult = function (x, y) {
    return x * y
}
const div = function (x, y) {
    return x / y
}

const calcular = function (a, b, fun) {
    return fun(a, b)
}
console.log(calcular(6, 7, mult));

const par = function (a) {
    let residuo = a % 2

    if (residuo === 0) {
        return "Par"
    } else {
        return "Impar"
    }

}

console.log(par(7) + " " + par(8));


const arbolar = function (arbol) {
    return `Platar el arbol ${arbol}`
}
console.log(arbolar('Pino')); */

const mueble = {
    'madera': 'roble',
    'altura': 22.2,
    "color" : "marron",
    "precio" : 399,
    "esNueva" : true,
    soy : function() {
        return `Soy una mesa de ${mueble.madera}, tiene una altura ${mueble.altura},es de un color${mueble.color},su precio es de ${mueble.precio}`
    }
}
const mueble2 = {
    'madera': 'pino',
    'altura': 20,
    "color" : "blanco",
    "precio" : 300,
    "esNueva" : false,
    soy : function() {
        return `Soy una mesa de ${mueble2.madera}, tiene una altura ${mueble2.altura},es de un color${mueble2.color},su precio es de ${mueble2.precio}`
    }
}
const describir = function(obj){
    return `El mueble es de ${obj.madera}, tiene una altura ${obj.altura},es de un color${obj.color},su precio es de ${obj.precio}`
}
console.log(describir(mueble));
// se puede añadir  atributos al objeto con ejempl: mueble.nuevo = "lo que sea" ;
const aplicarDescuento = function (obj,desc){
    mueble.precio = mueble.precio - desc
}
 
aplicarDescuento(mueble,10)
console.log(mueble2.soy());

const libro1 ={
    'titulo':'El principito',
    'autor': 'Antonie de saint-Expéry',
    'paginas': '100',
    'precio':'15.99'
}
const libro2 ={
    'titulo':'El Quijote',
    'autor': 'Miguel de Cervantes Saavedra',
    'paginas': '1000',
    'precio':'25.99'
}
function describirLibro(obj){

    return {      
        versionCorta: `${obj.titulo} de ${obj.autor}`,
        versionLarga: `${obj.titulo} de ${obj.autor} tiene ${obj.paginas} páginas y vale ${obj.precio}€`

    }
}
console.log(describirLibro(libro1).versionLarga);