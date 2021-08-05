const Telegraf = require('telegraf');
const luhn = require('luhn');

bot.command('extrapolar', (ctx => {
    ctx.reply('Estos son mis comandos: \n/extrapolate \n/similitud'); // El símbolo \n se usa para crear un salto de linea (un enter)
}))

bot.command('activación', (ctx => {
    var texto = ctx.update.message.text.split(' '); //Convertimos el texto del mensaje en una lista (si el mensaje era
                                                    // /extrapolate hola pasaría a ser ['/extrapolate', 'hola'])
    var tarjeta = texto[1]; //Recuerden que se empieza a contar desde 0

    if(tarjeta == undefined){//Comprueba si el usuario escribió /extrapolate sin ningún parametro
        ctx.reply('Introduzca una tarjeta válida!');
        return;//Rompe la función y hace que el proceso termine aquí
    }

    if(luhn.validate(tarjeta) == false){//Si la tarjeta no pasa el algoritmo de luhn
        ctx.reply('Introduzca una tarjeta válida!');
        return;
    }
    //Crea una string a base de la string de la que se saca la propiedad (hola.subtring(0, 3) = hol) el primer caracter es el número 0
    //                               |   Primer carácter  Cantidad de caracteres de la string tarjeta - 6
    //                               |          |            |
    var tarjeta_extrapolada = tarjeta.substring(0, tarjeta.length - 6) + 'xxxxxx';
    ctx.reply('Aquí esta su tarjeta: \n' + tarjeta_extrapolada);
}))

bot.command('similitud', (ctx => {
    var text = ctx.update.message.text.split(' ');
    var tarjeta1 = text[1];
    var tarjeta2 = text[2];

    if(tarjeta1 == undefined || tarjeta2 == undefined){
        ctx.reply('Introduzca una tarjeta válida!');
        console.log('1 ', tarjeta1, tarjeta2)
        return;
    }

    if(luhn.validate(tarjeta1) == false ||luhn.validate(tarjeta2) == false){
        ctx.reply('Introduzca una tarjeta válida!');
        return;
    }

    var i = 0; //Usaremos para recorrer cada caracter de las tarjetas
    var bin = tarjeta1.substring(0, 6); //El bin de la primera tarjeta será el bin del resultado
    var tarjeta_sin_bin_1 = tarjeta1.substring(6, tarjeta1.length);//El nombre lo dice todo
    var tarjeta_sin_bin_2 = tarjeta2.substring(6, tarjeta1.length);

    while(i < tarjeta_sin_bin_1.length){
        if(tarjeta_sin_bin_1[i] == tarjeta_sin_bin_2[i]){//Comprueba si el caracter en la posición del valor de i es igual en ambas tarjetas
            bin += tarjeta_sin_bin_1[i]; //Igual que poner bin = bin + tarjeta_sin_bin_1[i];
        }else{
            bin += 'x';
        }
        i += 1; // Esto es igual que poner i = i + 1;
    }

    ctx.reply('Aquí esta su tarjeta: \n' + bin);
}))


bot.launch();
