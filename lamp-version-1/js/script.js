// ====================< BACKGROUNS >====================
const backgrounds = [
    {
        ba: "image/ba-day.jpg"
    },{
        mg: "image/mg-day.jpg"
    },{
        pr: "image/pr-day.jpg"
    },{
        rj: "image/rj-day.jpg"
    },{
        sp: "image/sp-day.jpg"
    }
];

var backgroundsAdds = [];

var background_filter = document.getElementById("background_filter");
var background = document.getElementById("background");





// ====================< LAMPADAS >====================
const lamps = {
    lamp_on: 'image/lampada-acesa.png',
    lamp_off: "image/lampada-apagada.png",
    lamp_broken: "image/lampada-quebrada.png"
};
var lamp = document.getElementById("lamps");

// FUNCIONAMENTO DA LAMPADA
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





// ====================< BOTOES >====================
const btnOn_id = document.getElementById("btnOn");
const btnOff_id = document.getElementById("btnOff");
const btnBroken_id = document.getElementById("btnBroken");





// ====================< SELECT >====================
const selectCity = document.getElementById("selectCity");





// ====================< MODAL >====================
const modal = document.getElementById("backgroundModal");

function abrirModal() {
    modal.style.display = 'flex';
};

function btnCancel() {
    modal.style.display = 'none';
};












// ADICIONANDO BACKGROUND E NOME
var newBackground = document.querySelector("#inputFile");
var name_newBackground = document.querySelector("#nameImage");

function btnAdd() {
    
    if (newBackground.value == "") {
        window.alert("É necessário adicionar uma imagem para continuar!")
    } else if (name_newBackground.value == "") {
        window.alert("É necessário adicionar um nome para continuar!")
    } else {
        backgroundsAdds.push(newBackground.value);

        selectCity.options[selectCity.options.length] = new Option(name_newBackground.value, newBackground.value);

        modal.style.display = 'none';
    };



};



















// IMPEDINDO A DIGITAÇÃO DE CARACTERES ESPECIAIS
const nameImage = document.querySelector("#nameImage");
nameImage.addEventListener("keypress", function(e) {
    if (!checkChar(e)) {
        e.preventDefault();
    };
});

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-z, A-Z]';

    if (char.match(pattern)) {
        return true;
    };
};






// ====================< TROCA DE BACKGROUND >====================
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
                background.setAttribute('src', backgrounds[1]['mg']);
                background_filter.classList.remove("hide");
                break
            case 'parana':                
                background.setAttribute('src', backgrounds[2]['pr']);
                background_filter.classList.remove("hide");
                break
            case 'riodejaneiro':
                background.setAttribute('src', backgrounds[3]['rj']);
                background_filter.classList.remove("hide");
                break
            case 'saopaulo':
                background.setAttribute('src', backgrounds[4]['sp']);
                background_filter.classList.remove("hide");
                break
            default:
                break
        };

        switch (selectCity.value) {
            case backgroundsAdds[0]:
                background.setAttribute('src', backgroundsAdds[0]);
                background_filter.classList.remove("hide");
                break
            case backgroundsAdds[1]:
                background.setAttribute('src', backgroundsAdds[1]);
                background_filter.classList.remove("hide");
                break
            case backgroundsAdds[2]:
                background.setAttribute('src', backgroundsAdds[2]);
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
        background.setAttribute('src', backgrounds[1]['mg']);
        background_filter.classList.remove("hide");        
    } else if (selectCity.value === 'parana') {
        background.setAttribute('src', backgrounds[2]['pr']);
        background_filter.classList.remove("hide");
    } else if (selectCity.value === 'riodejaneiro') {
        background.setAttribute('src', backgrounds[3]['rj']);
        background_filter.classList.remove("hide");
    } else if (selectCity.value === 'saopaulo') {
        background.setAttribute('src', backgrounds[4]['sp']);
        background_filter.classList.remove("hide");
    };
};

function day_city() {

    if (selectCity.value === 'bahia') {
        background.setAttribute('src', backgrounds[0]['ba']);
        background_filter.classList.add("hide");
    } else if (selectCity.value === 'minasgerais') {
        background.setAttribute('src', backgrounds[1]['mg']);
        background_filter.classList.add("hide");
    } else if (selectCity.value === 'parana') {
        background.setAttribute('src', backgrounds[2]['pr']);
        background_filter.classList.add("hide");
    } else if (selectCity.value === 'riodejaneiro') {
        background.setAttribute('src', backgrounds[3]['rj']);
        background_filter.classList.add("hide");
    } else if (selectCity.value === 'saopaulo') {
        background.setAttribute('src', backgrounds[4]['sp']);
        background_filter.classList.add("hide");
    };
};





// ====================< FUNCIONAMENTO >====================
night_city();