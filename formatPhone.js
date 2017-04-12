// Copyright (c) 2017 Color My View Consulting. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var phoneRegex = /(\d{3})[- ]?(\d{3})[- ]?(\d{4})/;

/** Format phone as (123) 456-7890
 * @param {element} phoneElement - Search term for Google Image search.
 */
function formatPhoneInput(phoneElement) {
  if (phoneRegex.test(phoneElement.value)) {
    // phoneElement.value = phoneElement.value.replace(phoneRegex, "(123) 456-7890");
    phoneElement.value = phoneElement.value.replace(phoneRegex, "($1) $2-$3");
  }
}

/**
 * Find and format all phone elements
 */
function formatAllPhoneNumberElements() {
  var inputElements = document.getElementsByTagName("input");
  for (let inputElement of inputElements) {
    if (inputElement.type === "text" && 
        (inputElement.name.endsWith("Phone") || inputElement.name.endsWith("Fax"))) {
      formatPhoneInput(inputElement);
    }
  }
}

formatAllPhoneNumberElements();


