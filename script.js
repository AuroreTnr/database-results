// SELECTION
const h1 = document.querySelector("h1");
const container = document.querySelector(".container-users");

window.addEventListener("load", dataList)


// APPEL API
async function dataList(){
    const reponse = await fetch("https://randomuser.me/api/?results=10");
    console.log(reponse);

    const data = await reponse.json();

    const info = data.results;

    console.log(info);
    
    for( const data of info){
        const table = document.querySelector("tbody");
        const createTr = document.createElement("tr");

        const cretaTrContent = `
        <td class="img"><img class="imgProfil" src=""></img></td>
        <td class="name"></td>
        <td class="pseudo"></td>
        <td class="email"></td>
        <td class="phone"></td>
        `


        createTr.innerHTML = cretaTrContent;
        createTr.querySelector(".imgProfil").src = `${data.picture.thumbnail}`
        createTr.querySelector(".name").textContent = `${data.name.first}`
        createTr.querySelector(".pseudo").textContent = `${data.login.username}`
        createTr.querySelector(".email").textContent = `${data.email}`
        createTr.querySelector(".phone").textContent = `${data.phone}`        
        

        table.appendChild(createTr)

    }

}

// FILTER






