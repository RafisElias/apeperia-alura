document.getElementById('new0').style.display = 'block';
const btns = document.querySelectorAll('.listaDeArtigos-slider-item');

const new0 = document.getElementById('new0');
const new1 = document.getElementById('new1');
const new2 = document.getElementById('new2');

const selectedButton = '0';

// Criando indicador do slider atual
const indicadorSlideAtual = document.createElement('span');
// indicadorSlideAtual.add('escondeVisualmente');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.textContent = "(Slide Atual)";

// Percorre todos os botoes controladores
btns.forEach(function (btn) {
  btn.addEventListener('click', () => {

    for (const noticia of [...document.querySelectorAll('.listaDeArtigos-item')]) {
      noticia.style.display = btn.getAttribute('data-slideritem') === noticia.getAttribute('data-noticia') ? 'block' : 'none';
    }
    btn.append(indicadorSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function (btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    });

    this.classList.add('listaDeArtigos-slider-item--ativo');
  });
});