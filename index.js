import posts from "./Posts/posts.js";
let blog = window.document.getElementById("paginaBlog");
let initialNumber = 0;
let loadnumber = 8;
let postsDisplay = posts;

loadPagina(initialNumber,postsDisplay);

function selectHandler(categoria) {
  filtrarCategorias(categoria);
  console.log(postsDisplay);
  loadPagina(initialNumber, postsDisplay);
}
function filtrarCategorias(categoria) {
  if (categoria != "none") {
    postsDisplay = posts.filter((post) => {
      return post.category == categoria;
    });
  } else {
    postsDisplay = posts;
  }
}

function loadPagina(initialNumber,  postsDisplay) {
  let cardline = document.getElementById("cardline");
  cardline.innerHTML = "";
  blog.innerHTML = "";

  for (let i = initialNumber; i < loadnumber; i++) {
    try {
      let card = ` <button class="invisibleButton" onclick="displayBlog(${
        postsDisplay[i].id
      })">
                <div class="blogCard">
                    <img src="./images/${postsDisplay[i].picture}" class="img" id="${[
        i,
      ]}" />
                    <h3 class="titulo">
                        ${postsDisplay[i].title}
                    </h3>
                    <p>categoria:${postsDisplay[i].category} </p>
                    <p class="descricao">
                        ${postsDisplay[i].text.slice(0, 200)}
                    </p>
                    <p>acessos:${postsDisplay[i].acessed}</p>
                    <p>upload:${postsDisplay[i].date}</p>

                </div>
            </button>`;
      cardline.innerHTML += card;
    } catch (error) {}
  }
}

function displayBlog(i) {
  updateAcessed(i);
  let blog = window.document.getElementById("paginaBlog");
  let informaçãoBlog = `
            <div id="conteudoBlog">
                <button id="botaoInicio" onclick="voltarPagina()">pagina inicial</button>
                <h1>${postsDisplay[i].subtitle}</h1>
                <p>
                ${postsDisplay[i].text}
                </p>
                 <button id="botaoFinal" onclick="voltarPagina()">pagina inicial</button>
            </div>`;

  cardline.innerHTML = "";
  blog.innerHTML += informaçãoBlog;
}
function voltarPagina() {
  blog.innerHTML = "";
  initialNumber = 0;
  loadPagina(initialNumber, posts);
}

window.displayBlog = displayBlog;
window.voltarPagina = voltarPagina;
window.selectHandler = selectHandler;
function updateAcessed() {}
