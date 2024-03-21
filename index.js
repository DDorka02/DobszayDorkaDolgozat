import { BABAK } from "./fuggvenyek.js"
import {letrehozTablazat} from "./fuggvenyek.js"

const ELEMEK = document.querySelector(".tartalom")
    console.log(ELEMEK)
    ELEMEK.innerHTML=letrehozTablazat(BABAK)

//const KEP = document.querySelector("")
    //console.log(KEP)

const KEPEK = document.querySelectorAll(".kepek img")  
for (let index = 0; index < KEPEK.length; index++) {
    KEPEK[index].addEventListener("mouseover", function () {
    KEPEK[index].classList.add("kiv") })
}

/*const MEGMUTAT =document.querySelector(".megmutat")
    MEGMUTAT.addEventListener("click", function ()) {

    }*/
