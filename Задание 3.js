
let stroka = "Hello";
let newString = "";
	for (let i = stroka.length - 1; i >= 0; i--){
	newString += stroka[i];
	}
console.log(newString);

// Задание выполнено верно, но решить его можно было проще, не используя цикл: перевести строку в массив символов, перевернуть массив и собрать обратно в строку. Более короткий вариант решения написала ниже:

let reverseString = stroka.split('').reverse().join('')