// $(document).ready(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

$(document).ready(function() {
  $("#mycarousel").carousel({
    interval: 2000
  });
  $("#carouselButton").click(function() {
    if (
      $("#carouselButton")
        .children("span")
        .hasClass("fa-pause")
    ) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton")
        .children("span")
        .removeClass("fa-pause");
      $("#carouselButton")
        .children("span")
        .addClass("fa-play");
    } else if (
      $("#carouselButton")
        .children("span")
        .hasClass("fa-play")
    ) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton")
        .children("span")
        .removeClass("fa-play");
      $("#carouselButton")
        .children("span")
        .addClass("fa-pause");
    }
  });

  // Login modal
  $(".loginModalOpen").click(function() {
    $("#loginModal").modal("show");
  });
  $(".loginModalClose").click(function() {
    $("#loginModal").modal("hide");
  });

  // Reserve table modal
  $(".reservationModalOpen").click(function() {
    $("#reservationModal").modal("show");
  });
  $(".reservationModalClose").click(function() {
    $("#reservationModal").modal("hide");
  });
});
