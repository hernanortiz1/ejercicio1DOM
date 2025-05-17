const mostrarJuego = () => {
  console.log("desde la funcion mostrarJuego");
  const contenedor = document.getElementById("juego");
  const btnJugar = document.getElementById("btnJugar");
  contenedor.classList.remove("d-none");
  btnJugar.disabled = true;
};

const generarNumeroAleatorio = () => {
  const numero = Math.floor(Math.random() * 10) + 1;
  console.log(numero);
};