const key = 'd64b911edb634a9ca476c56451fc1fb4';
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

// Evento para redirigir al login
const Login = document.getElementById('Section');
Login.addEventListener('click',()=>{
    const enlace = '../Login/Login.html';
    if(Login){
        window.location.href = enlace;
    }else{
        console.log("Hubo un error");
    }
})

//Evento para volver al dashboard
let dashboard = document.getElementById('Dashboard');
dashboard.addEventListener('click', () =>{
    const enlace = '../index.html'
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

// solicitud a la api para obtner los juegos de accion
let action_games = '';
const obtener_action = async () =>{
    try{
        const respuesta = await fetch(`https://api.rawg.io/api/games?key=${key}&genres=action&page_size=100`);
        if(respuesta.status == 200){
            const datos = await respuesta.json();
            const actions = datos.results
            actions.forEach(action =>{
                action_games += `<div>
                            <img src="${action.background_image}" alt="Logo">
                            <h4 id="Name--videoGame">${action.name}</h4>
                        </div>`
            })
            document.getElementById('List-Action').innerHTML = action_games;
        }
    }catch(e){
        console.error(`Hubo un error ${e}`)
    }
}
// solicitud a la api para obtner los juegos de adventure
let adventure_games = '';
const obtener_adventure = async () =>{
    try{
        const respuesta = await fetch(`https://api.rawg.io/api/games?key=${key}&genres=adventure&page_size=100`);
        if(respuesta.status == 200){
            const datos = await respuesta.json();
            const actions = datos.results
            actions.forEach(action =>{
                adventure_games += `<div>
                            <img src="${action.background_image}" alt="Logo">
                            <h4 id="Name--videoGame">${action.name}</h4>
                        </div>`
            })
            document.getElementById('List-Adventure').innerHTML = adventure_games;
        }
    }catch(e){
        console.error(`Hubo un error ${e}`)
    }
}
// solicitud a la api para obtner los juegos de miedos
let strategy_games = '';
const obtener_strategy = async () =>{
    try{
        const respuesta = await fetch(`https://api.rawg.io/api/games?key=${key}&genres=strategy&page_size=100`);
        if(respuesta.status == 200){
            const datos = await respuesta.json();
            console.log(datos)
            const actions = datos.results
            actions.forEach(action =>{
                strategy_games += `<div>
                            <img src="${action.background_image}" alt="Logo">
                            <h4 id="Name--videoGame">${action.name}</h4>
                        </div>`
            })
            document.getElementById('List-Scary').innerHTML = strategy_games;
        }
    }catch(e){
        console.error(`Hubo un error ${e}`)
    }
}
// solicitud a la api para obtner juegos de pelea
let fight_games = '';
const obtener_fight = async () =>{
    try{
        const respuesta = await fetch(`https://api.rawg.io/api/games?key=${key}&genres=fighting&page_size=100`);
        if(respuesta.status == 200){
            const datos = await respuesta.json();
            console.log(datos)
            const actions = datos.results
            actions.forEach(action =>{
                fight_games += `<div>
                            <img src="${action.background_image}" alt="Logo">
                            <h4 id="Name--videoGame">${action.name}</h4>
                        </div>`
            })
            document.getElementById('List-fight').innerHTML = fight_games;
        }
    }catch(e){
        console.error(`Hubo un error ${e}`)
    }
}
obtener_action();
obtener_adventure();
obtener_strategy();
obtener_fight();