
const inputNumero = document.getElementById('inputNumero')
const respostaRomano = document.getElementById('respostaRomano')
const converterCheck  = document.getElementById('converter')

inputNumero.oninput = function(){
    if(converterCheck.checked){
        var numerico = inputNumero.value;
        if(numerico == 0){
            respostaRomano.innerText = 'Nenhuma resposta'
        }else if(numerico > 999999){ 
            respostaRomano.innerText = 'Numero muito alto'
        }
        else{
            respostaRomano.innerText = ''
            var nRoman = {  
            "M": 1000,
            "CM": 900,
            "D": 500,
            "CD": 400,
            "C": 100,
            "XC": 90,
            "L": 50,
            "XL": 40,
            "X": 10,
            "IX": 9,
            "V": 5,
            "IV": 4,
            "I": 1
        };
        
            
            const entradas = Object.entries(nRoman)
            
            for (let i = 0; i<entradas.length; i++) {
                const [symbol, value] = entradas[i]
                while (numerico >= value) {
                    respostaRomano.innerText += symbol;
                    numerico -= value;
                }
            } 
        }
    }else{
        respostaRomano.innerText = ''
    }



}