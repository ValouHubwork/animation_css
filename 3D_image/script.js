const cadre_elem = document.querySelector(".cadre");
const sett_image = document.querySelector(".img_sett_zoom");

cadre_elem.addEventListener("mouseenter", (e) => {
    const rect = cadre_elem.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // sett_image.style.position = "absolute"; // important pour que left/top soient pris en compte
    sett_image.style.left = (rect.left-50) + "px";
    sett_image.style.top = (rect.top-90) + "px";

    sett_image.style.visibility = "visible";
    sett_image.style.opacity = "0.9";
});

cadre_elem.addEventListener("mouseleave", () => {
    sett_image.style.visibility = "hidden";
    sett_image.style.opacity = "0";
})


//---------------------------------------------------------------------
const cadre_2_elem = document.querySelector(".cadre_2")
const cadre_2_img = document.getElementById("img_cadre_2");

cadre_2_elem.addEventListener("mouseenter", (e) => {
    const rect = cadre_elem.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    cadre_2_img.style.visibility = "visible";
    cadre_2_img.style.opacity = "0.95";
});

cadre_2_elem.addEventListener("mouseleave", () => {
    cadre_2_img.style.visibility = "hidden";
    cadre_2_img.style.opacity = "0";
})