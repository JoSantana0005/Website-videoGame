const key = 'd64b911edb634a9ca476c56451fc1fb4';
// Evnto para abrir el login
const Login = document.getElementById('Section');
Login.addEventListener('click',()=>{
    const enlace = 'src/Pages/Login/Login.html';
    if(Login){
        window.location.href = enlace;
    }else{
        console.log("Hubo un error");
    }
})
//Evento Para mover el contenido de recommend of you
let arrow_left = document.getElementById('Arrow-left');
let arrow_right = document.getElementById('Arrow-Right');
let VideoGame_recommend = document.getElementById('Recommend--Videogame');

// Arrow-left
arrow_left.addEventListener('click',()=>{
    if(arrow_left){
        VideoGame_recommend.scrollLeft -= 285;
    }else{
        console.log("Hubo un error")
    }
})
// Arrow-Right
arrow_right.addEventListener('click',()=>{
    if(arrow_right){
        VideoGame_recommend.scrollLeft += 285;
    }else{
        console.log("Hubo un error")
    }
})
let games_popular = '';
let recommend_games = '';
let Most_played = '';
// Conexion a la api para obtener los juegos mas jugados
const Obtener_jugados = async() =>{
    try{
        const respuesta = await fetch(`https://api.rawg.io/api/games?key=${key}&dates=2020-01-01,2024-01-01`);
        console.log(respuesta)
        if(respuesta.status == 200){
            const datos = await respuesta.json();
            const Mosts = datos.results
            Mosts.forEach(Most =>{
                Most_played += `<article>
                    <img src="${Most.background_image}" alt="VideoGame">
                    <div>
                        <span id="Name--videoGame">${Most.name}</span>
                        <span id="Most--played">${Most.added}</span>
                    </div>
                </article>`
            })
            document.getElementById('Most--videoGame').innerHTML = Most_played
        }
    }catch(e){
        console.error(`Hubo un error ${e}`)
    }
}
// Conexion a la api para obtener los juegos de GOTY
const Obtener_Goty = async() =>{
    try{
        const respuesta = await fetch(`https://api.rawg.io/api/games?key=${key}&dates=2012-01-12,2023-01-12`);
        if(respuesta.status == 200){
            const datos = await respuesta.json();
            const recommend = datos.results;
            recommend.forEach(game =>{
                recommend_games += `<div>
                        <img src="${game.background_image}" alt="Imagen" id="Imagen--recommed">
                        <h3 id="Title--recommed">${game.name}</h3>
                    </div>`
            })
            document.getElementById('videogame--recommed').innerHTML = recommend_games;
        }
    }catch(e){
        console.error(`Hubo error ${e}`);
    }
}
// Conexion a la api para obtner los juegos mas jugados hasta el momento
const Obtener_juegos = async() =>{
    try{
        const respuesta = await fetch(`https://api.rawg.io/api/games?key=${key}&dates=2024-01-01,2024-12-01&ordening=-added`);
        if(respuesta.status == 200){
            const datos = await respuesta.json();
            console.log(datos)
            const games = datos.results
            //foreach
            games.forEach(game =>{
            games_popular += `<div>
                        <img src="${game.background_image}" alt="Logo">
                        <h4>${game.name}</h4>
                    </div>`
            });
            document.getElementById('Games--pop').innerHTML = games_popular;
        }
    }catch(e){

    }
}

Obtener_jugados();
Obtener_juegos();
Obtener_Goty();
