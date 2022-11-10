//Variables
let input = document.getElementsByTagName("input");
let legend = document.getElementsByTagName("legend");
let fieldset = document.getElementsByTagName("fieldset");
let textarea = document.getElementsByTagName("textarea");
let select = document.getElementsByTagName("select");
let stylesButton = document.getElementById("estilos-btn");
let stylesLink = document.getElementsByClassName('estilos-link')[0];
let resetButton = document.getElementById('reset-btn');
let randomButton = document.getElementById("random-btn");
let recordarButton = document.getElementById("recordar-btn");
let click = 0

// Botón que vacía el formulario
resetButton.addEventListener("click", ()=> {
    let form = document.getElementById("form");
    form.reset()
});

//Estilos del formulario
if (stylesLink.hasAttribute('href')){
    //Input Focus
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("focus", () => {
            input[i].style.background = "#4A6963"
            input[i].style.color = "#FFF"
            if (i < 8) {
                legend[0].style.background = "#2d3c39";
                fieldset[0].style.background = "#A5BDB9";
            } else if ((i >= 8) & (i <= 9)) {
                legend[1].style.background = "#2d3c39";
                fieldset[1].style.background = "#A5BDB9";
            } else if ((i >= 9) & (i <= 17)){
                legend[2].style.background = "#2d3c39";
                fieldset[2].style.background = "#A5BDB9";
            }
        });
    }

    //Input Blur
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("blur", () => {
            input[i].style.background = "#FFF"
            input[i].style.color = "#4A6963"
            legend[0].style.background = "#4b6963";
            fieldset[0].style.background = "#D6E1DF";
            legend[1].style.background = "#4b6963";
            fieldset[1].style.background = "#D6E1DF";
            legend[2].style.background = "#4b6963";
            fieldset[2].style.background = "#D6E1DF";
        });
    }

    //Textarea Focus
    for (let i = 0; i < textarea.length; i++) {
        textarea[i].addEventListener("focus", () => {
            legend[0].style.background = "#2d3c39";
            fieldset[0].style.background = "#A5BDB9";
        });
    }

    //Textarea Blur
    for (let i = 0; i < textarea.length; i++) {
        textarea[i].addEventListener("blur", () => {
            legend[0].style.background = "#4b6963";
            fieldset[0].style.background = "#D6E1DF";
        });
    }

    //Select Focus
    for (let i = 0; i < select.length; i++) {
        select[i].addEventListener("focus", () => {
            legend[0].style.background = "#2d3c39";
            fieldset[0].style.background = "#A5BDB9";
        });
    }

    //Select Blur
    for (let i = 0; i < select.length; i++) {
        select[i].addEventListener("blur", () => {
            legend[0].style.background = "#4b6963";
            fieldset[0].style.background = "#D6E1DF";
        });
    }
}

//Cambiar los estilos
stylesButton.addEventListener("click", () => {
    click++
    console.log(click);
    if (click == 1) {
        stylesLink.removeAttribute("href");
        stylesLink.setAttribute("href", "css/estilos-retro.css");
    } else if (click == 2) {
        stylesLink.removeAttribute("href");
        stylesLink.setAttribute("href", "css/estilos-futuro.css");
    } else if (click == 3) {
        click = 0;
        stylesLink.removeAttribute("href");
        stylesLink.setAttribute("href", "css/estilos.css");
    }
});

//Bonus 1 (estilos aleatorios)
randomButton.addEventListener("click", () => {
  let number = Math.random() * 100;
    if (number < 25) {
        stylesLink.setAttribute("href", "css/estilos-retro.css");
    } else if ((number > 25) & (number < 50)) {
        stylesLink.setAttribute("href", "css/estilos-futuro.css");
    }else if ((number > 50) & (number < 75)){
        stylesLink.setAttribute("href", "css/estilos.css");
    }else {
        stylesLink.removeAttribute('href');
    }
});

// stylesLink.removeAttribute('href');
// console.log(stylesLink);

//Bonus 2
recordarButton.addEventListener("click",()=> {
    localStorage.setItem("styles", JSON.stringify(stylesLink.href))
    recordarButton.style.opacity = 0.5
    recordarButton.style.boxShadow = '3px 33px 2px 0px rgba(0,0,0,0.75) inset';
    console.log("Se guardará con éxito el siguiente estilo: " + JSON.parse(localStorage.getItem("styles"))); 
})
window.addEventListener("DOMContentLoaded", () => {
    let newStyles = JSON.parse(localStorage.getItem("styles") ||  stylesLink.setAttribute("href", "css/estilos.css"));
    stylesLink.setAttribute("href", newStyles);
    console.log("Cargando estilo " + JSON.parse(localStorage.getItem("styles"))); 
})

//Bonus 3

