function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

//Добавление оценок, проверка сущестования свойств marks
Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks')) {
		this.marks.push(...marks)
	}

}

//Расчет среднего арифмитического оценок студента, проверка наличия оценок у студента
Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') && this.marks.length > 0) {
		return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
	}
	return 0;

}

//Исключение студента и установление причины исключения
Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;

}