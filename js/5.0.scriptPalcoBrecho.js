

//              MENU DROP DOWN SHOW
function menuShow(){
    let menuMobile = document.querySelector('menuMobile')
    
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open');
    };
}