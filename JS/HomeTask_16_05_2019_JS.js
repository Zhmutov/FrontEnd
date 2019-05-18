//Возраст!
console.log('Task1---------------------------------------');
var age = 16;
function YourAge(){
	if(age){
		if (age > 0 && age < 15){
			return 'Children';
		} else if ( age >= 15 && age < 21){
			return 'Teenager'
		}else if ( age >= 21 && age < 50){
			return 'Adult'
		}else if ( age >= 50 && age < 80){
			return 'Old man'
		}else if ( age >= 80 && age < 100){
			return 'Long-liver'
		}else if ( age >= 100){
			return 'Skeleton'
		} else {
			return 'Wrong age!'
		}
	}else {
		return 'Wrong age!'
	} 
	
}
console.log(YourAge());

console.log('Task2---------------------------------------');

//* - пирамида
var col = '10', star = '*', result = '';

if (col){
	for(i=0; i < col; i++){
		result = result + star;	//Используем конкатынацию для построения пирамиды
		console.log(result);	//Выводим символы на екран
	}
} else {
	console.log('Incorrect number of stars!');
}

console.log('Task3---------------------------------------');
//* - обратная пирамида
var /*col = '10',*/ star = '*', resultCol = '', maxCol = col;

if (col){
	for(ii=0; ii < col; ii++){
		for(j=maxCol; j > 0; j-- ){
			resultCol = resultCol + star; //Используем конкатынацию для построения обратной пирамиды
		}		
		console.log(resultCol);			  //Выводим символы на екран
		maxCol--;						  //-1 на максимальном количестви
		resultCol = '';					  //Обнуляем результат, чтобы снова использовать контактинацию
	}
} else {
	console.log('Incorrect number of stars!');
}