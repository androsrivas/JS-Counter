import {add, reset, decrease} from './counter.js'

const int = document.getElementById("number");
const btnDecrese = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnAdd = document.getElementById("add");

btnAdd.addEventListener("click", ()=> add(int));
btnReset.addEventListener("click", ()=> reset(int));
btnDecrese.addEventListener("click", ()=> decrease(int));
