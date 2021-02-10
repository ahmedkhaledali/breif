/* fetch("https://www.breakingbadapi.com/api/characters").then(function(response){
return response.json();
})
.then(function(data){
    console.log(data)
})
*/
async function get(){
    const response = await fetch("https://www.breakingbadapi.com/api/characters/1")
    const data = await response.json()
    console.log(data)

    
    
    document.querySelector("#reponce h1").innerHTML=data[0].name 
    document.querySelector("#reponce img").src= data[0].img
    document.querySelector("#reponce h2").innerHTML= data[0].birthday

    document.querySelector("#acteur").innerHTML=
    `<select>${data.map(actor => '<option>${actor.name}</option>')}

    </select>`
}
get()