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
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3000); // Ganti gambar setiap 4 detik
}

showSlides();

let slideIndex2 = 0;
const slides2 = document.querySelectorAll(".slide-2");

function showSlides2() {
  slides2.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }

  slides2[slideIndex2 - 1].classList.add("active");
  setTimeout(showSlides2, 3000); // Ganti gambar setiap 3 detik
}

showSlides2();

// salin alamat
document
  .getElementById("copyAddressButton")
  .addEventListener("click", function () {
    var addressText = document.getElementById("address").innerText;
    navigator.clipboard
      .writeText(addressText)
      .then(function () {
        alert("Alamat telah disalin ke clipboard!");
      })
      .catch(function (err) {
        alert("Gagal menyalin alamat: " + err);
      });
  });

// firebase start
// Inisialisasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBM4-6rVSvGwwz70XR1iincHcGddYR7v40",
  authDomain: "undanganarfanputri.firebaseapp.com",
  databaseURL:
    "https://undanganarfanputri-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "undanganarfanputri",
  storageBucket: "undanganarfanputri.firebasestorage.app",
  messagingSenderId: "315186232604",
  appId: "1:315186232604:web:62e8e4bd6ac00a20470ed9",
  measurementId: "G-S8GZMB963Q",
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Ambil elemen DOM
const commentForm = document.getElementById("commentForm");
const commentsList = document.getElementById("commentsList");
const totalComments = document.getElementById("totalComments");
const totalPresentCount = document.getElementById("totalPresentCount");
const totalAbsentCount = document.getElementById("totalAbsentCount");

// Variabel untuk menghitung statistik
let presentCount = 0;
let absentCount = 0;

// Tambahkan Komentar ke Database
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();
  const attendance = document.getElementById("attendance").value;

  // Validasi input
  if (name.length < 3 || comment.length < 3) {
    alert("Nama dan komentar minimal 3 karakter.");
    return;
  }

  // Push data ke Firebase
  database
    .ref("comments")
    .push({
      name: name,
      comment: comment,
      attendance: attendance,
      timestamp: Date.now(),
    })
    .then(() => console.log("Komentar berhasil disimpan"))
    .catch((error) => console.error("Gagal menyimpan komentar:", error));

  // Kosongkan input
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
  document.getElementById("attendance").value = ""; // Reset dropdown ke default
});

// Menampilkan Komentar secara Real-Time dan menghitung statistik
database.ref("comments").on("child_added", (snapshot) => {
  const data = snapshot.val();

  // Tambahkan komentar ke tampilan dengan format baru
  const commentElement = document.createElement("div");
  commentElement.className = "comment mb-3"; // Tambahkan kelas untuk jarak antar komentar

  // Format waktu
  const formattedDate = formatDate(data.timestamp);

  // Buat elemen untuk menampilkan komentar
  commentElement.innerHTML = `
    <strong>${data.name}</strong><br />
    <span class="comment-text">${data.comment}</span>
    ${
      data.comment.split(" ").length > 20
        ? `<button class="btn btn-link read-more">Selengkapnya</button>`
        : ""
    }
    <small style="float: right; font-size: 0.8rem; color: gray;">${formattedDate}</small>
    <hr />
  `; // Nama di baris pertama, komentar di baris kedua, tanggal di kanan bawah

  commentsList.appendChild(commentElement);

  // Tambahkan event listener untuk tombol "Selengkapnya"
  if (data.comment.split(" ").length > 20) {
    const readMoreButton = commentElement.querySelector(".read-more");
    readMoreButton.addEventListener("click", () => {
      const fullCommentElement = document.createElement("div");
      fullCommentElement.textContent = data.comment;
      fullCommentElement.style.marginBottom = "10px"; // Jarak bawah
      commentElement.replaceChild(fullCommentElement, readMoreButton); // Ganti tombol dengan teks penuh
    });
  }

  // Update statistik kehadiran
  if (data.attendance === "hadir") {
    presentCount++;
    totalPresentCount.textContent = presentCount; // Update jumlah hadir
  } else if (data.attendance === "tidak_hadir") {
    absentCount++;
    totalAbsentCount.textContent = absentCount; // Update jumlah tidak hadir
  }

  // Update tampilan total komentar
  totalComments.textContent = presentCount + absentCount; // Total komentar adalah jumlah hadir + tidak hadir

  // Scroll ke komentar terbaru
  commentsList.scrollTop = commentsList.scrollHeight;
});

// format waktu
function formatDate(timestamp) {
  const now = new Date();
  const commentDate = new Date(timestamp);
  const diffInSeconds = Math.floor((now - commentDate) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} detik yang lalu`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} menit yang lalu`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} jam yang lalu`;
  } else if (diffInSeconds < 172800) {
    // kurang dari dua hari
    return `Kemarin jam ${commentDate.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else {
    return commentDate.toLocaleString("id-ID", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

//Save the date
document.getElementById("save-date-btn").addEventListener("click", function () {
  // Detail acara
  const title = "Pernikahan Arfan dan Putri";
  const location =
    "Masjid At Taqwa Jembayat Jl. Tegal - Cilacap, Jembayat, Kec. Margasari, Kabupaten Tegal, Jawa Tengah";
  const description = "Jangan lupa hadir di acara pernikahan kami!";

  // Format tanggal (YYYYMMDD) untuk Google Calendar
  const startDate = "20250405T020000Z"; // 5 April 2025, pukul 09:00 WIB (02:00 UTC)
  const endDate = "20250405T060000Z"; // 5 April 2025, pukul 13:00 WIB (06:00 UTC)

  // URL Google Calendar
  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
    description
  )}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

  // Arahkan ke URL Google Calendar
  window.open(googleCalendarUrl, "_blank");
});
