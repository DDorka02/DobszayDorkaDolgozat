import { BABAK } from "./fuggvenyek"


function letrehozTablazat(tomb) {
    let txt = "<table>"
    for (let index = 0; index < tomb.length; index++) {
        txt += "<tr>"
        txt += "<td>"+BABAK[index].nev+"</td>"
        txt += "<td>"+BABAK[index].tomeg+"</td>"
        txt += "<td>"+BABAK[index].kep+"</td>"
        txt += "</tr>"  
    }
    txt += "</table>"
    console.log(txt)

    return txt

}
const ELEM = document.querySelector("#feladat_1")
ELEM.innerHTML += letrehozTablazat(BABAK)

