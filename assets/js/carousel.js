// Developed by Amadeus Ferro, João Victor Guidi, Matheus Ribeiro, Thalles Eduardo

$(document).ready(function () {
    $("#team-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  });