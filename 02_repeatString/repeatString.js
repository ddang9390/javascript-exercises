const repeatString = function (word, times) {
    if (times < 0) {
        return "ERROR";
    }
    if (times == 0) {
        return "";
    }
    let answer = word;
    for (let i = 0; i < times - 1; i++) {
        answer += word;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
