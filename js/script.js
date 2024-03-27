// TEST
// alert("ciao come va?")

// LOGICA

for (let i = 1; i <= 100; i++) {
    let text;  
    if (i % 3 === 0 && i % 5 === 0) { // come prima condizione deve analizzare se i numeri sono divisibili per 3 e per 5 e se si stampa FizzBuzz
        text = "FizzBuzz";
        let bgClass = "fizzbuzz";
    } else if (i % 3 === 0) { // analizza se divisibile per 3 e stampa Fizz
        text = "Fizz";
        bgClass = "fizz";
    } else if (i % 5 === 0) { // analizza se divisibile per 5 e stampa Buzz
        text = "Buzz";
        bgClass = "buzz";
    } else {
        text = i;
        bgClass = "number";
    }
    // OUTPUT
    const rowElement = document.querySelector(".container")
    const boxElem = document.createElement("div");
    boxElem.innerHTML = text;
    boxElem.classList.add("square")
    boxElem.classList.add(bgClass)
    rowElement.append(boxElem)

}
