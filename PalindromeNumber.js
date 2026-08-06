function isPalindrome(num) {
    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }
    return original === reverse;
}
//Test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
