const luhn = require('luhn'); //Esta librería checkea si la tarjeta es válida

//Esta función genera un número aleatorio
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


//Esta función la uso para remplazar caracteres
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


//ALGORITMO
module.exports.generate = function(bin, fecha, ccv){
    let ccs = 0;
    let cards_text = '';

    //FECHA Y CCV
    if(fecha != undefined && ccv != undefined){
        fecha = fecha.split('/');
        if(bin.search('x') != -1){
            //BIN CON FECHA, CCV Y EXTRAPOLADO
            while(ccs < 13){
                let bin2 = bin;
                let i = 0;
    
                while(i < 16){
                    if(bin2[i] == 'x'){
                        bin2 = bin2.replaceAt(i, random(0, 9).toString());
                        console.log('x')
                    };
                    if(bin2[i] != undefined){
                        console.log(bin[i])
                    };
                    if(bin2[i] == undefined){
                        bin2 = bin2.replaceAt(i, random(0, 9).toString());
                    };
                    i += 1;
                };
                
                if(luhn.validate(bin2)){
                    ccs += 1;
                    cards_text = cards_text + bin2 + '|' + fecha[0] + '|20' + fecha[1] + '|' + ccv + '\n';
                };
            };
            return cards_text;

        }else{
            //BIN CON FECHA, CCV Y SIN ESTAR EXTRAPOLADO
            while(ccs < 13){
                let bin2 = bin;
    
                while(bin2.length < 16){
                    bin2 = bin2 + random(0, 9);
                };
                
                if(luhn.validate(bin2)){
                    ccs += 1;
                    cards_text = cards_text + bin2 + '|' + fecha[0] + '|20' + fecha[1] + '|' + ccv + '\n';
                };
            };
            return cards_text;
        };
    };

    //FECHA
    if(fecha != undefined){
        fecha = fecha.split('/');
        if(bin.search('x') != -1){
            //BIN CON FECHA Y EXTRAPOLADO
            while(ccs < 13){
                let bin2 = bin;
                let i = 0;
    
                while(i < 16){
                    if(bin2[i] == 'x'){
                        bin2 = bin2.replaceAt(i, random(0, 9).toString());
                        console.log('x')
                    };
                    if(bin2[i] != undefined){
                        console.log(bin[i])
                    };
                    if(bin2[i] == undefined){
                        bin2 = bin2.replaceAt(i, random(0, 9).toString());
                    };
                    i += 1;
                };
                
                if(luhn.validate(bin2)){
                    ccs += 1;
                    cards_text = cards_text + bin2 + '|' + fecha[0] + '|20' + fecha[1] + '|' + random(0, 9).toString() + random(0, 9).toString() + random(0, 9).toString() + '\n';
                };
            };
            return cards_text;

        }else{
            //BIN CON FECHA Y SIN ESTAR EXTRAPOLADO
            while(ccs < 13){
                let bin2 = bin;
    
                while(bin2.length < 16){
                    bin2 = bin2 + random(0, 9);
                };
                
                if(luhn.validate(bin2)){
                    ccs += 1;
                    cards_text = cards_text + bin2 + '|' + fecha[0] + '|20' + fecha[1] + '|' + random(0, 9).toString() + random(0, 9).toString() + random(0, 9).toString() + '\n';
                };
            };
            return cards_text;
        };
    };

    //SIN FICHA NI CCV
    if(bin.search('x') != -1){
        //BIN EXTRAPOLADO
        while(ccs < 13){
            let bin2 = bin;
            let i = 0;

            while(i < 16){
                if(bin2[i] == 'x'){
                    bin2 = bin2.replaceAt(i, random(0, 9).toString());
                    console.log('x')
                };
                if(bin2[i] != undefined){
                    console.log(bin[i])
                };
                if(bin2[i] == undefined){
                    bin2 = bin2.replaceAt(i, random(0, 9).toString());
                };
                i += 1;
            };
            
            if(luhn.validate(bin2)){
                ccs += 1;
                let date = random(1, 12);
                if(date < 10){
                    date = '0' + date.toString();
                };
                cards_text = cards_text + bin2 + '|' + date + '|' + random(2023, 2029).toString() + '|' + random(0, 9).toString() + random(0, 9).toString() + random(0, 9).toString() + '\n';
            };
        };
        return cards_text;

    }else{
        //BIN SIN ESTAR EXTRAPOLADO
        while(ccs < 13){
            let bin2 = bin;

            while(bin2.length < 16){
                bin2 = bin2 + random(0, 9);
            };
            
            if(luhn.validate(bin2)){
                ccs += 1;
                let date = random(1, 12);
                if(date < 10){
                    date = '0' + date.toString();
                };
                cards_text = cards_text + bin2 + '|' + date + '|' + random(2023, 2029).toString() + '|' + random(0, 9).toString() + random(0, 9).toString() + random(0, 9).toString() + '\n';
            };
        };
        return cards_text;
    };
};