function getShortMessages(messages){
	
	/*let result = [];

	result = messages.filter(function(element){
		//console.log("Stringgg element: " + element);
		//let res = element['message'].substring(0, 50);
		//console.log("res : " + res);
		result.push(element.message.length < 50);
		return result;
		
		//console.log("result:" + result);
	});
	//return res;
	return result.map(function(item){
		return item.message;
	});*/

	return messages.filter((element) => {
		return element.message.length < 50;
	}).map(function(element){
		return element.message;
	}); 
}

module.exports = getShortMessages;