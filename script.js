// SELECTION
const input = document.querySelector("#search");
const errorMessage = document.querySelector(".msg-error");
const name = document.querySelectorAll(".name");



window.addEventListener("load", dataList);
input.addEventListener("input", dataFilter);


// APPEL API
async function dataList(){

    try {

        
        const reponse = await fetch("https://randomuser.me/api/?results=10");

        //MESSAGE ERROR
        if (!reponse.ok) {
            throw new Error(`Oups vous avez une erreur ${reponse.status} `);
            
        }

        
        console.log(reponse);
        
        const data = await reponse.json();
        
        const info = data.results;
        console.log(info);

        // FONCTION FILTER
        dataFilter(info);
        
       
    } catch (error) {
        // MESSAGE ERROR
        errorMessage.textContent = `${error} `
    }

}

// FILTER
function dataFilter(info){


    

    // FONCTION DISPLAY
    displayValue(info);

}



// DISPLAY
function displayValue(info){
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






