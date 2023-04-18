/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function showInput1() {                                                          Всплывающее меню для СЕЛЕКТА ФОРМЫ 1
//   var selectElement = document.getElementById("select1_id");
//   var otherInputElement = document.getElementById("input1_1_id");

//   if (selectElement.value === "option1_4") {
//     otherInputElement.style.display = "block";
//   } else {
//     otherInputElement.style.display = "none";
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function showInput2() {                                                          Всплывающее меню для СЕЛЕКТА ФОРМЫ 2
//   var selectElement = document.getElementById("select2_id");
//   var otherInputElement = document.getElementById("input2_1_id");

//   if (selectElement.value === "option2_8") {
//     otherInputElement.style.display = "block";
//   } else {
//     otherInputElement.style.display = "none";
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function submitForm() {
  // Отправляем данные формы на сервер
  const form = document.getElementById("form1_id");
  const formData = new FormData(form);
  const json = JSON.stringify(Object.fromEntries(formData));

  const url = button_id.getAttribute("data-target")


  const options = {
    method: 'POST',
    headers: {
      'X-Access-Key': '$2b$10$iXIjh1hGSGxNBVn8MrsqAeghR78Fle.G86.bQ.QduYOLenpu/F8Na',
      'X-Collection-Id': '643e6015c0e7653a05a6aa6d',
      'Content-Type': 'application/json'
    },
    body: json
  };

  fetch('https://api.example.com/data')
  .then(response => window.location.href = url)
  
  .catch(err => {
    console.error(err);
    window.location.href = url;
  });

  // Перенаправляем пользователя на другую страницу
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('popstate', function (event) {
  if (event.state && event.state.redirectUrl) {
    window.location.href = event.state.redirectUrl;
  }
});

function redirectOnUnload() {                        // Переход на URL после двух нажатий на стрелку назад
  var redirectUrl = 'https://adheart.com.br/trial'; // замените этот URL на нужный
  var currentState = { redirectUrl: redirectUrl };
  history.replaceState(currentState, '');
  setTimeout(function () {
    history.pushState(currentState, '');
  }, 0);
}

window.addEventListener('beforeunload', redirectOnUnload);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
