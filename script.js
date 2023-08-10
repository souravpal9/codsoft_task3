function appendToResult(value) {
  document.getElementById('result').value += value;
}

function calculateResult() {
  let result = document.getElementById('result').value;

  // Handle percentage calculation
  result = result.replace(/%/g, '/100*');

  try {
    const calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}

function backspace() {
  const result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}
