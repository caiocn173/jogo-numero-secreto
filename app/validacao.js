function verificarChuteValido(chute){

    const numero = +chute;

    if(verificaChuteInvalido(numero)){

        elementoChute.innerHTML += `<div>Valor invalido</div>`;

    }

    if(verificaMaiorMenorLimite(numero)){

        elementoChute.innerHTML += `<div>Fale um numero entre 
        ${menorValor} e ${maiorValor}</div>`;
        
    }

    if(numero === numeroSecreto){

        document.body.innerHTML = `<h2>Voce acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`;
        
    }else if(numero > numeroSecreto){

        elementoChute.innerHTML += `<div>O numero secreto e menor <i class="fa-sharp 
        fa-solid fa-arrow-down"></i></div>`;

    }else{

        elementoChute.innerHTML += `<div>O numero secreto e maior <i class="fa-sharp 
        fa-solid fa-arrow-up"></i></div>`

    }

}

function verificaChuteInvalido(numero) {
    return Number.isNaN(numero);
}

function verificaMaiorMenorLimite(numero){
    return (numero > maiorValor || numero < menorValor) ? true : false;
}

document.body.addEventListener("click", (e) =>{

        if(e.target.id == "jogar-novamente"){

            window.location.reload();

        }

});