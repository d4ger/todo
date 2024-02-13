//varibles
const textAreaHeader = document.getElementById("textAreaHeader");
const btnDeleteHeader = document.getElementById("btnDeleteHeader");
const btnGuardarHeader = document.getElementById("btnGuardarHeader");



//event listeners
btnDeleteHeader.addEventListener("click", () => {
    deleteInput(textAreaHeader);
})

btnGuardarHeader.addEventListener("click", () => {
    checkInput(textAreaHeader);
    deleteInput(textAreaHeader)
})

textAreaHeader.addEventListener("click", () => {
    console.log('escribiendo')
})



console.log(textAreaHeader)
console.log(btnDeleteHeader) 

//funciones
function checkInput(input){
    if(input.value.trim() !== '') {
        console.log('guardando')
    } else {
        setTimeout(() => {
            console.log("Delayed for 1 second.");
          }, 3000);
    }
}

function deleteInput(input){
    if(input.value !== '') {
        input.value = ''
    }
}

function createAlert(){
    const alerta = document.createElement('div')
    alerta.classList.add('bg-orange-500', 'text-white', 'mx-auto', 'rounded-full', 'p-8', 'fixed', 'bottom-16', 'left-0', 'right-0', 'w-fit')
    alerta.innerHTML(`
        <p>Ingresa una actividad</p>
    `)
    return alerta;
}


/*
<!--card-->
<div class="bg-white flex my-4 rounded-full p-4">
                <p class="p-4">w</p>
                <button class="ml-auto bg-[#DB1111] w-8 rounded-full h-8 my-auto text-white">X</button>
            </div>
*/