
let qtdadultos = document.getElementById("adultos");
let qtdcriancas = document.getElementById("criancas");
let qtdduracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = qtdadultos.value;
    let criancas = qtdcriancas.value;
    let duracao = qtdduracao.value;

    let qtdcarnes = adultos * carnes(duracao) + (criancas * carnes(duracao));
    let qtdcervejas = adultos * cervejas(duracao);
    let qtdbebidas = adultos * bebidas(duracao) + (criancas * bebidas(duracao));

    resultado.innerHTML = `<p>${qtdcarnes / 1000}Kg de Carne</p>`;
    resultado.innerHTML += `<p>${qtdcervejas /1000}L de Cerveja</p>`;
    resultado.innerHTML += `<p>${qtdbebidas / 1000}L de Bebidas</p>`;

}

function carnes(duracao){
    if (duracao >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function cervejas(duracao){
    if (duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidas(duracao){
    if (duracao >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}
