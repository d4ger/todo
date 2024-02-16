//varibles
const textAreaHeader = document.getElementById("textAreaHeader");
const btnDeleteHeader = document.getElementById("btnDeleteHeader");
const btnGuardarHeader = document.getElementById("btnGuardarHeader");
const alert = document.getElementById("alert");
const thingContainer = document.getElementById("things")
const card = document.getElementById("card");
const header = document.getElementById("header");
const contenedor = document.getElementById("contenedor");





//event listeners
btnDeleteHeader.addEventListener("click", () => {
    deleteInput(textAreaHeader);
})

btnGuardarHeader.addEventListener("click", () => {
    checkInput(textAreaHeader);
    deleteInput(textAreaHeader);
})

textAreaHeader.addEventListener("click", () => {
    console.log('escribiendo')
})

contenedor.addEventListener("click", (e) => {
    if(header.contains(e.target)){
        console.log('click dentro del header')
    } else {
        console.log('click fuera del header')
        checkCard();
    }
})

//funciones
function checkInput(input){
    if(input.value.trim() !== '') {
        const thing = newThing(input.value);
        thingContainer.appendChild(thing);
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
    div.classList.add('bg-white', 'flex', 'my-4', 'rounded-full', 'p-4')
    div.innerHTML = `
        <p class="p-4">${txt}</p>
        <button class="ml-auto bg-[#DB1111] w-8 rounded-full h-8 my-auto text-white" id="deleteCard">X</button>
    `
    return div;
}

function checkCard(){
    if(card){
        console.log('card existe')
    } else {
        console.log('no existe')
    }
}

/*
<!--card-->
<div class="bg-white flex my-4 rounded-full p-4">
                <p class="p-4">w</p>
                <button class="ml-auto bg-[#DB1111] w-8 rounded-full h-8 my-auto text-white">X</button>
            </div>
*/