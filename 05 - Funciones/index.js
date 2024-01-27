function funcionDeclarativa() {
  // cuerpo de la función
  return 1 + 1;
}

console.log('Declaración de función: ', funcionDeclarativa());

const funcionExpresiva = function () {
  return 1 + 2;
};

console.log('Expresión de función: ', funcionExpresiva());

const funcionDeFlecha = () => {
  return 1 + 3;
};

console.log('Función de flecha: ', funcionDeFlecha());

function sumarNumero(Parametro) {
  return 2 + Parametro;
}

console.log('Función sumarDosAlNumero: ', sumarNumero(45));

const promedioCursoEnFuncion = (totalAlumnos, notasSumada) => {
  return (totalAlumnos * notasSumada) / 100;
};

console.log('Promedio 1', promedioCursoEnFuncion(40, 1500));
console.log('Promedio 2', promedioCursoEnFuncion(35, 2500));
console.log('Promedio 3', promedioCursoEnFuncion(37, 1000));
