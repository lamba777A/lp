// function showInput1() {                                                          Всплывающее меню для СЕЛЕКТА ФОРМЫ 1
//   var selectElement = document.getElementById("select1_id");
//   var otherInputElement = document.getElementById("input1_1_id");

//   if (selectElement.value === "option1_4") {
//     otherInputElement.style.display = "block";
//   } else {
//     otherInputElement.style.display = "none";
//   }
// }

// function showInput2() {                                                          Всплывающее меню для СЕЛЕКТА ФОРМЫ 2
//   var selectElement = document.getElementById("select2_id");
//   var otherInputElement = document.getElementById("input2_1_id");

//   if (selectElement.value === "option2_8") {
//     otherInputElement.style.display = "block";
//   } else {
//     otherInputElement.style.display = "none";
//   }
// }

function submitForm() {
  // Отправляем данные формы на сервер
  document.querySelector('form').submit();

  // Перенаправляем пользователя на другую страницу
  window.location.href = "https://adheart.me/register";
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