const hamburger = document.getElementById('menubar');
const close = document.getElementById('closeBtn');
const nav = document.getElementById('navbar');

if(hamburger){
    hamburger.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}
