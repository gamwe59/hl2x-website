let panel = document.getElementById("panel")
let pContent = document.getElementById("pContent")

let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let backButton = document.getElementById("back")

let downloadButtons = document.querySelectorAll("[id='downloadButton']");

let header = document.getElementById("header")

let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")
let c5 = document.getElementById("c5")

let dt = document.getElementById("downloadTitle")

let scroller = document.getElementById("scroller1")
let scroller2 = document.getElementById("scroller2")
let curScroller = scroller

let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")

let downloadPages = Math.ceil(scroller.childElementCount/3)
let curPage = 0
let rArrow = document.getElementById("rArrow")
let lArrow = document.getElementById("lArrow")
let pageNumber = document.getElementById("pageNumber")
pageNumber.textContent = (curPage+1)+"/"+downloadPages

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
        console.log(curDiv)
    }
}

b1.onclick = function() {
    transition("panel centerLargeAlign wideMenu tallMenu", "DOWNLOADS", deploySound, c2)
}
b2.onclick = function() {
    transition("panel centerLargeAlign wideMenu tallerMenu", "BLOG", deploySound, c3)
}
b3.onclick = function() {
    transition("panel centerSmallAlign smallMenu", "GUIDE", deploySound, c4)
}
b4.onclick = function() {
    transition("panel centerLargeAlign wideMenu tallerMenu", "ABOUT", deploySound, c5)
}
backButton.onclick = function() {
    transition("panel rightAlign smallMenu", "MAIN MENU", retractSound, c1)
}
t1.onclick = function() {
    scroller.classList.remove("invisible")
    scroller2.classList.add("invisible")
    curScroller = scroller
    downloadPages = Math.ceil(scroller.childElementCount/3)
    curPage = 0
    pageNumber.textContent = (curPage+1)+"/"+downloadPages
    scroller.style.setProperty('left', "0%")
    scroller2.style.setProperty('left', "0%")
    if (curPage == 0) {
        lArrow.classList.add("disabledArrow")
    }
    if (curPage == downloadPages-1) {
        rArrow.classList.add("disabledArrow")
    }
    dt.textContent = "MAPS"
}
t2.onclick = function() {
    scroller2.classList.remove("invisible")
    scroller.classList.add("invisible")
    curScroller = scroller2
    downloadPages = Math.ceil(scroller2.childElementCount/3)
    curPage = 0
    pageNumber.textContent = (curPage+1)+"/"+downloadPages
    scroller.style.setProperty('left', "0%")
    scroller2.style.setProperty('left', "0%")
    if (curPage == 0) {
        lArrow.classList.add("disabledArrow")
    }
    if (curPage == downloadPages-1) {
        rArrow.classList.add("disabledArrow")
    }
    dt.textContent = "PORTS"
}

rArrow.onclick = function() {
    if (curPage < downloadPages-1) {
        deploySound.pause()
        deploySound.currentTime = 0
        deploySound.play()
        curPage++
        curScroller.style.setProperty('left', (curPage*(-100))+"%")
        pageNumber.textContent = (curPage+1)+"/"+downloadPages
        lArrow.classList.remove("disabledArrow")
        if (curPage == downloadPages-1) {
            rArrow.classList.add("disabledArrow")
        }
    }
}
if (curPage == downloadPages-1) {
    rArrow.classList.add("disabledArrow")
}

lArrow.onclick = function() {
    if (curPage > 0) {
        retractSound.pause()
        retractSound.currentTime = 0
        retractSound.play()
        curPage--
        curScroller.style.setProperty('left', (curPage*(-100))+"%")
        rArrow.classList.remove("disabledArrow")
        pageNumber.textContent = (curPage+1)+"/"+downloadPages
        if (curPage == 0) {
            lArrow.classList.add("disabledArrow")
        }
    }
}
if (curPage == 0) {
    lArrow.classList.add("disabledArrow")
}

function panelTransEnd(event) {
    if (pContent.classList.contains("panelContentTransitioning")) {
        panel.classList.add("panelAnimate")
        clickSound.play();
        header.textContent = nextTitle
        setTimeout(function(){
            pContent.classList.remove("panelContentTransitioning")
            nextDiv.classList.remove("invisible")
            curDiv = nextDiv
        }, 200);
    }
}

function STOPITSTOPSTOP(event) {
    event.stopPropagation()
}

downloadButtons.forEach((element) => {
    element.addEventListener('click', function() {
        window.open(element.getAttribute("href"), "_blank")
    })
})

panel.addEventListener("transitionend", panelTransEnd)
pContent.addEventListener("transitionend", STOPITSTOPSTOP)



let standardLayoutToggle = document.getElementById("toggleLayout")

let layoutVer = false

standardLayoutToggle.onclick = function() {
    layoutVer = !layoutVer
    if (layoutVer == true) {
        standardLayoutToggle.classList.add("toggled")
        rArrow.classList.add("invisible")
        lArrow.classList.add("invisible")
        pageNumber.classList.add("invisible")
        scroller.classList.add("scroller")
        scroller.classList.remove("switcher")
        scroller2.classList.add("scroller")
        scroller2.classList.remove("switcher")
        curPage = 0
        pageNumber.textContent = (curPage+1)+"/"+downloadPages
        curScroller.style.setProperty('left', "0%")
    } else {
        standardLayoutToggle.classList.remove("toggled")
        rArrow.classList.remove("invisible")
        lArrow.classList.remove("invisible")
        pageNumber.classList.remove("invisible")
        scroller.classList.remove("scroller")
        scroller.classList.add("switcher")
        scroller2.classList.remove("scroller")
        scroller2.classList.add("switcher")
    }
}