const imagens = document.getElementById('carrossel-container')
const imagem = document.querySelector('.carrossel-container img')

let atual = 0


function carrossel() {
    atual++
    if (atual > 13) {
        atual = 0
    }
    console.log(8);
    imagens.style.transform = `translatex(${-atual * 100}px)`

}

setInterval(carrossel, 1400)