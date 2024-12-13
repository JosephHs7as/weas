let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides');


function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0; 
    } else if (index < 0) {
        currentSlide = totalSlides - 1; 
    }
    const slideWidth = slides[0].clientWidth; 
    slidesContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`; // Desplaza las imágenes horizontalmente
}


setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 3000); 
fetch("navbar.html")
.then((response)=> response.text())
.then((data)=>{
    document.getElementById("navBar").innerHTML=data;
})
.catch((error)=>
console.error("Error al cargar la barra de navegacion:",error)
);












