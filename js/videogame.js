import api from "./api.js"


const videogame = 1;

 const linkProdutos = {
            "1": "Playstation5-Pro.html",
            "2": "XboxSeriesX.html",
            "3": "Switch.html",
            "4": "Switch-2.html"
        };

function gerarLink(id){
    let linkProduto = linkProdutos[id];
    let link = `../Produtos/Videogames/${linkProduto}`
    return link; 
}


async function buscarVideoGames() {   

    try {
        const response = await api.get(`/Produto/${videogame}`);
        const produtos = response.data;
        console.log(produtos)


        const container = document.querySelector(".card-produto");
        container.innerHTML = "";

        produtos.forEach(p => {

            const produtoDiv = document.createElement("div");
            produtoDiv.classList.add("detalhes-produto");
            
           const link = gerarLink(p.id) + `?id=${p.id}`;
           

            produtoDiv.innerHTML = `

                
                <h2>${p.nome}</h2>
                <img class="imagem" src="${p.imagem}"/>
                <p class="descricao">${p.descricao}</p>
                <div class="compra">
                    <div ><span class="preco">R$ ${p.precoVenda}</span></div>
                    <div class="botao">
                        <a class="produtoSelecionado"  href="${link}"  data-id="${p.id}" >Detalhes</a>
                    </div>
                </div>
            `;



            container.appendChild(produtoDiv);
        });

        

        
    } catch (error) {
        console.error("Erro na chamada", error.message)
    }
}

buscarVideoGames();


