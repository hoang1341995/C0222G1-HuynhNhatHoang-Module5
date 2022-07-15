function fibonacci(count : number) {

    let total : number = 0;
    let number1 : number = 0;
    let number2 : number = 1;
    for (let i = 1; i <= count; i++) {
        total = number1 + number2;
        number1 = number2;
        number2 = total;
    }
    return total
}

console.log(fibonacci(10));