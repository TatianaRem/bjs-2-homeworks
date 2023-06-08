"use strict"

function solveEquation(a, b, c) {
	let discriminant = b * b - 4 * a * c;
	let arr = [];

	if (discriminant < 0) {
		//корней в массиве нет
		return arr;
	} else if (discriminant === 0) {
		//корень один
		let root = -b / (2 * a);
		arr.push(root);
	} else {
		//два корня
		let sqrtDiscriminant = Math.sqrt(discriminant);
		let root1 = (-b + sqrtDiscriminant) / (2 * a);
		let root2 = (-b - sqrtDiscriminant) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	//Преобразование процентной ставки в диапазон от 0 до 1
	percent = percent / 100 / 12;

	//Тело кредита (сумма кредита - первоначальный взнос)
	let creditAmount = amount - contribution;

	//Расчет ежемесячного платежа
	let monthlyPayment = creditAmount * (percent + percent / (Math.pow(1 + percent, countMonths) - 1));

	//Общая сумма выплаты клиентом
	let totalPayment = monthlyPayment * countMonths;

	//Округление результата до двух значений после запятой
	totalPayment = Math.round(totalPayment * 100) / 100;

	return totalPayment;

}