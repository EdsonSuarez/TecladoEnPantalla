// const teclas = [
//     ["Esc", "|", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "'", "¿"],
//     ["Tab", "q", "w", "e","r", "t", "y", "u", "i", "0","p","´", "+", "Entrar"],
//     ["Bloq May", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
//     ["Mayus", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-"]
// ];


const teclas = ["|", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const teclasNombres = ["Vertical", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let scrWords = document.getElementById("screen");

const write = (btn) => {
    scrWords.innerHTML += btn;
};