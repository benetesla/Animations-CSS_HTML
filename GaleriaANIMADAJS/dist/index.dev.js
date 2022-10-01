"use strict";

//criar imagens aleatorias
function criarImagensAleatorias() {
  var imagens = [];

  for (var i = 0; i < 5; i++) {
    var imagem = {};
    imagem.id = i;
    imagem.url = "http://lorempixel.com/400/200/sports/" + i;
    imagens.push(imagem);
  }

  return imagens;
} //criar imagens


function criarImagens() {
  var imagens = criarImagensAleatorias();
  var imagensHTML = "";

  for (var i = 0; i < imagens.length; i++) {
    imagensHTML += "<img id='" + imagens[i].id + "' src='https://picsum.photos/images" + imagens[i].url + "'/>";
  }

  document.getElementById("imagens").innerHTML = imagensHTML;
}

alert("teste");