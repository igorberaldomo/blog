import posts from "./Posts/posts.js";
let blog = window.document.getElementById("paginaBlog");
let cardline = document.getElementById("cardline");
let initialNumber = 0;
let loadnumber = 8;
let postsDisplay = posts;
let clickedPosition = [ 0,0,0,0,0,0,0,0]

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
    cardline.innerHTML = "";
    blog.innerHTML = "";
  for (let i = initialNumber; i < loadnumber; i++) {
    try {
      let card = ` <button class="invisibleButton" onclick="displayBlog(${postsDisplay[i].id})">
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
    } catch (error) {}
  }
}

function displayBlog(i) {
    clickedPosition[i]++
    let blog = window.document.getElementById("paginaBlog");
    document.getElementById("cardline").style.height= "0px"
    let informaçãoBlog = `
            <div id="conteudoBlog">
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
  loadPagina(initialNumber, posts,);
}

window.displayBlog = displayBlog;
window.voltarPagina = voltarPagina;
window.selectHandler = selectHandler;
function updateAcessed() {}
