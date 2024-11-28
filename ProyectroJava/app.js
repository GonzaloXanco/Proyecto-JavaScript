let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function changeImage() {
    currentIndex = (currentIndex + 1) % totalImages;  
    const newTransformValue = -currentIndex * 100;  
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}


setInterval(changeImage, 4000);

function toggleContenido() {
  
  var contenidoOculto = document.getElementById("contenido-oculto");
  var boton = document.getElementById("btn-leer-mas");

  
  if (contenidoOculto.style.display === "none" || contenidoOculto.style.display === "") {
    contenidoOculto.style.display = "block";
    boton.textContent = "Learn Less";
  } else {
    contenidoOculto.style.display = "none";
    boton.textContent = "Learn More";
  }
}



