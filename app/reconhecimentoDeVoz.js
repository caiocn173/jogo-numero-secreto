const elementoChute = document.getElementById("chute");



window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();


recognition.addEventListener("result", onSpeak);

function onSpeak(e){

    let chute = e.results[0][0].transcript;
    
    exibirChuteNaTela(chute);

    verificarChuteValido(chute);

}

function exibirChuteNaTela(chute){

    elementoChute.innerHTML = `
    
    <div>Voce disse:</div>
    <span class="box">${chute}</span>
    
    `

}

recognition.addEventListener("end", () => recognition.start());