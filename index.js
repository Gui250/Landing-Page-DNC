var leonardo = document.getElementById('leonardo');
var samantha = document.getElementById('samantha');
var bruna = document.getElementById('bruna');
var setaDireita = document.getElementById('seta-direita');
var setaEsquerda = document.getElementById('seta-esquerda');


function rolarParaDireita() { 
    leonardo.style = "display:none"   
    bruna.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top: 55px"
    setaDireita.style = "display:none"
}

function rolarParaEsquerda() { 
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}