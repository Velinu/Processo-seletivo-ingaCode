const tamanhoSenha = document.getElementById('tamanhoSenha');
const quantidadeCaracteres = document.getElementById('quantidadeCaracteres')

const gerarSenha = document.getElementById('gerarSenha');
const copiarTrans = document.getElementById('copiarTrans');

const newSenha = document.getElementById('senha')



tamanhoSenha.oninput = function(){
    quantidadeCaracteres.innerText = `Sua senha terá ${parseInt(parseInt(tamanhoSenha.value))}`
}

gerarSenha.onclick = function(){

    const maiusculas = document.getElementById('maiusculas');
    const minusculas = document.getElementById('minusculas');
    const numeros = document.getElementById('numeros');
    const simbolos = document.getElementById('simbolos')
    const emojis = document.getElementById('emojis');

    const opcoesSelecionadas = [maiusculas, minusculas, numeros, simbolos, emojis].filter(opcao => opcao.checked)

    if(opcoesSelecionadas.length > 0){

        caracMa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        caracMi = 'abcdefghijklmnopqrstuvwxyz'
        caracN = '0123456789'
        caracS = '!@#$%^&*()_+-=[]{}|;:,.<>?'
        caracEm = ['😀', '😎', '🔥', '🌟', '❤️'];   

        senha = ''

        caracParaSenha = []

        if(maiusculas.checked){
            caracParaSenha.push(...caracMa)
        }

        if(minusculas.checked){
            caracParaSenha.push(...caracMi)
        }

        if(numeros.checked){
            caracParaSenha.push(...caracN)
        }

        if(simbolos.checked){
            caracParaSenha.push(...caracS)
        }

        if(emojis.checked){
            caracParaSenha.push(...caracEm)
        }

            for(let i = 0; i<parseInt(tamanhoSenha.value); i++){
                senha += caracParaSenha[Math.floor(Math.random() * caracParaSenha.length)]
            }

            if(senha != undefined){
            newSenha.innerText = senha
            }

    }else{
        newSenha.innerText = `Selecione ao menos uma das opções`
    }        

}

copiarTrans.onclick = function(){

        navigator.clipboard.writeText(newSenha.innerText)
}






