module.exports = function reverse(n) {
    let num = n < 0 ? Math.abs(n) : n;

    let strNum = num.toString().split("").reverse().join("");
    let result = parseInt(strNum);

    return result;
};
