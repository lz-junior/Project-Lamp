
var teste = 'teste'

const backgrounds = [
    'image/riodejaneiro-day.jpg',
];


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

var backgroundMain = document.body;

var cd = {cityDay, cityDayBrazil}
var cn = {cityNight, cityNightBrazil}
var lac = lampOn;
var lap = lampOff;
var lq = lampBroken;

funcionamentoLampada()

// Change City
selectCity.addEventListener("change", ()=>{
    
    switch (selectCity.value) {

        case 'newyork':

            document.querySelector('body').style.backgroundImage = `url(${backgrounds[0]})`;

            // cityDayBrazil.classList.add("hide");
            // cityNightBrazil.classList.add("hide");
            // selectCity.style.color = 'red';
            // CN(cityDay, cityNight);
            // funcionamentoLampada(cityDay, cityNight)
            // lamOff(lac, lap, lq);
            // BtnLamp()
            break

        case 'brazil':
            cityDay.classList.add("hide");
            cityNight.classList.add("hide");
            selectCity.style.color = 'green';
            CN(cityDayBrazil, cityNightBrazil);
            funcionamentoLampada(cityDayBrazil, cityNightBrazil)
            lamOff(lac, lap, lq);
            BtnLamp()
            break

        default:
            break
    };
});

// FUNCIONAMENTO DA LÂMPADA
function funcionamentoLampada(a, b) {

// Events
// a = cidade dia
// b = cidade noite
// c = lamp acesa
// d = lamp apagada
// e = lamp quebrada

    btnOn.addEventListener("click", (e)=> {
        e.preventDefault();
        lamOn(lac, lap, lq);
        CD(a, b)
    });

    btnOff.addEventListener("click", (e)=> {
        e.preventDefault();
        lamOff(lac, lap, lq);
        CN(a, b)
    });
    btnBroken.addEventListener("click", (e)=> {
        e.preventDefault();
        lamOff(lac, lap, lq);
        BtnLamp();
        CN(a, b)
    });

    lampOn.addEventListener("click", (e)=> {
        e.preventDefault()
        lamBroken(lac, lap, lq);
        changeBtnBroken();
        CN(a, b)
    });

    lampOff.addEventListener("click", (e)=> {
        e.preventDefault()
        lamBroken(lac, lap, lq);
        changeBtnBroken();
        CN(a, b)
    });
};

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