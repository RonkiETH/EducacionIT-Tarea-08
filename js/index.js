//Variables para los bonus
let click = 0
let stylesButton = document.getElementById("estilos-btn");
let stylesLink = document.getElementsByClassName('estilos-link')[0];
let randomButton = document.getElementById("random-btn");
let recordarButton = document.getElementById("recordar-btn");
let bonus3 = document.getElementById("bonus-3")
let bonus4 = document.querySelectorAll(".bonus-4");

//Cambiar los estilos
stylesButton.addEventListener("click", () => {
    click++
    console.log(click);
    if (click == 1) {
        stylesLink.setAttribute("href", "css/estilos-retro.css");
    } else if (click == 2) {
        stylesLink.setAttribute("href", "css/estilos-futuro.css");
    } else if (click == 3) {
        click = 0;
        stylesLink.setAttribute("href", "css/estilos.css");
    }
});

//Bonus 1 (Estilos Aleatorios)
randomButton.addEventListener("click", () => {
  let number = Math.random() * 100;
    if (number < 25) {
        stylesLink.setAttribute("href", "css/estilos-retro.css");
    } else if ((number > 25) & (number < 50)) {
        stylesLink.setAttribute("href", "css/estilos-futuro.css");
    }else if ((number > 50) & (number < 75)){
        stylesLink.setAttribute("href", "css/estilos.css");
    }else {
        stylesLink.removeAttribute("href");
        // bonusDiv.style.display = "none";
    }
});

//Bonus 2 (Recordar estilos)
window.addEventListener("DOMContentLoaded", () => {
    let localStyle =
        JSON.parse(localStorage.getItem("setStyle")) ||
        stylesLink.setAttribute("href", "css/estilos.css");
        // stylesLink.setAttribute("href", localStyle);
        if (localStyle) {
            stylesLink.setAttribute("href", localStyle);
        } else {
            stylesLink.setAttribute("href", "css/estilos.css");
        }
    recordarButton.style.opacity = 0.4;
});

function guardarEstilo() {
    let linkHref = stylesLink.href
    //Guardo el estilo en el localStorage
    localStorage.setItem("setStyle", JSON.stringify(linkHref));
    recordarButton.style.opacity = 0.4;
}

function borrarEstilo() {
    recordarButton.style.opacity = 1;
    localStorage.setItem("setStyle", "css/estilos.css");
}

recordarButton.addEventListener("click", () => {
    if (recordarButton.style.opacity == 0.4) {
        borrarEstilo();
    } else {
        guardarEstilo();
    }
});

//Bonus 3 (Cambiar estilos con select)
bonus3.addEventListener("click", (e) => {
    if(recordarButton.style.opacity == 0.4){
        if (e.target.value == "original") {
            stylesLink.setAttribute("href", "css/estilos.css");
            guardarEstilo()
        } else if (e.target.value == "retro") {
            stylesLink.setAttribute("href", "css/estilos-retro.css");
            guardarEstilo()
        } else if (e.target.value == "futuro") {
            stylesLink.setAttribute("href", "css/estilos-futuro.css");
            guardarEstilo()
        } else if (e.target.value == "sin-estilo") {
            stylesLink.removeAttribute("href");
            guardarEstilo()
        }
    } else {
        return
    }
});

//Bonus 4 (Cambiar estilos con inputs radio)
bonus4.forEach((e) => {
    e.addEventListener("click", (e) => {
        if(recordarButton.style.opacity == 0.4){
            if (e.target.value == "original") {
                stylesLink.setAttribute("href", "css/estilos.css");
                guardarEstilo()
            } else if (e.target.value == "retro") {
                stylesLink.setAttribute("href", "css/estilos-retro.css");
                guardarEstilo()
            } else if (e.target.value == "futuro") {
                stylesLink.setAttribute("href", "css/estilos-futuro.css");
                guardarEstilo()
            } else if (e.target.value == "sin-estilo") {
                stylesLink.removeAttribute("href");
                guardarEstilo()
            }
        }
    });
});