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
