/* At Amazon's annual sale. employees are tasked with generating valid discount coupons for loyal customers. However, there are some used/invalid coupons in the mix and the challenge in this task is to determine whether a given discount coupon is valid or not.

The validity of a discount coupon is determined as follows:

An empty discount coupon is valid.
If a discount coupon A is valid, then a discount coupon C made by adding one character x to both the beginning of A and the end of A is also valid (i.e the discount coupon C = xAx is valid).
If two discount coupons A and B are vand, then the concatenation of B and A is also valid (i.e the coupons AB and BA are both valid).
Given n discount coupons, each coupon consisting of only lowercase English characters, where the ith discount coupon is denoted discounts[i], determine if each discount coupon is valid or not. A valid coupon is denoted by 1 in the answer may while an invalid coupon is denoted by 0.

Input

discounts: Array of discount coupons.
Output

Array of integers, a valid coupon is denoted by 1 and an invalid coupon is denoted by 0.

Examples

Example 1:

Input:

1discounts = ['abba', 'abca']
Output: [1, 0]

Explanation:

'abba' is valid and 'abca' is invalid.
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'findValidDiscountCoupons' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY discounts as parameter.
 */

function findValidDiscountCoupons(discounts) {
    // Write your code here
    let response = new Array(discounts.length).fill(0);
    for(let i = 0; i < discounts.length; i++) {
      if(discounts[i].length % 2 == 0) {
        if(discounts[i] == discounts[i].split('').reverse().join('')) response[i] = 1;
      }
    }
    return response;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const discountsCount = parseInt(readLine().trim(), 10);

    let discounts = [];

    for (let i = 0; i < discountsCount; i++) {
        const discountsItem = readLine();
        discounts.push(discountsItem);
    }

    const result = findValidDiscountCoupons(discounts);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
