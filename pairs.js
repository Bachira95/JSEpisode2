/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/



function pairs(names) {
  if (names==null)
  { const emptyArr=[]
    return emptyArr}
  else
  {
  let currentIndex = names.length;
  let tempValue, randomIndex;
    // While there remain elements to shuffle
    while ( 0 !== currentIndex ) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex =currentIndex-1;
        //swap 
        tempValue = names[currentIndex];
        names[currentIndex] = names[randomIndex];
        names[randomIndex] = tempValue;
    }
  let finalPairs = [];

for(let i = 0; i < names.length; i += 2)
{
  finalPairs.push(names.slice(i, i + 2));
}
return finalPairs;
  }
}

module.exports = pairs;

/**********************************************
* READ ME!!!!
*
* We've included this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
// Array.prototype.getRandom = function () {
//   return this.splice(Math.floor(Math.random()*this.length), 1)[0];
// }

console.log(pairs());
