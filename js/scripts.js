// Business Logic
const vowels = ["a","e","i","o","u"];

function vowelCounter(text) {
  let counter = 0;
  let textArray = text.toLowerCase().split('');
  console.log(textArray);
  for(i = 0; i < textArray.length; i++) {
      if(textArray.includes(vowels[i]))
      counter++;
    }
  return counter;
}
