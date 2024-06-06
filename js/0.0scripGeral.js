

//       menu drop down
// script.js
// Quando o usuário rolar a página 20px para baixo a partir do topo, mostra o botão
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

// Quando o usuário clicar no botão, rola a página até o topo
document.getElementById("backToTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
});



