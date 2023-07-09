'use strict'

class AlarmClock {
    //Выделение памяти для объекта
	constructor() {
		this.alarmCollection = []; //Свойство для хранения звонков
		this.intervalId = null;   //Свойство для хранения id таймера

	}

    //Добавление нового звонка в коллекцию существующих
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы')
		}

		if (this.alarmCollection.find(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

    //Удаление звонков по опредеенному времени
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

    //Возврат текущего времени в строковом формате
	getCurrentFormattedTime() {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();

		return `${hours}:${minutes}`;
	}

    //Запуск будильника
	start() {
		if (this.intervalId !== null) {
			return; //Программа не должна позволять создавать несколько интервалов
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach((alarm) => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			})
		}, 1000);
	}

    //Остановка выполнения интервала будильника
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

    //Сбрасывания возможности запуска всех звонков
	resetAllCalls() {
		this.alarmCollection.forEach((alarm) => alarm.canCall = true);
	}

    //Удаление всех звонков
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}