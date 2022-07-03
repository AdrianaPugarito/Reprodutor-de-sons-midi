/*function tocaSom(idElementoAudio) {//função com parâmetro
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  //template string
  const idAudio = `#som_${instrumento}`; //texto dinâmico

  console.log(idAudio);

  tecla.onclick = function () { //função anônima 
    tocaSom(idAudio);
  }

  contador = contador + 1;

  console.log(contador);
}*/

function tocaSom(idElementoAudio) {//função com parâmetro
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;//template string

  console.log(idAudio);

  tecla.onclick = function () { //função anônima 
    tocaSom(idAudio);
  }

  //contador = contador + 1; subtituido por contador++

  console.log(contador);

  tecla.onkeydown = function (){
    tecla.classList.add('ativa');
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}

