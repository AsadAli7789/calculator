let displayValue = '';

function appendCharacter(char) {
  displayValue += char;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}