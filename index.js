const convertBtn = document.getElementById('convert-btn');
const inputEl = document.getElementById('input');
const lengthEl = document.getElementById('length-el');
const volumeEl = document.getElementById('volume-el');
const massEl = document.getElementById('mass-el');

const meterToFeet = 3.281
const feetToMeter = 0.3048
const literToGallon = 0.264
const gallonToLiter = 3.785
const kilogramToPound = 2.204
const poundToKilogram = 0.454

convertBtn.addEventListener('click', function(){
  let baseValue = inputEl.value;

  lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`
  volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`
  massEl.textContent = `${baseValue} kilos = ${(baseValue * kilogramToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilogram).toFixed(3)} kilos`
})
