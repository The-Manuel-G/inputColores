document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.getElementById('formContainer');
  
    for (let i = 0; i < 5; i++) {
      const row = document.createElement('div');
      row.className = 'form-row';
  
      for (let j = 0; j < 5; j++) {
        const input = document.createElement('input');
        input.type = 'text';
        
        input.addEventListener('input', function() {
          cambiarColor(this);
          contarColores();
        });

        // Agregar estilos para la fuente Roboto
        input.style.fontFamily = 'Roboto, sans-serif';

        row.appendChild(input);
      }
  
      formContainer.appendChild(row);
    }
  });
  
  function cambiarColor(input) {
    const color = input.value.toLowerCase();
    const backgroundColor = getColor(color);

    // Establecer el color del fondo
    input.style.backgroundColor = backgroundColor;

    // Establecer el color del texto
    input.style.color = backgroundColor === '' ? 'black' : 'white';
  }
  
  function contarColores() {
    const countRed = document.getElementById('countRed');
    const countGreen = document.getElementById('countGreen');
    const countBlue = document.getElementById('countBlue');
  
    let redCount = 0;
    let greenCount = 0;
    let blueCount = 0;
  
    const inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
      const color = input.value.toLowerCase();
      if (color === 'rojo') {
        redCount++;
      } else if (color === 'verde') {
        greenCount++;
      } else if (color === 'azul') {
        blueCount++;
      }
    });
  
    countRed.textContent = redCount;
    countGreen.textContent = greenCount;
    countBlue.textContent = blueCount;
  }
  
  function getColor(color) {
    return color === 'rojo' ? 'red' :
           color === 'verde' ? 'green' :
           color === 'azul' ? 'blue' : '';
  }
  
  function guardarDatos() {
    // Implementa aquí la lógica para guardar los datos en el servidor
      
  
     
    alert('Datos guardados correctamente.');
  }