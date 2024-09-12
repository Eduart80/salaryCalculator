"use strict"
const a = document.querySelector('#calcSearchId')
const outputVal = document.querySelector('#placeResult')

function calcYear() {
    let oneH = a.value * 1910
    outputVal.innerHTML = oneH.toLocaleString()    
}
function reversCalc() {
    let oneH = a.value / 1910
    outputVal.innerHTML = oneH.toFixed(2)
}
function reset(){
    outputVal.innerHTML = ''
    a.value=''
}


