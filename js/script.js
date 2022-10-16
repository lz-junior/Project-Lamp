const backgrounds = [
    {
        ba: "image/ba-day.jpg",
        mg: "image/mg-day.jpg",
        rj: "image/rj-day.jpg",
        pr: "image/pr-day.jpg",
        sp: "image/sp-day.jpg"
    },
];

const lamps = 
{
    lamp_on: 'image/lampada-acesa.png',
    lamp_off: "image/lampada-apagada.png",
    lamp_broken: "image/lampada-quebrada.png"
};

var background_filter = document.getElementById("background_filter");
var background = document.getElementById("background");
var lamp = document.getElementById("lamps");
const btnOn_id = document.getElementById("btnOn");
const btnOff_id = document.getElementById("btnOff");
const btnBroken_id = document.getElementById("btnBroken");
const selectCity = document.getElementById("selectCity");


night_city();


// FUNCIONAMENTO DA LÂMPADA
function btnOn() {
    lamp.setAttribute('src', lamps.lamp_on);
    day_city();
};

function btnOff() {
    lamp.setAttribute('src', lamps.lamp_off);
    night_city();
};

function btnBroken() {

    lamp.setAttribute('src', lamps.lamp_off);

    btnOn_id.classList.remove("hide");
    btnOff_id.classList.remove("hide");
    btnBroken_id.classList.add("hide");
};

lamp.addEventListener("click", ()=> {

    lamp.setAttribute('src', lamps.lamp_broken);

    btnOn_id.classList.add("hide");
    btnOff_id.classList.add("hide");
    btnBroken_id.classList.remove("hide");

    night_city();
});
//==========================================================


// TROCA DA NOITE PARA DIA
function night_city() {

    background_filter.classList.add("hide");

    selectCity.addEventListener("change", ()=> {

        lamp.setAttribute('src', lamps.lamp_off);
        btnBroken();

        switch (selectCity.value) {
            case 'bahia':                
                background.setAttribute('src', backgrounds[0]['ba']);
                background_filter.classList.remove("hide");
                break
            case 'minasgerais':                
                background.setAttribute('src', backgrounds[0]['mg']);
                background_filter.classList.remove("hide");
                break
            case 'parana':                
                background.setAttribute('src', backgrounds[0]['pr']);
                background_filter.classList.remove("hide");
                break
            case 'riodejaneiro':
                background.setAttribute('src', backgrounds[0]['rj']);
                background_filter.classList.remove("hide");
                break
            case 'saopaulo':
                background.setAttribute('src', backgrounds[0]['sp']);
                background_filter.classList.remove("hide");
                break
            default:
                break
        };
    });


    if (selectCity.value === 'bahia') {
        background.setAttribute('src', backgrounds[0]['ba']);
        background_filter.classList.remove("hide");
    } else if (selectCity.value === 'minasgerais') {
        background.setAttribute('src', backgrounds[0]['mg']);
        background_filter.classList.remove("hide");        
    } else if (selectCity.value === 'parana') {
        background.setAttribute('src', backgrounds[0]['pr']);
        background_filter.classList.remove("hide");
    } else if (selectCity.value === 'riodejaneiro') {
        background.setAttribute('src', backgrounds[0]['rj']);
        background_filter.classList.remove("hide");
    } else if (selectCity.value === 'saopaulo') {
        background.setAttribute('src', backgrounds[0]['sp']);
        background_filter.classList.remove("hide");
    };

};

function day_city() {

    if (selectCity.value === 'bahia') {
        background.setAttribute('src', backgrounds[0]['ba']);
        background_filter.classList.add("hide");
    } else if (selectCity.value === 'minasgerais') {
        background.setAttribute('src', backgrounds[0]['mg']);
        background_filter.classList.add("hide");
    } else if (selectCity.value === 'parana') {
        background.setAttribute('src', backgrounds[0]['pr']);
        background_filter.classList.add("hide");
    } else if (selectCity.value === 'riodejaneiro') {
        background.setAttribute('src', backgrounds[0]['rj']);
        background_filter.classList.add("hide");
    } else if (selectCity.value === 'saopaulo') {
        background.setAttribute('src', backgrounds[0]['sp']);
        background_filter.classList.add("hide");
    };

};
//==========================================================