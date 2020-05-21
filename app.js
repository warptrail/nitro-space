console.log("Welcome to Space");

let alienLetters = {
    a: "al",
    b: "bez-",
    c: "co",
    d: "da",
    e: "ez",
    f: "foo",
    g: "gor",
    h: "haza",
    i: "iz",
    j: "jox",
    k: "ka",
    l: "li",
    m: "moz",
    n: "an",
    o: "oox",
    p: "xop",
    q: "qua",
    r: "ri",
    s: "se",
    t: "tex",
    u: "uzi",
    v: "va",
    w: "waka",
    x: "xe",
    y: "yo",
    z: "ez"
}

let buzzEncoder = {
    a: ["å", "œ"],
    b: ["boo", "bb"],
    c: ["krax", "ç"],
    d: ["du", "∂"],
    e: ["i-i", "é"],
    f: ["wa", "ƒ"],
    g: ["k", "˚kay"],
    h: ["ℍ", "^"],
    i: ["-hi", "î"],
    j: ["j", "∆"],
    k: ["k`", "˚"],
    l: ["la", "¬"],
    m: ["meep", "µ"],
    n: ["in", "ñ"],
    o: ["ȫ ", "ø"],
    p: ["plorg", "π"],
    q: ["qlax", "kyo"],
    r: ["ar", "rar"],
    s: ["smork", "ß"],
    t: ["trarg", "†"],
    u: ["oo", "ü"],
    v: ["vyort", "√"],
    w: ["weewo", "∑"],
    x: ["⸖", "≈"],
    y: ["yamska-i'liax", "¥"],
    z: ["Ⱬ", "Ω"]
};

function generateAlienName(name, encoder) {
    let alienName = "";
    name = name.toLowerCase();
    // loop through each character of the name
    for (let i = 0; i < name.length; i++) {
        // check for a match in the encoder object
        let newCharacter = encoder[name[i]];
        // if there's a match, add the character to the end of the new name
        if (newCharacter) {
            //randomize character
            let randomCharacter = selectRandom(newCharacter);
            alienName += randomCharacter;
        }
    }
    return alienName;
}

function selectRandom(collection) {
    return collection[Math.floor(Math.random() * collection.length)];
}

function alienNameSubmit(event) {
    // stop the form from submitting
    event.preventDefault();
    // get the string from the input form
    let name = document.getElementById("human-name").value;
    // call the alien name generator function
    let alienName = generateAlienName(name, buzzEncoder);
    // update the DOM with the new name
    let nameElement = document.getElementById("new-name");
    nameElement.innerHTML += "<h3 class='aliengoo'>" + alienName + "</h3>"
    // clear form
    document.getElementById("alien-name-generator-form").reset();
    document.getElementById("submit-name").blur();
}

// add the alienNameSubmit function to the form
let alienForm = document.getElementById("alien-name-generator-form");
alienForm.onsubmit = alienNameSubmit;

// Breaking down problems with functions





var col = document.getElementsByClassName("colorify");
// console.log(col);
// console.log(col.length);

let colors = ["#9B65E8", "#1F2A72", "#1F7221", "#223285", "#C279E1", "#83C040", "#CA00FF", "#00FFC0", "#EC8CD8", "#D4EC8C", "#A0D882", "#58DF0F", "#DF0FD7", "#F59477"]

function counter() {
    console.log("this function will count things");
}


const displayType = document.getElementById('display-type');
displayType.innerHTML = typeof (2);
displayType.innerHTML += " / " + typeof ('2');
displayType.innerHTML += " / " + typeof (true);


const displayBoolean = document.getElementById('display-boolean');
const spaceShipsChecked = document.getElementsByClassName("spaceships");
console.log(spaceShipsChecked);
for (spaceShip of spaceShipsChecked) {
    spaceShip.addEventListener('click', function () {
        if (this.checked == true) {
            displayBoolean.innerHTML = this.value + ' is checked';
        } else {
            displayBoolean.innerHTML = this.value + ' is not checked';
        }
    });
}


const messageAlpha = document.getElementById('message-alpha');
const ageInput = document.getElementById('ageinput');
const combineFields = document.getElementById('combinefields');
const combineDemo = document.querySelector(".combine-demo");

combineFields.onclick = function () {
    let mainMessage = "The planet: ";
    let planetName = messageAlpha.value;
    let age = ageInput.value;
    let tailMessage = " million years old";
    combineDemo.innerHTML = mainMessage + planetName + " is " + age + tailMessage + " [" + typeof (mainMessage) + "]";
}

const parseThis = document.getElementById('parse-alpha');
const parsingStrings = document.getElementById('parsedemo');
const parseButton = document.getElementById('parsebutton');

parseButton.onclick = function () {
    console.log(parseThis.value);
    console.log(typeof (parseThis.value));
    parsingStrings.innerHTML = " The input is a string so adding the inputs together results in: " + parseThis.value + parseThis.value;
    let parseNumber = parseInt(parseThis.value);
    parsingStrings.innerHTML += "<br> Now we have converted the string to numbers so now we can do math on it:<br>" + parseNumber + " multiplied by 2 is: " + (parseNumber * 2);
    if (isNaN(parseNumber)) {
        parsingStrings.innerHTML += "<br> You have not enetered a number, so you cannot convert a letter to a number this way.";
    }
}

const numberToStringInput = document.getElementById('numbertostringinput');
const numberToStringButton = document.getElementById('numbertostringbtn')
const demoNumberToString = document.getElementById('demonumbertostring');

numberToStringButton.onclick = function () {
    demoNumberToString.innerHTML = typeof (numberToStringInput.value) + ' --> ';
    let toNumber = parseInt(numberToStringInput.value);
    demoNumberToString.innerHTML += typeof (toNumber) + ' --> '
    let backToString = toNumber.toString();
    demoNumberToString.innerHTML += typeof (backToString);
}

const davedsList = document.getElementById('davedslist');
const inputToDavedsList = document.getElementById('input-daved');
const addToDavedsList = document.getElementById('multibutton');

function addWordsToDavedsList() {
    // Create a new li
    console.log(davedsList);
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(inputToDavedsList.value)
    console.log(liContent);
    //Add the input value inside the new li
    newLi.appendChild(liContent);
    console.log(newLi);
    //Attatching the li to the user list
    davedsList.appendChild(newLi);
    inputToDavedsList.value = '';
}


// Math Bar 
//Prime Numbers

let primeInput = document.getElementById("showprimes");
let primeDemo = document.getElementById("prime-demo");

function showPrimes(limit) {
    primeDemo.innerHTML = "Prime numberse between 2 & " + limit + ": <br>";
    let primeArray = [];

    for (let n = 2; n <= limit; n++) {
        if (isPrime(n)) {
            console.log(n)
            primeArray.push(n);
        }
    }
    primeArray.forEach(function (primeNumber) {
        primeDemo.innerHTML += primeNumber + ", ";
    });
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false;
        } else {
            return true;
        }
    }
}

primeInput.oninput = function () {
    event.preventDefault();
    primeDemo.innerHTML = '';
    if (isNaN(primeInput.value)) {
        primeDemo.innerHTML = "Input not valid."
    } else if (primeInput.value > 5000) {
        primeDemo.innerHTML = "Number is too high. Please pick a number between 2 and 5000";
    }
    else {
        showPrimes(primeInput.value);
    }
}

//Math Bar
// Percentage of column A is x % of columb B
function isPercentOf(mainNumber, otherNumber) {
    let percent = (mainNumber / otherNumber) * 100;
    return percent;
}

let mainNumber = document.getElementById("main-number");
let otherNumber = document.getElementById("other-number");
let percentageDemo = document.getElementById("percentage-demo");

function calculatePercentages() {
    let percent = isPercentOf(mainNumber.value, otherNumber.value).toFixed(2);
    percentageDemo.innerHTML += mainNumber.value + " is " + percent + " % of " + otherNumber.value + "<br>";
}



// The Random Number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Alpha Bar
// isolate 1x12 col-1 classes into 12 unuique ids
// Asign each column with a random color from the colors array
// Generate a random number between 1 and 99 in each column
function colorify() {
    for (let i = 0; i < col.length; i++) {
        // console.log(col[i].id);

        col[i].id = "colid" + (i + 1);
        // console.log(col[i].id + ' ' + col[i].className);
        col[i].style.backgroundColor = colors[getRandomInt(colors.length)];
        col[i].addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = colors[getRandomInt(colors.length)];
            col[i].innerHTML = '<p class="colorifyp">' + getRandomInt(99) + '</p>';
        });
        col[i].addEventListener('mouseout', function (event) {
            event.target.style.backgroundColor = colors[getRandomInt(colors.length)];
            col[i].innerHTML = '<p class="colorifyp">' + getRandomInt(99) + '</p>';
        });

    }
}
colorify();
let constitutions = document.getElementsByClassName("constitution");
//console.log(constitutions);

function decideColors() {
    console.log("Colors have been changed in this row")
    for (let i = 0; i < constitutions.length; i++) {
        constitutions[i].id = "constitution" + (i + 1);
        constitutions[i].style.backgroundColor = colors[getRandomInt(colors.length)];
        constitutions[i].innerHTML = (constitutions[i].style.backgroundColor);
    }
}


// Do some stuff to
var col2 = document.getElementsByClassName("col-2");

function centrify() {
    for (let i = 0; i < col2.length; i++) {
        col2[i].innerHTML = "<p class='text-center colid-name'>" + "This is column " + (i + 1) + "</p>"
        col2[i].style.backgroundColor = colors[getRandomInt(colors.length)];
    }
}
centrify();
const colorcol2 = document.getElementById('colorcol2');
colorcol2.addEventListener('click', function () {
    centrify();
})

//generate the name of a champion for each nation
//between three and 9 characters

function getRandomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function codeNameGenerate() {
    let result = '';
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let charactersLength = characters.length;
    let resultLength = getRandomNumberBetween(3, 10);
    for (let i = 0; i < resultLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let championDemo = document.getElementById("water-button");
let displayWaterChampions = document.getElementById("water-champions-display");

function multipleCodeNameGenerate() {

    let championNames = [];
    for (let i = 0; i < nationalName.length; i++) {
        championNames.push(codeNameGenerate());
        console.log((i + 1) + " " + championNames[i]);
    }
    return championNames;
}

function championNameGenerate(codeName, encoder) {
    let championName = "";
    for (let i = 0; i < codeName.length; i++) {
        let newLetter = encoder[codeName[i]];
        if (newLetter) {
            championName += newLetter;
        }
    }
    return championName;
}

console.log(championNameGenerate("yettimonster", alienLetters));

championDemo.onclick = function () {
    let sixteenChampions = multipleCodeNameGenerate();
    console.log(sixteenChampions);
    let championNameArray = [];
    displayWaterChampions.style.display = "block";
    displayWaterChampions.innerHTML = '';
    for (let i = 0; i < sixteenChampions.length; i++) {
        // console.log(sixteenChampions[i]);
        championNameArray.push(championNameGenerate(sixteenChampions[i], alienLetters));
        console.log(championNameArray[i]);
        displayWaterChampions.innerHTML += "<div class='champion-of-water'>" + championNameArray[i] + "</div>" + " of " + nationalName[i] + "<br>"
    }
    displayWaterChampions.innerHTML += "<button id='clear-water-champions'>clear</button>"
    let clearButton = document.getElementById("clear-water-champions");
    clearButton.addEventListener('click', function () {
        displayWaterChampions.innerHTML = '';
        displayWaterChampions.style.display = 'none';
    })
};

let nationalName = ["Kreya", "Re' Torak", "Picenao", "Trai Nexon", "Weterra", "Draphearin", "Tomibia", "Zelnom", "Nomibia", "Zeles", "Cetis", "Creorenth", "Var Tomek", "Zarat Vi", "Axbuzian", "Hillazona"];

let letter = "z";
console.log(alienLetters.a + alienLetters[letter]);

let alienSpeceminVoolarix = alienLetters.a + alienLetters.l + alienLetters.l + alienLetters.n;
console.log(alienSpeceminVoolarix + "is an alien we have living here on site. His home planet was destoroyed, so he's living on Earth now.");



// Zenva Stuff

const text = document.querySelector(".class1");
const tooxt = document.querySelector(".changeColor");
const revertColor = document.querySelector(".revert-color");
function styleize() {
    text.style.backgroundColor = colors[getRandomInt(colors.length)];
    tooxt.style.backgroundColor = colors[getRandomInt(colors.length)];
    text.classList.add('change');
}

revertColor.addEventListener('click', function () {
    text.style.backgroundColor = "#E39A96"
    text.classList.toggle('revert');
})


// Select your Warrior and display in div
const warriorList = document.querySelectorAll('.warrior-list a');
const displayWar = document.querySelector('.diplaywar');
displayWar.style.backgroundColor = '#289193';
displayWar.innerHTML = "inserted by javascript";
console.log(warriorList);

for (warrior of warriorList) {
    warrior.addEventListener('click', function () {
        console.log(this);
        displayWar.innerHTML = "You have selected " + this.innerHTML + " as your warrior.";
    });
}

// change the items in the boop list

const boopList = document.querySelectorAll(".boop li");
console.log(boopList)
for (boop of boopList) {
    boop.addEventListener('click', function () {
        console.log(this)
        this.classList.toggle('change');
    });
}

const listInput = document.querySelector(".list-input");
const listValue = document.querySelector(".list-value");

listInput.oninput = function () {
    listValue.innerHTML = "-" + listInput.value + "-";
}

const shockingImageButton = document.getElementById("dontclickhere");
const toggleImage = document.getElementById("toggle-image")

// Show an Element
let show = function (element) {
    element.style.display = 'Block';
};

// Hide an Element
let hide = function (element) {
    element.style.display = 'None';
};

// Toggle element visibility
function toggle(element) {
    // if the element is visible, hide it
    if (window.getComputedStyle(element).display === 'block') {
        hide(element);
        return;
    }
    // otherwise show it
    show(element);
}

shockingImageButton.onclick = function () {
    toggle(toggleImage);
}

const button1 = document.getElementById('button1');
const toggleClass1Image = document.getElementById('show-class1-picture');

button1.onclick = function () {
    toggle(toggleClass1Image);
}