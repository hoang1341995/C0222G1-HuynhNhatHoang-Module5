function fibonacci(count) {
    var total = 0;
    var number1 = 0;
    var number2 = 1;
    var result = 0;
    for (var i = 1; i <= count; i++) {
        total = number1;
        number1 = total + number2;
        number2 = total;
        result += total;
    }
    return result;
}
console.log(fibonacci(10));
