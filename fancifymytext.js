// First part of assignment:
// const button = document.querySelector("#biggerbtn");
// btn.addEventListener("click", () => {
//   alert("Hello, world!");
// });

const biggerBtn = () => {
  const inputElem = document.getElementById("input");
  // alert("Hello Wold!");
  inputElem.style.fontSize = "24pt";
};

const radioHandler = () => {
  const inputElem = document.getElementById("input");
  // have to put the access inside the function so that our refence is called
  // after DOM loaded
  const shmancyRadio = document.getElementById("FancyShmancy");
  if (shmancyRadio.checked) {
    alert("Fancy Shmancy alert");
    inputElem.style.fontWeight = "bold";
    inputElem.style.color = "blue";
    inputElem.style.textDecoration = "underline";
  } else {
    alert("Boring Betty alert");
    // undo all fancification
    inputElem.style.fontWeight = "normal";
    inputElem.style.color = "black";
    inputElem.style.textDecoration = "none";
  }
};
const mooBtn = () => {
  const inputElem = document.getElementById("input");
  // uppercase
  inputElem.value = inputElem.value.toUpperCase();

  // Add MOO to the end:
  const lines = inputElem.value.split(".");

  // use some functional programming to create a new array from the old one
  const mooified = lines.map((l) => {
    // split by words
    const words = l.trim().split(" ");
    // add "-Moo" to the last one
    words[words.length - 1] = words[words.length - 1] + "-Moo";

    // return an intact line once again
    return words.join(" ");
  });

  // join all the lines with a period once again + add a space again (it got lost
  // in the trim)
  const newLines = mooified.join(". ");

  // set the input value to that
  inputElem.value = newLines;
};
