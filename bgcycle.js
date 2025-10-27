let bg = document.getElementById("bg")
let container = document.getElementById("container")
let bgs = 4
let curBG = 1

function loop() {
    let lastBG = curBG-1
    if (lastBG == 0) {
        lastBG = bgs
    }
    console.log(curBG, lastBG)
    bg.classList.add("bg"+curBG)
    container.classList.add("bg"+curBG)
    bg.classList.remove("bg"+lastBG)
    container.classList.remove("bg"+lastBG)
    curBG++
    if (curBG > bgs) {
        curBG = 1
    }
    setTimeout(function(){
        loop()
    }, 2000);
}

loop()