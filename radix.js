/** takes a number and a place and returns the digit in that decimal place
 * place is little-endian (0 is the ones place, 1 is the 10s place, and so on)
 */

function getDigit(num, place) {
    
}

/** takes an integer num and returns its number of digits */

function digitCount(num) {
    return Math.ceil(Math.log10(num));
}

/** takes an array of integers and returns the entry with the most digits */

function mostDigits() {
    
}

/** non-comparative sort for integers */

function radixSort() {
    
}

module.exports = { getDigit, digitCount, mostDigits, radixSort }