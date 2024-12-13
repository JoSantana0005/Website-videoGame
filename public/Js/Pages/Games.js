let Action = document.getElementById('VideoGame--Action');
let Adventure = document.getElementById('VideoGame--Adventure');
let Scary = document.getElementById('VideoGame--Scary');
let fight = document.getElementById('VideoGame--Fighting');

//Arrow de la lista Action
const arrow_left_action = document.getElementById('Arrow-left-action');
const arrow_right_action = document.getElementById('Arrow-Right-action');

// Arrow de la lista Adventure
const arrow_left_adventure = document.getElementById('Arrow-left-adventure');
const arrow_right_adventure = document.getElementById('Arrow-Right-adventure');

// Arrow de la lista Scary
const arrow_left_scary = document.getElementById('Arrow-left-scary');
const arrow_right_scary = document.getElementById('Arrow-Right-scary');

// Arrow de la lista fight
const arrow_left_fight = document.getElementById('Arrow-left-fight');
const arrow_right_fight = document.getElementById('Arrow-Right-fight');

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
// Function para mover la lista de juegos
function ScrollList(event,arrow_left,arrow_right){
    arrow_left.addEventListener('click', ()=>{
        if(event){
            event.scrollLeft -= 360;
        }else{
            console.log("No existen tal contenedor");
        }
    })

    arrow_right.addEventListener('click',()=>{
        if(event){
            event.scrollLeft += 360;
        }else{
            console.log("No existen tal contenedor");
        }
    })
}

ScrollList(Action,arrow_left_action,arrow_right_action);
ScrollList(Adventure,arrow_left_adventure,arrow_right_adventure);
ScrollList(Scary,arrow_left_scary,arrow_right_scary);
ScrollList(fight,arrow_left_fight,arrow_right_fight);