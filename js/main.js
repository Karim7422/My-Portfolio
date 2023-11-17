let arrowUp = document.querySelector(".fa-chevron-up");

window.onscroll=function(){
    window.scrollY >=500 ? arrowUp.classList.add("show") : arrowUp.classList.remove("show");
};

arrowUp.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}