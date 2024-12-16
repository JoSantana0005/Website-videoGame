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
    const enlace = '../../../index.html'
    if(dashboard){
        window.location.href = enlace
    }else{
        console.log("Hubo un error")
    }
})