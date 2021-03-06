const { map, filter } = require('rxjs/operators');

const classClick = document.getElementById('detailClick');
classClick.addEventListener('click', (event) => {
    if (event.detail === 3) console.log('tripleclick');
});

document.getElementById('classicClick').onclick = tripleClick();

function tripleClick() {
    let clickCount = 0;
    let timeout = null;

    function setUpTimer() {
        return setTimeout(() => {
            // Необязательно
            console.log("Click count:", clickCount);
            if (clickCount === 3) {
                console.log("Triple click");
            }
            timeout = null;
            clickCount = 0;
            // Время между кликами
        }, 250)
    }

    return () => {
        clickCount++;
        if (!timeout) {
            timeout = setUpTimer();
        } else {
            clearTimeout(timeout);
            timeout = setUpTimer();
        }
    }
}

