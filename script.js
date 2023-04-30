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
textarea.cols = 50;
textarea.rows = 10;
document.body.append(textarea);

/*-----Keyboard-----*/
let keyboard = document.createElement('div');
document.body.append(keyboard);
keyboard.style.border = "1px solid gray";
keyboard.style.borderRadius = "4px";
keyboard.style.position = "relative";
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

/*-----Instructions-----*/
let instruction = document.createElement('div');
let instructionOS = document.createElement('p');
instructionOS.innerHTML = "Keyboard was designed for Windows OS"
let instructionLang = document.createElement('p');
instructionLang.innerHTML = "For changing language use Alt + Shift"
document.body.append(instruction);
instruction.append(instructionOS);
instruction.append(instructionLang);

