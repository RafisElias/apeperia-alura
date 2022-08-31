// Variáveis
const btnAbreDialog = document.querySelector('#abreDialog');
const dialog = document.querySelector('.dialogNewsletter');
const dialogBody = document.querySelector('.dialogNewsletter-body');
const dialogOverlay = document.querySelector('.dialogNewsletter-overlay');
const nativeDialog = document.querySelector('dialog');

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', () => {
  console.log(nativeDialog);
  nativeDialog.showModal();
});

const fechandoDialog = () => nativeDialog.close();

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);