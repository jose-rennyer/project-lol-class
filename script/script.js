console.log(classes[0].campeoes)
function criarLista(num){
    classes[num].campeoes.map(function(item, index){
        let personitem = document.querySelector(".person-item").cloneNode(true)
        
        

        personitem.setAttribute("data-champ", index)
        personitem.querySelector(".person-item--img img").src = item.imagem
        personitem.querySelector(".person-item--name span").innerHTML = item.nome
        personitem.querySelector(".person-item--quality span").innerHTML = item.qualidade
        personitem.querySelector("a").addEventListener("click", function(e){
            let data = e.target.closest(".person-item").getAttribute("data-champ")
            let identifier = classes[num].campeoes[data]
            console.log(data)
            document.querySelector(".modal").style.opacity = "0"
            document.querySelector(".modal").style.display = "flex"
            setTimeout(function(){
                document.querySelector(".modal").style.opacity = "1"
            },200)
    
            document.querySelector(".person-modal--right .lol-icon a").setAttribute("href","https://universe.leagueoflegends.com/pt_BR/story/champion/"+identifier.link)
            document.querySelector(".person-name span:last-child").innerHTML = identifier.nome// ou item.nome
            document.querySelector(".person-modal--right .person").src = identifier.imagem//ou item.imagem
            //document.querySelector(".person-modal-resum .resum").innerHTML = classes[0].campeoes[data].historia//ou item.historia
            document.querySelector(".person-nacionality img").src = item.nacionalidade[0].icone
            document.querySelector(".person-nacionality span").innerHTML = item.nacionalidade[0].nacao
            let imagemF = ""
            for(let i = 0;i < item.forte.length; i++){
                imagemF += `<div class="s-details"><img src="${classes[num].campeoes[data].forte[i].foto/*item.forte[i].foto*/}" alt="" class="img-peq" /><span>${item.forte[i].nome}</span></div>`
            }
            document.querySelector(".strong .st").innerHTML = imagemF
            let imagemFr = ""
            for(let i = 0; i<item.fraco.length; i++){
                imagemFr += `<div class="s-details"><img src="${classes[num].campeoes[data].fraco[i].foto}" alt="" class="img-peq"/><span>${classes[num].campeoes[data].fraco[i].nome}</span></div>`
            }
            document.querySelector(".weak .st").innerHTML = imagemFr
        })
    
    
        document.querySelector(".grid-classes").append(personitem)
    })
}



document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".modal").style.opacity = "0"
    setTimeout(function(){
        document.querySelector(".modal").style.display = "none"
    },500)
})


document.querySelectorAll(".route").forEach(function(item, index){
    item.setAttribute("route-key", index)
    let atributo = item.getAttribute("route-key")
    item.addEventListener("click", function(){
        document.querySelector(".grid-classes").innerHTML = ""
        document.querySelector(".route.selected").classList.remove("selected")
        item.classList.add("selected")
        criarLista(atributo)
    })
})
document.querySelector(".route").classList.add("selected")
criarLista(0)
//op????o colocar as skins logo abaixo da imagem do campe??o, e a cada vez que ele clicar em uma, a imagem toma o lugar 
//da outra na vez
