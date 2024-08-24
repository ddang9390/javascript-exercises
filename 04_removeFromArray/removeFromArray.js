const removeFromArray = function (list, ...vals) {
    let answer = []
    list.forEach(val => {
        if (!vals.includes(val)) {
            answer.push(val)
        }
    });

    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
