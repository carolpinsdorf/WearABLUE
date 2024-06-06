

//       menu drop down
let hamburguerButton = document.querySelector('#hamburguerButton');
let closeButton = document.querySelector('#closeButton');

let mobileMenu = document.querySelector('#mobileMenu');
hamburguerButton.addEventListener('click', function(){
    mobileMenu.classList.add('flex')
})

closeButton.addEventListener('click', function(){
    mobileMenu.classList.remove('flex')
})

document.addEventListener('DOMContentLoaded', () => {
    const btnTopo = document.getElementById('btnTopo');

   
    btnTopo.addEventListener('click', () => {
       
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


