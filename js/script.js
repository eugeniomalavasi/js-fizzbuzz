// TEST
// alert("ciao come va?")
for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i, "Fizz");
    } else if (i % 5 === 0) {
        console.log(i, "Buzz")
    } else {
        console.log(i);
    }
}


// se i è divisibile per 3 allora fai Fizz
// se i è divisibile per 5 allora fai Buzz
// se i è divisibile per 3 e per 5 fai FizzBuzz ma non fare 