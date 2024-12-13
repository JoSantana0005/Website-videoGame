const key = 'd64b911edb634a9ca476c56451fc1fb4';
const id = '20';
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
// Conexion a la api rawg
const Api = async () =>{
    try{
        const repuesta = await fetch(`https://api.rawg.io/api/games?key=${key}`);
        console.log(repuesta);
        let games_popular = '';
        if(repuesta.status == 200){
            const datos = await repuesta.json();
            console.log(datos)
            const games = datos.results
            games.forEach(element => {
                games_popular += `<div>
                        <img src="${element.background_image}" alt="Logo">
                        <h4>${element.name}</h4>
                    </div>`
            });
            document.getElementById('Games--pop').innerHTML = games_popular;
        }
    
    
    }catch (e){
        console.error(`Hubo un error en la conexion ${e}`)
    }
}
Api();
