
let newArray = [1, 1, 3, 5, 6, 'word', false, 8, 0, 0];
let countEven = 0;
let countOdd = 0;
let countZero = 0;

if (newArray.length >= 1){
	for(let i = 0; i < newArray.length; i++){
		if((typeof(newArray[i]) === 'number') && (newArray[i] !== 0)){
			if(newArray[i] % 2 === 0){
					countEven++;
				}
			else{
				countOdd++;
			}
		}
		if((typeof(newArray[i]) === 'number') && (newArray[i] === 0)){
				countZero++;
		}
	}
}	
console.log(`Кол-во чётных: ${countEven}, кол-во нечётных: ${countOdd}, кол-во нулей: ${countZero}`);