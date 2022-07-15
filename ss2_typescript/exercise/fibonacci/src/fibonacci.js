function fibonacci(count) {
    var total = 0;
    var number1 = 0;
    var number2 = 1;
    for (var i = 1; i <= count; i++) {
        total = number1 + number2;
        number1 = number2;
        number2 = total;
    }
    return total;
}
console.log(fibonacci(10));
