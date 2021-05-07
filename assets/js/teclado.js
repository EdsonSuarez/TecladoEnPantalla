let mensaje = document.getElementById("mensajes");
let casilla = document.getElementById("casilla");

//Variables botones

//Primera fila
let btnVertical = document.getElementById("btnVertical");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnComilla = document.getElementById("btnComilla");
let btnInterrogante = document.getElementById("btnInterrogante");
let btnDelete = document.getElementById("btnDelete");
//Segunda fila
let btnTab = document.getElementById("btnTab");
let btnQ = document.getElementById("btnQ");
let btnW = document.getElementById("btnW");
let btnE = document.getElementById("btnE");
let btnR = document.getElementById("btnR");
let btnT = document.getElementById("btnT");
let btnY = document.getElementById("btnY");
let btnU = document.getElementById("btnU");
let btnI = document.getElementById("btnI");
let btnO = document.getElementById("btnO");
let btnP = document.getElementById("btnP");
let btnTilde = document.getElementById("btnTilde");
let btnMas = document.getElementById("btnMas");
let btnEntrar = document.getElementById("btnEntrar");


//Variables Temporales
casillaTemp = "";


// Funciones
// Primera fila
const btnVerticalf = () => {
    casillaTemp = casillaTemp +"|";
    casilla.innerHTML = casillaTemp;
};
const btn1f = () => {
        casillaTemp = casillaTemp +"1";
        casilla.innerHTML = casillaTemp;
};
const btn2f = () => {
    casillaTemp = casillaTemp +"2";
    casilla.innerHTML = casillaTemp;
};
const btn3f = () => {
    casillaTemp = casillaTemp +"3";
    casilla.innerHTML = casillaTemp;
};
const btn4f = () => {
casillaTemp = casillaTemp +"4";
casilla.innerHTML = casillaTemp;
};
const btn5f = () => {
    casillaTemp = casillaTemp +"5";
    casilla.innerHTML = casillaTemp;
};
const btn6f = () => {
casillaTemp = casillaTemp +"6";
casilla.innerHTML = casillaTemp;
};
const btn7f = () => {
    casillaTemp = casillaTemp +"7";
    casilla.innerHTML = casillaTemp;
};
const btn8f = () => {
casillaTemp = casillaTemp +"8";
casilla.innerHTML = casillaTemp;
};
const btn9f = () => {
    casillaTemp = casillaTemp +"9";
    casilla.innerHTML = casillaTemp;
};
const btn0f = () => {
casillaTemp = casillaTemp +"0";
casilla.innerHTML = casillaTemp;
};
const btnComillaf = () => {
    casillaTemp = casillaTemp +"'";
    casilla.innerHTML = casillaTemp;
};


const btnInterrogantef = () => {
    casillaTemp = casillaTemp +"¿";
    casilla.innerHTML = casillaTemp;
};

const btnDeletef = () => {
    casillaTemp = "";
    casilla.innerHTML = casillaTemp;
};

//Segunda fila
const btnTabf = () => {
    casillaTemp = casillaTemp +"    ";
    casilla.innerHTML = casillaTemp;
};
const btnQf = () => {
    casillaTemp = casillaTemp +"Q";
    casilla.innerHTML = casillaTemp;
};
const btnWf = () => {
    casillaTemp = casillaTemp +"W";
    casilla.innerHTML = casillaTemp;
};
const btnEf = () => {
    casillaTemp = casillaTemp +"E";
    casilla.innerHTML = casillaTemp;
};
const btnRf = () => {
    casillaTemp = casillaTemp +"R";
    casilla.innerHTML = casillaTemp;
};
const btnTf = () => {
    casillaTemp = casillaTemp +"T";
    casilla.innerHTML = casillaTemp;
};
const btnYf = () => {
    casillaTemp = casillaTemp +"Y";
    casilla.innerHTML = casillaTemp;
};
const btnUf = () => {
    casillaTemp = casillaTemp +"U";
    casilla.innerHTML = casillaTemp;
};
const btnIf = () => {
    casillaTemp = casillaTemp +"I";
    casilla.innerHTML = casillaTemp;
};
const btnOf = () => {
    casillaTemp = casillaTemp +"O";
    casilla.innerHTML = casillaTemp;
};
const btnPf = () => {
    casillaTemp = casillaTemp +"P";
    casilla.innerHTML = casillaTemp;
};
const btnTildef = () => {
    casillaTemp = casillaTemp +"´";
    casilla.innerHTML = casillaTemp;
};
const btnMasf = () => {
    casillaTemp = casillaTemp +"+";
    casilla.innerHTML = casillaTemp;
};
const btnEntrarf = () => {
    casillaTemp = casillaTemp +"\n";
    casilla.innerHTML = casillaTemp;
};
// Onclicks

//Primera fila
btnVertical.onclick = () =>{
    btnVerticalf();
};
btn1.onclick = () => {
    btn1f();
};
btn1.onclick = () => {
    btn1f();
};
btn2.onclick = () =>{
    btn2f();
};
btn3.onclick = () =>{
    btn3f();
};
btn4.onclick = () =>{
    btn4f();
};
btn5.onclick = () =>{
    btn5f();
};
btn6.onclick = () =>{
    btn6f();
};
btn7.onclick = () =>{
    btn7f();
};
btn8.onclick = () =>{
    btn8f();
};
btn9.onclick = () =>{
    btn9f();
};
btn0.onclick = () =>{
    btn0f();
};
btnComilla.onclick = () =>{
    btnComillaf();
};
btnInterrogante.onclick = () =>{
    btnInterrogantef();
};
btnDelete.onclick = () => {
    btnDeletef();
};

//segunda fila
btnTab.onclick = () => {
    btnTabf();
};
btnQ.onclick = () => {
    btnQf();
};
btnW.onclick = () => {
    btnWf();
};
btnE.onclick = () => {
    btnEf();
};
btnR.onclick = () => {
    btnRf();
};
btnT.onclick = () => {
    btnTf();
};
btnY.onclick = () => {
    btnYf();
};
btnU.onclick = () => {
    btnUf();
};
btnI.onclick = () => {
    btnIf();
};
btnO.onclick = () => {
    btnOf();
};
btnP.onclick = () => {
    btnPf();
};
btnTilde.onclick = () => {
    btnTildef();
};
btnMas.onclick = () => {
    btnMasf();
};
btnEntrar.onclick = () => {
    btnEntrarf();
};