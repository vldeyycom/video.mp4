// ==========================================
// 1. DAFTAR VIDEO
// ==========================================
const daftarVideo = {
    "1": "https://cdn2.videy.co/ZwdCN9621.mp4",
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
    "14": "https://cdn2.videy.co/TD8eGo2X1.mp4"
};


// ==========================================
// 2. LOGIKA URL & PEMUNCULAN VIDEO
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const idVideoDicari = urlParams.get("id");
const wadahVideo = document.getElementById("tempat-video");

if (idVideoDicari && daftarVideo[idVideoDicari]) {

    // Memunculkan video
    const linkVideo = daftarVideo[idVideoDicari];

    wadahVideo.innerHTML = `
        <video id="video" controls playsinline>
            <source src="${linkVideo}" type="video/mp4">
        </video>
    `;

    const video = document.getElementById("video");
    const overlay = document.getElementById("videoOverlay");


    // ==========================================
    // 3. TIGA TUJUAN OVERLAY
    // ==========================================

    let tahapOverlay = 1;

    // Ganti dengan tujuan yang sesuai
    const linkTujuan1 = "https://s.shopee.co.id/1VynwISeTQ";
    const linkTujuan2 = "https://hai8g.com/4/11685857";
    const linkTujuan3 = "https://demolishwrestconclusions.com/diw3sapmi1?key=40a4713aac8d0bad2226bdabed9a8037";


    // ==========================================
    // 4. OVERLAY MUNCUL SAAT VIDEO DIMULAI
    // ==========================================

    video.addEventListener("play", () => {

        if (!overlay.classList.contains("sudah-selesai")) {
            overlay.classList.add("show");
        }

    }, { once: true });


    // ==========================================
    // 5. LOGIKA KLIK OVERLAY
    // ==========================================

    overlay.addEventListener("click", () => {

        overlay.classList.remove("show");


        // --------------------------------------
        // KLIK PERTAMA
        // --------------------------------------

        if (tahapOverlay === 1) {

            window.open(linkTujuan1, "_blank");

            tahapOverlay = 2;

            setTimeout(() => {
                overlay.classList.add("show");
            }, 1000);

        }


        // --------------------------------------
        // KLIK KEDUA
        // --------------------------------------

        else if (tahapOverlay === 2) {

            window.open(linkTujuan2, "_blank");

            tahapOverlay = 3;

            setTimeout(() => {
                overlay.classList.add("show");
            }, 1000);

        }


        // --------------------------------------
        // KLIK KETIGA
        // --------------------------------------

        else if (tahapOverlay === 3) {

            window.open(linkTujuan3, "_blank");

            overlay.classList.add("sudah-selesai");
            overlay.style.display = "none";

        }

    });


} else {

    // ==========================================
    // 6. ID VIDEO TIDAK VALID
    // ==========================================

    wadahVideo.innerHTML = `
        <h3 style="
            color:white;
            text-align:center;
            padding:20px;
        ">
            Akses ditolak. Buka melalui link resmi.
        </h3>
    `;
}


// ==========================================
// 7. TOMBOL SHARE
// ==========================================

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

    shareBtn.onclick = () => {

        window.open(
            "https://whatsapp.com/channel/0029VbC83luInlqZ5Nz2qY3a",
            "_blank"
        );

    };

}


// ==========================================
// 8. WHATSAPP
// ==========================================

function joinWhatsAppGroup() {

    window.open(
        "https://whatsapp.com/channel/0029VbBpeya5vKA1QhYaiq1W",
        "_blank"
    );

}


// ==========================================
// 9. FACEBOOK
// ==========================================

function openFacebookPage() {

    window.open(
        "https://www.facebook.com/share/1B5kX2HgqC/",
        "_blank"
    );

}
