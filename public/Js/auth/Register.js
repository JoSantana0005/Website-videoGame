let Name = document.getElementById('Name-User');
let Last_name = document.getElementById('Last-user');
let UserName = document.getElementById('UserName');
// Function que valida el correo
function IsValidEmail(email){
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    return regex.test(email)
}
let Email = document.getElementById('Email-user');
Email.addEventListener('input',()=>{
    const validar = IsValidEmail(Email.value);
    if(validar){
        Email.style.border = '2px solid #00e';
    }else{
        Email.style.border = '2px solid #e00';
    }
})
// Validacion de contraseña
let password = document.getElementById('Password-user');
password.addEventListener('input',()=>{
    if(password.value.length == 6){
        password.style.border = '2px solid #00e';
    }else{
        password.style.border = '2px solid #e00';
    }
})
// Evento para el boton sign up
let sign_up = document.getElementById('Sign_up');
sign_up.addEventListener('click',()=>{
    if(Name.value == 0 && Last_name.value == 0 && Email.value == 0 && password.value == 0 && UserName.value == 0){
        alert('Please fill out all fields')
    
    }else if(Name.value == 0 || Last_name.value == 0 || Email.value == 0 || password.value == 0 || UserName.value == 0){
        alert('There are some that are not filled out, please fill out the remaining fields.')
    
    }else{
        const enlace = '../../../index.html';
        if(sign_up){
            alert('The account has been created successfully')
            window.location.href = enlace;
        }else{
            console.log("Hubo un error");
        }
    }
})