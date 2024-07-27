import posts from "./Posts/posts.js";
let post = window.document.getElementById("paginaPost");
let cardline = document.getElementById("cardline");
let initialNumber = 0;
let loadnumber = 8;
let postsDisplay = posts;
let clickedPosition = [0, 0, 0, 0, 0, 0, 0, 0]

loadPagina(initialNumber, postsDisplay);

function selectHandler(categoria) {
  filtrarCategorias(categoria);
  console.log(postsDisplay);
  loadPagina(initialNumber, postsDisplay);
}
function filtrarCategorias(categoria) {
  if (categoria != "todos") {
    postsDisplay = posts.filter((post) => {
      return post.category == categoria;
    });
  } else {
    postsDisplay = posts;
  }
}

function loadPagina(initialNumber, postsDisplay) {
  cardline.innerHTML = "";
  post.innerHTML = "";
  document.getElementById("selectLine").style.display = "flex"
  for (let i = initialNumber; i < loadnumber; i++) {
    try {
      let card = ` <button class="invisibleButton" onclick="displayPost(${postsDisplay[i].id})">
                <div class="blogCard">
                    <img src="./images/${postsDisplay[i].picture}" class="img" id="img${[i]}" />
                    <h3 class="titulo">
                        ${postsDisplay[i].title}
                    </h3>
                    <p class="infoCards"> acessos: ${postsDisplay[i].acessed + clickedPosition[i]} - publicado:${postsDisplay[i].date}</p>
                    <p class="categoria" >categoria:${postsDisplay[i].category} </p>
                    <p class="descricao">
                        ${postsDisplay[i].text.slice(0, 200)}
                    </p>
                </div>
            </button>`;
      cardline.innerHTML += card;
    } catch (error) { }
  }
}

function displayPost(i) {
  clickedPosition[i]++
  document.getElementById("cardline").style.height = "0px"
  document.getElementById("selectLine").style.display = "none"
  let informaçãoPost = `
            <div id="conteudoPosts">
                <h1>${postsDisplay[i].subtitle}</h1>
                <p>
                ${postsDisplay[i].text}
                </p>
                 <button id="botaoFinal" onclick="voltarPagina()">pagina inicial</button>
            </div>`;

  cardline.innerHTML = "";
  post.innerHTML += informaçãoPost;
}
function voltarPagina() {
  post.innerHTML = "";
  initialNumber = 0;
  loadPagina(initialNumber, posts,);
}

window.displayPost = displayPost;
window.voltarPagina = voltarPagina;
window.selectHandler = selectHandler;

