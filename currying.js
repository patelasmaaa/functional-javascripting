function curryN(fn, n) {
    	
    	let n2 = n || fn.length;
    	return function curry(arg){
    		if (n2<=1){
    			return fn(arg);
    		}
    		return curryN(fn.bind(this, arg), n2-1);
    	}
    	/*console.log(fn.length);
    	if(!n){
    		return function fn(arg);
    	}
    	else{
    		return function curryN(arg){
    			return function fn(arg)
    		}
    	}*/
    }
    
    module.exports = curryN;