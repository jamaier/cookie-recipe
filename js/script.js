window.onload = function () {

document.querySelector(".switch-dark").onclick = function() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
};

document.querySelector(".switch-light").onclick = function() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
};
};

// document.querySelector('.switch-light').addEventListener('click', function() {
//   document.body.style.backgroundColor = 'white';
// });

// document.querySelector('.switch-dark').addEventListener('click', function() {
//   document.body.style.backgroundColor = 'gray';
// });