// Carne - 400 gr por pessoa + de 6 horas -  650 gr
// Cerveja - 1200ml por pessoa + 6 horas - 2000 ml
// Refrigerante/água - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = (adultos * carnePP(duracao)) + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = (adultos * cervejaPP(duracao)) ;
    let qtdTotalBebidas = (adultos * bebidasPP(duracao)) + (bebidasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p style="padding-bottom:10px;">${qtdTotalCarne} g de Carne</p>`
    resultado.innerHTML += `<p style="padding-bottom:10px;">${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p style="padding-bottom:10px;">${Math.ceil(qtdTotalBebidas/2000)} Garrafas de 2l de Bebidas</p>`

}

function carnePP(duracao){
    if(duracao >=6){
        return 650;
    }else{
    return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >=6){
        return 2000;
    }else{
    return 1200;
    }
}
function bebidasPP(duracao){
    if(duracao >=6){
        return 1500;
    }else{
    return 1000;
    }
}
