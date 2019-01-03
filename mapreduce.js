 module.exports = function arrayMap(arr, fn, thisArg) {
    //let arrNew = [];
    return arr.reduce(function(accumulator, currentValue, index, arr){
    	accumulator.push(fn.call(thisArg, currentValue, index, arr));
    	return accumulator;
    }, []);
}

/*module.exports = function arrayMap(arr, fn, thisArg){
	let temp = [];
	let result = [];
	for(let i = 0; i < arr.length; i++){
		temp.push(arr[i]);
		temp.push(arr[i+1]);
		result[i] = temp.reduce(fn);
		temp.pop();
		temp.pop();
	}
	return result;
}
*/