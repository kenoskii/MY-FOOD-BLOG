const mobileMenu = document.querySelector(".mobile-menu").addEventListener("click", ()=>{
    document.querySelector(".menu").classList.toggle("show")
});



const scrollBtn = document.querySelector(".scroll-top")

window.addEventListener("scroll", function(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        scrollBtn.style.display ="block"
    } else{
        scrollBtn.style.display ="none"
    }
})

scrollBtn.addEventListener("click", ()=> {
    document.documentElement.scrollTop=0;
})