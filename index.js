let panel = document.getElementById("panel")
let pContent = document.getElementById("pContent")
let b1 = document.getElementById("b1")
var deploySound = new Audio("/sfx/deploy.wav")
var retractSound = new Audio("/sfx/retract.wav")
var clickSound = new Audio("/sfx/click1.wav")
clickSound.volume = 0.4

function transition(classes, sound) {
    panel.classList.remove("panelAnimate")
    let curClass = panel.getAttribute("class")
    if (curClass != classes) {
        console.log(curClass)
        panel.setAttribute("class", classes)
        pContent.classList.add("panelContentTransitioning")
        sound.play();
    }
}

b1.onclick = function() {
    transition("panel centerAlign wideMenu tallMenu", deploySound)
}
b2.onclick = function() {
    transition("panel centerAlign smallMenu", deploySound)
}
b3.onclick = function() {
    transition("panel rightAlign smallMenu", retractSound)
}

function panelTransEnd(event) {
    panel.classList.add("panelAnimate")
    clickSound.play();
    setTimeout(function(){
        pContent.classList.remove("panelContentTransitioning")
    }, 200);
}

function STOPITSTOPSTOP(event) {
    event.stopPropagation()
}

panel.addEventListener("transitionend", panelTransEnd)
pContent.addEventListener("transitionend", STOPITSTOPSTOP)