let continuar = 0;
let listaPalavras = ["Abacaxi", "Azeitona", "Banana", "Cereja", "Caju", "Coco", "Uva",
                    "Maçã", "Manga", "Morango", "Mirtilo", "Milho-verde", "Melão",
                    "Pêra", "Pêssego", "Kiwi", "Limão", "Laranja",  "Melancia", "Tomate"];

do{
     let palavra = escolhadoComputador();
    let palavraSemAcento = removerAcentos(palavra);
    let estado = Array(palavra.length).fill("_");
    let letras = [];
    let erros = 0;

    while (estado.includes("_") && erros < 6) {
        console.log(`Palavra: ${estado.join(" ")}`);
        console.log(`Erros restantes: ${6 - erros}`);
        let letra = prompt("Digite uma letra:").toLowerCase();

        if (letras.includes(letra)) {
            console.log("Você já tentou essa letra.");
            continue;
        }

        letras.push(letra);

        if (palavraSemAcento.includes(letra)) {
            palavraSemAcento.split("").forEach((char, i) => {
                if (char === letra) estado[i] = palavra[i]; // mantém o acento
            });
            console.log("Boa! Acertou a letra.");
        } else {
            erros++;
            console.log("A palavra não contém essa letra.");
        }
    }

    console.log(erros === 6 ? `Você perdeu! A palavra era: ${palavra}` :
                              `Parabéns! Você acertou a palavra: ${palavra}`);

    continuar = (prompt("Deseja continuar jogando? \n[1] - SIM \n[2] - NÃO"));

}while(continuar == 1);

function escolhadoComputador() {
    return listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
}

function removerAcentos(palavra) {
    return palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
} //para lidar com os palpites "a" que se divergiam de "ã".