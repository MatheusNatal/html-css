document.addEventListener("DOMContentLoaded", function() {
    const inputHospedes = document.getElementById("ihospedes");
    const opcoesHospedes = document.querySelectorAll("#ihospedes option");

    inputHospedes.addEventListener("change", function() {
      opcoesHospedes[0].disabled = true;
    });
  });

  const form = document.querySelector('form');
  const chegadaInput = document.querySelector('#ichegada');
  const saidaInput = document.querySelector('#isaida');

  form.addEventListener('submit', function(event) {
    const chegadaDate = Date.parse(chegadaInput.value);
    const saidaDate = Date.parse(saidaInput.value);

    if (saidaDate <= chegadaDate) {
      event.preventDefault();
      alert('A data de saída deve ser posterior a data de chegada.');
      chegadaInput.value = '';
      saidaInput.value = '';
    }
  });

  const frases = [
  "Na Illumini Travel você pode",
  "Viajar sem se preocupar.",
  "Reserve agora mesmo!"
];

let indice = 0;
const tempo = 5000;

function trocarFrase() {
  const frase = document.getElementById("frase");
  frase.classList.remove("mostrar");
  frase.classList.remove("fade"); // remova a classe "fade" para reativar a animação
  void frase.offsetWidth; // reinicia a animação
  setTimeout(() => {
    frase.textContent = frases[indice];
    frase.classList.add("mostrar");
    frase.classList.add("fade"); // adiciona a classe "fade" para ativar a animação
    indice = (indice + 1) % frases.length;
  }, 1000); // espera um segundo para a animação terminar
}

setInterval(trocarFrase, tempo);
$(document).ready(function() {
  $('#itel').inputmask('(99) 99999-9999');
});

