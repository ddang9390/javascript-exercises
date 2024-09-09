const palindromes = function (word) {
    let reversed = "";
    for(let i = (word.length)-1; i >= 0; i--){
        reversed += (word.charAt(i));
    }
    let v1 = word.toLowerCase();
    let v2 = reversed.toLowerCase();

    v1 = v1.replace(/[^0-9a-z]/gi,'')
    v2 = v2.replace(/[^0-9a-z]/gi,'')

    return v1 == v2;

};

// Do not edit below this line
module.exports = palindromes;
