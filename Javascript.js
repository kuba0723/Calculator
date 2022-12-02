//fukcje ekranu
//funkcje przycisków
const BigString = document.querySelector("#bigNumber")
const SmallString = document.querySelector("#smallNumber")
let lastParameter = ""
const jeden = document.querySelector("#BTN1")
jeden.addEventListener("click", () => {
    if (BigString.textContent != "0") {
        BigString.textContent += "1"
    }
    else
        BigString.textContent = "1"
})
const dwa = document.querySelector("#BTN2")
dwa.addEventListener("click", () => {
    if (BigString.textContent != "0") {
        BigString.textContent += "2"
    }
    else
        BigString.textContent = "2"
})
const trzy = document.querySelector("#BTN3")
trzy.addEventListener("click", () => {
    if (BigString.textContent != "0") {
        BigString.textContent += "3"
    }
    else
        BigString.textContent = "3"
})
const cztery = document.querySelector("#BTN4")
cztery.addEventListener("click", () => {
    if (BigString.textContent != "0") {
        BigString.textContent += "4"
    }
    else {
        BigString.textContent = "4"
    }
})
const piec = document.querySelector("#BTN5")
piec.addEventListener("click", () => {
    if (BigString.textContent != "0") {
        BigString.textContent += "5"
    }
    else {
        BigString.textContent = "5"
    }
})
const szesc = document.querySelector("#BTN6")
szesc.addEventListener("click", () => {
    if (BigString.textContent != "0") {
        BigString.textContent += "6"
    }
    else {
        BigString.textContent = "6"
    }
})
const siedem = document.querySelector("#BTN7")
siedem.addEventListener("click", () => {
    if (BigString.textContent != "0") {
        BigString.textContent += "7"
    }
    else {
        BigString.textContent = "7"
    }
})
const osiem = document.querySelector("#BTN8")
osiem.addEventListener("click", () => {
    if (BigString.textContent != "0") {
        BigString.textContent += "8"
    }
    else {
        BigString.textContent = "8"
    }
})
const dziewiec = document.querySelector("#BTN9")
dziewiec.addEventListener("click", () => {
    if (BigString.textContent != "0") {
        BigString.textContent += "9"
    }
    else {
        BigString.textContent = "9"
    }
})
const zero = document.querySelector("#BTN0")
zero.addEventListener("click", () => {
    if (BigString.textContent != "0") {
        BigString.textContent += "0"
    }
    else {
        BigString.textContent = "0"
    }
})
const Procent = document.querySelector("#BTNProcent")
Procent.addEventListener("click", () => {

    if (SmallString.textContent == "0") {
        SmallString.textContent = BigString.textContent;
        BigString.textContent = "0"
        lastParameter = "%"
    }
    else if(lastParameter != ""){
        lastParameterequation(lastParameter);
        lastParameter = "%"
    }
})
const przecinek = document.querySelector("#BTNcomma")
przecinek.addEventListener("click", () => {
    if (BigString.textContent.includes(".") != true) {
        BigString.textContent += "."
    }
})
const plus = document.querySelector("#BTNPlus")
plus.addEventListener("click", () => {
    if (SmallString.textContent == "0") {
        SmallString.textContent = BigString.textContent;
        BigString.textContent = "0"
        lastParameter = "+"
    }
    else if(lastParameter != ""){
        lastParameterequation(lastParameter);
        lastParameter = "+"
    }
})

const minus = document.querySelector("#BTNMin")
minus.addEventListener("click", () => {
    if (SmallString.textContent == "0") {
        SmallString.textContent = + (parseFloat(BigString.textContent) - ((parseFloat(BigString.textContent) * 2)));
        BigString.textContent = "0"
        lastParameter = "-"
    }
    else if(lastParameter != ""){
        lastParameterequation(lastParameter);
        lastParameter = "-"
    }
})

const mnozenie = document.querySelector("#BTNMnożenie")
mnozenie.addEventListener("click", () => {
    if (SmallString.textContent == "0") {
        SmallString.textContent = + (parseFloat(BigString.textContent));
        BigString.textContent = "0"
        lastParameter = "*"
    }
    else if(lastParameter != ""){
        lastParameterequation(lastParameter);
        lastParameter = "*"
    }
})
const dzielenie = document.querySelector("#BTNDzielenie")
dzielenie.addEventListener("click", () => {
    if (SmallString.textContent == "0") {
        SmallString.textContent = + (parseFloat(BigString.textContent));
        BigString.textContent = "0"
        lastParameter = "/"
    }
    else if(lastParameter != ""){
        lastParameterequation(lastParameter);
        lastParameter = "/"
    }
})
const Clear = document.querySelector("#BTNclear")
Clear.addEventListener("click", () => {
    BigString.textContent = "0"
    SmallString.textContent = "0"
})

const Delete = document.querySelector("#BTNdelete")
Delete.addEventListener("click", () => {
    if (parseFloat(BigString.textContent) < 10) {
        BigString.textContent = "0"
    }
    else {
        BigString.textContent = BigString.textContent.replace(/\d$/, "")
    }
})

const Equal = document.querySelector("#BTNequal")
Equal.addEventListener("click", () => {
    console.log(lastParameter)
    lastParameterequation(lastParameter);
    }
)
function lastParameterequation(){
switch (lastParameter) {
    case "%":
        SmallString.textContent = ((SmallString.textContent / 100) * BigString.textContent);
        BigString.textContent = "0"
        lastParameter ="%"
        break;
    case "/":
        SmallString.textContent = (parseFloat(SmallString.textContent) / parseFloat(BigString.textContent));
        BigString.textContent = "0"
        lastParameter ="/"
        break;
    case "*":
        SmallString.textContent = (parseFloat(SmallString.textContent) * parseFloat(BigString.textContent));
        BigString.textContent = "0"
        lastParameter ="*"
        break;
    case "-":
        SmallString.textContent = (parseFloat(SmallString.textContent) - parseFloat(BigString.textContent));
        BigString.textContent = "0"
        lastParameter ="-"
        break;
    case "+":
        SmallString.textContent = (parseFloat(SmallString.textContent) + parseFloat(BigString.textContent));
        BigString.textContent = "0"
        lastParameter ="+"
        break;
}}