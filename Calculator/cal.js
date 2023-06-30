let result = document.getElementById('result');

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function performOperation(operation) {
  result.value += operation;
}
