// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: April 2022
// This file contains the JS functions for index.html
'use strict'

function algorithm() {
  // variable for height
  let height = parseFloat(document.getElementById("height").value)
  // variable for base edge
  let baseEdge = parseFloat(document.getElementById("base-edge").value)
  // calculates surface area
  let surfaceArea = (8 * baseEdge * height + 4 * (1 + Math.sqrt(2)) * baseEdge ** 2)
  // calculates the volume 
  let volume = (2 * (1 + Math.sqrt(2)) * baseEdge ** 2 * height)
  // prints out results
  document.getElementById('surface-area').innerHTML = "surface area = " + surfaceArea.toFixed(2)
  document.getElementById('volume').innerHTML = "volume = " + volume.toFixed(2)
}
