export const BABAK = [
    {nev: 'Bori', tomeg: 134, kep: 'Babak1.png'},
    {nev: 'Rozi', tomeg: 134, kep: 'Babak2.png'},
    {nev: 'Veronika', tomeg: 134, kep: 'Babak3.png'},
    {nev: 'László', tomeg: 134, kep: 'Babak4.png'},
    {nev: 'Veronika', tomeg: 134, kep: 'Babak5.png'}
]

export function letrehozTablazat() {
    let txt = `<div class="kepek">`
    txt += `<img src="Babak1.png" alt="Baba">`
    txt += `<img src="Babak2.png" alt="Baba">`
    txt += `<img src="Babak3.png" alt="Baba">`
    txt += `<img src="Babak4.png" alt="Baba">`
    txt += `<img src="Babak5.png" alt="Baba">`
    txt += "</div>"
    console.log(txt)

    return txt

}
const ELEM = document.querySelector(".tartalom")
ELEM.innerHTML += letrehozTablazat(BABAK)


