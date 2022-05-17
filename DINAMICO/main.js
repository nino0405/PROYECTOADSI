// estilo barra menu  scroller

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


// mostrar/ocultar PFS respuestas

const pfs = document.querySelectorAll('.pf');

pfs.forEach(pf => {
    pf.addEventListener('click', () => {
        pf.classList.toggle('open');

        const icon = pf.querySelector('.pf_icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})


//mostrar/ocultar barra de menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//cerrar barra menuBtn
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click", closeNav)