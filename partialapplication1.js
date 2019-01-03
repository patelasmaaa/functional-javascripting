var slice = Array.prototype.slice
    
    function logger(namespace) {
      	let args = [...arguments];
    	//console.log("Args: ", args);
    	//console.log("namespace: ", namespace);
		return function() {
			args.map(function(item){
				console.log(item, slice.call(arguments));
				return item;
			});
			//console.log(slice.call(arguments));
			//console.log(arguments);

			/*args.forEach(function(item){
				console.log(item, slice.call(arguments))
			})*/
		}

		//console.log.apply(console,logger(args), slice.call(arguments));    	

		//console.log(namespace)
    };
    
    module.exports = logger;

//Solution as given in workshop:

    /*var slice = Array.prototype.slice
    
    function logger(namespace) {
      return function(){
      	console.log.apply(console, [namespace].concat(slice.call(arguments)));
      }
    }
    
    module.exports = logger;
*/