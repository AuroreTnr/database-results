// SELECTION
const input = document.querySelector(".search");
const errorMessage = document.querySelector(".msg-error");
const tableBody = document.querySelector("tbody");





window.addEventListener("load", dataList);


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

        let table;


        // DISPLAY DATA
        for( const data of info){
            table = document.querySelector("tbody");
            
            const createTr = document.createElement("tr");

    
            const cretaTrContent = `
            <td class="img text-center"><img class="imgProfil rounded border" src=""></img></td>
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

    } catch (error) {
        // MESSAGE ERROR
        errorMessage.textContent = `${error} `
    }

}






// Filtrer les éléments de la liste
input.addEventListener('input', filterItems);

function filterItems() {
    const filter = this.value.toLowerCase();
    const rows = tableBody.querySelectorAll('tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll("td")
        let found = false;

        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(filter)) {
                found = true;
            }
        });

        row.style.display = found ? '' : 'none';
    });
};



