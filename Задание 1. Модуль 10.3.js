
let numToCheck = +prompt ("Введите значение");
//numToCheck++;
//numToCheck--;
// Вместо прибавления и отнимания от числа 1 лучше использовать унарный плюс (дописала его выше)
if (typeof numToCheck === "number" && !Number.isNaN(numToCheck)) // Вместо сравнивания значения с false можно просто воспользоваться логическим отрицанием (знак !), так код будет компактнее. Скобки между двумя частями логического оператора в данном случае также лишние.
{
	if (numToCheck % 2 === 0)
	{
	console.log("Чётное")
	}
	else
	{
	console.log("Нечётное")
	}
}
else
{
console.log("Упс, кажется, вы ошиблись")
};
