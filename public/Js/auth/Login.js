// Validacion del correo
function IsvalidEmail(validar) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    return regex.test(validar)
}
let Email = document.getElementById('Email');
Email.addEventListener('input',()=>{
    const validar = IsvalidEmail(Email.value);
    if(validar){
        Email.style.border = '2px solid #00f';
    }else{
        Email.style.border = '2px solid #f00';
    }
})
// Validaciond de la contraseña
let password = document.getElementById('Password');
password.addEventListener('input',()=>{
    if(password.value.length == 6){
        password.style.border = '2px solid #00f';
    }else{
        password.style.border = '2px solid #f00';
    }
})

//Evento para dirigir al usuario a la pagina de register
const Create = document.getElementById('register');
Create.addEventListener('click',()=>{
    const enlace = '../Register/Register.html';
    if(Create){
        window.location.href = enlace
    }else{
        console.log("No existen tal contenedor");
    }
})
// Evento para el botton get into
let Get_into = document.getElementById('Get_into');
Get_into.addEventListener('click',()=>{
    if(Email.value == 0 && password.value == 0){
        alert("Please fill out all fields")
    }else if(Email.value == 0 || password.value == 0){
        alert('There are some that are not filled out, please fill out the remaining fields.')
    }else{
        const enlace = '../../../index.html';
        if(Get_into){
            alert('welcome')
            window.location.href = enlace
        }else{
            console.log("Hubo un error")
        }
    }
})
