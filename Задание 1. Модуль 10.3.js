
let numToCheck = prompt ("Введите значение");
numToCheck++;
numToCheck--;
if ((typeof numToCheck === "number") && (Number.isNaN(numToCheck) === false))
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
