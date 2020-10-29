
console.clear()
const madera = 'haya'
const patas = 4
let altura = 80
const unidades = `Centimetros`
const esNueva = true
const autor = 'Pedro'

//let para modificar variables  sino no puedes canviarlas a mano


const calcularDiam = function (perimetro) {

}


const y = function (a, b) {

    return a - b


}
const z = function (a, b) {

    return a * b


}
const x = function (a, b) {

    return a / b


}

const f = y(altura, patas);
const e = z(altura, patas);
const u = x(altura, patas);


const texto = function (a, b) {
    return a + b
}
const describirMueble = function(a,autor){

    //arguments[] (array creada de serie son los atributos que te pasan, si te pasan mas de los que necesitas)(mejor no usarlo)
    let resultado = 'Esta mesa es de '+ madera
    resultado = `Este mueble es de ${a} i el autor es ${autor}`
    return resultado
}

const escrito = texto('hola', ' mundo')




console.log('------------------------');
console.log(describirMueble(madera,autor));
console.log('----------------------');
console.log(escrito)
console.log('-----------------------');
console.log('Resta: ' + f + '  Mult: ' + e + ' Div: ' + u);
console.log('-------------------------------------');
console.log(madera + ' ' + patas + ' ' + altura + ' ' + unidades + ' es nueva ? ' + esNueva);
console.log('-------------------------------------');
console.log(typeof altura + ' ' + typeof patas + ' ' + typeof unidades + ' ' + typeof esNueva + ' ' + typeof unidades);
console.log('-------------------------------------');

/* Ejemplo sumar / multiplicar etz.
const saludo =  3
const dos = 2
const tres = dos * saludo
*/