let button = document.getElementById('button')

button.addEventListener('click', () => {
    let inputValue = document.getElementById('myInput').value;

    let openBrackets = (inputValue.match(/\(/g) || []).length;
    let closeBrackets = (inputValue.match(/\)/g) || []).length;

    if (openBrackets === closeBrackets) {
        alert('Ochuvchi va yopuvchi qavslar soni teng');
    } else {
        alert('Ochuvchi va yopuvchi qavslar soni teng emas');
    }
})