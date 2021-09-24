const results = document.getElementsByClassName('red');
const arrayElements = Array.prototype.slice.call(results)
arrayElements.forEach(element => element.style = 'color: blue;');