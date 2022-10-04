//CONST
const ZERO_KEY_K = 48;
const ZERO_KEY_NUM = 96;
const ONE_KEY_K = 49;
const ONE_KEY_NUM = 97;
const TWO_KEY_K = 50;
const TWO_KEY_NUM = 98;
const THREE_KEY_K = 51;
const THREE_KEY_NUM = 98;
const FOUR_KEY_K = 52;
const FOUR_KEY_NUM = 100;
const FIVE_KEY_K = 53;
const FIVE_KEY_NUM = 101;
const SIX_KEY_K = 54;
const SIX_KEY_NUM = 102;
const SEVEN_KEY_K = 55;
const SEVEN_KEY_NUM = 103;
const EIGHT_KEY_K = 56;
const EIGHT_KEY_NUM = 104;
const NINE_KEY_K = 57;
const NINE_KEY_NUM = 105;
const SUBTRACT_K = 189;
const DEC_POINT_K = 190;
const DIVIDE_K = 191;
const EQUAL_K = 187;


let memoryVar=0;

let website = document.body;
let display = document.getElementById("resultDisplay");
display.value = "";

//function for displaying values
function dis(val) {
    display.value += val
    display.innerHTML = display.value;
    //console.log(display.value);
}

//function for evaluation
function solve() {
    let x = display.value;
    let y = eval(x);
    display.value = y;
    display.innerHTML = display.value;
    //console.log(y);
}

//function for clearing the display
function clr() {
    display.value = "";
    display.innerHTML = display.value;
}


//functions for different mathematical operations
function rad(){
    let x = display.value;
    let y = Math.sqrt(x);
    display.value = y;
    display.innerHTML = display.value;
}

function frac(){
    let x = display.value;
    let y = 1/x;
    display.value = y;
    display.innerHTML = display.value;
}

function plusminus(){
    let x = display.value;
    let y = -x;
    display.value = y;
    display.innerHTML = display.value;
}
function procent(){
    let x = display.value;
    let y = (eval(x))/100;
    display.value = y;
    display.innerHTML = display.value;
}

//functions for memory
function memoryStore() {
    let x = display.value;
    memoryVar=x;
    console.log(memoryVar);
}
function memoryDel() {
    memoryVar=0;
    console.log(memoryVar);
}
function memoryCall() {
    dis(memoryVar);
    console.log(memoryVar);
}

//keydown
website.addEventListener("keydown", (event) => {
    console.log("key code is " +event.keyCode)
    const key = event.keyCode;


    switch (key) {
        case ZERO_KEY_K:
            dis('0');
            break;
        case ZERO_KEY_NUM :
            dis('0');
            break;
        case ONE_KEY_K:
            dis('1');
            break;
        case ONE_KEY_NUM:
            dis('1');
            break;
        case TWO_KEY_K:
            dis('2');
            break;
        case TWO_KEY_NUM:
            dis('2');
            break;
        case THREE_KEY_K:
            dis('3');
            break;
        case THREE_KEY_NUM:
            dis('3');
            break;
        case FOUR_KEY_K:
            dis('4');
            break;
        case FOUR_KEY_NUM:
            dis('4');
            break;
        case FIVE_KEY_K:
            dis('5');
            break;
        case FIVE_KEY_NUM:
            dis('5');
            break;
        case SIX_KEY_K:
            dis('6');
            break;
        case SIX_KEY_NUM:
            dis('6');
            break;
        case SEVEN_KEY_K:
            dis('7');
            break;
        case SEVEN_KEY_NUM:
            dis('7');
            break;
        case (event.shiftKey && EIGHT_KEY_K):
            dis('*');
            break;
        case EIGHT_KEY_K:
            dis('8');
            break;
        case EIGHT_KEY_NUM:
            dis('8');
            break;
        case NINE_KEY_K:
            dis('9');
            break;
        case NINE_KEY_NUM:
            dis('9');
            break;
        case (event.shiftKey && EQUAL_K):
            //debugger;
            dis('+');
            break;

        case SUBTRACT_K:
            dis('-');
            break;
        case DEC_POINT_K:
            dis('.');
            break;
        case DIVIDE_K:
            dis('/');
            break;
        case EQUAL_K:
            //
            solve();
            break;
    }

});

