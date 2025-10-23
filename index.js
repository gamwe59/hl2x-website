let panel = document.getElementById("panel")
let pContent = document.getElementById("pContent")
let b1 = document.getElementById("b1")

b1.onclick = function() {
    panel.setAttribute("class", "panel centerAlign wideMenu tallMenu")
    pContent.classList.add("panelContentTransitioning")
}
b2.onclick = function() {
    panel.setAttribute("class", "panel centerAlign smallMenu")
    pContent.classList.add("panelContentTransitioning")
}
b3.onclick = function() {
    panel.setAttribute("class", "panel rightAlign smallMenu")
    pContent.classList.add("panelContentTransitioning")
}

function panelTransEnd(event) {
    panel.classList.add("panelAnimate")
    setTimeout(function(){
    pContent.classList.remove("panelContentTransitioning")
}, 200);
}

function STOPITSTOPSTOP(event) {
    event.stopPropagation()
}

panel.addEventListener("transitionend", panelTransEnd)
pContent.addEventListener("transitionend", STOPITSTOPSTOP)