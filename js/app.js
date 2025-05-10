const mostrarJuego = () => {
  console.log("desde la funcion mostrarJuego");
  const contenedor = document.getElementById("juego");
  contenedor.classList.remove("d-none");
};

const generarNumeroAleatorio = () => {
  const numero = Math.floor(Math.random() * 10) + 1;
  console.log(numero);
};
