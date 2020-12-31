
let X = true;
let Y = typeof(X);
switch(Y)
{
	case "number":
	console.log(`${X} - это число`);
	break;

	case "string":
	console.log(`${X} - это строка`);
	break;
	
	case "boolean":
	console.log(`${X} - это логический тип`);
	break;
	
	default:
	console.log(`Тип ${X} не определён`);
}
