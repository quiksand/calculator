/**
 * FILENAME:    calculator-js.js
 * DESCRIPTION: This is the javascript for codyschindler.com/fcc/calculator.
 * REQS:        jQuery
 * VERISON:     1.0.1
 * UPDATED:     2015-11-09
 * WRITTEN BY:  Cody Schindler (quiksand)
 * ORGANIZATION: n/a
 * CHANGELOG:  
 * 1.0.0 (2015-11-03): Creation
 * 1.0.1 (2015-11-09): Deployment
**/
//TODO: 
//case first = when on regOne causes "= 0" rather than "0 = 0"


$(document).ready(function(){
	var displayVar = "";
	var regOne = "";
	var regTwo = "";
	var currentOperator = "";
	var lastKey = 0;

	function regOperate(){
		var result = 0;
		switch(currentOperator){
			case '/':
				result = regOne / regTwo;
				break;
			case 'X':
				result = regOne * regTwo;
				break;
			case '+':
				result = regOne + regTwo;
				break;
			case '-':
				result = regOne - regTwo;
				break;
			case '%':
				result = regOne % regTwo;
				break;
			default:
				result = regTwo;
		}
		return result;
	}

	$(".num").click(function(){
		if(lastKey == "="){
			$(".displayRegister").text("");
			regOne = "";
		}
		//if(displayVar == "0"){$(".displayEntry").text("");}
		displayVar += $(this).text();
		$(".displayEntry").text(displayVar);
		//$(".displayRegister").text($(".displayRegister").text() + $(this).text());
		regTwo = parseFloat(displayVar);
		lastKey = $(this).text();
	}); //num.click()

	$(".operator").click(function(){

		if($.isNumeric(lastKey)){
			regOne = regOperate();
		}
		currentOperator = $(this).text();
		displayVar = regOne + " " + currentOperator + " ";
		$(".displayRegister").text(displayVar);
		displayVar = "";

		if(lastKey == "="){displayVar = regOne;}
		$(".displayEntry").text(displayVar);
		lastKey = $(this).text();
		displayVar = "";
		console.log(lastKey);

	}); //operator.click()





	$(".equal").click(function(){
		console.log(regOne, currentOperator, regTwo);
		var tempp = $(".displayEntry").text();
		displayVar = regOne + " " + currentOperator + " " + regTwo + " = ";

		console.log("regOne: "+regOne);
 		if(lastKey == "X"){
 			displayVar = regOne + " = ";}
 		else if(lastKey == "/"){
 			displayVar = regOne + " = ";}
 		else if(lastKey == "+"){
 			displayVar = regOne + " = ";}
 		else if(lastKey == "-"){
 			displayVar = regOne + " = ";}
 		else if(lastKey == "%"){
 			displayVar = regOne + " = ";}
 		else if(lastKey == "="){
 			displayVar = regOne + " = ";
 			console.log("hey");
 		}
		// if(lastKey == "="){displayVar = tempp + " = ";}
		$(".displayRegister").text(displayVar);
		if($.isNumeric(lastKey)){
			regOne = regOperate();
		}
		currentOperator = $(this).text();
		displayVar = regOne == "" ? "0" : regOne;
		$(".displayEntry").text(displayVar);
		lastKey = "=";
		displayVar = "";

	}); //equal.click()


	$(".ac").click(function(){
		$(".displayEntry").text("0");
		$(".displayRegister").text("");
		displayVar = "";
		regOne = "";
		regTwo = "";
		lastKey = 0;
		currentOperator = "";
	}); //ac.click()

	$(".ce").click(function(){
		displayVar = "";
		$(".displayEntry").text(displayVar);
	}); //ce.click()

	$(document).keypress(function(k){
		switch(k.which){
			case 13:
				$(".equal").trigger("click");
				break;
			case 37:
				$(".modulo").trigger("click");
				break;
			case 42:
				$(".multiplication").trigger("click");
				break;
			case 43:
				$(".plus").trigger("click");
				break;
			case 45:
				$(".minus").trigger("click");
				break;
			case 46:
				$(".period").trigger("click");
				break;
			case 47:
				$(".division").trigger("click");
				break;
			case 48:
				$(".zero").trigger("click");
				break;
			case 49:
				$(".one").trigger("click");
				break;
			case 50:
				$(".two").trigger("click");
				break;
			case 51:
				$(".three").trigger("click");
				break;
			case 52:
				$(".four").trigger("click");
				break;
			case 53:
				$(".five").trigger("click");
				break;
			case 54:
				$(".six").trigger("click");
				break;
			case 55:
				$(".seven").trigger("click");
				break;
			case 56:
				$(".eight").trigger("click");
				break;
			case 57:
				$(".nine").trigger("click");
				break;			
			case 61:
				$(".equal").trigger("click");
				break;
			case 92:
				$(".ce").trigger("click");
				break;
			case 96:
				$(".ac").trigger("click");
				break;
			default:
				break;
		}
		console.log(k.which);
	}); //keypress function

}); //document.load()