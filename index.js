import posts from "./Posts/posts.js";
let content = window.document.getElementById("loadContent");
let postsDisplay = posts;
let clickedPosition = [0, 0, 0, 0, 0, 0, 0, 0]

loadPagina(postsDisplay);

function selectHandler(categoria) {
  filtrarCategorias(categoria);
  loadPagina(postsDisplay);
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


function loadPagina(postsDisplay) {
  content.innerHTML = "";
  document.getElementById("selectLine").style.display = "flex"
  for (let i = 0; i < 6; i++) {
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
      content.innerHTML += card;
    } catch (error) { }
  }
}

function displayPost(i) {
  clickedPosition[i]++
  document.getElementById("selectLine").style.display = "none"
  let informaçãoPost = `
            <div id="conteudoPosts">
            <img src="./images/${postsDisplay[i].picture}" class="postImage" id="img${[i]}" />
                <h1>${postsDisplay[i].subtitle}</h1>
                <p>
                ${postsDisplay[i].text}
                ${postsDisplay[i].text.slice(0, 1400)}
                </p>
                 <button id="botaoFinal" onclick="voltarPagina()">pagina inicial</button>
            </div>`;

  content.innerHTML = "";
  content.innerHTML += informaçãoPost;
}
function voltarPagina() {
  content.innerHTML = "";
  loadPagina(posts);
}

window.displayPost = displayPost;
window.voltarPagina = voltarPagina;
window.selectHandler = selectHandler;

