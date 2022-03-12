let inputVal = document.getElementById("input-val")
let inputVals = document.getElementsByClassName("input-val")
let calcFeet = document.getElementById("calcfeet")
let calcMeters = document.getElementById("calcmeters")
let calcLiters = document.getElementById("calcliters")
let calcGallons = document.getElementById("calcgallons")
let calcKilos = document.getElementById("calckilos")
let calcPounds = document.getElementById("calcpounds")

function metersFeet(num) {
    return num * 3.28084
}

function feetMeters (num) {
    return num * 0.3048
}

function litersGallons (num) {
    return num * 0.264172
}

function gallonsLiters (num) {
    return num * 3.785412
}

function kilosPounds (num) {
    return num * 2.2
}

function poundsKilos (num) {
    return num * 0.45359237
}

function updateValues(input) {
    let num = Number(input)
    if (!num && num !== 0) {
        alert("please enter a valid number")
        inputVal.textContent = inputNum // here we are attempting to reset the values for each time we execute the calculate function
        return
    }
    inputNum = num
    inputVal.value = inputNum
    for (let elem of inputVals) {
        elem.textContent = inputNum
    }
}

function computedValues(num) {
    calcFeet.textContent = metersFeet(num).toFixed(3)
    calcMeters.textContent = feetMeters(num).toFixed(3)
    calcLiters.textContent = gallonsLiters(num).toFixed(3)
    calcGallons.textContent = litersGallons(num).toFixed(3)
    calcKilos.textContent = poundsKilos(num).toFixed(3)
    calcPounds.textContent = kilosPounds(num).toFixed(3)
}

let inputNum = ""
updateValues(inputNum)
computedValues(inputNum)

function calculate() {
    let input = inputVal.value
    updateValues(input)
    computedValues(inputNum)
}