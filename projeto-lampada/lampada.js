
const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const turnRec = document.getElementById( 'turnRec' );
const lamp = document.getElementById( 'lamp' );

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken ()) {
        lamp.src='./img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken ()) {
        lamp.src='./img/desligada.jpg';
    }
}

function lampquebrada() { 
    if (!isLampBroken ()) {
        lamp.src='./img/quebrada.jpg';
    }
}

function restaurar () {
    if (isLampBroken ()) {
        lamp.src='./img/desligada.jpg';
    }
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);

lamp.addEventListener('dblclick', lampquebrada);

turnRec.addEventListener('click', restaurar);














