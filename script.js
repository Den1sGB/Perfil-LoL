var menuIcon = document.querySelector('.menu-icon');
        var menuMobile = document.querySelector('.menu-mobile');
        var iconClose = document.querySelector('.menu-mobile .icon-close');

        menuIcon.addEventListener('click', function(){
            menuMobile.classList.add('ativo');
        });
        iconClose.addEventListener('click', function(){
            menuMobile.classList.remove('ativo');
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}
