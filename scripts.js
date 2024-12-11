/* Variaveis ( serve para guardar informaçoes)
Funçoes ( Uma função é um bloco de código que executa alguma operação.) 
document= HTML
querySelector ( selecionao um item do HTML) 
addeEventListener ( ferramenta para avisar oque acontece nas ordem de programção)
 */ 


let botaosom = document.querySelector('.botao-som')
let video = document.querySelector('video')

botaosom.addEventListener('click', ligarsom)

function ligarsom(){
   video.muted = false
}
