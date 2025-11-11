let bg = document.getElementById("backgroundnew")
let container = document.getElementById("container")
let bgs = 4
let curBG = 1
let lastBG = 4

function loop() {
    bg.classList.add("bg"+curBG)
    bg.classList.remove("bg"+lastBG)
    bg.classList.add("transitioning")
    lastBG = curBG
    curBG++
    if (curBG > bgs) {
        curBG = 1
    }
    setTimeout(function(){
        loop()
    }, 20000);
}

function panelTransEnd(event) {
    bg.classList.remove("transitioning")
    container.classList.add("bg"+curBG)
    container.classList.remove("bg"+lastBG)
}

bg.addEventListener("transitionend", panelTransEnd)

loop()