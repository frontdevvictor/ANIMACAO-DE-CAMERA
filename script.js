let light = document.getElementById('circle');

document.getElementById('button').addEventListener('click', () => {
  light.classList.remove('flash-animation');
  setTimeout(function(){
  light.classList.add('flash-animation');
  },500);
});

let eject = document.getElementById('photo');

document.getElementById('button').addEventListener('click', function() {
    // Adiciona a animação de flash
    document.querySelector('.flash').classList.add('flash-animation');
    
    // Remove a animação de flash após a conclusão
    setTimeout(function() {
        document.querySelector('.flash').classList.remove('flash-animation');
    }, 200);

    // Adiciona a animação de ejeção da foto
    document.getElementById('photo').classList.add('eject-photo');
});