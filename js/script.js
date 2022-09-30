const btn = document.getElementById("btnOn");
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

var cd = cityDayBrazil;
var cn = cityNightBrazil;
var lac = lampOn;
var lap = lampOff;
var lq = lampBroken;


// Change City
selectCity.addEventListener("change", ()=>{

    if (selectCity.value == 'newyork') {
        selectCity.style.color = 'red';
        changingBackground(cityDay, cityNight)
    } else if (selectCity.value == 'brazil') {
        selectCity.style.color = 'green';
        changingBackground(cityDayBrazil, cityNightBrazil)
    };
});



// Events
// a = cidade dia
// b = cidade noite
// c = lamp acesa
// d = lamp apagada
// e = lamp quebrada
var on = btn.addEventListener("click", (e)=> {
    e.preventDefault();
    lightOn(cd, cn, lac, lap, lq);
});

var off = btnOff.addEventListener("click", (e)=> {
    e.preventDefault();
    lightOff(cd, cn, lac, lap, lq);
});

lampOff.addEventListener("click", (e)=> {
    e.preventDefault();
    changeLamp(cd, cn, lac, lap, lq);
});

lampOn.addEventListener("click", (e)=> {
    e.preventDefault();
    changeLamp(cd, cn, lac, lap, lq);
});

btnBroken.addEventListener("click", (e)=> {
    e.preventDefault();
    lightOff(cd, cn, lac, lap, lq);
});


// Functions
// a = cidade dia
// b = cidade noite
// c = lamp acesa
// d = lamp apagada
// e = lamp quebrada
function lightOn(a, b, c, d, e) {
    d.classList.add("hide");
    c.classList.remove("hide");
    b.classList.add("hide");
    a.classList.remove("hide");
    e.classList.add("hide");
};

function lightOff(a, b, c, d, e) {
    d.classList.remove("hide");
    c.classList.add("hide");
    b.classList.remove("hide");
    a.classList.add("hide");
    e.classList.add("hide");
    btn.classList.remove("hide");
    btnOff.classList.remove("hide");
    btnBroken.classList.add("hide");
};

function changeLamp(a, b, c, d, e) {
    c.classList.add("hide");
    d.classList.add("hide");
    e.classList.remove("hide");
    a.classList.add("hide");
    b.classList.remove("hide");
    btn.classList.add("hide");
    btnOff.classList.add("hide");
    btnBroken.classList.remove("hide");
};

function changingBackground(cidadeDia, cidadeNoite) {
    cd = cidadeDia;
    cn = cidadeNoite;
};

