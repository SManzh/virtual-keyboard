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
line1.className = "keyboard-row";
let line2 = document.createElement('div');
keyboard.append(line2);
line2.className = "keyboard-row";
let line3 = document.createElement('div');
keyboard.append(line3);
line3.className = "keyboard-row";
let line4 = document.createElement('div');
keyboard.append(line4);
line4.className = "keyboard-row";
let line5 = document.createElement('div');
keyboard.append(line5);
line5.className = "keyboard-row";

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
Backspace.className = "key wide-key black-key";

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

/*Keyboard line 2*/

/*Tab*/

let Tab = document.createElement('div');
line2.append(Tab);
Tab.className = "key medium-key black-key";

let TabEng = document.createElement('span');
TabEng.className = "eng";
Tab.append(TabEng);
let CaseDownTabEng = document.createElement("span");
CaseDownTabEng.className = "keysDown";
TabEng.append(CaseDownTabEng);
CaseDownTabEng.innerHTML = "Tab";
let CaseUpTabEng = document.createElement("span");
CaseUpTabEng.className = "keysUp hidden";
TabEng.append(CaseUpTabEng);
CaseUpTabEng.innerHTML = "Tab";

let TabRus =document.createElement('span');
TabRus.className = "rus hidden";
Tab.append(TabRus);
let CaseDownTabRus = document.createElement("span");
CaseDownTabRus.className = "keysDown hidden";
TabRus.append(CaseDownTabRus);
CaseDownTabRus.innerHTML = "Tab";
let CaseUpTabRus = document.createElement("span");
CaseUpTabRus.className = "keysUp hidden";
TabRus.append(CaseUpTabRus);
CaseUpTabRus.innerHTML = "Tab";

/*KeyQ*/

let KeyQ = document.createElement('div');
line2.append(KeyQ);
KeyQ.className = "key";

let KeyQEng = document.createElement('span');
KeyQEng.className = "eng";
KeyQ.append(KeyQEng);
let CaseDownKeyQEng = document.createElement("span");
CaseDownKeyQEng.className = "keysDown";
KeyQEng.append(CaseDownKeyQEng);
CaseDownKeyQEng.innerHTML = "q";
let CaseUpKeyQEng = document.createElement("span");
CaseUpKeyQEng.className = "keysUp hidden";
KeyQEng.append(CaseUpKeyQEng);
CaseUpKeyQEng.innerHTML = "Q";

let KeyQRus = document.createElement('span');
KeyQRus.className = "rus hidden";
KeyQ.append(KeyQRus);
let CaseDownKeyQRus = document.createElement("span");
CaseDownKeyQRus.className = "keysDown hidden";
KeyQRus.append(CaseDownKeyQRus);
CaseDownKeyQRus.innerHTML = "й";
let CaseUpKeyQRus = document.createElement("span");
CaseUpKeyQRus.className = "keysUp hidden";
KeyQRus.append(CaseUpKeyQRus);
CaseUpKeyQRus.innerHTML = "Й";

/*KeyW*/

let KeyW = document.createElement('div');
line2.append(KeyW);
KeyW.className = "key";

let KeyWEng = document.createElement('span');
KeyWEng.className = "eng";
KeyW.append(KeyWEng);
let CaseDownKeyWEng = document.createElement("span");
CaseDownKeyWEng.className = "keysDown";
KeyWEng.append(CaseDownKeyWEng);
CaseDownKeyWEng.innerHTML = "w";
let CaseUpKeyWEng = document.createElement("span");
CaseUpKeyWEng.className = "keysUp hidden";
KeyWEng.append(CaseUpKeyWEng);
CaseUpKeyWEng.innerHTML = "W";

let KeyWRus = document.createElement('span');
KeyWRus.className = "rus hidden";
KeyW.append(KeyWRus);
let CaseDownKeyWRus = document.createElement("span");
CaseDownKeyWRus.className = "keysDown hidden";
KeyWRus.append(CaseDownKeyQRus);
CaseDownKeyWRus.innerHTML = "ц";
let CaseUpKeyWRus = document.createElement("span");
CaseUpKeyWRus.className = "keysUp hidden";
KeyWRus.append(CaseUpKeyWRus);
CaseUpKeyWRus.innerHTML = "Ц";

/*KeyE*/

let KeyE = document.createElement('div');
line2.append(KeyE);
KeyE.className = "key";

let KeyEEng = document.createElement('span');
KeyEEng.className = "eng";
KeyE.append(KeyEEng);
let CaseDownKeyEEng = document.createElement("span");
CaseDownKeyEEng.className = "keysDown";
KeyEEng.append(CaseDownKeyEEng);
CaseDownKeyEEng.innerHTML = "e";
let CaseUpKeyEEng = document.createElement("span");
CaseUpKeyEEng.className = "keysUp hidden";
KeyEEng.append(CaseUpKeyEEng);
CaseUpKeyEEng.innerHTML = "E";

let KeyERus = document.createElement('span');
KeyERus.className = "rus hidden";
KeyE.append(KeyERus);
let CaseDownKeyERus = document.createElement("span");
CaseDownKeyERus.className = "keysDown hidden";
KeyERus.append(CaseDownKeyERus);
CaseDownKeyERus.innerHTML = "у";
let CaseUpKeyERus = document.createElement("span");
CaseUpKeyERus.className = "keysUp hidden";
KeyERus.append(CaseUpKeyERus);
CaseUpKeyERus.innerHTML = "У";

/*KeyR*/

let KeyR = document.createElement('div');
line2.append(KeyR);
KeyR.className = "key";

let KeyREng = document.createElement('span');
KeyREng.className = "eng";
KeyR.append(KeyREng);
let CaseDownKeyREng = document.createElement("span");
CaseDownKeyREng.className = "keysDown";
KeyREng.append(CaseDownKeyREng);
CaseDownKeyREng.innerHTML = "r";
let CaseUpKeyREng = document.createElement("span");
CaseUpKeyREng.className = "keysUp hidden";
KeyREng.append(CaseUpKeyREng);
CaseUpKeyREng.innerHTML = "R";

let KeyRRus = document.createElement('span');
KeyRRus.className = "rus hidden";
KeyR.append(KeyRRus);
let CaseDownKeyRRus = document.createElement("span");
CaseDownKeyRRus.className = "keysDown hidden";
KeyRRus.append(CaseDownKeyRRus);
CaseDownKeyRRus.innerHTML = "к";
let CaseUpKeyRRus = document.createElement("span");
CaseUpKeyRRus.className = "keysUp hidden";
KeyRRus.append(CaseUpKeyRRus);
CaseUpKeyRRus.innerHTML = "К";

/*KeyT*/

let KeyT = document.createElement('div');
line2.append(KeyT);
KeyT.className = "key";

let KeyTEng = document.createElement('span');
KeyTEng.className = "eng";
KeyT.append(KeyTEng);
let CaseDownKeyTEng = document.createElement("span");
CaseDownKeyTEng.className = "keysDown";
KeyTEng.append(CaseDownKeyTEng);
CaseDownKeyTEng.innerHTML = "t";
let CaseUpKeyTEng = document.createElement("span");
CaseUpKeyTEng.className = "keysUp hidden";
KeyTEng.append(CaseUpKeyTEng);
CaseUpKeyTEng.innerHTML = "T";

let KeyTRus = document.createElement('span');
KeyTRus.className = "rus hidden";
KeyT.append(KeyTRus);
let CaseDownKeyTRus = document.createElement("span");
CaseDownKeyTRus.className = "keysDown hidden";
KeyTRus.append(CaseDownKeyTRus);
CaseDownKeyTRus.innerHTML = "е";
let CaseUpKeyTRus = document.createElement("span");
CaseUpKeyTRus.className = "keysUp hidden";
KeyTRus.append(CaseUpKeyTRus);
CaseUpKeyTRus.innerHTML = "Е";

/*KeyY*/

let KeyY = document.createElement('div');
line2.append(KeyY);
KeyY.className = "key";

let KeyYEng = document.createElement('span');
KeyYEng.className = "eng";
KeyY.append(KeyYEng);
let CaseDownKeyYEng = document.createElement("span");
CaseDownKeyYEng.className = "keysDown";
KeyYEng.append(CaseDownKeyYEng);
CaseDownKeyYEng.innerHTML = "y";
let CaseUpKeyYEng = document.createElement("span");
CaseUpKeyYEng.className = "keysUp hidden";
KeyYEng.append(CaseUpKeyYEng);
CaseUpKeyYEng.innerHTML = "Y";

let KeyYRus = document.createElement('span');
KeyYRus.className = "rus hidden";
KeyY.append(KeyYRus);
let CaseDownKeyYRus = document.createElement("span");
CaseDownKeyYRus.className = "keysDown hidden";
KeyYRus.append(CaseDownKeyYRus);
CaseDownKeyYRus.innerHTML = "н";
let CaseUpKeyYRus = document.createElement("span");
CaseUpKeyYRus.className = "keysUp hidden";
KeyYRus.append(CaseUpKeyYRus);
CaseUpKeyYRus.innerHTML = "Н";

/*KeyU*/

let KeyU = document.createElement('div');
line2.append(KeyU);
KeyU.className = "key";

let KeyUEng = document.createElement('span');
KeyUEng.className = "eng";
KeyU.append(KeyUEng);
let CaseDownKeyUEng = document.createElement("span");
CaseDownKeyUEng.className = "keysDown";
KeyUEng.append(CaseDownKeyUEng);
CaseDownKeyUEng.innerHTML = "u";
let CaseUpKeyUEng = document.createElement("span");
CaseUpKeyUEng.className = "keysUp hidden";
KeyUEng.append(CaseUpKeyUEng);
CaseUpKeyUEng.innerHTML = "U";

let KeyURus = document.createElement('span');
KeyURus.className = "rus hidden";
KeyU.append(KeyURus);
let CaseDownKeyURus = document.createElement("span");
CaseDownKeyURus.className = "keysDown hidden";
KeyURus.append(CaseDownKeyURus);
CaseDownKeyURus.innerHTML = "г";
let CaseUpKeyURus = document.createElement("span");
CaseUpKeyURus.className = "keysUp hidden";
KeyURus.append(CaseUpKeyURus);
CaseUpKeyURus.innerHTML = "Г";

/*KeyI*/

let KeyI = document.createElement('div');
line2.append(KeyI);
KeyI.className = "key";

let KeyIEng = document.createElement('span');
KeyIEng.className = "eng";
KeyI.append(KeyIEng);
let CaseDownKeyIEng = document.createElement("span");
CaseDownKeyIEng.className = "keysDown";
KeyIEng.append(CaseDownKeyIEng);
CaseDownKeyIEng.innerHTML = "i";
let CaseUpKeyIEng = document.createElement("span");
CaseUpKeyIEng.className = "keysUp hidden";
KeyIEng.append(CaseUpKeyIEng);
CaseUpKeyIEng.innerHTML = "I";

let KeyIRus = document.createElement('span');
KeyIRus.className = "rus hidden";
KeyI.append(KeyIRus);
let CaseDownKeyIRus = document.createElement("span");
CaseDownKeyIRus.className = "keysDown hidden";
KeyIRus.append(CaseDownKeyIRus);
CaseDownKeyIRus.innerHTML = "ш";
let CaseUpKeyIRus = document.createElement("span");
CaseUpKeyIRus.className = "keysUp hidden";
KeyIRus.append(CaseUpKeyIRus);
CaseUpKeyIRus.innerHTML = "Ш";

/*KeyO*/

let KeyO = document.createElement('div');
line2.append(KeyO);
KeyO.className = "key";

let KeyOEng = document.createElement('span');
KeyOEng.className = "eng";
KeyO.append(KeyOEng);
let CaseDownKeyOEng = document.createElement("span");
CaseDownKeyOEng.className = "keysDown";
KeyOEng.append(CaseDownKeyOEng);
CaseDownKeyOEng.innerHTML = "o";
let CaseUpKeyOEng = document.createElement("span");
CaseUpKeyOEng.className = "keysUp hidden";
KeyOEng.append(CaseUpKeyOEng);
CaseUpKeyOEng.innerHTML = "O";

let KeyORus = document.createElement('span');
KeyORus.className = "rus hidden";
KeyO.append(KeyORus);
let CaseDownKeyORus = document.createElement("span");
CaseDownKeyORus.className = "keysDown hidden";
KeyORus.append(CaseDownKeyORus);
CaseDownKeyORus.innerHTML = "щ";
let CaseUpKeyORus = document.createElement("span");
CaseUpKeyORus.className = "keysUp hidden";
KeyORus.append(CaseUpKeyORus);
CaseUpKeyORus.innerHTML = "Щ";

/*KeyP*/

let KeyP = document.createElement('div');
line2.append(KeyP);
KeyP.className = "key";

let KeyPEng = document.createElement('span');
KeyPEng.className = "eng";
KeyP.append(KeyPEng);
let CaseDownKeyPEng = document.createElement("span");
CaseDownKeyPEng.className = "keysDown";
KeyPEng.append(CaseDownKeyPEng);
CaseDownKeyPEng.innerHTML = "p";
let CaseUpKeyPEng = document.createElement("span");
CaseUpKeyPEng.className = "keysUp hidden";
KeyPEng.append(CaseUpKeyPEng);
CaseUpKeyPEng.innerHTML = "P";

let KeyPRus = document.createElement('span');
KeyPRus.className = "rus hidden";
KeyP.append(KeyPRus);
let CaseDownKeyPRus = document.createElement("span");
CaseDownKeyPRus.className = "keysDown hidden";
KeyPRus.append(CaseDownKeyPRus);
CaseDownKeyPRus.innerHTML = "з";
let CaseUpKeyPRus = document.createElement("span");
CaseUpKeyPRus.className = "keysUp hidden";
KeyPRus.append(CaseUpKeyPRus);
CaseUpKeyPRus.innerHTML = "З";

/*KeyBracketLeft*/

let KeyBracketLeft = document.createElement('div');
line2.append(KeyBracketLeft);
KeyBracketLeft.className = "key";

let KeyBracketLeftEng = document.createElement('span');
KeyBracketLeftEng.className = "eng";
KeyBracketLeft.append(KeyBracketLeftEng);
let CaseDownKeyBracketLeftEng = document.createElement("span");
CaseDownKeyBracketLeftEng.className = "keysDown";
KeyBracketLeftEng.append(CaseDownKeyBracketLeftEng);
CaseDownKeyBracketLeftEng.innerHTML = "[";
let CaseUpKeyBracketLeftEng = document.createElement("span");
CaseUpKeyBracketLeftEng.className = "keysUp hidden";
KeyBracketLeftEng.append(CaseUpKeyBracketLeftEng);
CaseUpKeyBracketLeftEng.innerHTML = "{";

let KeyBracketLeftRus = document.createElement('span');
KeyBracketLeftRus.className = "rus hidden";
KeyBracketLeft.append(KeyBracketLeftRus);
let CaseDownKeyBracketLeftRus = document.createElement("span");
CaseDownKeyBracketLeftRus.className = "keysDown hidden";
KeyBracketLeftRus.append(CaseDownKeyBracketLeftRus);
CaseDownKeyBracketLeftRus.innerHTML = "х";
let CaseUpKeyBracketLeftRus = document.createElement("span");
CaseUpKeyBracketLeftRus.className = "keysUp hidden";
KeyBracketLeftRus.append(CaseUpKeyBracketLeftRus);
CaseUpKeyBracketLeftRus.innerHTML = "Х";

/*KeyBracketRight*/

let KeyBracketRight = document.createElement('div');
line2.append(KeyBracketRight);
KeyBracketRight.className = "key";

let KeyBracketRightEng = document.createElement('span');
KeyBracketRightEng.className = "eng";
KeyBracketRight.append(KeyBracketRightEng);
let CaseDownKeyBracketRightEng = document.createElement("span");
CaseDownKeyBracketRightEng.className = "keysDown";
KeyBracketRightEng.append(CaseDownKeyBracketRightEng);
CaseDownKeyBracketRightEng.innerHTML = "]";
let CaseUpKeyBracketRightEng = document.createElement("span");
CaseUpKeyBracketRightEng.className = "keysUp hidden";
KeyBracketRightEng.append(CaseUpKeyBracketRightEng);
CaseUpKeyBracketRightEng.innerHTML = "}";

let KeyBracketRightRus = document.createElement('span');
KeyBracketRightRus.className = "rus hidden";
KeyBracketRight.append(KeyBracketRightRus);
let CaseDownKeyBracketRightRus = document.createElement("span");
CaseDownKeyBracketRightRus.className = "keysDown hidden";
KeyBracketRightRus.append(CaseDownKeyBracketRightRus);
CaseDownKeyBracketRightRus.innerHTML = "ъ";
let CaseUpKeyBracketRightRus = document.createElement("span");
CaseUpKeyBracketRightRus.className = "keysUp hidden";
KeyBracketRightRus.append(CaseUpKeyBracketRightRus);
CaseUpKeyBracketRightRus.innerHTML = "Ъ";

/*KeyBackslash*/

let KeyBackslash = document.createElement('div');
line2.append(KeyBackslash);
KeyBackslash.className = "key";

let KeyBackslashEng = document.createElement('span');
KeyBackslashEng.className = "eng";
KeyBackslash.append(KeyBackslashEng);
let CaseDownKeyBackslashEng = document.createElement("span");
CaseDownKeyBackslashEng.className = "keysDown";
KeyBackslashEng.append(CaseDownKeyBackslashEng);
CaseDownKeyBackslashEng.innerHTML = "\\";
let CaseUpKeyBackslashEng = document.createElement("span");
CaseUpKeyBackslashEng.className = "keysUp hidden";
KeyBackslashEng.append(CaseUpKeyBackslashEng);
CaseUpKeyBackslashEng.innerHTML = "|";

let KeyBackslashRus = document.createElement('span');
KeyBackslashRus.className = "rus hidden";
KeyBackslash.append(KeyBackslashRus);
let CaseDownKeyBackslashRus = document.createElement("span");
CaseDownKeyBackslashRus.className = "keysDown hidden";
KeyBackslashRus.append(CaseDownKeyBackslashRus);
CaseDownKeyBackslashRus.innerHTML = "\\";
let CaseUpKeyBackslashRus = document.createElement("span");
CaseUpKeyBackslashRus.className = "keysUp hidden";
KeyBackslashRus.append(CaseUpKeyBackslashRus);
CaseUpKeyBackslashRus.innerHTML = "/";

/*KeyDelete*/

let KeyDelete = document.createElement('div');
line2.append(KeyDelete);
KeyDelete.className = "key black-key";

let KeyDeleteEng = document.createElement('span');
KeyDeleteEng.className = "eng";
KeyDelete.append(KeyDeleteEng);
let CaseDownKeyDeleteEng = document.createElement("span");
CaseDownKeyDeleteEng.className = "keysDown";
KeyDeleteEng.append(CaseDownKeyDeleteEng);
CaseDownKeyDeleteEng.innerHTML = "Del";
let CaseUpKeyDeleteEng = document.createElement("span");
CaseUpKeyDeleteEng.className = "keysUp hidden";
KeyDeleteEng.append(CaseUpKeyDeleteEng);
CaseUpKeyDeleteEng.innerHTML = "Del";

let KeyDeleteRus = document.createElement('span');
KeyDeleteRus.className = "rus hidden";
KeyDelete.append(KeyDeleteRus);
let CaseDownKeyDeleteRus = document.createElement("span");
CaseDownKeyDeleteRus.className = "keysDown hidden";
KeyDeleteRus.append(CaseDownKeyDeleteRus);
CaseDownKeyDeleteRus.innerHTML = "Del";
let CaseUpKeyDeleteRus = document.createElement("span");
CaseUpKeyDeleteRus.className = "keysUp hidden";
KeyDeleteRus.append(CaseUpKeyDeleteRus);
CaseUpKeyDeleteRus.innerHTML = "Del";

/*Keyboard line 3*/

/*CapsLock*/

let CapsLock = document.createElement('div');
line3.append(CapsLock);
CapsLock.className = "key wide-key black-key";

let CapsLockEng = document.createElement('span');
CapsLockEng.className = "eng";
CapsLock.append(CapsLockEng);
let CaseDownCapsLockEng = document.createElement("span");
CaseDownCapsLockEng.className = "keysDown";
CapsLockEng.append(CaseDownCapsLockEng);
CaseDownCapsLockEng.innerHTML = "Caps Lock";
let CaseUpCapsLockEng = document.createElement("span");
CaseUpCapsLockEng.className = "keysUp hidden";
CapsLockEng.append(CaseUpCapsLockEng);
CaseUpCapsLockEng.innerHTML = "Caps Lock";

let CapsLockRus =document.createElement('span');
CapsLockRus.className = "rus hidden";
CapsLock.append(CapsLockRus);
let CaseDownCapsLockRus = document.createElement("span");
CaseDownCapsLockRus.className = "keysDown hidden";
CapsLockRus.append(CaseDownCapsLockRus);
CaseDownCapsLockRus.innerHTML = "Caps Lock";
let CaseUpCapsLockRus = document.createElement("span");
CaseUpCapsLockRus.className = "keysUp hidden";
CapsLockRus.append(CaseUpCapsLockRus);
CaseUpCapsLockRus.innerHTML = "Caps Lock";

/*KeyA*/

let KeyA = document.createElement('div');
line3.append(KeyA);
KeyA.className = "key";

let KeyAEng = document.createElement('span');
KeyAEng.className = "eng";
KeyA.append(KeyAEng);
let CaseDownKeyAEng = document.createElement("span");
CaseDownKeyAEng.className = "keysDown";
KeyAEng.append(CaseDownKeyAEng);
CaseDownKeyAEng.innerHTML = "a";
let CaseUpKeyAEng = document.createElement("span");
CaseUpKeyAEng.className = "keysUp hidden";
KeyAEng.append(CaseUpKeyAEng);
CaseUpKeyAEng.innerHTML = "A";

let KeyARus = document.createElement('span');
KeyARus.className = "rus hidden";
KeyA.append(KeyARus);
let CaseDownKeyARus = document.createElement("span");
CaseDownKeyARus.className = "keysDown hidden";
KeyARus.append(CaseDownKeyARus);
CaseDownKeyARus.innerHTML = "ф";
let CaseUpKeyARus = document.createElement("span");
CaseUpKeyARus.className = "keysUp hidden";
KeyARus.append(CaseUpKeyARus);
CaseUpKeyARus.innerHTML = "Ф";

/*KeyS*/

let KeyS = document.createElement('div');
line3.append(KeyS);
KeyS.className = "key";

let KeySEng = document.createElement('span');
KeySEng.className = "eng";
KeyS.append(KeySEng);
let CaseDownKeySEng = document.createElement("span");
CaseDownKeySEng.className = "keysDown";
KeySEng.append(CaseDownKeySEng);
CaseDownKeySEng.innerHTML = "s";
let CaseUpKeySEng = document.createElement("span");
CaseUpKeySEng.className = "keysUp hidden";
KeySEng.append(CaseUpKeySEng);
CaseUpKeySEng.innerHTML = "S";

let KeySRus = document.createElement('span');
KeySRus.className = "rus hidden";
KeyS.append(KeySRus);
let CaseDownKeySRus = document.createElement("span");
CaseDownKeySRus.className = "keysDown hidden";
KeySRus.append(CaseDownKeyQRus);
CaseDownKeySRus.innerHTML = "ы";
let CaseUpKeySRus = document.createElement("span");
CaseUpKeySRus.className = "keysUp hidden";
KeySRus.append(CaseUpKeySRus);
CaseUpKeySRus.innerHTML = "Ы";

/*KeyD*/

let KeyD = document.createElement('div');
line3.append(KeyD);
KeyD.className = "key";

let KeyDEng = document.createElement('span');
KeyDEng.className = "eng";
KeyD.append(KeyDEng);
let CaseDownKeyDEng = document.createElement("span");
CaseDownKeyDEng.className = "keysDown";
KeyDEng.append(CaseDownKeyDEng);
CaseDownKeyDEng.innerHTML = "d";
let CaseUpKeyDEng = document.createElement("span");
CaseUpKeyDEng.className = "keysUp hidden";
KeyDEng.append(CaseUpKeyDEng);
CaseUpKeyDEng.innerHTML = "D";

let KeyDRus = document.createElement('span');
KeyDRus.className = "rus hidden";
KeyD.append(KeyDRus);
let CaseDownKeyDRus = document.createElement("span");
CaseDownKeyDRus.className = "keysDown hidden";
KeyDRus.append(CaseDownKeyDRus);
CaseDownKeyDRus.innerHTML = "в";
let CaseUpKeyDRus = document.createElement("span");
CaseUpKeyDRus.className = "keysUp hidden";
KeyDRus.append(CaseUpKeyDRus);
CaseUpKeyDRus.innerHTML = "В";

/*KeyF*/

let KeyF = document.createElement('div');
line3.append(KeyF);
KeyF.className = "key";

let KeyFEng = document.createElement('span');
KeyFEng.className = "eng";
KeyF.append(KeyFEng);
let CaseDownKeyFEng = document.createElement("span");
CaseDownKeyFEng.className = "keysDown";
KeyFEng.append(CaseDownKeyFEng);
CaseDownKeyFEng.innerHTML = "f";
let CaseUpKeyFEng = document.createElement("span");
CaseUpKeyFEng.className = "keysUp hidden";
KeyFEng.append(CaseUpKeyFEng);
CaseUpKeyFEng.innerHTML = "F";

let KeyFRus = document.createElement('span');
KeyFRus.className = "rus hidden";
KeyF.append(KeyFRus);
let CaseDownKeyFRus = document.createElement("span");
CaseDownKeyFRus.className = "keysDown hidden";
KeyFRus.append(CaseDownKeyFRus);
CaseDownKeyFRus.innerHTML = "а";
let CaseUpKeyFRus = document.createElement("span");
CaseUpKeyFRus.className = "keysUp hidden";
KeyFRus.append(CaseUpKeyFRus);
CaseUpKeyFRus.innerHTML = "А";

/*KeyG*/

let KeyG = document.createElement('div');
line3.append(KeyG);
KeyG.className = "key";

let KeyGEng = document.createElement('span');
KeyGEng.className = "eng";
KeyG.append(KeyGEng);
let CaseDownKeyGEng = document.createElement("span");
CaseDownKeyGEng.className = "keysDown";
KeyGEng.append(CaseDownKeyGEng);
CaseDownKeyGEng.innerHTML = "g";
let CaseUpKeyGEng = document.createElement("span");
CaseUpKeyGEng.className = "keysUp hidden";
KeyGEng.append(CaseUpKeyGEng);
CaseUpKeyGEng.innerHTML = "G";

let KeyGRus = document.createElement('span');
KeyGRus.className = "rus hidden";
KeyG.append(KeyGRus);
let CaseDownKeyGRus = document.createElement("span");
CaseDownKeyGRus.className = "keysDown hidden";
KeyGRus.append(CaseDownKeyGRus);
CaseDownKeyGRus.innerHTML = "п";
let CaseUpKeyGRus = document.createElement("span");
CaseUpKeyGRus.className = "keysUp hidden";
KeyGRus.append(CaseUpKeyGRus);
CaseUpKeyGRus.innerHTML = "П";

/*KeyH*/

let KeyH = document.createElement('div');
line3.append(KeyH);
KeyH.className = "key";

let KeyHEng = document.createElement('span');
KeyHEng.className = "eng";
KeyH.append(KeyHEng);
let CaseDownKeyHEng = document.createElement("span");
CaseDownKeyHEng.className = "keysDown";
KeyHEng.append(CaseDownKeyHEng);
CaseDownKeyHEng.innerHTML = "h";
let CaseUpKeyHEng = document.createElement("span");
CaseUpKeyHEng.className = "keysUp hidden";
KeyHEng.append(CaseUpKeyHEng);
CaseUpKeyHEng.innerHTML = "H";

let KeyHRus = document.createElement('span');
KeyHRus.className = "rus hidden";
KeyH.append(KeyHRus);
let CaseDownKeyHRus = document.createElement("span");
CaseDownKeyHRus.className = "keysDown hidden";
KeyHRus.append(CaseDownKeyHRus);
CaseDownKeyHRus.innerHTML = "р";
let CaseUpKeyHRus = document.createElement("span");
CaseUpKeyHRus.className = "keysUp hidden";
KeyHRus.append(CaseUpKeyHRus);
CaseUpKeyHRus.innerHTML = "Р";

/*KeyJ*/

let KeyJ = document.createElement('div');
line3.append(KeyJ);
KeyJ.className = "key";

let KeyJEng = document.createElement('span');
KeyJEng.className = "eng";
KeyJ.append(KeyJEng);
let CaseDownKeyJEng = document.createElement("span");
CaseDownKeyJEng.className = "keysDown";
KeyJEng.append(CaseDownKeyJEng);
CaseDownKeyJEng.innerHTML = "j";
let CaseUpKeyJEng = document.createElement("span");
CaseUpKeyJEng.className = "keysUp hidden";
KeyJEng.append(CaseUpKeyJEng);
CaseUpKeyJEng.innerHTML = "J";

let KeyJRus = document.createElement('span');
KeyJRus.className = "rus hidden";
KeyJ.append(KeyJRus);
let CaseDownKeyJRus = document.createElement("span");
CaseDownKeyJRus.className = "keysDown hidden";
KeyJRus.append(CaseDownKeyJRus);
CaseDownKeyJRus.innerHTML = "о";
let CaseUpKeyJRus = document.createElement("span");
CaseUpKeyJRus.className = "keysUp hidden";
KeyJRus.append(CaseUpKeyJRus);
CaseUpKeyJRus.innerHTML = "О";

/*KeyK*/

let KeyK = document.createElement('div');
line3.append(KeyK);
KeyK.className = "key";

let KeyKEng = document.createElement('span');
KeyKEng.className = "eng";
KeyK.append(KeyKEng);
let CaseDownKeyKEng = document.createElement("span");
CaseDownKeyKEng.className = "keysDown";
KeyKEng.append(CaseDownKeyKEng);
CaseDownKeyKEng.innerHTML = "k";
let CaseUpKeyKEng = document.createElement("span");
CaseUpKeyKEng.className = "keysUp hidden";
KeyKEng.append(CaseUpKeyKEng);
CaseUpKeyKEng.innerHTML = "K";

let KeyKRus = document.createElement('span');
KeyKRus.className = "rus hidden";
KeyK.append(KeyKRus);
let CaseDownKeyKRus = document.createElement("span");
CaseDownKeyKRus.className = "keysDown hidden";
KeyKRus.append(CaseDownKeyKRus);
CaseDownKeyKRus.innerHTML = "л";
let CaseUpKeyKRus = document.createElement("span");
CaseUpKeyKRus.className = "keysUp hidden";
KeyKRus.append(CaseUpKeyKRus);
CaseUpKeyKRus.innerHTML = "Л";

/*KeyL*/

let KeyL = document.createElement('div');
line3.append(KeyL);
KeyL.className = "key";

let KeyLEng = document.createElement('span');
KeyLEng.className = "eng";
KeyL.append(KeyLEng);
let CaseDownKeyLEng = document.createElement("span");
CaseDownKeyLEng.className = "keysDown";
KeyLEng.append(CaseDownKeyLEng);
CaseDownKeyLEng.innerHTML = "l";
let CaseUpKeyLEng = document.createElement("span");
CaseUpKeyLEng.className = "keysUp hidden";
KeyLEng.append(CaseUpKeyLEng);
CaseUpKeyLEng.innerHTML = "L";

let KeyLRus = document.createElement('span');
KeyLRus.className = "rus hidden";
KeyL.append(KeyLRus);
let CaseDownKeyLRus = document.createElement("span");
CaseDownKeyLRus.className = "keysDown hidden";
KeyLRus.append(CaseDownKeyLRus);
CaseDownKeyLRus.innerHTML = "д";
let CaseUpKeyLRus = document.createElement("span");
CaseUpKeyLRus.className = "keysUp hidden";
KeyLRus.append(CaseUpKeyLRus);
CaseUpKeyLRus.innerHTML = "Д";

/*Semicolon*/

let Semicolon = document.createElement('div');
line3.append(Semicolon);
Semicolon.className = "key";

let SemicolonEng = document.createElement('span');
SemicolonEng.className = "eng";
Semicolon.append(SemicolonEng);
let CaseDownSemicolonEng = document.createElement("span");
CaseDownSemicolonEng.className = "keysDown";
SemicolonEng.append(CaseDownSemicolonEng);
CaseDownSemicolonEng.innerHTML = ";";
let CaseUpSemicolonEng = document.createElement("span");
CaseUpSemicolonEng.className = "keysUp hidden";
SemicolonEng.append(CaseUpSemicolonEng);
CaseUpSemicolonEng.innerHTML = ":";

let SemicolonRus = document.createElement('span');
SemicolonRus.className = "rus hidden";
Semicolon.append(SemicolonRus);
let CaseDownSemicolonRus = document.createElement("span");
CaseDownSemicolonRus.className = "keysDown hidden";
SemicolonRus.append(CaseDownSemicolonRus);
CaseDownSemicolonRus.innerHTML = "ж";
let CaseUpSemicolonRus = document.createElement("span");
CaseUpSemicolonRus.className = "keysUp hidden";
SemicolonRus.append(CaseUpSemicolonRus);
CaseUpSemicolonRus.innerHTML = "Ж";

/*KeyQuote*/

let KeyQuote = document.createElement('div');
line3.append(KeyQuote);
KeyQuote.className = "key";

let KeyQuoteEng = document.createElement('span');
KeyQuoteEng.className = "eng";
KeyQuote.append(KeyQuoteEng);
let CaseDownKeyQuoteEng = document.createElement("span");
CaseDownKeyQuoteEng.className = "keysDown";
KeyQuoteEng.append(CaseDownKeyQuoteEng);
CaseDownKeyQuoteEng.innerHTML = "'";
let CaseUpKeyQuoteEng = document.createElement("span");
CaseUpKeyQuoteEng.className = "keysUp hidden";
KeyQuoteEng.append(CaseUpKeyQuoteEng);
CaseUpKeyQuoteEng.innerHTML = "\"";

let KeyQuoteRus = document.createElement('span');
KeyQuoteRus.className = "rus hidden";
KeyQuote.append(KeyQuoteRus);
let CaseDownKeyQuoteRus = document.createElement("span");
CaseDownKeyQuoteRus.className = "keysDown hidden";
KeyQuoteRus.append(CaseDownKeyQuoteRus);
CaseDownKeyQuoteRus.innerHTML = "э";
let CaseUpKeyQuoteRus = document.createElement("span");
CaseUpKeyQuoteRus.className = "keysUp hidden";
KeyQuoteRus.append(CaseUpKeyQuoteRus);
CaseUpKeyQuoteRus.innerHTML = "Э";

/*KeyEnter*/

let KeyEnter = document.createElement('div');
line3.append(KeyEnter);
KeyEnter.className = "key semi-wide-key black-key";

let KeyEnterEng = document.createElement('span');
KeyEnterEng.className = "eng";
KeyEnter.append(KeyEnterEng);
let CaseDownKeyEnterEng = document.createElement("span");
CaseDownKeyEnterEng.className = "keysDown";
KeyEnterEng.append(CaseDownKeyEnterEng);
CaseDownKeyEnterEng.innerHTML = "Enter";
let CaseUpKeyEnterEng = document.createElement("span");
CaseUpKeyEnterEng.className = "keysUp hidden";
KeyEnterEng.append(CaseUpKeyEnterEng);
CaseUpKeyEnterEng.innerHTML = "Enter";

let KeyEnterRus = document.createElement('span');
KeyEnterRus.className = "rus hidden";
KeyEnter.append(KeyEnterRus);
let CaseDownKeyEnterRus = document.createElement("span");
CaseDownKeyEnterRus.className = "keysDown hidden";
KeyEnterRus.append(CaseDownKeyEnterRus);
CaseDownKeyEnterRus.innerHTML = "Enter";
let CaseUpKeyEnterRus = document.createElement("span");
CaseUpKeyEnterRus.className = "keysUp hidden";
KeyEnterRus.append(CaseUpKeyEnterRus);
CaseUpKeyEnterRus.innerHTML = "Enter";

/*Keyboard line 4*/

/*LeftShiftKey*/

let LeftShiftKey = document.createElement('div');
line4.append(LeftShiftKey);
LeftShiftKey.className = "key wide-key black-key";

let LeftShiftKeyEng = document.createElement('span');
LeftShiftKeyEng.className = "eng";
LeftShiftKey.append(LeftShiftKeyEng);
let CaseDownLeftShiftKeyEng = document.createElement("span");
CaseDownLeftShiftKeyEng.className = "keysDown";
LeftShiftKeyEng.append(CaseDownLeftShiftKeyEng);
CaseDownLeftShiftKeyEng.innerHTML = "Shift";
let CaseUpLeftShiftKeyEng = document.createElement("span");
CaseUpLeftShiftKeyEng.className = "keysUp hidden";
LeftShiftKeyEng.append(CaseUpLeftShiftKeyEng);
CaseUpLeftShiftKeyEng.innerHTML = "Shift";

let LeftShiftKeyRus =document.createElement('span');
LeftShiftKeyRus.className = "rus hidden";
LeftShiftKey.append(LeftShiftKeyRus);
let CaseDownLeftShiftKeyRus = document.createElement("span");
CaseDownLeftShiftKeyRus.className = "keysDown hidden";
LeftShiftKeyRus.append(CaseDownLeftShiftKeyRus);
CaseDownLeftShiftKeyRus.innerHTML = "Shift";
let CaseUpLeftShiftKeyRus = document.createElement("span");
CaseUpLeftShiftKeyRus.className = "keysUp hidden";
LeftShiftKeyRus.append(CaseUpLeftShiftKeyRus);
CaseUpLeftShiftKeyRus.innerHTML = "Shift";

/*KeyZ*/

let KeyZ = document.createElement('div');
line4.append(KeyZ);
KeyZ.className = "key";

let KeyZEng = document.createElement('span');
KeyZEng.className = "eng";
KeyZ.append(KeyZEng);
let CaseDownKeyZEng = document.createElement("span");
CaseDownKeyZEng.className = "keysDown";
KeyZEng.append(CaseDownKeyZEng);
CaseDownKeyZEng.innerHTML = "z";
let CaseUpKeyZEng = document.createElement("span");
CaseUpKeyZEng.className = "keysUp hidden";
KeyZEng.append(CaseUpKeyZEng);
CaseUpKeyZEng.innerHTML = "Z";

let KeyZRus = document.createElement('span');
KeyZRus.className = "rus hidden";
KeyZ.append(KeyZRus);
let CaseDownKeyZRus = document.createElement("span");
CaseDownKeyZRus.className = "keysDown hidden";
KeyZRus.append(CaseDownKeyZRus);
CaseDownKeyZRus.innerHTML = "я";
let CaseUpKeyZRus = document.createElement("span");
CaseUpKeyZRus.className = "keysUp hidden";
KeyZRus.append(CaseUpKeyZRus);
CaseUpKeyZRus.innerHTML = "Я";

/*KeyX*/

let KeyX = document.createElement('div');
line4.append(KeyX);
KeyX.className = "key";

let KeyXEng = document.createElement('span');
KeyXEng.className = "eng";
KeyX.append(KeyXEng);
let CaseDownKeyXEng = document.createElement("span");
CaseDownKeyXEng.className = "KeyXDown";
KeyXEng.append(CaseDownKeyXEng);
CaseDownKeyXEng.innerHTML = "x";
let CaseUpKeyXEng = document.createElement("span");
CaseUpKeyXEng.className = "KeyXUp hidden";
KeyXEng.append(CaseUpKeyXEng);
CaseUpKeyXEng.innerHTML = "X";

let KeyXRus = document.createElement('span');
KeyXRus.className = "rus hidden";
KeyX.append(KeyXRus);
let CaseDownKeyXRus = document.createElement("span");
CaseDownKeyXRus.className = "KeyXDown hidden";
KeyXRus.append(CaseDownKeyQRus);
CaseDownKeyXRus.innerHTML = "ч";
let CaseUpKeyXRus = document.createElement("span");
CaseUpKeyXRus.className = "KeyXUp hidden";
KeyXRus.append(CaseUpKeyXRus);
CaseUpKeyXRus.innerHTML = "Ч";

/*KeyC*/

let KeyC = document.createElement('div');
line4.append(KeyC);
KeyC.className = "key";

let KeyCEng = document.createElement('span');
KeyCEng.className = "eng";
KeyC.append(KeyCEng);
let CaseDownKeyCEng = document.createElement("span");
CaseDownKeyCEng.className = "keysDown";
KeyCEng.append(CaseDownKeyCEng);
CaseDownKeyCEng.innerHTML = "c";
let CaseUpKeyCEng = document.createElement("span");
CaseUpKeyCEng.className = "keysUp hidden";
KeyCEng.append(CaseUpKeyCEng);
CaseUpKeyCEng.innerHTML = "C";

let KeyCRus = document.createElement('span');
KeyCRus.className = "rus hidden";
KeyC.append(KeyCRus);
let CaseDownKeyCRus = document.createElement("span");
CaseDownKeyCRus.className = "keysDown hidden";
KeyCRus.append(CaseDownKeyCRus);
CaseDownKeyCRus.innerHTML = "с";
let CaseUpKeyCRus = document.createElement("span");
CaseUpKeyCRus.className = "keysUp hidden";
KeyCRus.append(CaseUpKeyCRus);
CaseUpKeyCRus.innerHTML = "С";

/*KeyV*/

let KeyV = document.createElement('div');
line4.append(KeyV);
KeyV.className = "key";

let KeyVEng = document.createElement('span');
KeyVEng.className = "eng";
KeyV.append(KeyVEng);
let CaseDownKeyVEng = document.createElement("span");
CaseDownKeyVEng.className = "keysDown";
KeyVEng.append(CaseDownKeyVEng);
CaseDownKeyVEng.innerHTML = "v";
let CaseUpKeyVEng = document.createElement("span");
CaseUpKeyVEng.className = "keysUp hidden";
KeyVEng.append(CaseUpKeyVEng);
CaseUpKeyVEng.innerHTML = "V";

let KeyVRus = document.createElement('span');
KeyVRus.className = "rus hidden";
KeyV.append(KeyVRus);
let CaseDownKeyVRus = document.createElement("span");
CaseDownKeyVRus.className = "keysDown hidden";
KeyVRus.append(CaseDownKeyVRus);
CaseDownKeyVRus.innerHTML = "м";
let CaseUpKeyVRus = document.createElement("span");
CaseUpKeyVRus.className = "keysUp hidden";
KeyVRus.append(CaseUpKeyVRus);
CaseUpKeyVRus.innerHTML = "М";

/*KeyB*/

let KeyB = document.createElement('div');
line4.append(KeyB);
KeyB.className = "key";

let KeyBEng = document.createElement('span');
KeyBEng.className = "eng";
KeyB.append(KeyBEng);
let CaseDownKeyBEng = document.createElement("span");
CaseDownKeyBEng.className = "keysDown";
KeyBEng.append(CaseDownKeyBEng);
CaseDownKeyBEng.innerHTML = "b";
let CaseUpKeyBEng = document.createElement("span");
CaseUpKeyBEng.className = "keysUp hidden";
KeyBEng.append(CaseUpKeyBEng);
CaseUpKeyBEng.innerHTML = "B";

let KeyBRus = document.createElement('span');
KeyBRus.className = "rus hidden";
KeyB.append(KeyBRus);
let CaseDownKeyBRus = document.createElement("span");
CaseDownKeyBRus.className = "keysDown hidden";
KeyBRus.append(CaseDownKeyBRus);
CaseDownKeyBRus.innerHTML = "и";
let CaseUpKeyBRus = document.createElement("span");
CaseUpKeyBRus.className = "keysUp hidden";
KeyBRus.append(CaseUpKeyBRus);
CaseUpKeyBRus.innerHTML = "И";

/*KeyN*/

let KeyN = document.createElement('div');
line4.append(KeyN);
KeyN.className = "key";

let KeyNEng = document.createElement('span');
KeyNEng.className = "eng";
KeyN.append(KeyNEng);
let CaseDownKeyNEng = document.createElement("span");
CaseDownKeyNEng.className = "keysDown";
KeyNEng.append(CaseDownKeyNEng);
CaseDownKeyNEng.innerHTML = "n";
let CaseUpKeyNEng = document.createElement("span");
CaseUpKeyNEng.className = "keysUp hidden";
KeyNEng.append(CaseUpKeyNEng);
CaseUpKeyNEng.innerHTML = "N";

let KeyNRus = document.createElement('span');
KeyNRus.className = "rus hidden";
KeyN.append(KeyNRus);
let CaseDownKeyNRus = document.createElement("span");
CaseDownKeyNRus.className = "keysDown hidden";
KeyNRus.append(CaseDownKeyNRus);
CaseDownKeyNRus.innerHTML = "т";
let CaseUpKeyNRus = document.createElement("span");
CaseUpKeyNRus.className = "keysUp hidden";
KeyNRus.append(CaseUpKeyNRus);
CaseUpKeyNRus.innerHTML = "Т";

/*KeyM*/

let KeyM = document.createElement('div');
line4.append(KeyM);
KeyM.className = "key";

let KeyMEng = document.createElement('span');
KeyMEng.className = "eng";
KeyM.append(KeyMEng);
let CaseDownKeyMEng = document.createElement("span");
CaseDownKeyMEng.className = "keysDown";
KeyMEng.append(CaseDownKeyMEng);
CaseDownKeyMEng.innerHTML = "m";
let CaseUpKeyMEng = document.createElement("span");
CaseUpKeyMEng.className = "keysUp hidden";
KeyMEng.append(CaseUpKeyMEng);
CaseUpKeyMEng.innerHTML = "M";

let KeyMRus = document.createElement('span');
KeyMRus.className = "rus hidden";
KeyM.append(KeyMRus);
let CaseDownKeyMRus = document.createElement("span");
CaseDownKeyMRus.className = "keysDown hidden";
KeyMRus.append(CaseDownKeyMRus);
CaseDownKeyMRus.innerHTML = "ь";
let CaseUpKeyMRus = document.createElement("span");
CaseUpKeyMRus.className = "keysUp hidden";
KeyMRus.append(CaseUpKeyMRus);
CaseUpKeyMRus.innerHTML = "Ь";

/*KeyComma*/

let KeyComma = document.createElement('div');
line4.append(KeyComma);
KeyComma.className = "key";

let KeyCommaEng = document.createElement('span');
KeyCommaEng.className = "eng";
KeyComma.append(KeyCommaEng);
let CaseDownKeyCommaEng = document.createElement("span");
CaseDownKeyCommaEng.className = "keysDown";
KeyCommaEng.append(CaseDownKeyCommaEng);
CaseDownKeyCommaEng.innerHTML = ",";
let CaseUpKeyCommaEng = document.createElement("span");
CaseUpKeyCommaEng.className = "keysUp hidden";
KeyCommaEng.append(CaseUpKeyCommaEng);
CaseUpKeyCommaEng.innerHTML = "<";

let KeyCommaRus = document.createElement('span');
KeyCommaRus.className = "rus hidden";
KeyComma.append(KeyCommaRus);
let CaseDownKeyCommaRus = document.createElement("span");
CaseDownKeyCommaRus.className = "keysDown hidden";
KeyCommaRus.append(CaseDownKeyCommaRus);
CaseDownKeyCommaRus.innerHTML = "б";
let CaseUpKeyCommaRus = document.createElement("span");
CaseUpKeyCommaRus.className = "keysUp hidden";
KeyCommaRus.append(CaseUpKeyCommaRus);
CaseUpKeyCommaRus.innerHTML = "Б";

/*KeyDot*/

let KeyDot = document.createElement('div');
line4.append(KeyDot);
KeyDot.className = "key";

let KeyDotEng = document.createElement('span');
KeyDotEng.className = "eng";
KeyDot.append(KeyDotEng);
let CaseDownKeyDotEng = document.createElement("span");
CaseDownKeyDotEng.className = "keysDown";
KeyDotEng.append(CaseDownKeyDotEng);
CaseDownKeyDotEng.innerHTML = ".";
let CaseUpKeyDotEng = document.createElement("span");
CaseUpKeyDotEng.className = "keysUp hidden";
KeyDotEng.append(CaseUpKeyDotEng);
CaseUpKeyDotEng.innerHTML = ">";

let KeyDotRus = document.createElement('span');
KeyDotRus.className = "rus hidden";
KeyDot.append(KeyDotRus);
let CaseDownKeyDotRus = document.createElement("span");
CaseDownKeyDotRus.className = "keysDown hidden";
KeyDotRus.append(CaseDownKeyDotRus);
CaseDownKeyDotRus.innerHTML = "ю";
let CaseUpKeyDotRus = document.createElement("span");
CaseUpKeyDotRus.className = "keysUp hidden";
KeyDotRus.append(CaseUpKeyDotRus);
CaseUpKeyDotRus.innerHTML = "Ю";

/*KeySlash*/

let KeySlash = document.createElement('div');
line4.append(KeySlash);
KeySlash.className = "key";

let KeySlashEng = document.createElement('span');
KeySlashEng.className = "eng";
KeySlash.append(KeySlashEng);
let CaseDownKeySlashEng = document.createElement("span");
CaseDownKeySlashEng.className = "keysDown";
KeySlashEng.append(CaseDownKeySlashEng);
CaseDownKeySlashEng.innerHTML = "/";
let CaseUpKeySlashEng = document.createElement("span");
CaseUpKeySlashEng.className = "keysUp hidden";
KeySlashEng.append(CaseUpKeySlashEng);
CaseUpKeySlashEng.innerHTML = "?";

let KeySlashRus = document.createElement('span');
KeySlashRus.className = "rus hidden";
KeySlash.append(KeySlashRus);
let CaseDownKeySlashRus = document.createElement("span");
CaseDownKeySlashRus.className = "keysDown hidden";
KeySlashRus.append(CaseDownKeySlashRus);
CaseDownKeySlashRus.innerHTML = ".";
let CaseUpKeySlashRus = document.createElement("span");
CaseUpKeySlashRus.className = "keysUp hidden";
KeySlashRus.append(CaseUpKeySlashRus);
CaseUpKeySlashRus.innerHTML = ",";

/*ArrowUp*/

let ArrowUp = document.createElement('div');
line4.append(ArrowUp);
ArrowUp.className = "key black-key";

let ArrowUpEng = document.createElement('span');
ArrowUpEng.className = "eng";
ArrowUp.append(ArrowUpEng);
let CaseDownArrowUpEng = document.createElement("span");
CaseDownArrowUpEng.className = "keysDown";
ArrowUpEng.append(CaseDownArrowUpEng);
CaseDownArrowUpEng.innerHTML = "▲";
let CaseUpArrowUpEng = document.createElement("span");
CaseUpArrowUpEng.className = "keysUp hidden";
ArrowUpEng.append(CaseUpArrowUpEng);
CaseUpArrowUpEng.innerHTML = "▲";

let ArrowUpRus = document.createElement('span');
ArrowUpRus.className = "rus hidden";
ArrowUp.append(ArrowUpRus);
let CaseDownArrowUpRus = document.createElement("span");
CaseDownArrowUpRus.className = "keysDown hidden";
ArrowUpRus.append(CaseDownArrowUpRus);
CaseDownArrowUpRus.innerHTML = "▲";
let CaseUpArrowUpRus = document.createElement("span");
CaseUpArrowUpRus.className = "keysUp hidden";
ArrowUpRus.append(CaseUpArrowUpRus);
CaseUpArrowUpRus.innerHTML = "▲";

/*RightShiftKey*/

let RightShiftKey = document.createElement('div');
line4.append(RightShiftKey);
RightShiftKey.className = "key semi-wide-key black-key";

let RightShiftKeyEng = document.createElement('span');
RightShiftKeyEng.className = "eng";
RightShiftKey.append(RightShiftKeyEng);
let CaseDownRightShiftKeyEng = document.createElement("span");
CaseDownRightShiftKeyEng.className = "keysDown";
RightShiftKeyEng.append(CaseDownRightShiftKeyEng);
CaseDownRightShiftKeyEng.innerHTML = "Shift";
let CaseUpRightShiftKeyEng = document.createElement("span");
CaseUpRightShiftKeyEng.className = "keysUp hidden";
RightShiftKeyEng.append(CaseUpRightShiftKeyEng);
CaseUpRightShiftKeyEng.innerHTML = "Shift";

let RightShiftKeyRus = document.createElement('span');
RightShiftKeyRus.className = "rus hidden";
RightShiftKey.append(RightShiftKeyRus);
let CaseDownRightShiftKeyRus = document.createElement("span");
CaseDownRightShiftKeyRus.className = "keysDown hidden";
RightShiftKeyRus.append(CaseDownRightShiftKeyRus);
CaseDownRightShiftKeyRus.innerHTML = "Shift";
let CaseUpRightShiftKeyRus = document.createElement("span");
CaseUpRightShiftKeyRus.className = "keysUp hidden";
RightShiftKeyRus.append(CaseUpRightShiftKeyRus);
CaseUpRightShiftKeyRus.innerHTML = "Shift";























/*-----Instructions-----*/
let instruction = document.createElement('div');
let instructionOS = document.createElement('p');
instructionOS.innerHTML = "Keyboard was designed for Windows OS"
let instructionLang = document.createElement('p');
instructionLang.innerHTML = "For changing language use Alt + Shift"
document.body.append(instruction);
instruction.append(instructionOS);
instruction.append(instructionLang);

