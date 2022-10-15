
const backgrounds = [
    {
        ba_day: "image/ba-day.jpg",
        ba_night: "image/ba-night.jpg"
    },
    {
        mg_day: "image/mg-day.jpg",
        mg_night: "image/mg-night.jpg"
    },
    {
        rj_day: "image/rj-day.jpg",
        rj_night: "image/rj-night.jpg"
    },
    {
        sp_day: "image/sp-day.jpg",
        sp_night: "image/sp-night.jpg"
    }
];

const lamps = 
{
    lamp_on: 'image/lampada-acesa.png',
    lamp_off: "image/lampada-apagada.png",
    lamp_broken: "image/lampada-quebrada.png"
};

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

    selectCity.addEventListener("change", ()=> {

        lamp.setAttribute('src', lamps.lamp_off);
        btnBroken();

        switch (selectCity.value) {
            case 'bahia':                
                background.setAttribute('src', backgrounds[0]['ba_night']);
                break
            case 'minasgerais':                
                background.setAttribute('src', backgrounds[1]['mg_night']);
                break
            case 'riodejaneiro':
                background.setAttribute('src', backgrounds[2]['rj_night']);
                break
            case 'saopaulo':
                background.setAttribute('src', backgrounds[3]['sp_night'])
                break
            default:
                break
        };
    });


    if (selectCity.value === 'bahia') {
        background.setAttribute('src', backgrounds[0]['ba_night']);
    } else if (selectCity.value === 'minasgerais') {
        background.setAttribute('src', backgrounds[1]['mg_night']);
    } else if (selectCity.value === 'riodejaneiro') {
        background.setAttribute('src', backgrounds[2]['rj_night']);
    } else if (selectCity.value === 'saopaulo') {
        background.setAttribute('src', backgrounds[3]['sp_night']);
    };


};

function day_city() {

    if (selectCity.value === 'bahia') {
        background.setAttribute('src', backgrounds[0]['ba_day']);
    } else if (selectCity.value === 'minasgerais') {
        background.setAttribute('src', backgrounds[1]['mg_day']);
    } else if (selectCity.value === 'riodejaneiro') {
        background.setAttribute('src', backgrounds[2]['rj_day']);
    } else if (selectCity.value === 'saopaulo') {
        background.setAttribute('src', backgrounds[3]['sp_day']);
    };

};
//==========================================================





















































// // function day_city() {

//     selectCity.addEventListener("change", ()=> {

//         switch (selectCity.value) {
//             case 'bahia':
//                 background.setAttribute('src', backgrounds[0]['ba_day']);
//                 break
//             case 'minasgerais':
//                 background.setAttribute('src', backgrounds[1]['mg_day']);
//                 break
//             case 'riodejaneiro':
//                 background.setAttribute('src', backgrounds[2]['rj_day']);
//                 break
//             case 'saopaulo':
//                 background.setAttribute('src', backgrounds[3]['sp_day']);
//                 break
//             default:
//                 break
//         };
//     });
// };



















































// const backgrounds = [
//     {
//         ba_day: document.body.style.backgroundImage = 'url(../image/ba-day.jpg)',
//         ba_night: document.body.style.backgroundImage = 'url(../image/ba-night.jpg)'
//     },
//     {
//         mg_day: document.body.style.backgroundImage = 'url(../image/mg-day.jpg)',
//         mg_night: document.body.style.backgroundImage = 'url(../image/mg-night.jpg)'
//     },
//     {
//         rj_day: document.body.style.backgroundImage = 'url(../image/rj-day.jpg)',
//         rj_night: document.body.style.backgroundImage = 'url(../image/rj-night.jpg)'
//     },
//     {
//         sp_day: document.body.style.backgroundImage = 'url(../image/sp-day.jpg)',
//         sp_night: document.body.style.backgroundImage = 'url(../image/sp-night.jpg)'
//     }
// ];

// const lamps = [
//     {
//     lamp_on: document.getElementById("lamps").innerHTML += "<img src='../image/lampada-acesa.png'>",
//     },
//     {
//     lamp_off: document.getElementById("lamps").innerHTML += "<img src='../image/lampada-apagada.png'>",
//     },
//     {
//     lamp_broken: document.getElementById("lamps").innerHTML += "<img src='../image/lampada-quebrada.png'>"
//     }
// ];

// document.body.style.backgroundRepeat = 'no-repeat';
// document.body.style.backgroundSize = 'cover';

// function btnOn() {
//     console.log("acendeu")
// };

// function btnOff() {
//     console.log("apagou")
// };

// function btnBroken() {
//     console.log("consertou")
// };


// function addImage(url) {

//     let URLs = url
//     let ID_images = document.getElementById("#images")
//     let criarIMG = document.createElement("img");
//     ID_images.appendChild(criarIMG)
// }




































// function OLD_LAMP() {



// const btnOn = document.getElementById("btnOn");
// const btnOff = document.getElementById("btnOff");
// const btnBroken = document.getElementById("btnBroken");
// const selectCity = document.getElementById("selectCity");

// const lampOn = document.getElementById("lampOn");
// const lampOff = document.getElementById("lampOff");
// const lampBroken = document.getElementById("lampBroken");

// const cityDay = document.getElementById("cityDay");
// const cityNight = document.getElementById("cityNight");
// const cityDayBrazil = document.getElementById("cityDayBrazil");
// const cityNightBrazil = document.getElementById("cityNightBrazil");

// var backgroundMain = document.body;

// var cd = {cityDay, cityDayBrazil}
// var cn = {cityNight, cityNightBrazil}
// var lac = lampOn;
// var lap = lampOff;
// var lq = lampBroken;

// funcionamentoLampada()

// // Change City
// selectCity.addEventListener("change", ()=>{

//     switch (selectCity.value) {

//         case 'newyork':
//             cityDayBrazil.classList.add("hide");
//             cityNightBrazil.classList.add("hide");
//             selectCity.style.color = 'red';
//             CN(cityDay, cityNight);
//             funcionamentoLampada(cityDay, cityNight)
//             lamOff(lac, lap, lq);
//             BtnLamp()
//             break
//         case 'brazil':
//             cityDay.classList.add("hide");
//             cityNight.classList.add("hide");
//             selectCity.style.color = 'green';
//             CN(cityDayBrazil, cityNightBrazil);
//             funcionamentoLampada(cityDayBrazil, cityNightBrazil)
//             lamOff(lac, lap, lq);
//             BtnLamp()
//             break
//         default:
//             break
//     };
// });

// // FUNCIONAMENTO DA LÂMPADA
// function funcionamentoLampada(a, b) {

// // Events
// // a = cidade dia
// // b = cidade noite
// // c = lamp acesa
// // d = lamp apagada
// // e = lamp quebrada

//     btnOn.addEventListener("click", (e)=> {
//         e.preventDefault();
//         lamOn(lac, lap, lq);
//         CD(a, b)
//     });

//     btnOff.addEventListener("click", (e)=> {
//         e.preventDefault();
//         lamOff(lac, lap, lq);
//         CN(a, b)
//     });
//     btnBroken.addEventListener("click", (e)=> {
//         e.preventDefault();
//         lamOff(lac, lap, lq);
//         BtnLamp();
//         CN(a, b)
//     });

//     lampOn.addEventListener("click", (e)=> {
//         e.preventDefault()
//         lamBroken(lac, lap, lq);
//         changeBtnBroken();
//         CN(a, b)
//     });

//     lampOff.addEventListener("click", (e)=> {
//         e.preventDefault()
//         lamBroken(lac, lap, lq);
//         changeBtnBroken();
//         CN(a, b)
//     });
// };

// // Functions
// // a = cidade dia
// // b = cidade noite
// // c = lamp acesa
// // d = lamp apagada
// // e = lamp quebrada
// function lamOn(c, d, e) {
//     c.classList.remove("hide");
//     d.classList.add("hide");
//     e.classList.add("hide");

// };
// function lamOff(c, d, e) {
//     c.classList.add("hide");
//     d.classList.remove("hide");
//     e.classList.add("hide");

// };
// function lamBroken(c, d, e) {
//     c.classList.add("hide");
//     d.classList.add("hide");
//     e.classList.remove("hide");

// };
// function CD(a, b) {
//     a.classList.remove("hide");
//     b.classList.add("hide");
// };
// function CN(a, b) {
//     backgroundMain.style.background = 'none'
//     a.classList.add("hide");
//     b.classList.remove("hide");
// };
// function changeBtnBroken() {
//     btnOn.classList.add("hide");
//     btnOff.classList.add("hide");
//     btnBroken.classList.remove("hide");
// };
// function BtnLamp() {
//     btnOn.classList.remove("hide");
//     btnOff.classList.remove("hide");
//     btnBroken.classList.add("hide");
// };
// }