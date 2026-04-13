import api from './api.js';


let computador = 'Computador';

async function buscarComputadores() {
    try {
        var response = await api.get(`/Produto/Categoria/${computador}`);
        var computadores = response.data;
        console.log(computadores)

        const container = document.querySelector(".card-computador");
        container.innerHTML = "";

        computadores.forEach(p => {
            const computadorDiv = document.createElement("div");
            computadorDiv.classList.add("detalhes");

            computadorDiv.innerHTML = `
                <h2>${p.nome}</h2>
                <img class="imagem" src="${p.imagem}"/>
                <p class="descricao">${p.descricao}</p>
                <div class="compra">
                    <div ><span class="preco">R$ ${p.precoVenda}</span></div>
                    <div class="botao">Comprar</div>
                </div>
            `;

            container.appendChild(computadorDiv);
        });
    } catch (error) {
        console.log(error);
    }

}

buscarComputadores();

