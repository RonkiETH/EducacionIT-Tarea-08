//Variables
let form = document.getElementById("form");
let formInputs = document.getElementsByClassName("form-input");
let legend = document.getElementsByTagName("legend");
let fieldset = document.getElementsByTagName("fieldset");
let textarea = document.getElementById("textarea-form");
let select = document.getElementById("select-form");
let stylesButton = document.getElementById("estilos-btn");
let stylesLink = document.getElementsByClassName('estilos-link')[0];
let resetButton = document.getElementById('reset-btn');
let randomButton = document.getElementById("random-btn");
let recordarButton = document.getElementById("recordar-btn");
let bonusDiv = document.getElementById("bonus-div");
let click = 0

// Botón que vacía el formulario
resetButton.addEventListener("click", () => {
    form.reset()
});

window.addEventListener("click", () => {
    let styles = stylesLink.href;
    let noStyles = styles.includes("sin") || styles.includes("retro") || styles.includes("futuro");
    
    if (noStyles === true) {

        //Input Focus
        for (let i = 0; i < formInputs.length; i++) {
            formInputs[i].addEventListener("focus", () => {
                formInputs[i].style.background = "";
                formInputs[i].style.color = "";
                legend[0].style.background = "";
                legend[1].style.background = "";
                legend[2].style.background = "";
                fieldset[0].style.background = "";
                fieldset[1].style.background = "";
                fieldset[2].style.background = "";
            });
        }

        //Input Blur
        for (let i = 0; i < formInputs.length; i++) {
            formInputs[i].addEventListener("blur", () => {
                formInputs[i].style.background = "";
                formInputs[i].style.color = "";
                legend[0].style.background = "";
                legend[1].style.background = "";
                legend[2].style.background = "";
                fieldset[0].style.background = "";
                fieldset[1].style.background = "";
                fieldset[2].style.background = "";
            });
        }

        //Textarea Focus
        textarea.addEventListener("focus", () => {
            legend[0].style.background = "";
            fieldset[0].style.background = "";
        });
        
        //Textarea Blur
        textarea[i].addEventListener("blur", () => {
            legend[0].style.background = "";
            fieldset[0].style.background = "";
        });

        //Select Focus
        select.addEventListener("focus", () => {
            legend[0].style.background = "";
            fieldset[0].style.background = "";
        });

        //Select Blur
        select.addEventListener("blur", () => {
            legend[0].style.background = "";
            fieldset[0].style.background = "";
        });
    } else {
        //Input Focus
        for (let i = 0; i < formInputs.length; i++) {
            formInputs[i].addEventListener("focus", () => {
                formInputs[i].style.background = "#4A6963"
                formInputs[i].style.color = "#FFF"
                if (i < 6) {
                    legend[0].style.background = "#2d3c39";
                    fieldset[0].style.background = "#A5BDB9";
                } else if ((i >= 6) & (i <= 7)) {
                    legend[1].style.background = "#2d3c39";
                    fieldset[1].style.background = "#A5BDB9";
                } else if ((i >= 7) & (i <= 15)){
                    legend[2].style.background = "#2d3c39";
                    fieldset[2].style.background = "#A5BDB9";
                }
            });
        }

        //Input Blur
        for (let i = 0; i < formInputs.length; i++) {
                formInputs[i].addEventListener("blur", () => {
                formInputs[i].style.background = "#FFF";
                formInputs[i].style.color = "#4A6963";
                legend[0].style.background = "#4b6963";
                legend[1].style.background = "#4b6963";
                legend[2].style.background = "#4b6963";
                fieldset[0].style.background = "#D6E1DF";
                fieldset[1].style.background = "#D6E1DF";
                fieldset[2].style.background = "#D6E1DF";
            });
        }
        //Textarea Focus
        textarea.addEventListener("focus", () => {
            legend[0].style.background = "#2d3c39";
            fieldset[0].style.background = "#A5BDB9";
        });
        
        //Textarea Blur
        textarea.addEventListener("blur", () => {
            legend[0].style.background = "#4b6963";
            fieldset[0].style.background = "#D6E1DF";
        });

        //Select Focus
        select.addEventListener("focus", () => {
            legend[0].style.background = "#2d3c39";
            fieldset[0].style.background = "#A5BDB9";
        });

        //Select Blur
        select.addEventListener("blur", () => {
            legend[0].style.background = "#4b6963";
            fieldset[0].style.background = "#D6E1DF";
        });
    }
});

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
        stylesLink.setAttribute("href", "css/sin-estilo.css");
        bonusDiv.style.display = "none";
    }
});

// stylesLink.removeAttribute('href');
// console.log(stylesLink);

// //Bonus 2
// recordarButton.addEventListener("click",()=> {
//     localStorage.setItem("styles", JSON.stringify(stylesLink.href))
//     recordarButton.style.opacity = 0.5
//     recordarButton.style.boxShadow = '3px 33px 2px 0px rgba(0,0,0,0.75) inset';
//     console.log("Se guardará con éxito el siguiente estilo: " + JSON.parse(localStorage.getItem("styles"))); 
// })
// window.addEventListener("DOMContentLoaded", () => {
//     let newStyles = JSON.parse(localStorage.getItem("styles") ||  stylesLink.setAttribute("href", "css/estilos.css"));
//     stylesLink.setAttribute("href", newStyles);
//     console.log("Cargando estilo " + JSON.parse(localStorage.getItem("styles"))); 
// })

//Bonus 3

function Focus(){

}
