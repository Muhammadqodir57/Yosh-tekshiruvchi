let elInput = document.getElementById('input');
let elBtn = document.getElementById('btn');
let elResult = document.getElementById('result');

elBtn.addEventListener('click', () => {
    let inputValue = elInput.value

    if (inputValue <= 30) {
        elResult.textContent = 'Siz Yoshsiz'
    } else if (inputValue <= 60) {
        elResult.textContent = 'Siz Kattasiz'
    } else if (inputValue >= 90) {
        elResult.textContent = 'Siz Qarisiz'
    }
})
