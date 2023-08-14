const converterPR = document.getElementById('converterPR')
const converterPD  = document.getElementById('converterPD')
const inputAmbos = document.getElementById('inputAmbos')

const respostaAmbos = document.getElementById('respostaAmbos')
inputAmbos.oninput = function(){
    var nRoman = {  
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    };
    if(converterPD.checked && converterPR.checked){
        alert('Selecione apenas um para conversão')
    }else if(converterPD.checked){
        const elementosNotRomanos = /[^IVXLCDM]/g
        if(elementosNotRomanos.test(inputAmbos.value)){
            respostaAmbos.innerText = 'Caracteres invalidos encontrados'
        }else{
            let total = 0;
            let prevValue = 0;
        
            for (let i = inputAmbos.value.length - 1; i >= 0; i--) {
                
                const symbol = inputAmbos.value[i];
                const value = nRoman[symbol];
        
                if (value >= prevValue) {
                    total += value;
                } else {
                    total -= value;
                }
        
                prevValue = value;

                respostaAmbos.innerText = total
            }
        }
    }else if(converterPR.checked){
        var numerico = parseInt(inputAmbos.value);
        if (numerico === 0) {
            respostaAmbos.innerText = 'Nenhuma resposta';
        } else if (numerico > 999999) {
            respostaAmbos.innerText = 'Número muito alto';
        } else {
            respostaAmbos.innerText = '';
            const entradas = Object.entries(nRoman);

            for (let i = 0; i < entradas.length; i++) {
                const [symbol, value] = entradas[i];
                while (numerico >= value) {
                    respostaAmbos.innerText += symbol;
                    numerico -= value;
                }
            }
        }
    }
};
