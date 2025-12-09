let input = document.getElementById("input");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

function prime() {

    let num = Number(input.value);

    if(num <= 1){
        output.textContent = "oops! 0 and 1 are not valid numbers."
        return;
    }

    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        output.textContent = num + " is a Prime Number!"
    } else {
        output.textContent = num + " is not a Prime Number!"
    }
}

btn.addEventListener("click", prime);
