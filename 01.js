function square (n) {
    const sequence =  Math.sqrt(n);
    return sequence * sequence === n;
}

function sequenceFibonacci(number) {
    return square (5 * number * number + 4) || square (5 * number * number - 4);

}

const number = 13;

if (sequenceFibonacci(number)){
    console.log(`${number} pertence a sequância Fibonacci`);
} else {
    console.log(`${number} não pertence a sequância Fibonacci`);
}