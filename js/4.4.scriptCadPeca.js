


// INPUT DE IMAGEM
let inputFile = document.querySelector('#imgPeca');
let imagemSelect = document.querySelector('.place_holder');
let imagemSelectTxt = "Escolha uma imagem" 


inputFile.addEventListener('change', function(e){
    let inputTarget = e.target;
    let file = inputTarget.files[0];

    if (file){
        let reader = new FileReader();

        reader.addEventListener('load', function(e){
            let readerTarget = e.target;

            let img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('place_holder');

            imagemSelect.innerHTML = '';
            imagemSelect.appendChild(img);

        });
        reader.readAsDataURL(file);
    }else{
    }


});