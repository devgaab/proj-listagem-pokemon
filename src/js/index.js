const body = document.querySelector("body");
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");


botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/solrock.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/lunatone.png");
    }
});


const searchBar = document.querySelector('.search-bar input');
const cards = document.querySelectorAll('.listagem-pokemon .cartao-pokemon');


searchBar.addEventListener('input', function () {
    const termoPesquisa = searchBar.value.toLowerCase();

    cards.forEach(card => {
        const nomePokemon = card.querySelector('.informacoes span:first-child').textContent.toLowerCase();
        if (nomePokemon.includes(termoPesquisa)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});


const pokemonImg = document.querySelectorAll(".gif");


for (let i = 1; i <= 26; i++) {
    const buttonSwitchSprite = document.getElementById(`button-switch-sprite-${i}`);

    buttonSwitchSprite.addEventListener("click", () => {
        const spriteInUse = body.classList.contains(`./src/imagens/${i}.gif`);

        body.classList.toggle(`./src/imagens/${i}.gif`);

        if (spriteInUse) {
            pokemonImg[i - 1].setAttribute("src", `./src/imagens/${i}.gif`);
        } else {
            const audio = new Audio("./src/audio/Shiny Sparkle Sound Effect Generation 3.mp3");
            audio.play();

            const sparkleImg = document.createElement("img");
            sparkleImg.src = "./src/imagens/sparkle.gif";
            sparkleImg.style.position = "absolute";
            sparkleImg.style.width = "100%";
            sparkleImg.style.height = "100%";
            sparkleImg.style.top = "0";
            sparkleImg.style.left = "0";
            buttonSwitchSprite.style.position = "relative";
            sparkleImg.style.imageRendering = "pixelated";
            sparkleImg.classList.add("sparkle-image");

            buttonSwitchSprite.appendChild(sparkleImg);

            setTimeout(() => {
                buttonSwitchSprite.removeChild(sparkleImg);
            }, 1000);

            pokemonImg[i - 1].setAttribute("src", `./src/imagens/${i}-shiny.gif`);
            pokemonImg[i - 1].style.imageRendering = "pixelated";
            pokemonImg[i - 1].style.imageRendering = "smooth";
        }
    });
}

for (let i = 1; i <= 26; i++) {
    const selector = "body #button-switch-sprite-" + i;

    const element = document.querySelector(selector);
    if (element) {
        element.style.background = "none";
        element.style.border = "none";
        element.style.cursor = "pointer";
    }
}


window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

function toTopFunction() {
    const scrollToTop = document.documentElement || document.body;
    scrollToTop.scrollIntoView({ behavior: "smooth" });
}