let panel = document.getElementById("panel")
let pContent = document.getElementById("pContent")

let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")

let header = document.getElementById("header")

let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")

var deploySound = new Audio("./sfx/deploy.wav")
var retractSound = new Audio("./sfx/retract.wav")
var clickSound = new Audio("./sfx/click1.wav")
clickSound.volume = 0.4

let nextTitle = "MAIN MENU"
let nextDiv = c2
let curDiv = c1

function transition(classes, title, sound, div) {
    panel.classList.remove("panelAnimate")
    let curClass = panel.getAttribute("class")
    if (curClass != classes) {
        console.log(curClass)
        panel.setAttribute("class", classes)
        pContent.classList.add("panelContentTransitioning")
        sound.play();
        nextTitle = title
        nextDiv = div
        curDiv.classList.add("invisible")
    }
}

b1.onclick = function() {
    transition("panel centerAlign wideMenu tallMenu", "DOWNLOADS", deploySound, c2)
}
b2.onclick = function() {
    transition("panel centerAlign smallMenu", "BLOG", deploySound, c3)
}
b3.onclick = function() {
    transition("panel rightAlign smallMenu", "GUIDE", retractSound, c4)
}

function panelTransEnd(event) {
    panel.classList.add("panelAnimate")
    clickSound.play();
    header.textContent = nextTitle
    setTimeout(function(){
        pContent.classList.remove("panelContentTransitioning")
        nextDiv.classList.remove("invisible")
    }, 200);
}

function STOPITSTOPSTOP(event) {
    event.stopPropagation()
}

panel.addEventListener("transitionend", panelTransEnd)
pContent.addEventListener("transitionend", STOPITSTOPSTOP)