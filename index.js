const posts = [ 
    {"id":1,
   "picture":"Program-Code-Feature-Image.jpg",
   "title":"Codando em python",
   "subtitle":"Como apreender python",
   "text":"testando",
   "acessed":0},


    ]

console.log(posts[0].subtitle)
loadPagina();
function loadPagina (){
    let corpocard =  document.getElementById("corpoCard")
    for(i=0;i <1;i++){
        let card =` <button class="invisibleButton" onclick="displayBlog(${posts[i].id})">
                <div class="blogCard">
                    <img src="./images/${posts[i].picture}" class="img" id="${[i]}" />
                    <h3 class="subtitulo">
                        ${posts[i].subtitle}
                    </h3>
                    <p class="descricao">
                        ${posts[i].text}
                    </p>
                </div>
            </button>`

        corpocard.innerHTML += card
    }
}

