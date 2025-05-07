const descansoCurto = document.querySelector(".app__card-button--curto");
const descansoLongo = document.querySelector(".app__card-button--longo");
const foco = document.querySelector(".app__card-button--foco");
const fotoDescanso = document.querySelector(".app__image");
const checkBox = document.querySelector(".toggle-checkbox")
const playSound = document.querySelectorAll(".play-checked, .pause-checked, .beep-checked, .luna-checked");
const comecar = document.querySelector("#start-pause");
const contado = document.querySelector(".toggle-switch")

function contagem() {
    let time = 250000;

    for (let i = 0; time > i;) {
        setTimeout(console.log(time/10000), 1000);
        time - 1;
    }
}

descansoCurto.addEventListener("click", () => {
    //document.querySelectorAll("html").forEach(html =>{
        //html.classList.add("active")
    //})


    document.querySelectorAll("html").forEach(html => {

        descansoCurto.classList.add("active");
        html.setAttribute("data-contexto", "descanso-curto");
        fotoDescanso.setAttribute("src", "../imagens/descanso-curto.png");

        if (foco.classList[2] === "active") {
            foco.classList.remove("active");
        }
        else if(descansoLongo.classList[2] === "active") {
            descansoLongo.classList.remove("active");
        }
        
        
        comecar.addEventListener("click", () => {
            const check = checkBox.checked;
            if(check) {
                playSound[0].play();
            }
            else {
                playSound[0].pause();
            }
            contagem()
        })

    })
    
})

foco.addEventListener("click", () =>{

    document.querySelectorAll("html").forEach(html => {
        foco.classList.add("active");
        html.setAttribute("data-contexto", "foco");
        fotoDescanso.setAttribute("src", "../imagens/foco.png");

        if (descansoCurto.classList[2] === "active") {
            descansoCurto.classList.remove("active");
        }
        else if(descansoLongo.classList[2] === "active") {
            descansoLongo.classList.remove("active");
        }
        
    })
})

descansoLongo.addEventListener("click", () => {

    document.querySelectorAll("html").forEach(html => {
        descansoLongo.classList.add("active");
        html.setAttribute("data-contexto", "descanso-longo");

        fotoDescanso.setAttribute("src", "../imagens/descanso-longo.png");
        if (descansoCurto.classList[2] === "active") {
            descansoCurto.classList.remove("active");
        }
        else if(foco.classList[2] === "active"){
            foco.classList.remove("active");
        }

        
    })
})



