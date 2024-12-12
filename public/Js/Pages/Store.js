let cont = 1
let Remove = document.getElementById('Remove');
let Add = document.getElementById('Add');
//Function para disminuir la cantidad de juegos
function RemoveCont(){
    const Amount = document.getElementById('Amount');
    Remove.addEventListener('click',()=>{
        if(cont <= 0){
            alert("Please")
        }else{
            cont--;
            Amount.textContent = cont
        }
    })
}
//Function para aumentar la cantidad de juegos
function AddCont(){
    const Amount = document.getElementById('Amount');
    Add.addEventListener('click',()=>{
        cont++;
        Amount.textContent = cont
    })
}
//Evento para volver al dashboard
let dashboard = document.getElementById('Dashboard');
dashboard.addEventListener('click', () =>{
    const enlace = '../../../index.html'
    if(dashboard){
        window.location.href = enlace
    }else{
        console.log("Hubo un error")
    }
})
// Evento para abrir la ventana modal
let VideoGames = document.querySelectorAll('.VideoGame');
let modal = document.getElementById('Modal--Window');

VideoGames.forEach(VideoGame =>{
    VideoGame.addEventListener('click',()=>{
        modal.showModal();
    });
})
// Evento para cerrar la ventana Modal
let close_Modal = document.getElementById('Close--modal');
close_Modal.addEventListener('click',() =>{
    const Amount = document.getElementById('Amount');
    Amount.textContent = 1;
    modal.close();
})

RemoveCont();
AddCont();
