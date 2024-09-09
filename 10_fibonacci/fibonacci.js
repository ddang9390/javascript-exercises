const fibonacci = function(num) {
    num = parseInt(num)
    if(num == 0){
        return 0;
    }
    if(num < 0){
        return "OOPS";
    }
    if(num < 2){
        return 1;
    }
    let numbers = [1, 1];
    let index = 1;

    while(index < num){
        numbers.push(numbers[index] + numbers[index-1]);
        index++;
    }
    return numbers[index-1];
};

// Do not edit below this line
module.exports = fibonacci;
