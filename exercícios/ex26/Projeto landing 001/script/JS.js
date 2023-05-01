rodape = document.querySelector('footer#cor-rodape')
titulo = document.querySelector('header#cor')
function switchMode() {
if (dark.style.display == 'block') {
dark.style.display = 'none';
light.style.display = 'block';
artigo.style.transition = '1s';
artigo.style.backgroundColor = '#1b1a1a';
artigo.style.color = 'white';
rodape.style.transition = '1s';
rodape.style.color = 'white';
rodape.style.backgroundColor = '#1b1a1a';
titulo.style.transition = '1s';
titulo.style.color = 'white';
titulo.style.backgroundColor = '#1b1a1a';
} else if (light.style.display == 'block') {
light.style.display = 'none';
dark.style.display = 'block';
artigo.style.transition = '1s';
artigo.style.backgroundColor = 'white';
artigo.style.color = '#1b1a1a';
rodape.style.transition = '1s';
rodape.style.color = '#1b1a1a';
rodape.style.backgroundColor = 'white';
titulo.style.transition = '1s';
titulo.style.color = '#1b1a1a';
titulo.style.backgroundColor = 'white';
} else {
// caso em que ambos os elementos têm a mesma exibição
// neste caso, escolhemos exibir o elemento "dark"
dark.style.display = 'block';
light.style.display = 'none';
}
}
