let numero1 = 100;
let numero2 = 200;
let numero3 = 30;
let Ejercicio = prompt("ejercicios del 1-13");
switch (Ejercicio) {
  case "1":
//Ejercicio 1 Inicio
if (numero1 > numero2) {
  console.log("numero " + numero1 + " Es mayor que " + numero2);
} else {
  console.log("numero " + numero2 + " Es mayor que " + numero1);
}
//Ejercicio 1 fin
break;
case "2":
//Ejercicio 2 Inicio
if (numero1 == numero2) {
  console.log("numero " + numero1 + " Es igual que " + numero2);
} else {
  console.log("numero " + numero2 + " Es Diferente que " + numero1);
}
//Ejercicio 2 fin
break;
case "3":
//Ejercicio 3 Inicio
if (numero1 == numero2) {
  console.log("numero " + numero1 + " Es igual que " + numero2);
} else {
  if (numero1 > numero2) {
    console.log("numero " + numero1 + " Es mayor que " + numero2);
  } else {
    console.log("numero " + numero2 + " Es mayor que " + numero1);
  }
}
//Ejercicio 3 fin
break;
case "4":
//Ejercicio 4 Inicio
if (numero1 < numero2 && numero1 < numero3) {
  console.log(
    "numero " + numero1 + " Es el mas chico que " + numero2 + " y " + numero3
  );
} else {
  if (numero2 < numero1 && numero2 < numero3) {
    console.log(
      "numero " + numero2 + " Es el mas chico que " + numero1 + " y " + numero3
    );
  } else {
    console.log(
      "numero " + numero3 + " Es el mas chico que " + numero1 + " y " + numero2
    );
  }
}
//Ejercicio 4 fin
break;
case "5":
//Ejercicio 5 Inicio
let persona1 = {
  nombre: "Ana",
  edad: 26,
  altura: 1.65,
};
let persona2 = {
  nombre: "Luis",
  edad: 30,
  altura: 1.75,
};
if (persona1.altura > persona2.altura) {
  console.log(persona1.nombre + " es mas alto que " + persona2.nombre);
} else if (persona1.altura < persona2.altura) {
  console.log(persona2.nombre + " es mas alto que " + persona1.nombre);
} else {
  console.log(
    persona1.nombre + " y " + persona2.nombre + " tienen la misma altura"
  );
}
if (persona1.edad > persona2.edad) {
  console.log(persona1.nombre + " tiene mas años que " + persona2.nombre);
} else if (persona1.edad < persona2.edad) {
  console.log(persona2.nombre + " tiene mas años que " + persona1.nombre);
} else {
  console.log(
    persona1.nombre + " y " + persona2.nombre + " tienen la misma edad"
  );
}
//Ejercicio 5 fin
break;
case "6":
//Ejercicio 6 Inicio
let nombre6 = prompt("Ingrese su nombre:");
let edad6 = prompt("Ingrese su edad:");
let altura6 = prompt("Ingrese su altura en cm:");
let vision6 = prompt("Ingrese su visión (de 10):");
if (edad6 >= 18) {
  if (altura6 > 150) {
    if (vision6 >= 8) {
      console.log(nombre6 + " Esta capacitado para manejar ");
    } else {
      console.log(
        nombre6 +
          " No estás capacitado para conducir porque tu visión es menor a 8"
      );
    }
  } else {
    console.log(
      nombre6 +
        " No estás capacitado para conducir porque tu altura es menor a 150 cm"
    );
  }
} else {
  console.log(
    nombre6 +
      " No estás capacitado para conducir porque tu edad es menor a 18 años"
  );
}
//Ejercicio 6 fin
break;
case "7":
//Ejercicio 7 Inicio
let userName = prompt("Ingrese su nombre:");
let pass = prompt("Ingrese el tipo de pase (vip, normal o ninguno):");
let Ticket = prompt("¿Posee entrada? (si, no):");
Ticket = Ticket === "si";
let myname = "christian";
if (userName === myname || pass === "vip") {
  console.log("Bienvenido(a): " + userName);
} else if (Ticket) {
  let useTicket = prompt("¿Desea utilizar su entrada? (si, no):");
  useTicket = useTicket === "si";
  if (useTicket) {
    console.log("Bienvenido(a): " + userName);
  } else {
    console.log("Un placer atenderte. Adios");
  }
} else {
  let buyTicket = prompt("¿Desea comprar una entrada? (si, no):");
  buyTicket = buyTicket === "si";
  if (buyTicket) {
    let moneyAvailable = prompt("Ingrese el dinero disponible:");
    if (moneyAvailable >= 1000) {
      console.log("Venta de entrada realizada. Bienvenido(a) " + userName);
    } else {
      console.log("Dinero insuficiente para la compra de entrada.");
    }
  } else {
    console.log("Lamentablemente no se realizó la compra de entrada. Adios");
  }
}
//Ejercicio 7 fin
break;
case "8":
//Ejercicio 8 Inicio
let numeroIncognita = 7;
let numeroIngresado = prompt("Intento 1: Ingresa un número del 1 al 10:");
if (numeroIngresado == numeroIncognita) {
  console.log("¡Ganaste, has adivinado el número!");
} else {
  if (numeroIngresado > numeroIncognita) {
    console.log("EL numero es mayor, intenta de nuevo");
    numeroIngresado = prompt("Intento 2: Ingresa un número del 1 al 10:");
    if (numeroIngresado == numeroIncognita) {
      console.log("¡Ganaste, has adivinado el número!");
    } else {
      if (numeroIngresado > numeroIncognita) {
        console.log("EL numero es mayor, intenta de nuevo");
        numeroIngresado = prompt("Intento 3: Ingresa un número del 1 al 10:");
        if (numeroIngresado == numeroIncognita) {
          console.log("¡Ganaste, has adivinado el número!");
        } else {
          if (numeroIngresado > numeroIncognita) {
            console.log("EL numero es mayor, perdiste tus oportunidades");
          } else {
            console.log("EL numero es menor, perdiste tus oportunidades");
          }
        }
      } else {
        console.log("EL numero es menor, intenta de nuevo");
        numeroIngresado = prompt("Intento 3: Ingresa un número del 1 al 10:");
        if (numeroIngresado == numeroIncognita) {
          console.log("¡Ganaste, has adivinado el número!");
        } else {
          if (numeroIngresado > numeroIncognita) {
            console.log("EL numero es mayor, perdiste tus oportunidades");
          } else {
            console.log("EL numero es menor, perdiste tus oportunidades");
          }
        }
      }
    }
  } else {
    console.log("EL numero es menor, intenta de nuevo");
    numeroIngresado = prompt("Intento 2: Ingresa un número del 1 al 10:");
    if (numeroIngresado == numeroIncognita) {
      console.log("¡Ganaste, has adivinado el número!");
    } else {
      if (numeroIngresado > numeroIncognita) {
        console.log("EL numero es mayor, intenta de nuevo");
        numeroIngresado = prompt("Intento 3: Ingresa un número del 1 al 10:");
        if (numeroIngresado == numeroIncognita) {
          console.log("¡Ganaste, has adivinado el número!");
        } else {
          if (numeroIngresado > numeroIncognita) {
            console.log("EL numero es mayor, perdiste tus oportunidades");
          } else {
            console.log("EL numero es menor, perdiste tus oportunidades");
          }
        }
      } else {
        console.log("EL numero es menor, intenta de nuevo");
        numeroIngresado = prompt("Intento 3: Ingresa un número del 1 al 10:");
        if (numeroIngresado == numeroIncognita) {
          console.log("¡Ganaste, has adivinado el número!");
        } else {
          if (numeroIngresado > numeroIncognita) {
            console.log("EL numero es mayor, perdiste tus oportunidades");
          } else {
            console.log("EL numero es menor, perdiste tus oportunidades");
          }
        }
      }
    }
  }
}
//Ejercicio 8 fin
break;
case "9":
//Ejercicio 9 Inicio
let edad9 = prompt("Ingrese su edad:");
if (edad9 >= 0 && edad9 <= 12) {
  console.log("Eres un infante.");
} else if (edad9 >= 13 && edad9 <= 18) {
  console.log("Eres un adolescente.");
} else if (edad9 >= 19 && edad9 <= 45) {
  console.log("Eres un mayor joven.");
} else if (edad9 > 45 && edad9 <= 100) {
  console.log("Eres un anciano.");
} else if (edad9 > 100) {
  console.log("¿En realidad tienes esa edad?");
}
//Ejercicio 9 fin
break;
case "10":
//Ejercicio 10 Inicio
let jugador1 = prompt("Jugador 1: Ingrese PIEDRA, PAPEL o TIJERAS:");
let jugador2 = prompt("Jugador 2: Ingrese PIEDRA, PAPEL o TIJERAS:");
if (
  (jugador1 !== "PIEDRA" && jugador1 !== "PAPEL" && jugador1 !== "TIJERAS") ||
  (jugador2 !== "PIEDRA" && jugador2 !== "PAPEL" && jugador2 !== "TIJERAS")
) {
  console.log("Uno de los jugadores ha hecho trampa.");
} else {
  if (jugador1 === jugador2) {
    console.log("Es un empate.");
  } else if (
    (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
    (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
    (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
  ) {
    console.log("Jugador 1 ha ganado.");
  } else {
    console.log("Jugador 2 ha ganado.");
  }
}
//Ejercicio 10 fin
break;
case "11":
//Ejercicio 11 Inicio
let color = prompt("Ingresa un color");
switch (color) {
  case "blanco":
  case "negro":
    console.log("Falta de color.");
    break;
  case "verde":
    console.log("El color de la naturaleza.");
    break;
  case "azul":
    console.log("El color del agua.");
    break;
  case "amarillo":
    console.log("El color del sol.");
    break;
  case "rojo":
    console.log("El color del fuego.");
    break;
  case "marrón":
    console.log("El color de la tierra.");
    break;
  default:
    console.log("Excelente elección, no lo teníamos pensado.");
}
//Ejercicio 11 fin
break;
case "12":
//Ejercicio 12 Inicio
let resultado;
let valor1 = prompt("primer numero");
let valor2 = prompt("Segundo numero");
console.log("1.Suma");
console.log("2.Resta");
console.log("3.Multiplicación");
console.log("4.División");
let operacion = prompt("Ingresa la opcion");
switch (operacion) {
  case "1":
    resultado = valor1 + valor2;
    console.log("Resultado de la Suma: " + resultado);
    break;
  case "2":
    resultado = valor1 - valor2;
    console.log("Resultado de la Resta: " + resultado);
    break;
  case "3":
    resultado = valor1 * valor2;
    console.log("Resultado de la Multiplicación: " + resultado);
    break;
  case "4":
    if (valor1 !== 0 && valor2 !== 0) {
      resultado = valor1 / valor2;
      console.log("Resultado de la División: " + resultado);
    } else {
      console.log("ERROR: No se puede dividir por cero.");
    }
    break;
  default:
    console.log("Operación no válida.");
}
//Ejercicio 12 fin
break;
case "13":
//Ejercicio 13 Inicio
let nombre12 = prompt("Ingrese su nombre:");
let apellido12 = prompt("Ingrese su apellido:");
let dni12 = prompt("Ingrese su número de DNI:");
let fechaNacimiento12 = prompt("Ingrese su fecha de nacimiento (dd/mm/aaaa):");
let direccion12 = prompt("Ingrese su dirección:");
console.log("Datos ingresados:");
console.log("Nombre: " + nombre12);
console.log("Apellido: " + apellido12);
console.log("Numero de DNI: " + dni12);
console.log("Fecha de nacimiento " + fechaNacimiento12);
console.log("Direccion: " + direccion12);
let confirmacion = prompt("¿Son correctos estos datos? Responda SI o NO:");
if (confirmacion == "SI") {
  let dni = {
    nombre12: nombre12,
    apellido12: apellido12,
    dni12: dni12,
    fechaNacimiento12: fechaNacimiento12,
    direccion12: direccion12,
  };
  console.log("Registro exitoso. Datos del DNI:");
  console.table(dni);
} else {
  console.log("Vuelva a intentarlo en 1 mes.");
}
//Ejercicio 13 fin
break;
}