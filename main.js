// ==========================================
// 1. DAFTAR VIDEO (Isi dengan 14 link Videy Anda)
// ==========================================
const daftarVideo = {
    "1": "https://cdn.videy.co/ZwdCN9621.mp4",
    "2": "https://cdn2.videy.co/LINK_VIDEO_2.mp4",
    "3": "https://cdn2.videy.co/LINK_VIDEO_3.mp4"
    // Lanjutkan format ini sampai "14"
};

// ==========================================
// 2. LOGIKA PENANGKAP URL & PEMUNCULAN VIDEO
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const idVideoDicari = urlParams.get('id');
const wadahVideo = document.getElementById('tempat-video');

if (idVideoDicari && daftarVideo[idVideoDicari]) {
    // A. Memunculkan video ke dalam HTML dengan ukuran yang sudah disesuaikan
    let linkVideo = daftarVideo[idVideoDicari];
    wadahVideo.innerHTML = `
        <video id="video" controls playsinline style="width: 100%; max-height: 450px; height: auto; display: block; margin: 0 auto; object-fit: contain;">
            <source src="${linkVideo}" type="video/mp4">
        </video>
    `;

    // B. LOGIKA OVERLAY SHOPEE (Harus di dalam sini agar tidak error)
    const video = document.getElementById("video");
    const overlay = document.getElementById("videoOverlay");
    let overlayClicked = false; 

    // Overlay muncul di detik ke-2
    video.addEventListener("timeupdate", () => {
        if (video.currentTime >= 2 && !overlayClicked) {
            overlay.classList.add("show");
        }
    });

    // Klik overlay mengarah ke Shopee
    overlay.addEventListener("click", () => {
        overlayClicked = true;              
        overlay.style.display = "none";   
        overlay.classList.remove("show");
        window.open("https://s.shopee.co.id/8AUujQzvfy", "_blank");
    });

} else {
    // Jika link salah / tidak ada id
    wadahVideo.innerHTML = "<h3 style='color:white; text-align:center; padding:20px;'>Akses ditolak. Buka melalui link resmi.</h3>";
}


// ==========================================
// 3. FUNGSI TOMBOL BAWAAN (WhatsApp & Facebook)
// ==========================================

/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
if (shareBtn) {
    shareBtn.onclick = () => {
        window.open("https://whatsapp.com/channel/0029VbC83luInlqZ5Nz2qY3a", "_blank")
    };
}

/* UNDANGAN WHATSAPP */
function joinWhatsAppGroup() {
    window.open("https://whatsapp.com/channel/0029VbBpeya5vKA1QhYaiq1W");
}

/* UNDANGAN FACEBOOK */
function openFacebookPage() {
    window.open("https://www.facebook.com/share/1B5kX2HgqC/");
}
