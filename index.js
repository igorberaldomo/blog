import posts from "./Posts/posts.js";

let blog = window.document.getElementById("paginaBlog");
let initialNumber = 0;
let loadnumber = 8;

loadPagina(initialNumber, 0);

function loadPagina(initialNumber, add) {
  let cardline = document.getElementById("cardline");
  loadnumber = loadnumber + add;
  cardline.innerHTML = "";
  blog.innerHTML = "";
  for (let i = initialNumber; i < loadnumber; i++) {
    let card = ` <button class="invisibleButton" onclick="displayBlog(${
      posts[i].id
    })">
                <div class="blogCard">
                    <img src="./images/${posts[i].picture}" class="img" id="${[
      i,
    ]}" />
                    <h3 class="titulo">
                        ${posts[i].title}
                    </h3>
                    <p>categoria:${posts[i].category} </p>
                    <p class="descricao">
                        ${posts[i].text.slice(0, 200)}
                    </p>
                    <p>acessos:${posts[i].acessed}</p>
                    <p>upload:${posts[i].date}</p>

                </div>
            </button>`;
    cardline.innerHTML += card;
  }
}

function displayBlog(i) {
  updateAcessed(i);
  let blog = window.document.getElementById("paginaBlog");
  let informaçãoBlog = `
            <div id="conteudoBlog">
                <button id="botaoInicio" onclick="voltarPagina()">pagina inicial</button>
                <h1>${posts[i].subtitle}</h1>
                <p>
                ${posts[i].text}
                </p>
                 <button id="botaoFinal" onclick="voltarPagina()">pagina inicial</button>
            </div>`;

  cardline.innerHTML = "";
  blog.innerHTML += informaçãoBlog;
}
function voltarPagina() {
  blog.innerHTML = "";
  initialNumber = 0;
  loadPagina(initialNumber, 0);
}

window.displayBlog = displayBlog;
window.voltarPagina = voltarPagina;
function updateAcessed() {}
