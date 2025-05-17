let numero;
let estado = false;

const generarNumeroAleatorio = () => {
  numero = Math.floor(Math.random() * 10) + 1;
  console.log("Número aleatorio:", numero);
};

const mostrarJuego = () => {
  console.log("desde la funcion mostrarJuego");
  const contenedor = document.getElementById("juego");
  const btnJugar = document.getElementById("btnJugar");
  contenedor.classList.remove("d-none");
  btnJugar.disabled = true;
  generarNumeroAleatorio(); 
};

const adivinarNumero = (e) => {
  e.preventDefault();
  const input = document.getElementById("tareaInput");
  const valor = input.value.trim();

  if (valor === "" || isNaN(valor)) {
    alert("Solo se aceptan números. Por favor ingresa un número válido.");
    return;
  }

  const numeroIngresado = Number(valor);

  if (numeroIngresado < 1 || numeroIngresado > 10) {
    alert("Por favor ingresa un número entre 1 y 10.");
    return;
  }

  if (numeroIngresado === numero) {
    alert("🎉 ¡Adivinaste el número!");
    estado = true;
    setTimeout(() => {
      location.reload();
    }, 1000);
  } else if (numeroIngresado > numero) {
    alert("❌ El número mágico es menor.");
    estado = false;
  } else {
    alert("❌ El número mágico es mayor.");
    estado = false;
  }

  input.value = "";
};

const formulario = document.getElementById("juego");
formulario.addEventListener("submit", adivinarNumero);

