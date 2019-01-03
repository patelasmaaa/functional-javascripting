function reduce(arr, fn, initial) {
      return(function one(i, item){
      	if(i > arr.length){
      		return item;
      	}
      	return one(i+1, fn(item, arr[i], i, arr))
      }(0, initial));
    }
    
    module.exports = reduce
