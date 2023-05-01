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


























/*-----Instructions-----*/
let instruction = document.createElement('div');
let instructionOS = document.createElement('p');
instructionOS.innerHTML = "Keyboard was designed for Windows OS"
let instructionLang = document.createElement('p');
instructionLang.innerHTML = "For changing language use Alt + Shift"
document.body.append(instruction);
instruction.append(instructionOS);
instruction.append(instructionLang);

