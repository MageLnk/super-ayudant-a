const muestraUnConsoleLog = () => {
  console.log('Ola k ase');
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const muestraUnAlert = () => {
  alert('Ola k ase');
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const sumarDosMasDos = () => {
  const resultadoDosMasDos = 2 + 2;

  const elementoResultado = document.querySelector('.suma');

  elementoResultado.textContent = 'Resultado: ' + resultadoDosMasDos + ' o k ase';
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const sumarDosNumeros = (numeroUno, numeroDos) => {
  const resultadoDosNumeros = numeroUno + numeroDos;

  const elementoResultado = document.querySelector('.suma-dos-numeros');

  elementoResultado.textContent = 'Resultado: ' + resultadoDosNumeros + ' o k ase';
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const sumarDosNumerosFuncionSinDOM = (numeroUno, numeroDos) => {
  return numeroUno + numeroDos;
};

const dupliqueLaSumaDeDosNumeros = () => {
  const duplicarResultadoDeSumarDosNumeros = sumarDosNumerosFuncionSinDOM(3, 3) * 2;

  const elementoResultado = document.querySelector('.dupliquemos-la-suma-de-dos-numeros');

  elementoResultado.textContent = 'Resultado: ' + duplicarResultadoDeSumarDosNumeros + ' o k ase';

  return duplicarResultadoDeSumarDosNumeros;
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const dupliqueLaSumaDeDosNumerosPorParametro = (ejecutarFuncion, numeroUno, numeroDos) => {
  const operacionMatematicaTotal = ejecutarFuncion(numeroUno, numeroDos) * 2;

  const elementoResultado = document.querySelector('.dupliquemos-la-suma-de-dos-numeros-por-parametro');

  elementoResultado.textContent = 'Resultado: ' + operacionMatematicaTotal + ' o k ase';

  return operacionMatematicaTotal;
};
