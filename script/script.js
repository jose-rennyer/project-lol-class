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
            console.log(data)
            document.querySelector(".modal").style.opacity = "0"
            document.querySelector(".modal").style.display = "flex"
            setTimeout(function(){
                document.querySelector(".modal").style.opacity = "1"
            },200)
    
            document.querySelector(".person-name span:last-child").innerHTML = classes[0].campeoes[data].nome// ou item.nome
            document.querySelector(".person-modal--right img").src = classes[0].campeoes[data].imagem//ou item.imagem
            //document.querySelector(".person-modal-resum .resum").innerHTML = classes[0].campeoes[data].historia//ou item.historia
            document.querySelector(".person-nacionality img").src = item.nacionalidade
            let imagemF = ""
            for(let i = 0;i < item.forte.length; i++){
                imagemF += `<div class="s-details"><img src="${classes[0].campeoes[data].forte[i].foto/*item.forte[i].foto*/}" alt="" class="img-peq" /><span>${item.forte[i].nome}</span></div>`
            }
            document.querySelector(".strong .st").innerHTML = imagemF
            let imagemFr = ""
            for(let i = 0; i<item.fraco.length; i++){
                imagemFr += `<div class="s-details"><img src="${classes[0].campeoes[data].fraco[i].foto}" alt="" class="img-peq"/><span>${classes[0].campeoes[data].fraco[i].nome}</span></div>`
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
        criarLista(atributo)
    })
})

criarLista(0)
//opção colocar as skins logo abaixo da imagem do campeão, e a cada vez que ele clicar em uma, a imagem toma o lugar 
//da outra na vez