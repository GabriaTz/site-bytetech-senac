
    let slideIndex = 1;
    let timer; // Variável para guardar o nosso cronômetro

    // Inicia o carrossel assim que a página carrega
    showSlides(slideIndex);
    iniciarCarrossel();

    // Controles de próximo/anterior (quando você clica nas setas)
    function plusSlides(n) {
      clearInterval(timer); // Pausa o timer automático
      showSlides(slideIndex += n);
      iniciarCarrossel(); // Recomeça o timer do zero
    }

    // Controles das bolinhas (quando você clica nos dots, se for usar)
    function currentSlide(n) {
      clearInterval(timer);
      showSlides(slideIndex = n);
      iniciarCarrossel();
    }

    // Função principal que exibe a imagem correta (igual a sua original)
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex - 1].style.display = "block";
      if (dots.length > 0) { // Pequena proteção caso você tenha removido as bolinhas do HTML
        dots[slideIndex - 1].className += " active";
      }
    }

    // Função que faz a mágica de rodar sozinho
    function iniciarCarrossel() {
      timer = setInterval(function () {
        slideIndex++;
        showSlides(slideIndex);
      }, 3000); // 2000 milissegundos = 2 segundos. Se achar muito rápido, mude para 3000 ou 4000.
    }
