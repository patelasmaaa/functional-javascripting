module.exports = function(namespace) {
      	return function () {
		    var bindedLog = console.log.bind(null, namespace);
		    bindedLog.apply(null, Array.prototype.slice.call(arguments, 0));
		};
    }
    
