// Obtén el contexto de dibujo del canvas
const canvas = document.getElementById("stadiumCanvas");
const ctx = canvas.getContext("2d");

// Dibujar el campo de fútbol
function drawFootballPitch() {
  ctx.fillStyle = "#34c924"; // Color verde para el césped
  ctx.fillRect(50, 50, 700, 700); // Dibujar el campo de fútbol

  // Líneas del campo
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 5;

  // Líneas de banda
  ctx.strokeRect(50, 50, 700, 700);

  // Línea central
  ctx.beginPath();
  ctx.moveTo(400, 50);
  ctx.lineTo(400, 750);
  ctx.stroke();

  // Círculo central
  ctx.beginPath();
  ctx.arc(400, 400, 100, 0, Math.PI * 2);
  ctx.stroke();

  // Área de penalti
  ctx.strokeRect(50, 200, 150, 400);
  ctx.strokeRect(600, 200, 150, 400);
}

// Dibujar las gradas
function drawStands() {
  ctx.fillStyle = "#333";
  ctx.fillRect(0, 50, 50, 700); // Lado izquierdo
  ctx.fillRect(750, 50, 50, 700); // Lado derecho
  ctx.fillRect(50, 0, 700, 50); // Lado superior
  ctx.fillRect(50, 750, 700, 50); // Lado inferior
}

// Dibujar el estadio
function drawStadium() {
  drawFootballPitch();
  drawStands();
}

// Llamar a la función para dibujar el estadio
drawStadium();
