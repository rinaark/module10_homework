
let newArray = [1, 1, 3, 5, 6, 'word', false, 8, 0, 0];
let countEven = 0;
let countOdd = 0;
let countZero = 0;

if (newArray.length >= 1){
	for(let i = 0; i < newArray.length; i++){
		if(typeof(newArray[i]) === 'number' && !isNaN(newArray[i])){
			if (newArray[i] === 0) {
				countZero++;
			} else if(newArray[i] % 2 === 0){
				countEven++;
			} else{
				countOdd++;
			}
		}
	}
}	
console.log(`Кол-во чётных: ${countEven}, кол-во нечётных: ${countOdd}, кол-во нулей: ${countZero}`);

// Задача решена не совсем верно, т.к. не учтено значение NaN. Оно имеет тип number, поэтому проходит проверку на тип и ошибочно прибавляется к нечетным элементам. Чтобы правильно отсеять NaN, нужна специальная проверка с помощью функции isNaN. 
// Также нет необходимости выносить проверку на 0 в отдельный условный оператор. Можно сделать эту проверку в рамках уже существующего ответвления
// Выше ошибки исправила