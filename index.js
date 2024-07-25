
const posts = require("./Posts/posts.json")
let blog = window.document.getElementById("paginaBlog")
let initialNumber = 0
let loadnumber = 8

console.log(posts)
// const posts = [
//     {
//         "id": 0,
//         "picture": "python.png",
//         "title": "Codando em python",
//         "subtitle": "Como apreender python",
//         "text": "",
//         "acessed": 0,
//         "date": "12/12/2004",
//         "category":"linguagems"
//     },
//     {
//         "id": 1,
//         "picture": "html5.jpeg",
//         "title": "HTML5",
//         "subtitle": "Linguagem de marcação HTML5",
//         "text": "",
//         "acessed": 0,
//         "date": "12/12/2004",
//         "category":"linguagems"
//     },
//     {
//         "id": 2,
//         "picture": "css.jpeg",
//         "title": "Css para iniciantes",
//         "subtitle": "A beleza do css",
//         "text": "",
//         "acessed": 0,
//         "date": "12/12/2004",
//         "category":"linguagems"
//     },
//     {
//         "id": 3,
//         "picture": "javascript.jpeg",
//         "title": "Javascript dinamico",
//         "subtitle": "Javascript",
//         "text": "",
//         "acessed": 0,
//         "date": "12/12/2004",
//         "category":"linguagems"
//     },
//     {
//         "id": 4,
//         "picture": "webdev.jpeg",
//         "title": "O front-end mais usado",
//         "subtitle": "Curso de desenvolvedor",
//         "text": "",
//         "acessed": 0,
//         "date": "12/12/2004",
//         "category":"linguagems"
//     },
//     {
//         "id": 5,
//         "picture": "pc.jpeg",
//         "title": "Pcs para programadores",
//         "subtitle": "Pcs para progamar o que procurar?",
//         "text": "",
//         "acessed": 0,
//         "date": "12/12/2004",
//         "category":"produtos"
//     },
//     {
//         "id": 6,
//         "picture": "Program-Code-Feature-Image.jpg",
//         "title": "Lógica de progamação",
//         "subtitle": "Lógica de programação",
//         "text": "",
//         "acessed": 0,
//         "date": "12/12/2004",
//         "category":"linguagems"
//     },
//     {
//         "id": 7,
//         "picture": "postura.jpg",
//         "title": "Cadeiras para escritório",
//         "subtitle": "Revisão de 200 cadeira de escritório",
//         "text": "",
//         "acessed": 0,
//         "date": "12/12/2004",
//         "category":"produtos"
//     },
// ]

console.log(posts)
loadPagina(initialNumber, 0);
function loadPagina(initialNumber, add) {
    let cardline = document.getElementById("cardline")
    loadnumber = loadnumber + add
    cardline.innerHTML = ""
    blog.innerHTML = ""
    for (i = initialNumber; i < loadnumber; i++) {
        let card = ` <button class="invisibleButton" onclick="displayBlog(${posts[i].id})">
                <div class="blogCard">
                    <img src="./images/${posts[i].picture}" class="img" id="${[i]}" />
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
            </button>`
        cardline.innerHTML += card
    }
}

function displayBlog(i) {
    updateAcessed(i)
    let blog = window.document.getElementById("paginaBlog")
    let informaçãoBlog = `
            <div id="conteudoBlog">
                <button id="botaoInicio" onclick="voltarPagina()">pagina inicial</button>
                <h1>${posts[i].subtitle}</h1>
                <p>
                ${posts[i].text}
                </p>
                 <button id="botaoFinal" onclick="voltarPagina()">pagina inicial</button>
            </div>`

    cardline.innerHTML = ""
    blog.innerHTML += informaçãoBlog
}
function voltarPagina() {
    blog.innerHTML = ""
    initialNumber = 0
    loadPagina(initialNumber, 0)
}

function updateAcessed() {

}