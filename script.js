let $ = document;
let keyCode = $.getElementById("keyCode");
let keyElem = $.getElementById("key");
let locationElem = $.getElementById("location");
let whichElem = $.getElementById("which");
let codeElem = $.getElementById("code");

document.body.addEventListener("keydown", function (event) {
  event.preventDefault();
  starter.style.display = "none";
  heading.style.display = "flex";
  ascii.style.display = "flex";
  infos.style.display = "flex";

  keyCode.innerHTML = event.keyCode;
  keyElem.innerHTML = event.key;
  locationElem.innerHTML = event.location;
  whichElem.innerHTML = event.which;
  codeElem.innerHTML = event.code;
});
