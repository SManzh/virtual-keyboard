document.body.style.margin = "0 auto";
document.body.style.boxSizing = "border-box";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.width = "1000px";
document.body.style.textAlign = "center";

/*-----Header-----*/
let header = document.createElement('h1');
header.innerHTML = "Virtual Keyboard";
document.body.append(header);

/*-----Textarea-----*/
let textarea = document.createElement('textarea');
textarea.className = "textarea";
textarea.cols = 50;
textarea.rows = 10;
document.body.append(textarea);

/*-----Keyboard-----*/
let keyboard = document.createElement('div');
document.body.append(keyboard);
keyboard.className = "keyboard";

let line1 = document.createElement('div');
keyboard.append(line1);
let line2 = document.createElement('div');
keyboard.append(line2);
let line3 = document.createElement('div');
keyboard.append(line3);
let line4 = document.createElement('div');
keyboard.append(line4);
let line5 = document.createElement('div');
keyboard.append(line5);

/*Keyboard line 1*/

/*Tilde*/

let Tilde = document.createElement('div');
line1.append(Tilde);
Tilde.className = "key";

let TildeEng = document.createElement('span');
TildeEng.className = "eng";
Tilde.append(TildeEng);
let CaseDownTildeEng = document.createElement("span");
CaseDownTildeEng.className = "keysDown";
TildeEng.append(CaseDownTildeEng);
CaseDownTildeEng.innerHTML = "`";
let CaseUpTildeEng = document.createElement("span");
CaseUpTildeEng.className = "keysUp hidden";
TildeEng.append(CaseUpTildeEng);
CaseUpTildeEng.innerHTML = "~";

let TildeRus =document.createElement('span');
TildeRus.className = "rus hidden";
Tilde.append(TildeRus);
let CaseDownTildeRus = document.createElement("span");
CaseDownTildeRus.className = "keysDown hidden";
TildeRus.append(CaseDownTildeRus);
CaseDownTildeRus.innerHTML = "ё";
let CaseUpTildeRus = document.createElement("span");
CaseUpTildeRus.className = "keysUp hidden";
TildeRus.append(CaseUpTildeRus);
CaseUpTildeRus.innerHTML = "Ё";

/*Digit1*/

let Digit1 = document.createElement('div');
line1.append(Digit1);
Digit1.className = "key";

let Digit1Eng = document.createElement('span');
Digit1Eng.className = "eng";
Digit1.append(Digit1Eng);
let CaseDownDigit1Eng = document.createElement("span");
CaseDownDigit1Eng.className = "keysDown";
Digit1Eng.append(CaseDownDigit1Eng);
CaseDownDigit1Eng.innerHTML = "1";
let CaseUpDigit1Eng = document.createElement("span");
CaseUpDigit1Eng.className = "keysUp hidden";
Digit1Eng.append(CaseUpDigit1Eng);
CaseUpDigit1Eng.innerHTML = "!";

let Digit1Rus =document.createElement('span');
Digit1Rus.className = "rus hidden";
Digit1.append(Digit1Rus);
let CaseDownDigit1Rus = document.createElement("span");
CaseDownDigit1Rus.className = "keysDown hidden";
Digit1Rus.append(CaseDownDigit1Rus);
CaseDownDigit1Rus.innerHTML = "1";
let CaseUpDigit1Rus = document.createElement("span");
CaseUpDigit1Rus.className = "keysUp hidden";
Digit1Rus.append(CaseUpDigit1Rus);
CaseUpDigit1Rus.innerHTML = "!";

/*Digit2*/

let Digit2 = document.createElement('div');
line1.append(Digit2);
Digit2.className = "key";

let Digit2Eng = document.createElement('span');
Digit2Eng.className = "eng";
Digit2.append(Digit2Eng);
let CaseDownDigit2Eng = document.createElement("span");
CaseDownDigit2Eng.className = "keysDown";
Digit2Eng.append(CaseDownDigit2Eng);
CaseDownDigit2Eng.innerHTML = "2";
let CaseUpDigit2Eng = document.createElement("span");
CaseUpDigit2Eng.className = "keysUp hidden";
Digit2Eng.append(CaseUpDigit2Eng);
CaseUpDigit2Eng.innerHTML = "@";

let Digit2Rus =document.createElement('span');
Digit2Rus.className = "rus hidden";
Digit2.append(Digit2Rus);
let CaseDownDigit2Rus = document.createElement("span");
CaseDownDigit2Rus.className = "keysDown hidden";
Digit2Rus.append(CaseDownDigit2Rus);
CaseDownDigit2Rus.innerHTML = "2";
let CaseUpDigit2Rus = document.createElement("span");
CaseUpDigit2Rus.className = "keysUp hidden";
Digit2Rus.append(CaseUpDigit2Rus);
CaseUpDigit2Rus.innerHTML = "\"";

/*Digit3*/

let Digit3 = document.createElement('div');
line1.append(Digit3);
Digit3.className = "key";

let Digit3Eng = document.createElement('span');
Digit3Eng.className = "eng";
Digit3.append(Digit3Eng);
let CaseDownDigit3Eng = document.createElement("span");
CaseDownDigit3Eng.className = "keysDown";
Digit3Eng.append(CaseDownDigit3Eng);
CaseDownDigit3Eng.innerHTML = "3";
let CaseUpDigit3Eng = document.createElement("span");
CaseUpDigit3Eng.className = "keysUp hidden";
Digit3Eng.append(CaseUpDigit3Eng);
CaseUpDigit3Eng.innerHTML = "#";

let Digit3Rus =document.createElement('span');
Digit3Rus.className = "rus hidden";
Digit3.append(Digit3Rus);
let CaseDownDigit3Rus = document.createElement("span");
CaseDownDigit3Rus.className = "keysDown hidden";
Digit3Rus.append(CaseDownDigit3Rus);
CaseDownDigit3Rus.innerHTML = "3";
let CaseUpDigit3Rus = document.createElement("span");
CaseUpDigit3Rus.className = "keysUp hidden";
Digit3Rus.append(CaseUpDigit3Rus);
CaseUpDigit3Rus.innerHTML = "№";

/*Digit4*/

let Digit4 = document.createElement('div');
line1.append(Digit4);
Digit4.className = "key";

let Digit4Eng = document.createElement('span');
Digit4Eng.className = "eng";
Digit4.append(Digit4Eng);
let CaseDownDigit4Eng = document.createElement("span");
CaseDownDigit4Eng.className = "keysDown";
Digit4Eng.append(CaseDownDigit4Eng);
CaseDownDigit4Eng.innerHTML = "4";
let CaseUpDigit4Eng = document.createElement("span");
CaseUpDigit4Eng.className = "keysUp hidden";
Digit4Eng.append(CaseUpDigit4Eng);
CaseUpDigit4Eng.innerHTML = "$";

let Digit4Rus =document.createElement('span');
Digit4Rus.className = "rus hidden";
Digit4.append(Digit4Rus);
let CaseDownDigit4Rus = document.createElement("span");
CaseDownDigit4Rus.className = "keysDown hidden";
Digit4Rus.append(CaseDownDigit4Rus);
CaseDownDigit4Rus.innerHTML = "4";
let CaseUpDigit4Rus = document.createElement("span");
CaseUpDigit4Rus.className = "keysUp hidden";
Digit4Rus.append(CaseUpDigit4Rus);
CaseUpDigit4Rus.innerHTML = ";";

/*Digit5*/

let Digit5 = document.createElement('div');
line1.append(Digit5);
Digit5.className = "key";

let Digit5Eng = document.createElement('span');
Digit5Eng.className = "eng";
Digit5.append(Digit5Eng);
let CaseDownDigit5Eng = document.createElement("span");
CaseDownDigit5Eng.className = "keysDown";
Digit5Eng.append(CaseDownDigit5Eng);
CaseDownDigit5Eng.innerHTML = "5";
let CaseUpDigit5Eng = document.createElement("span");
CaseUpDigit5Eng.className = "keysUp hidden";
Digit5Eng.append(CaseUpDigit5Eng);
CaseUpDigit5Eng.innerHTML = "%";

let Digit5Rus =document.createElement('span');
Digit5Rus.className = "rus hidden";
Digit5.append(Digit5Rus);
let CaseDownDigit5Rus = document.createElement("span");
CaseDownDigit5Rus.className = "keysDown hidden";
Digit5Rus.append(CaseDownDigit5Rus);
CaseDownDigit5Rus.innerHTML = "5";
let CaseUpDigit5Rus = document.createElement("span");
CaseUpDigit5Rus.className = "keysUp hidden";
Digit5Rus.append(CaseUpDigit5Rus);
CaseUpDigit5Rus.innerHTML = "%";

/*Digit6*/

let Digit6 = document.createElement('div');
line1.append(Digit6);
Digit6.className = "key";

let Digit6Eng = document.createElement('span');
Digit6Eng.className = "eng";
Digit6.append(Digit6Eng);
let CaseDownDigit6Eng = document.createElement("span");
CaseDownDigit6Eng.className = "keysDown";
Digit6Eng.append(CaseDownDigit6Eng);
CaseDownDigit6Eng.innerHTML = "6";
let CaseUpDigit6Eng = document.createElement("span");
CaseUpDigit6Eng.className = "keysUp hidden";
Digit6Eng.append(CaseUpDigit6Eng);
CaseUpDigit6Eng.innerHTML = "^";

let Digit6Rus =document.createElement('span');
Digit6Rus.className = "rus hidden";
Digit6.append(Digit6Rus);
let CaseDownDigit6Rus = document.createElement("span");
CaseDownDigit6Rus.className = "keysDown hidden";
Digit6Rus.append(CaseDownDigit6Rus);
CaseDownDigit6Rus.innerHTML = "6";
let CaseUpDigit6Rus = document.createElement("span");
CaseUpDigit6Rus.className = "keysUp hidden";
Digit6Rus.append(CaseUpDigit6Rus);
CaseUpDigit6Rus.innerHTML = ":";

/*Digit7*/

let Digit7 = document.createElement('div');
line1.append(Digit7);
Digit7.className = "key";

let Digit7Eng = document.createElement('span');
Digit7Eng.className = "eng";
Digit7.append(Digit7Eng);
let CaseDownDigit7Eng = document.createElement("span");
CaseDownDigit7Eng.className = "keysDown";
Digit7Eng.append(CaseDownDigit7Eng);
CaseDownDigit7Eng.innerHTML = "7";
let CaseUpDigit7Eng = document.createElement("span");
CaseUpDigit7Eng.className = "keysUp hidden";
Digit7Eng.append(CaseUpDigit7Eng);
CaseUpDigit7Eng.innerHTML = "&";

let Digit7Rus =document.createElement('span');
Digit7Rus.className = "rus hidden";
Digit7.append(Digit7Rus);
let CaseDownDigit7Rus = document.createElement("span");
CaseDownDigit7Rus.className = "keysDown hidden";
Digit7Rus.append(CaseDownDigit7Rus);
CaseDownDigit7Rus.innerHTML = "7";
let CaseUpDigit7Rus = document.createElement("span");
CaseUpDigit7Rus.className = "keysUp hidden";
Digit7Rus.append(CaseUpDigit7Rus);
CaseUpDigit7Rus.innerHTML = "?";

/*Digit8*/

let Digit8 = document.createElement('div');
line1.append(Digit8);
Digit8.className = "key";

let Digit8Eng = document.createElement('span');
Digit8Eng.className = "eng";
Digit8.append(Digit8Eng);
let CaseDownDigit8Eng = document.createElement("span");
CaseDownDigit8Eng.className = "keysDown";
Digit8Eng.append(CaseDownDigit8Eng);
CaseDownDigit8Eng.innerHTML = "8";
let CaseUpDigit8Eng = document.createElement("span");
CaseUpDigit8Eng.className = "keysUp hidden";
Digit8Eng.append(CaseUpDigit8Eng);
CaseUpDigit8Eng.innerHTML = "*";

let Digit8Rus =document.createElement('span');
Digit8Rus.className = "rus hidden";
Digit8.append(Digit8Rus);
let CaseDownDigit8Rus = document.createElement("span");
CaseDownDigit8Rus.className = "keysDown hidden";
Digit8Rus.append(CaseDownDigit8Rus);
CaseDownDigit8Rus.innerHTML = "8";
let CaseUpDigit8Rus = document.createElement("span");
CaseUpDigit8Rus.className = "keysUp hidden";
Digit8Rus.append(CaseUpDigit8Rus);
CaseUpDigit8Rus.innerHTML = "*";

/*Digit9*/

let Digit9 = document.createElement('div');
line1.append(Digit9);
Digit9.className = "key";

let Digit9Eng = document.createElement('span');
Digit9Eng.className = "eng";
Digit9.append(Digit9Eng);
let CaseDownDigit9Eng = document.createElement("span");
CaseDownDigit9Eng.className = "keysDown";
Digit9Eng.append(CaseDownDigit9Eng);
CaseDownDigit9Eng.innerHTML = "9";
let CaseUpDigit9Eng = document.createElement("span");
CaseUpDigit9Eng.className = "keysUp hidden";
Digit9Eng.append(CaseUpDigit9Eng);
CaseUpDigit9Eng.innerHTML = "(";

let Digit9Rus =document.createElement('span');
Digit9Rus.className = "rus hidden";
Digit9.append(Digit9Rus);
let CaseDownDigit9Rus = document.createElement("span");
CaseDownDigit9Rus.className = "keysDown hidden";
Digit9Rus.append(CaseDownDigit9Rus);
CaseDownDigit9Rus.innerHTML = "9";
let CaseUpDigit9Rus = document.createElement("span");
CaseUpDigit9Rus.className = "keysUp hidden";
Digit9Rus.append(CaseUpDigit9Rus);
CaseUpDigit9Rus.innerHTML = "(";

/*Digit0*/

let Digit0 = document.createElement('div');
line1.append(Digit0);
Digit0.className = "key";

let Digit0Eng = document.createElement('span');
Digit0Eng.className = "eng";
Digit0.append(Digit0Eng);
let CaseDownDigit0Eng = document.createElement("span");
CaseDownDigit0Eng.className = "keysDown";
Digit0Eng.append(CaseDownDigit0Eng);
CaseDownDigit0Eng.innerHTML = "0";
let CaseUpDigit0Eng = document.createElement("span");
CaseUpDigit0Eng.className = "keysUp hidden";
Digit0Eng.append(CaseUpDigit0Eng);
CaseUpDigit0Eng.innerHTML = ")";

let Digit0Rus =document.createElement('span');
Digit0Rus.className = "rus hidden";
Digit0.append(Digit0Rus);
let CaseDownDigit0Rus = document.createElement("span");
CaseDownDigit0Rus.className = "keysDown hidden";
Digit0Rus.append(CaseDownDigit0Rus);
CaseDownDigit0Rus.innerHTML = "0";
let CaseUpDigit0Rus = document.createElement("span");
CaseUpDigit0Rus.className = "keysUp hidden";
Digit0Rus.append(CaseUpDigit0Rus);
CaseUpDigit0Rus.innerHTML = ")";

/*Minus*/

let Minus = document.createElement('div');
line1.append(Minus);
Minus.className = "key";

let MinusEng = document.createElement('span');
MinusEng.className = "eng";
Minus.append(MinusEng);
let CaseDownMinusEng = document.createElement("span");
CaseDownMinusEng.className = "keysDown";
MinusEng.append(CaseDownMinusEng);
CaseDownMinusEng.innerHTML = "-";
let CaseUpMinusEng = document.createElement("span");
CaseUpMinusEng.className = "keysUp hidden";
MinusEng.append(CaseUpMinusEng);
CaseUpMinusEng.innerHTML = "_";

let MinusRus = document.createElement('span');
MinusRus.className = "rus hidden";
Minus.append(Digit3Rus);
let CaseDownMinusRus = document.createElement("span");
CaseDownMinusRus.className = "keysDown hidden";
MinusRus.append(CaseDownMinusRus);
CaseDownMinusRus.innerHTML = "-";
let CaseUpMinusRus = document.createElement("span");
CaseUpMinusRus.className = "keysUp hidden";
MinusRus.append(CaseUpMinusRus);
CaseUpMinusRus.innerHTML = "_";

/*Equal*/

let Equal = document.createElement('div');
line1.append(Equal);
Equal.className = "key";

let EqualEng = document.createElement('span');
EqualEng.className = "eng";
Equal.append(EqualEng);
let CaseDownEqualEng = document.createElement("span");
CaseDownEqualEng.className = "keysDown";
EqualEng.append(CaseDownEqualEng);
CaseDownEqualEng.innerHTML = "=";
let CaseUpEqualEng = document.createElement("span");
CaseUpEqualEng.className = "keysUp hidden";
EqualEng.append(CaseUpEqualEng);
CaseUpEqualEng.innerHTML = "+";

let EqualRus =document.createElement('span');
EqualRus.className = "rus hidden";
Equal.append(EqualRus);
let CaseDownEqualRus = document.createElement("span");
CaseDownEqualRus.className = "keysDown hidden";
EqualRus.append(CaseDownEqualRus);
CaseDownEqualRus.innerHTML = "=";
let CaseUpEqualRus = document.createElement("span");
CaseUpEqualRus.className = "keysUp hidden";
EqualRus.append(CaseUpEqualRus);
CaseUpEqualRus.innerHTML = "+";

/*Backspace*/

let Backspace = document.createElement('div');
line1.append(Backspace);
Backspace.className = "key wide-key";

let BackspaceEng = document.createElement('span');
BackspaceEng.className = "eng";
Backspace.append(BackspaceEng);
let CaseDownBackspaceEng = document.createElement("span");
CaseDownBackspaceEng.className = "keysDown";
BackspaceEng.append(CaseDownBackspaceEng);
CaseDownBackspaceEng.innerHTML = "Backspace";
let CaseUpBackspaceEng = document.createElement("span");
CaseUpBackspaceEng.className = "keysUp hidden";
BackspaceEng.append(CaseUpBackspaceEng);
CaseUpBackspaceEng.innerHTML = "Backspace";

let BackspaceRus =document.createElement('span');
BackspaceRus.className = "rus hidden";
Backspace.append(BackspaceRus);
let CaseDownBackspaceRus = document.createElement("span");
CaseDownBackspaceRus.className = "keysDown hidden";
BackspaceRus.append(CaseDownBackspaceRus);
CaseDownBackspaceRus.innerHTML = "Backspace";
let CaseUpBackspaceRus = document.createElement("span");
CaseUpBackspaceRus.className = "keysUp hidden";
BackspaceRus.append(CaseUpBackspaceRus);
CaseUpBackspaceRus.innerHTML = "Backspace";






























/*-----Instructions-----*/
let instruction = document.createElement('div');
let instructionOS = document.createElement('p');
instructionOS.innerHTML = "Keyboard was designed for Windows OS"
let instructionLang = document.createElement('p');
instructionLang.innerHTML = "For changing language use Alt + Shift"
document.body.append(instruction);
instruction.append(instructionOS);
instruction.append(instructionLang);

