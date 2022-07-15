function fibonacci(count : number) {

    let total : number = 0;
    let number1 : number = 0;
    let number2 : number = 1;
    let result : number = 0;
    for (let i = 1; i <= count; i++) {
        total = number1;
        number1 = total + number2;
        number2 = total;
        result += total;
    }
    return result;
}

console.log(fibonacci(10));