let numeroIngresado;

const condicionarRangoValido = rango => {
  const rangoPermitido = Array.from({ length: 20 }, (_, i) => i + 1);

  if (isNaN(rango)) {
    alert("Ingrese un número entre 1 y 20");
    return false;
  }

  if (!rangoPermitido.includes(+rango)) {
    alert("número fuera del rango. Ingrese un número entre 1 y 20");
    return false;
  }

  return true;
};

const factorial = numero => {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}

const resultado = factorial(5);
console.log(resultado); // 120

alert("Ingrese un número entre 1 y 20");

do {
  numeroIngresado = prompt('Ingrese el numero');
} while (!condicionarRangoValido(numeroIngresado))


console.log("RESULTADO:");

console.log("\n");
console.log("MULTIPLICACIONES:");
for (i = 1; i < +numeroIngresado + 1; i++) {
  console.log(`${i} x ${numeroIngresado} = ${i * numeroIngresado}`);
}
console.log("\n");
console.log("FACTORIALES:");
for (i = 1; i < +numeroIngresado + 1; i++) {
  console.log(`Factorial de ${i} es: ${factorial(i)}`);
}