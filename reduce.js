/*function countWords(inputWords) {
	
 return inputWords.reduce(function(count, word) {
	  	//console.log(count+"   "+word)
	  	count[word] = ++count[word] || 1;
	  	return count
	  }, {})

    }
    
    module.exports = countWords
*/

function countWords(inputWords) {
	//let count = 0;
	return inputWords.reduce(function(accumulator, currentValue) {
		if(accumulator[currentValue]){
			++accumulator[currentValue];
		}
		else{
			accumulator[currentValue] = 1;
		}
		//accumulator = count;
		return accumulator;
	}, {});

}

module.exports = countWords;


/*function countWords(inputWords) {
	for(let i=0; i<inputWords.length; i++){
		for(let j=0; ; j++)
	}
}

module.exports = countWords */