// import api from './api.js';


// let computador = 'Computador';

// async function buscarComputadores() {
//     try {
//         var response = await api.get(`/Produto/Categoria/${computador}`);
//         var computadores = response.data;
//         console.log(computadores)

//         const container = document.querySelector(".card-computador");
//         container.innerHTML = "";

//         computadores.forEach(p => {
//             const computadorDiv = document.createElement("div");
//             computadorDiv.classList.add("detalhes");

//             computadorDiv.innerHTML = `
//                 <h2>${p.nome}</h2>
//                 <img class="imagem" src="${p.imagem}"/>
//                 <p class="descricao">${p.descricao}</p>
//                 <div class="compra">
//                     <div ><span class="preco">R$ ${p.precoVenda}</span></div>
//                     <div class="botao">Comprar</div>
//                 </div>
//             `;

//             container.appendChild(computadorDiv);
//         });
//     } catch (error) {
//         console.log(error);
//     }

// }

// buscarComputadores();


import api from "./api.js"


const computador = "Computador";
async function buscarComputadores() {
    try {
        const response = await api.get(`/Produto/Categoria/${computador}`);
        const computadores = response.data;
        console.log(computadores)


        const container = document.querySelector(".card-produto");
        container.innerHTML = "";

        computadores.forEach(p => {
            const produtoDiv = document.createElement("div");
            produtoDiv.classList.add("detalhes-produto");
            produtoDiv.innerHTML = `
                <h2>${p.nome}</h2>
                <img class="imagem" src="${p.imagem}"/>
                <p class="descricao">${p.descricao}</p>
                <div class="compra">
                    <div ><span class="preco">R$ ${p.precoVenda}</span></div>
                    <div class="botao"><a href="../Pagamento.html">Comprar</a></div>
                </div>
            `;

            container.appendChild(produtoDiv);
        });

        
    } catch (error) {
        console.error("Erro na chamada", error.message)
    }
}

buscarComputadores();



