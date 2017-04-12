// Copyright (c) 2017 Color My View Consulting. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

var yearRegex = /^(\d{4})$/;
var today = new Date();
var thisYear = today.getFullYear();

/** Convert a input field with a 4-digit year into an age
 * @param {element} e - the event
 */
function computeAge(e) {
  if (yearRegex.test(e.target.value)) {
    e.target.value = thisYear - e.target.value ;
  }
}

/**
 * Compute age in whole years when a 4-digit year is entered
 */
function registerAgeListener() {
  var inputElements = document.getElementsByTagName("input");
  for (let inputElement of inputElements) {
    if (inputElement.type === "text" && 
        inputElement.name.endsWith("Age")) {
      inputElement.addEventListener("input", computeAge)
    }
  }
}

// Setup event on text enter
registerAgeListener();


