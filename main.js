// ==========================================
// 1. DAFTAR VIDEO (Isi dengan 14 link Videy Anda)
// ==========================================
const daftarVideo = {
    "1": "https://cdn.videy.co/ZwdCN9621.mp4",
    "2": "https://cdn2.videy.co/VNDBFNBT1.mp4",
    "3": "https://cdn2.videy.co/lZBK9W3A1.mp4",
    "4": "https://cdn2.videy.co/pFDi1M5m1.mp4",
    "5": "https://cdn2.videy.co/BjVsmoPs1.mp4",
    "6": "https://cdn.videy.co/8cWz7SRK1.mp4",
    "7": "https://cdn2.videy.co/AAovM0bj1.mp4",
    "8": "https://cdn2.videy.co/CU550Zof1.mp4",
    "9": "https://cdn2.videy.co/mRZ1Lm0Y1.mp4",
    "10": "https://cdn2.videy.co/rTERwuzM1.mp4",
    "11": "https://cdn2.videy.co/xn4L8uRk1.mp4",
    "12": "https://cdn2.videy.co/s2yazRB51.mp4",
    "13": "https://cdn2.videy.co/KQPf4Otj1.mp4",
    "14": "https://cdn2.videy.co/LINK_VIDEO_14.mp4"
};

// ==========================================
// 2. LOGIKA PENANGKAP URL & PEMUNCULAN VIDEO
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const idVideoDicari = urlParams.get('id');
const wadahVideo = document.getElementById('tempat-video');

if (idVideoDicari && daftarVideo[idVideoDicari]) {
    // A. Memunculkan video ke dalam HTML (mengandalkan pengaturan CSS wrapper)
    let linkVideo = daftarVideo[idVideoDicari];
    wadahVideo.innerHTML = `
        <video id="video" controls playsinline>
            <source src="${linkVideo}" type="video/mp4">
        </video>
    `;

    // B. LOGIKA OVERLAY SHOPEE
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
        window.open("https://whatsapp.com/channel/0029VbC83luInlqZ5Nz2qY3a", "_blank");
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
