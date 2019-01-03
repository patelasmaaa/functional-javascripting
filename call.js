function duckCount() {
	/*return arguments.filter(item => {
		if(item.hasOwnProperty('quack')){
			return item;
		}
	});
*/
	let arr = [];
	let args = [...arguments];
	//console.log("Args: ", args)
	args.filter(item => {
		//console.log(item);
		//console.log(typeof(item));
		if(item.hasOwnProperty("quack"))
			arr.push(item);
		//console.log(arr);
		return arr;
	});
	return arr.length;
}    
    module.exports = duckCount

/*

function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }
    
    module.exports = duckCount*/
    
