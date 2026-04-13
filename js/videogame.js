import api from "./api.js"


const videogame = "Videogames";
async function buscarVideoGames() {
    try {
        const response = await api.get(`/Produto/Categoria/${videogame}`);
        const produtos = response.data;
        console.log(produtos)


        const container = document.querySelector(".card-produto");
        container.innerHTML = "";

        produtos.forEach(p => {
            const produtoDiv = document.createElement("div");
            produtoDiv.classList.add("detalhes-produto");
            produtoDiv.innerHTML = `
                <h2>${p.nome}</h2>
                <img class="imagem" src="${p.imagem}"/>
                <p class="descricao">${p.descricao}</p>
                <div class="compra">
                    <div ><span class="preco">R$ ${p.precoVenda}</span></div>
                    <div class="botao">Comprar</div>
                </div>
            `;

            container.appendChild(produtoDiv);
        });

        
    } catch (error) {
        console.error("Erro na chamada", error.message)
    }
}

buscarVideoGames();


