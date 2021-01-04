
let newArray = ['one'];
let flag = true;
if (newArray.length > 1){
	for (let i = 0; i < newArray.length - 1; i++){
		if (newArray[i] !== newArray[i+1]){
			flag = false;
			break;
		}
	}
}
// Условный оператор в данном случае не имеет смысла, потому что в обоих случаях совершается одно и то же действие
// if (newArray.length <= 1){
console.log(flag);//}
// else {
// console.log(flag);
// };
