const campoCep = document.getElementById('cep');

campoCep.addEventListener('invalid', () => {
  campoCep.setCustomValidity('');

  console.log(campoCep.validity);

  if (!campoCep.validity.valid) {
    campoCep.setCustomValidity('Ops! Tem algo errado neste campo!');
    campoCep.parentNode.classList.add('contatoCampo--erro');
  }
});
