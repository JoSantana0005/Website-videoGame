let page = 1;
const key = 'd64b911edb634a9ca476c56451fc1fb4';
let cont = 1
let Remove = document.getElementById('Remove');
let Add = document.getElementById('Add');
const AddPage = document.getElementById('ChangeAdd')
const RemovePage = document.getElementById('ChangeRemove');
// function para cambiar de pagina
function ChangePageAdd(){
    AddPage.addEventListener('click',()=>{
        if(AddPage){
            page++;
            obtener_juegos();
            console.log(page)
        }else{
            console.log("Hubo un error")
        }
    })
}
// function para volver a la pagina anterior
function ChangePageRemove(){
    RemovePage.addEventListener('click',()=>{
        if(document.getElementById('ChangeRemove')){
            page--;
            obtener_juegos();
        }else{
            console.log("Hubo un error")
        }
    })
}
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
    const enlace = '../../../public/index.html'
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

// conexion de a la api para obtener todos los juegos

const obtener_juegos = async() =>{
    const respuesta = await fetch(`https://api.rawg.io/api/games?key=${key}&page_size=100&page=`+page);
    let Games = '';
    if(respuesta.status == 200){
        const datos = await respuesta.json();
        console.log(datos);
        const games = datos.results;
        games.forEach(game =>{
            Games += `<div class="VideoGame">
                    <img src="${game.background_image}" alt="Imagen">
                </div>`
        })
        document.getElementById('Chartologist').innerHTML = Games;
    }
}
ChangePageAdd();
ChangePageRemove();
obtener_juegos();
RemoveCont();
AddCont();
