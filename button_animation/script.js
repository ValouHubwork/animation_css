const btn_mov_elem = document.querySelector(".move")

const min = -150;
const max = 150;

btn_mov_elem.addEventListener("mouseenter", () => {
    const rect = btn_mov_elem.getBoundingClientRect();
    let random_x = 0;
    let random_y = 0;

    // Génération directionnelle
    if (rect.top <= 300) {
        random_x = (Math.random() * max) + min;
        random_y = (Math.random() * max) - min;
    } else if (rect.top >= 600) {
        random_x = (Math.random() * max ) + min;
        random_y = (Math.random() * max) + min;
    } else if (rect.left <= 200) {
        random_x = (Math.random() * max ) - min;
        random_y = (Math.random() * max) + min;
    } else if (rect.left >= 1400) {
        random_x = (Math.random() * max) + min;
        random_y = (Math.random() * max) + min;
    } else {
        random_x = (Math.random() * (max - min)) + min;
        random_y = (Math.random() * (max - min)) + min;
    }

    // Nouvelle position en pixels
    let newTop = rect.top + window.scrollY + random_y;
    let newLeft = rect.left + window.scrollX + random_x;

    // Bords de la fenêtre
    const btnWidth = rect.width;
    const btnHeight = rect.height;
    const maxTop = window.innerHeight - btnHeight;
    const maxLeft = window.innerWidth - btnWidth;

    // Empêche de sortir de la fenêtre
    newTop = Math.max(0, Math.min(newTop, maxTop));
    newLeft = Math.max(0, Math.min(newLeft, maxLeft));

    btn_mov_elem.style.position = "absolute";
    btn_mov_elem.style.top = newTop + "px";
    btn_mov_elem.style.left = newLeft + "px";
});


window.addEventListener("mousemove", (e) => {
    console.log("pos x : " + e.clientX);
    console.log("pos y : " + e.clientY);
});