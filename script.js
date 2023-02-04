function seconds(total){
	alert(total/60);
}
//seconds(prompt("seconds",""));

function perimetr(side,count){
	alert(side*count);
}
//perimetr(prompt("Довжина сторони",""),prompt("Кількість сторони",""));

function fizzbuzz(n){
	for (var i = 1; i <= n; i++) {
		if(i%3 == 0 && i%5 == 0){
			console.log("fizzbuzz");
		}else if(i%5 == 0){
			console.log("buzz");
		}else if(i%3 == 0 ){
			console.log("fizz");
		}else{
			console.log(i);
		}
	}
}
//fizzbuzz(prompt("введіть ціле число","fizzbuzz"));

function calculate(a,b,c){
	alert((Number(a)+Number(b)+Number(c))/3);
}
calculate(prompt("calculate","перший"),prompt("calculate","другий"),prompt("calculate","третій"));