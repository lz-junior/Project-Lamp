const btn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const btnBroken = document.getElementById("btnBroken");
const lampOn = document.getElementById("lampOn");
const lampOff = document.getElementById("lampOff");
const lampBroken = document.getElementById("lampBroken");
const cityDay = document.getElementById("cityDay");
const cityNight = document.getElementById("cityNight");

// Events
var on = btn.addEventListener("click", (e)=> {
    e.preventDefault();
    lightOn();
});

var off = btnOff.addEventListener("click", (e)=> {
    e.preventDefault();
    lightOff();
});

lampOff.addEventListener("click", (e)=> {
    e.preventDefault();
    changeLamp();
});

lampOn.addEventListener("click", (e)=> {
    e.preventDefault();
    changeLamp();
});

btnBroken.addEventListener("click", (e)=> {
    e.preventDefault();
    lightOff();
});


// Functions
function lightOn() {
    lampOff.classList.add("hide");
    lampOn.classList.remove("hide");
    cityNight.classList.add("hide");
    cityDay.classList.remove("hide");
    lampBroken.classList.add("hide");
};

function lightOff() {
    lampOff.classList.remove("hide");
    lampOn.classList.add("hide");
    cityNight.classList.remove("hide");
    cityDay.classList.add("hide");
    btn.innerText = "Acender";
    lampBroken.classList.add("hide");
    btn.classList.remove("hide");
    btnOff.classList.remove("hide");
    btnBroken.classList.add("hide");
};

function changeLamp() {
    lampOn.classList.add("hide");
    lampOff.classList.add("hide");
    lampBroken.classList.remove("hide");
    cityDay.classList.add("hide");
    cityNight.classList.remove("hide");
    btn.classList.add("hide");
    btnOff.classList.add("hide");
    btnBroken.classList.remove("hide");
};