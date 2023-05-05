const counter = document.getElementById("counter");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");

let count = parseInt(localStorage.getItem("count")) || 0;

counter.textContent = count;

addBtn.addEventListener("click", () => {
    count += 1;
    counter.textContent = count;
    localStorage.setItem("count", count);
});

subtractBtn.addEventListener("click", () => {
    if (count > 0) {
        count -= 1;
        counter.textContent = count;
        localStorage.setItem("count", count);
    }
});