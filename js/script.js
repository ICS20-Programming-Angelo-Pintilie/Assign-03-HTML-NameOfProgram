// Copyright (c) 2022 Angelo Pintilie All rights reserved
// Created by: Angelo Pintilie
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

 // This function converts Celsius to Fahrenheit.
function convertCelToFahr() {
  // get user input
  let height = parseFloat(document.getElementById('height').value)
  let baseEdge = parseFloat(document.getElementById('base-edge').value)

  // calculate the temperature in fahrenheit from celsius
  let volume = (2(1+Math.sqrt(2))base-edge**2*height)
  
  // display the results
  document.getElementById('volume').innerHTML = "the volume of the octagonal prism " + volume.toFixed(2) + "cm³"
  
}

// This function converts Fahrenheit to Celsius.

function convertFahrToCel() {
  // get user input
  let tempFahr = parseFloat(document.getElementById('fahr').value)


  // calculate the temperature in celsius from fahrenheit
  let tempCels = (tempFahr - 32.0) * (5/9) 
  
  // display the results
  document.getElementById('tempCels').innerHTML = "The temperature in Celsius is " + tempCels.toFixed(2) + " °C"

}