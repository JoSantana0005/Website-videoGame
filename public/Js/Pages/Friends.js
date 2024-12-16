const key = 'd64b911edb634a9ca476c56451fc1fb4';
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
// Evento para mover las fotos de los amigos
const arrow_left = document.getElementById('Left--arrow');
const arrow_right = document.getElementById('Right--arrow');
let List_friends = document.getElementById('List--friends');

//Left-arrow
arrow_left.addEventListener('click',()=>{
    List_friends.scrollLeft -= 290;
})
arrow_right.addEventListener('click',()=>{
    List_friends.scrollLeft += 290;
})
// conexion a la api para obtener los juegos mas jugados
let most_Played = '';
const Most_played = async () =>{
    try{
        const respuesta = await fetch(`https://api.rawg.io/api/games?key=${key}&dates=2020-01-01,2024-01-01`)
        if(respuesta.status == 200){
            const datos = await respuesta.json();
            const Mosts = datos.results;
            Mosts.forEach(Most =>{
                most_Played += `<article>
                    <img src="${Most.background_image}" alt="VideoGame">
                    <div>
                        <span id="Name--videoGame">${Most.name}</span>
                        <span id="Most--played">${Most.added}</span>
                    </div>
                </article>`
            })
            document.getElementById('Most--videoGame').innerHTML = most_Played
        }
    }catch(e){
        console.error(`Hubo un error ${e}`)
    }
}
//conexion de la api de los juegos favoritos //Aqui tenemso que hacer algo pero pa ver como se ven los juegos
let games = '';
const Your_games = async () =>{
    try{
        const respuesta = await fetch(`https://api.rawg.io/api/games?key=${key}&page_size=30&dates=2010-01-03,2020-01-01`);
        if(respuesta.status == 200){
            const datos = await respuesta.json();
            console.log(datos)
            const Your_game = datos.results;
            Your_game.forEach(game =>{
                games += `<div class="List--Game">
                        <div>
                            <img src="${game.background_image}" alt="Logo">
                        </div>
                    </div>`;
            })
            document.getElementById('Your-game').innerHTML = games;
        }
    }catch(e){
        console.error(`Hubo un error ${e}`)
    }
}
Your_games();
Most_played();
