# pig-latin

#### _Pig Latin Translator_

#### By _**Nicci Kaufman**_

## Technologies Used

* _HTML/CSS_
* _Javascript_


## Description

_igPay atinLay anslatorTray._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._


## Known Bugs

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

## Contact Information

_niccikaufman@gmail.

## Test-Driven Development (TDD) Documentation

Describe: vowelCounter();

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes multiple instances of the same vowel in a single word."
Code: vowelCounter("event");
Expected Output: 2