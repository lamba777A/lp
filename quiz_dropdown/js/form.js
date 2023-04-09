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