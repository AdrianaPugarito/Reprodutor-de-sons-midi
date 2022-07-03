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

/*function tocaSom(idElementoAudio) {//função com parâmetro
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

  tecla.onkeydown = function (evento) {

    /*console.log (evento.code == 'Space')
    
    if (evento.code === 'Space'); { //space tecla do teclado
      tecla.classList.add('ativa');
    }

    if (evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
    //fazendo nosso codigo mais limpo e generico
    if (evento.code === 'Space' || evento.code === 'Enter'); {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}*/

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento === null) {
    console.log('Elemento não encontrado ou seletor inválido');
  }

  /*if (elemento != null) {
    if (elemento.localName === 'audio'){
      elemento.play();
    }*/
    if (elemento != null && elemento.localName === 'audio') { //podemos eliminar != null
    elemento.play();
  }
  else{
    console.log('Elemento não encontrado ou seletor inválido');
      /*if (elemento === null) {
      console.log('Elemento não encontrado');
    }*/
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  console.log(idAudio);

  tecla.onclick = function () { 
    tocaSom(idAudio);
  }

  console.log(contador);

  tecla.onkeydown = function (evento) {

    if (evento.code === 'Space' || evento.code === 'Enter'); {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}


