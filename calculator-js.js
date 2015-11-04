/**
 * FILENAME:    calculator-js.js
 * DESCRIPTION: This is the javascript for codyschindler.com/fcc/calculator.
 * REQS:        jQuery
 * VERISON:     1.0.0
 * UPDATED:     2015-11-03
 * WRITTEN BY:  Cody Schindler (quiksand)
 * ORGANIZATION: n/a
 * CHANGELOG:  
 * 1.0.0 (2015-11-03): Creation
**/
//TODO: 
//div by 0 case
//using the keyboard case
//two operators in a row case
//fix git


$(document).ready(function(){
	var displayVar = "";
	var regOne = 0;
	var regTwo = 0;
	//var lastOperator;
	var currentOperator = 'DN';
	var lastKey = 0;

	function regOperate(){
		var result = 0;
		switch(currentOperator){
			case '/':
			//fix infinity case
				if(regTwo == 0){result = 0;}
				else{result = regOne / regTwo;}
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
			// case '=':
			// 	result = regOne % regTwo;
			// 	break;	
			default:
				result = regTwo;
		}
		//regTwo = 0;
		return result;
	}

	$(".num").click(function(){
		displayVar += $(this).text();
		$(".displayEntry").text(displayVar);
		$(".displayRegister").text($(".displayRegister").text() + $(this).text());
		regTwo = parseFloat(displayVar);
		lastKey = $(this).text();
		console.log(regOne, currentOperator, regTwo);
	}); //num.click()

	$(".operator").click(function(){
		if($.isNumeric(lastKey)){
			regOne = regOperate();
		}
		currentOperator = $(this).text();
		displayVar = regOne + " " + currentOperator + " ";
		console.log("displayVar: " + displayVar)
		$(".displayRegister").text(displayVar);
		displayVar = " ";
		$(".displayEntry").text(displayVar);
		console.log(regOne, currentOperator, regTwo);
		lastKey = $(this).text();


	}); //operator.click()

	$(".equal").click(function(){
		displayVar = regOne + " " + currentOperator + " "+ regTwo + " = ";
		$(".displayRegister").text(displayVar);
		if($.isNumeric(lastKey)){
			regOne = regOperate();
		}
		//currentOperator = $(this).text();
		//displayVar = regOne + " " + currentOperator + " "+ regTwo + " =";
		console.log("displayVar: " + displayVar)
		//$(".displayRegister").text(displayVar);
		displayVar = regOne;
		$(".displayEntry").text(displayVar);
		console.log(regOne, currentOperator, regTwo);
		lastKey = $(this).text();


	}); //equal.click()



}); //document.load()