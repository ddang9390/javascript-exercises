const sumAll = function (num1, num2) {
    if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    let answer = 0
    if (num2 > num1) {
        for (let i = num1; i <= num2; i++)
            answer += i;

    }
    if (num1 > num2) {
        for (let i = num2; i <= num1; i++)
            answer += i;
    }

    return answer
};

// Do not edit below this line
module.exports = sumAll;
