$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function assita(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  
}
function infos(){
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
  
}