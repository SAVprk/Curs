const menuBtn = document.querySelector('.menu-btn');
const bur = document.querySelector('#burger-menu-active');
const close = document.querySelector('.close');
bur.addEventListener("click", function(){
    let elem = document.querySelector('#burger');
    let menuBtn = document.querySelector('#burger-menu-active');
    menuBtn.classList.toggle('active');
    elem.classList.toggle('active');
    elem.classList.toggle('disp-none');
});
close.addEventListener("click", function(){
    let elem = document.querySelector('#burger');
    elem.classList.toggle('active');
})



const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    // настройки (не обязательно), см. API
});