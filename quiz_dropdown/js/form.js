function showInput1() {
  var selectElement = document.getElementById("select1_id");
  var otherInputElement = document.getElementById("input1_1_id");

  if (selectElement.value === "option1_4") {
    otherInputElement.style.display = "block";
  } else {
    otherInputElement.style.display = "none";
  }
}

function showInput2() {
  var selectElement = document.getElementById("select2_id");
  var otherInputElement = document.getElementById("input2_1_id");

  if (selectElement.value === "option2_8") {
    otherInputElement.style.display = "block";
  } else {
    otherInputElement.style.display = "none";
  }
}

window.addEventListener('popstate', function (event) {
  if (event.state && event.state.redirectUrl) {
    window.location.href = event.state.redirectUrl;
  }
});

function redirectOnUnload() {
  var redirectUrl = 'https://youtube.com'; // замените этот URL на нужный
  var currentState = { redirectUrl: redirectUrl };
  history.replaceState(currentState, '');
  setTimeout(function () {
    history.pushState(currentState, '');
  }, 0);
}

window.addEventListener('beforeunload', redirectOnUnload);


// window.addEventListener('load', function () {
//   localStorage.setItem('redirect_url', 'https://youtube.com'); // замените этот URL на нужный
// });

// // Перенаправляем пользователя на нужную страницу, если в локальном хранилище есть соответствующее значение
// window.addEventListener('DOMContentLoaded', function () {
//   var redirectUrl = localStorage.getItem('redirect_url');
//   if (redirectUrl) {
//     localStorage.removeItem('redirect_url');
//     window.location.href = redirectUrl;
//   }
// });