const campoEmail = document.getElementById('email');
const sugestao = document.getElementById('sugestao');

const domains = ['gmail.com', 'uol.com'];
const secondLevelDomains = ['hotmail'];
const topLevelDomains = ["com", "net", "org"];

const superStringDistance = function (string1, string2) {
  // a string distance algorithm of your choosing
};

campoEmail.addEventListener('blur', () => {
  Mailcheck.run({
    email: campoEmail.value,
    domains: domains,                       // optional
    topLevelDomains: topLevelDomains,       // optional
    secondLevelDomains: secondLevelDomains, // optional
    suggested: function (suggestion) {
      console.log(suggestion.full);
      sugestao.style.display = "inline-block";
      sugestao.textContent = `Você quis dizer: ${suggestion.full} ?`;
      campoEmail.classList.add('contatoCampo--validouErro');
      sugestao.parentNode.classList.add('contatoCampo--erro');
      sugestao.setAttribute('tabindex', '0');
      sugestao.setAttribute('role', 'alert');
      sugestao.focus();
    },
  });
});