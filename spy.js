/* function Spy(target, method) {
    let count = 0;

    let called = return function(...args){

    }
    if(target[method]){
    	count++;
    }
    	return count;
    }
    
    module.exports = Spy*/

    function Spy(target, method) {
        var spy = {count: 0};

        var oldFunction = target[method];
        console.log(typeof(oldFunction));
        console.log(oldFunction);

        target[method] = function() {
            spy.count++;
            return oldFunction.apply(target, arguments);
        }
        return spy;
    }

    module.exports = Spy