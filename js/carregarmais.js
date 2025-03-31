 // Lista de cursos simulada
 const cursos = [
    { img: "../img/cursos/moedasCripto.jpeg", nome: "Cripto Moedas", situacao: "Em andamento" },
    { img: "../img/cursos/eth.jpeg", nome: "Etherium", situacao: "Em andamento" },
    { img: "../img/cursos/mundo-cripto.webp", nome: "Mundo Cripto", situacao: "Em andamento" },
    { img: "../img/cursos/criptos.jpeg", nome: "Cripto Moedas", situacao: "Em andamento" },
    { img: "../img/cursos/carteira-digital.webp", nome: "Carteira Digital", situacao: "Em andamento" },
    { img: "../img/cursos/mineirar.webp", nome: "Mineração de Cripto", situacao: "Em andamento" },
    { img: "../img/cursos/moedas-ia.jpeg", nome: "Cipto com IA", situacao: "Em andamento" },
    { img: "../img/cursos/trade.webp", nome: "Trade", situacao: "Em andamento" },
    { img: "../img/cursos/trade.webp", nome: "Trade", situacao: "Em andamento" },
    { img: "../img/cursos/trade.webp", nome: "Trade", situacao: "Em andamento" },
];

let cursosExibidos = 0;
const container = document.getElementById("cursoContainer");
const linkCarregarMais = document.getElementById("loadMoreLink");
const linkMostrarMenos = document.getElementById("showLessLink");

// Função para definir cor da badge

function carregarCursos(qtd) {
    const proximosCursos = cursos.slice(cursosExibidos, cursosExibidos + qtd);

    proximosCursos.forEach(curso => {
        const card = document.createElement("div");
        card.className = "bg-white shadow-lg rounded-lg overflow-hidden curso-card";

        card.innerHTML = `
            <img src="${curso.img}" alt="${curso.nome}" class="w-full h-48 object-cover">
            <div class="p-4">
                <div class="flex justify-between items-center">
                    <h2 class="text-lg font-semibold text-gray-800">${curso.nome}</h2>
                    <span class="text-white text-xs font-semibold px-2 py-1 rounded-full bg-[#764472]">
                        ${curso.situacao}
                    </span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    cursosExibidos += proximosCursos.length;
    atualizarLinks();
}

function mostrarMenos() {
    container.innerHTML = ""; // Limpa os cursos
    cursosExibidos = 0;
    carregarCursos(4);
}

function atualizarLinks() {
    linkMostrarMenos.classList.toggle("hidden", cursosExibidos <= 4);
    linkCarregarMais.classList.toggle("hidden", cursosExibidos >= cursos.length);
}

// Carregar os primeiros 4 cursos
carregarCursos(4);

// Eventos
linkCarregarMais.addEventListener("click", (e) => {
    e.preventDefault();
    carregarCursos(4);
});

linkMostrarMenos.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarMenos();
});