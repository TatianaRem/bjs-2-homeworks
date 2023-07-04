'use strict';

// Функция возвращает число, если все корректно 
function parseCount(value) {
	const result = parseFloat(value);
	if (isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result;
}

// Генерация ошибки, если ввод не является числом в десятичной сичтеме счисления
function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

//Конструктор принимает три стороны треугольника
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		//Если проверка на существование треугольника не проходит, то выбрасывается исключение
		if (this.a + this.b < this.c || this.b + this.c < a || this.a + this.c < b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	//Периметр треугольника
	get perimeter() {
		return this.a + this.b + this.c;
	}

	//Площадь треугольника
	get area() {
		const p = this.perimeter / 2;
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
	}
}

//При перехвате исключения возвращается объект с геттерами: area, perimeter, которые возвщают сроку с ошибкой
function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				const p = this.perimeter / 2;
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}