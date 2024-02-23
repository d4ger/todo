//varibles
const textAreaHeader = document.getElementById("textAreaHeader");
const btnDeleteHeader = document.getElementById("btnDeleteHeader");
const btnGuardarHeader = document.getElementById("btnGuardarHeader");
const alert = document.getElementById("alert");
const thingContainer = document.getElementById("things");
const header = document.getElementById("header");
const contenedor = document.getElementById("contenedor");
let btnBorrarCard;


//event listeners
btnDeleteHeader.addEventListener("click", () => {
    deleteInput(textAreaHeader);
})

btnGuardarHeader.addEventListener("click", () => {
    checkInput(textAreaHeader);
    deleteInput(textAreaHeader);
})

//funciones
function checkInput(input){
    if(input.value.trim() !== '') {
        const thing = newThing(input.value);
        thingContainer.appendChild(thing);
        checkCard(card);
    } else {
        alert.classList.remove('invisible');
        setTimeout(() => {
            alert.classList.add('invisible');
          }, 3000);
    }
}

function deleteInput(input){
    if(input.value !== '') {
        input.value = ''
    }
}


function newThing(txt){
    const div = document.createElement('div');
    div.id = 'card'
    div.classList.add('bg-white', 'flex', 'my-4', 'rounded-full', 'p-4', 'max-w-1/2')
    div.innerHTML = `
        <p class="p-4">${txt}</p>
        <button class="ml-auto bg-[#DB1111] w-8 rounded-full h-8 my-auto text-white" id="deleteCard">X</button>
    `
    return div;
}

function checkCard(){
    const card = document.querySelectorAll("#card")
    if(card){
        card.forEach(card => {
            card.addEventListener("click", (e) => {
                if(e.target.id === 'deleteCard'){
                    deleteCard(card);
                } else {
                    console.log('no')
                }
            })  
        });
    } else {
        console.log('no existe')
    }
}

function deleteCard(card){
    card.remove();
}

function detectCard(card){
    card.addEventListener("click", (e) => {
        if( btnBorrarCard.contains(e.target)){
            console.log('borrando')
        }
    })
}