function generateFizzBuzz() {
    let outputDiv = document.getElementById("output");
    let startInput = document.getElementById("start");
    let endInput = document.getElementById("end");
    let errorDiv = document.getElementById("error");

    let start = parseInt(startInput.value);
    let end = parseInt(endInput.value);

    if (isNaN(start) || isNaN(end) || start > end) {
        errorDiv.innerHTML = "Veuillez entrer des nombres valides avec un début inférieur à la fin.";
        return;
    }

    errorDiv.innerHTML = ""; 
    outputDiv.innerHTML = ""; 

    for (let i = start; i <= end; i++) {
        let element = document.createElement("p"); 
        
        if (i % 3 === 0 && i % 5 === 0) {
            element.innerHTML = "FizzBuzz";
            element.classList.add("fizzbuzz");
        } else if (i % 3 === 0) {
            element.innerHTML = "Fizz";
            element.classList.add("fizz");
        } else if (i % 5 === 0) {
            element.innerHTML = "Buzz";
            element.classList.add("buzz");
        } else {
            element.innerHTML = i;
        }

        outputDiv.appendChild(element);
    }
}