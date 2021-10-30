let ones = [
    {name: "ноль", number: 0},
    {name: "одна", number: 1},
    {name: "две", number: 2},
    {name: "три", number: 3},
    {name: "четыре", number: 4},
    {name: "пять", number: 5},
    {name: "шесть", number: 6},
    {name: "семь", number: 7},
    {name: "восемь", number: 8},
    {name: "девять", number: 9}
];

let tens = [
    {name: "десять", number: 1},
    {name: "двадцать", number: 2},
    {name: "тридцать", number: 3},
    {name: "сорок", number: 4},
    {name: "пятьдесят", number: 5},
    {name: "шестьдесят", number: 6},
    {name: "семьдесят", number: 7},
    {name: "восемьдесят", number: 8},
    {name: "девяносто", number: 9}
];

let teens = [
    {name: "одинадцать", number: 1},
    {name: "двенадцать", number: 2},
    {name: "тринадцать", number: 3},
    {name: "четырнадцать", number: 4},
    {name: "пятнадцать", number: 5},
    {name: "шестнадцать", number: 6},
    {name: "семнадцать", number: 7},
    {name: "восемнадцать", number: 8},
    {name: "девятнадцать", number: 9}
];

let hundreds = [
    {name: "сто", number: 1},
    {name: "двести", number: 2},
    {name: "триста", number: 3},
    {name: "четыреста", number: 4},
    {name: "пятьсот", number: 5},
    {name: "шестьсот", number: 6},
    {name: "семьсот", number: 7},
    {name: "восемьсот", number: 8},
    {name: "девятьсот", number: 9}
];

let input = 711;

let translation = [];

let translationOnes = "";
let translationTens = "";
let translationTeens = "";
let translationHundreds = "";


input = String(input);


function translateOnes(a){
    for(let i = 0; i <= ones.length; i++){
        if(+input[a] == i){
            translationOnes += ones[i].name;
            return translationOnes;
        }
    }
}

if(input.length == 1){
    translation.push(translateOnes(0));
    console.log(translation);
}

function translateTens(a){
    for(let i = 1; i <= tens.length; i++){
        if(+input[a] == i){
            translationTens += tens[i-1].name;
            return translationTens;
        }
    }   
}

function translateTeens(a){
    for(let i = 0; i <= teens.length; i++){
        if(+input[a] == i){
            translationTeens += teens[i-1].name;
            return translationTeens;
        }
    }
}

if(input.length == 2 && +input[1] == 0){
    translation.push(translateTens(0));
    console.log(translation);
}

if(input.length == 2 && +input[0] == 1 && +input[1] > 0){
    translation.push(translateTeens(1));
    console.log(translation);
}

if(input.length == 2 && +input[0] != 1 && +input[1] > 0){
    translation.push(ranslateTens(0), translateOnes(1))
    console.log(translation);
}


function translateHundreds(a){
    for(let i = 0; i <= tens.length; i++){
        if(+input[a] == i){
            translationHundreds += hundreds[i-1].name;
            return translationHundreds;
        }
    } 
}

if(input.length == 3 && +input[1] != 0 && +input[2] == 0){
    translation.push(translateHundreds(0), translateTens(1));
    console.log(translation);
}

if(input.length == 3 && +input[1] == 0 && input[2] > 0){
    translation.push(translateHundreds(0), translateOnes(2))
    console.log(translation);
}

if(input.length == 3 && +input[1] != 1 && +input[1] != 0 && input[2] > 0){
    translation.push(translateHundreds(0), translateTens(1), translateOnes(2));
    console.log(translation);
}

if(input.length == 3 && +input[1] == 1 && input[2] > 0){
    translation.push(translateHundreds(0), translateTeens(2))
    console.log(translation);
}

if(input.length == 3 && +input[1] == 0 && input[2] == 0){
    translation.push(translateHundreds(0))
    console.log(translation);
}

let lastChar = +input[input.length-1];
let teensChar = +input[input.length-2];


if(teensChar != 1 && lastChar == 1){
    translation.push("гривна");
}else if(teensChar != 1 && lastChar == 2 || lastChar == 3 || lastChar == 4){
    translation.push("гривны");
}else if(teensChar == 1){
    translation.push("гривен");
}else{
    translation.push("гривен");
}

function translationDisplay(){

    let fullTranslation = "";

    for(let i = 0; i < translation.length; i++){
        fullTranslation += translation[i] + " ";
    }

    return fullTranslation;
}

console.log(translationDisplay());















