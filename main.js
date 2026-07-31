/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://whatsapp.com/channel/0029VbC83luInlqZ5Nz2qY3a", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://whatsapp.com/channel/0029VbBpeya5vKA1QhYaiq1W");
}

function openFacebookPage() {
    window.open("https://www.facebook.com/share/1B5kX2HgqC/");
}
const video = document.getElementById("video");
const overlay = document.getElementById("videoOverlay");

let overlayClicked = false; 

// Overlay muncul di detik tertentu
video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 2 && !overlayClicked) {
        overlay.classList.add("show");
    }
});

// Klik overlay
overlay.addEventListener("click", () => {
    overlayClicked = true;              
    overlay.style.display = "none";   
    overlay.classList.remove("show");

    // Aksi setelah klik
    window.open("https://s.shopee.co.id/8AUujQzvfy", "_blank");
});




