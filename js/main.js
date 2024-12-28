// owl carousel start
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 500,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 3,
        dots: false,
      },
    },
  });
});
// owl carousel end

// waktu start
const countDownDate = new Date("Apr 05, 2025 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Carasingkat").innerHTML = "EXPIRED";
  }
}, 1000);
// waktu end

// modal start
window.onload = function () {
  document.getElementById("klikmodal").click();
};
// modal end

// lagu start
const lagu = document.getElementById("lagu");
function playAudio() {
  lagu.play();
}
function stopAudio() {
  lagu.pause();
}
// lagu end

// undngan start
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
var to = GetURLParameter("to");
document.getElementById("nama").innerHTML = to ? decodeURI(to) : "-";

// hover blur effect
$(".blur").mouseenter(function () {
  $(".blur").css("filter", "blur(5px)"); // Blurs each .blur div
  $(this).css("filter", "blur(0px)"); // Removes blur from the currently hovered .blur div
});
$(".blur").mouseleave(function () {
  $(".blur").css("filter", "blur(0px)"); // Removes blur from all when none are hovered
});

// undngan end

// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault(); // Mencegah reload halaman

//   // Ambil nilai input
//   const nama = document.getElementById("nama").value; // Ambil nama
//   const ucapan = document.getElementById("ucapan").value; // Ambil ucapan
//   const konfirmasi = document.querySelector('select[name="konfirmasi"]').value; // Ambil konfirmasi

//   // Debugging di console
//   console.log("Nama:", nama);
//   console.log("Ucapan:", ucapan);
//   console.log("Konfirmasi:", konfirmasi);

//   // Kirim pesan ke WhatsApp
//   const pesan = `Halo! Saya ${nama}. "${ucapan}" Konfirmasi Kehadiran: ${konfirmasi}`;
//   const url = `https://wa.me/6283838617519?text=${encodeURIComponent(pesan)}`;
//   window.open(url, "_blank");
// });
