let newArray = ['one', 'two', 'three', 'four', 'fife', 'six'];
console.log(newArray.length);
newArray.forEach(function(item){ // Переменные index и array в цикле не используются, поэтому их можно не объявлять
	console.log(item);
});