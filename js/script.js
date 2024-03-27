// TEST
// alert("ciao come va?")

// LOGICA
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // come prima condizione deve analizzare se i numeri sono divisibili per 3 e per 5 e se si stampa FizzBuzz
        console.log(i, "FizzBuzz");
    } else if (i % 3 === 0) { // analizza se divisibile per 3 e stampa Fizz
        console.log(i, "Fizz");
    } else if (i % 5 === 0) { // analizza se divisibile per 5 e stampa Buzz
        console.log(i, "Buzz")
    } else {
        console.log(i); // se non si verificano le condizioni precedenti stampa il numero
    }
}
// OUTPUT
