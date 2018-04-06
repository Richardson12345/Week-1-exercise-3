var word = 'JavaScript';
var second = ' is';
var third = ' awesome';
var fourth = ' and';
var fifth = ' I';
var sixth = ' love';
var seventh = ' it!';

console.log(word + second + third + fourth + fifth + sixth + seventh);
//part 1
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = 'javascipt'; // do your own!
var thirdWord = 'is';  // do your own!
var fourthWord = 'so'; // do your own!
var fifthWord = 'cool'; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
//part2
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = 'JavaScript'; // do your own!
var thirdWord = 'is'; // do your own!
var fourthWord = 'so'; // do your own!
var fifthWord = 'cool'; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
//part 3
var word = 'wow JavaScript is so cool';
var firstWord = word.substring(0, 3);
var secondWord = 'JavaScript'; // do your own!
var thirdWord = 'is'; // do your own!
var fourthWord = 'so'; // do your own!
var fifthWord = 'cool'; // do your own!

firstWordLength = firstWord.length ;
secondWordLength = secondWord.length ;
thirdWordLength = thirdWord.length ;
fourthWordLength = fourthWord.length ;
fifthWordLength = fifthWord.length ;

console.log('first Word: ' + firstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
//part 4