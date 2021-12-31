/*
  Amazon Customer Reviews (example question)
  Amazon is building a way to help customers search reviews quicker by providing real-time suggestions to search
  terms when the customer starts typing. When given a minimum of two characters into the search field the system
  will suggest at most three keywords from the review word repository. As the customer continues to type in the reviews
  search bar the relevant keyword suggestions will update automatically.
  Write an algorith that will output a maximum of three keyword suggestions after each character is typed by the customer 
  in the search field.
  If there are more than three acceptable keywords, return the keywords that are first in alphabetical order.
  Only retun keyword suggestions after the customer has entered two characters.
  Keyword suggestions must start with the characters already typed Both the respository and the customerQuery should be
  compared in a case-insensitive way.
  Input 
  The input to the method/function consists of two arguments: repository, a list of unique strings representing the
  various keywords from the amazon review comment section;
  customerQuery, a string representing the full search query of the customer.
  Output
  Return a list of a list of strings in lower case, where each list represents the keyword suggestions made by the
  system as the customer types each character of the customerQuery. Assume the customer types characters in order
  without deleting or removing any characters. If an output is not possible, return an empty array([]).
  Example 
  Input: 
  repository = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad']
  customerQuery = 'mouse'
  output:
  ['mobile', 'moneypot', 'monitor']
  ['mouse', 'mousepad']
  ['mouse, 'mousepad']
  ['mouse, 'mousepad']
  Explanation 
  The chain of words that will generate in the search box will be mo, mou, mous, mouse
  and each line from output shows the suggestion of 'mo', 'mou','mous','mouse', respectively in each line.
  For the keyword suggestions made by the system that are generated for 'mo', the matches that will be generated are:
  ['mobile, 'mouse', 'moneypot','monitor','mousepad']
  Alphabetically, they will be reorderd to [mobile, moneypot, monitor, mouse, mousepad]
  Thus the keyword suggestions made by the system are [mobile, moneypot, monitor]
   * Complete the 'searchSuggestions' function below.
   *
   * The function is expected to return a 2D_STRING_ARRAY.
   * The function accepts following parameters:
   *  1. STRING_ARRAY repository
   *  2. STRING customerQuery
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
 * Complete the 'searchSuggestions' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY repository
 *  2. STRING customerQuery
 */

function searchSuggestions(repository, customerQuery) {
    // Write your code here
    let querySuggestions = [];
    let lastQuery = repository.map(x => x.toLowerCase()).sort();
    let inputString = customerQuery.toLowerCase();
    console.log('Repo: ' + lastQuery);
    console.log('Input: ' + inputString)
    for(let i = 1; i < customerQuery.length; i++) {
        const tempQuery = [];
        const text = customerQuery.substring(0, i+1);
        for(let j = 0; j < lastQuery.length; j++) {
            if(lastQuery[j].substring(0, i+1) == text && tempQuery.length < 3) {
                tempQuery.push(lastQuery[j])
            }
        }
        console.log(tempQuery);
        querySuggestions.push(tempQuery);
    }
    return querySuggestions;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const repositoryCount = parseInt(readLine().trim(), 10);

    let repository = [];

    for (let i = 0; i < repositoryCount; i++) {
        const repositoryItem = readLine();
        repository.push(repositoryItem);
    }

    const customerQuery = readLine();

    const result = searchSuggestions(repository, customerQuery);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();
}
