const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const btnBroken = document.getElementById("btnBroken");
const selectCity = document.getElementById("selectCity");

const lampOn = document.getElementById("lampOn");
const lampOff = document.getElementById("lampOff");
const lampBroken = document.getElementById("lampBroken");

const cityDay = document.getElementById("cityDay");
const cityNight = document.getElementById("cityNight");
const cityDayBrazil = document.getElementById("cityDayBrazil");
const cityNightBrazil = document.getElementById("cityNightBrazil");

var backgroundMain = window.document.body;

var cd;
var cn;
var lac = lampOn;
var lap = lampOff;
var lq = lampBroken;


// Change City
selectCity.addEventListener("change", ()=>{

    if (selectCity.value == 'newyork') {

        selectCity.style.color = 'red';
        changeCity(cityDay, cityNight)

    } else if (selectCity.value == 'brazil') {

        selectCity.style.color = 'green';
        changeCity(cityDayBrazil, cityNightBrazil)

    };
});

function changeCity(cidadeDia, cidadeNoite) {
    backgroundMain.style.background = 'none'
    cd = cidadeDia;
    cn = cidadeNoite;
    cn.classList.remove("hide");
};

// Events
// a = cidade dia
// b = cidade noite
// c = lamp acesa
// d = lamp apagada
// e = lamp quebrada
btnOn.addEventListener("click", (e)=> {
    e.preventDefault();
    lamOn(lac, lap, lq);
});
btnOff.addEventListener("click", (e)=> {
    e.preventDefault();
    lamOff(lac, lap, lq);
});
btnBroken.addEventListener("click", (e)=> {
    e.preventDefault();
    lamOff(lac, lap, lq);
    BtnLamp();
});
lampOn.addEventListener("click", (e)=> {
    e.preventDefault()
    lamBroken(lac, lap, lq);
    changeBtnBroken();
});
lampOff.addEventListener("click", (e)=> {
    e.preventDefault()
    lamBroken(lac, lap, lq);
    changeBtnBroken();
});


// Functions
// a = cidade dia
// b = cidade noite
// c = lamp acesa
// d = lamp apagada
// e = lamp quebrada
function lamOn(c, d, e) {
    c.classList.remove("hide");
    d.classList.add("hide");
    e.classList.add("hide");
};
function lamOff(c, d, e) {
    c.classList.add("hide");
    d.classList.remove("hide");
    e.classList.add("hide");
};
function lamBroken(c, d, e) {
    c.classList.add("hide");
    d.classList.add("hide");
    e.classList.remove("hide");
};
function CD(a, b) {
    a.classList.remove("hide");
    b.classList.add("hide");
};
function CN(a, b) {
    a.classList.add("hide");
    b.classList.remove("hide");
};
function changeBtnBroken() {
    btnOn.classList.add("hide");
    btnOff.classList.add("hide");
    btnBroken.classList.remove("hide");
};
function BtnLamp() {
    btnOn.classList.remove("hide");
    btnOff.classList.remove("hide");
    btnBroken.classList.add("hide");
};








// function lightOn(a, b, c, d, e) {
//     d.classList.add("hide");
//     c.classList.remove("hide");
//     b.classList.add("hide");
//     a.classList.remove("hide");
//     e.classList.add("hide");
// };

// function lightOff(a, b, c, d, e) {
//     d.classList.remove("hide");
//     c.classList.add("hide");
//     b.classList.remove("hide");
//     a.classList.add("hide");
//     e.classList.add("hide");
//     btn.classList.remove("hide");
//     btnOff.classList.remove("hide");
//     btnBroken.classList.add("hide");
// };

// function changeLamp(a, b, c, d, e) {
//     c.classList.add("hide");
//     d.classList.add("hide");
//     e.classList.remove("hide");
//     a.classList.add("hide");
//     b.classList.remove("hide");
//     btn.classList.add("hide");
//     btnOff.classList.add("hide");
//     btnBroken.classList.remove("hide");
// };



