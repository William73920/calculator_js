const result = document.getElementById("result");

function insert(num) {
  result.value += num;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  result.value = eval(result.value);
}
