// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: April 2022
// This file contains the JS functions for index.html

function algorithm () {
  // variable for height
  let height = parseFloat(document.getElementById("height").value)
  // variable for base edge
  let baseEdge = parseFloat(document.getElementById("base-edge").value)
  // calculates surface area
  const SURFACE_AREA = (8*base-edge*height+4(1+Math.sqrt(2)a**2)
  // calculates the volume 
  const VOLUME = (2(1+Math.sqrt(2))base-edge**2*height)
  // prints out results
  document.getElementById('surface-area').innerHTML = "surface area = " + SURFACE_AREA.toFixed(2)
  document.getElementById('volume').innerHTML = "volume = " + VOLUME.toFixed(2)
}