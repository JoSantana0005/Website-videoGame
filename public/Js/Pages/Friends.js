const key = 'd64b911edb634a9ca476c56451fc1fb4';
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

Most_played();
