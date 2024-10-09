function add(int) {
    int.textContent = parseInt(int.textContent) + 1;
}

function reset(int) {
    int.textContent = 0;
}

function decrease(int) {
    // Parte I
    // int.textContent = parseInt(int.textContent) - 1;

    // Parte II
    if (parseInt(int.textContent) != 0) {
        int.textContent = parseInt(int.textContent) - 1;
    } else {
        int.textContent = 0;
    }
};

export {add, reset, decrease}