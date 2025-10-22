/*
 * Starter file
 */
(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * This init function is called when the window is loaded.
   * If these functions existed simply in the global context,
   * they are loaded before the DOM contents are loaded (by
   * virtue of the script tag being in the <head>).
   *
   * So, we need a function to be called on window load in order
   * to access and manipulate DOM elements.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    //
    // PART THREE
    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", handleReset);

    // PART FOUR
    const btn = document.querySelector("#encrypt-it");
    // handle the click
    btn.addEventListener("click", handleEncrypt);
  }

  const handleEncrypt = () => {
    const input = document.querySelector("#input-text");
    const output = document.querySelector("#result");
    output.innerHTML = shiftCipher(input.value);
  };

  const handleReset = () => {
    const input = document.querySelector("#input-text");

    // inputs don't have innerHTML property
    // Instead, they have value: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#value
    input.value = "";
  };

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  const shiftCipher = (text) => {
    // change to lower case to normalize
    text = text.toLowerCase();

    return text.split("").reduce((acc, char) => {
      if (char)
        if (char < "a" || char > "z") {
          // if the string is not a lowercase letter (thus a number, etc)
          return acc + char;

          // z loops to a
        } else if (char == "z") {
          return acc + "a";
        } else {
          // any other letter
          const code = char.charCodeAt(0);
          const nextLetter = String.fromCharCode(code + 1);

          return acc + nextLetter;
        }
    }, "");
  };
})();
