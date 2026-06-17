document.querySelectorAll('.mapa-click').forEach(img => {
  img.addEventListener('click', function() {
    const fullscreen = document.createElement('div');
    fullscreen.classList.add('mapa-fullscreen');

    const imgClone = this.cloneNode();
    fullscreen.appendChild(imgClone);

    document.body.appendChild(fullscreen);

    fullscreen.addEventListener('click', function() {
      this.remove();
    });
  });
});


document.addEventListener('keydown', function(e) {
  if(e.key === 'Escape') {
    const fullscreen = document.querySelector('.mapa-fullscreen');
    if(fullscreen) fullscreen.remove();
  }
});


document.querySelectorAll('.card button:first-child').forEach((btn, index) => {
  btn.addEventListener('click', function() {
    const nombres = ['Ocelote', 'Balam', 'Guerrero Águila'];
    alert('Cargando mapa de: ' + nombres[index]);
  });
});