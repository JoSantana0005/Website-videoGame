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