const inputRomano = document.getElementById('inputRomano')
const respostaNumerico = document.getElementById('respostaNumerico')

const converterR = document.getElementById('converterR');

inputRomano.oninput = function calcular(){
    if(converterR.checked){
        var romano = inputRomano.value
        elementosNotRomanos = /[^IVXLCDM]/g
        if(elementosNotRomanos.test(inputRomano.value)){
            respostaNumerico.innerText = 'Caracteres invalidos encontrados'
        }else{
            respostaNumerico.innerText = ''
            var nRoman = {  
                "M": 1000,
                "D": 500,
                "C": 100,
                "L": 50,
                "X": 10,
                "V": 5,
                "I": 1
            };

            
            let total = 0;
            let prevValue = 0;
        
            for (let i = romano.length - 1; i >= 0; i--) {
                const symbol = romano[i];
                const value = nRoman[symbol];
        
                if (value >= prevValue) {
                    total += value;
                } else {
                    total -= value;
                }
        
                prevValue = value;

                respostaNumerico.innerText = total
            }
        }
    }else{
        respostaNumerico.innerText = ''
    }
}
