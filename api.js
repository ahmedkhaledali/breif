
const api="https://www.breakingbadapi.com/api/characters"
const act=document.querySelector("#name")

async function get(){
    const response = await fetch("https://www.breakingbadapi.com/api/characters")
    const data = await response.json()
    console.log(data)


    acteur.innerHTML+=`<select class="form-control" onchange="getCh(this.value)">
            <option>Les Acteurs Breaking Bad</option>
    
    ${data.map(actor=>`<option>${actor.name}</option>`)}
        </select>`
   
}

async function getCh(name){ 
    const response = await fetch(`${api}?name=${name}`)
    const data = await response.json()
   act.innerHTML=` <h1>${data.name} (${data[0].nickname})</h1>
   <img src="${data[0].img}"width="250"
   <h1>${data[0].portrayed}</h1>
   `
}
    

get()