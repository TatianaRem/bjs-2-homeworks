//Задача № 1 Кеширующий декоратор
function cachingDecoratorNew(func) {
	//Сохраняем данные в кеш
	const cache = [];

	function wrapper(...args) {
		const hash = md5(args);

		//Проверка есть ли hash для данных аргументов в кеше
		const objectInCache = cache.find((item) => item.hash === hash);
		if (objectInCache) {
			return "Из кэша: " + objectInCache.value;

			//Добавление объекта в кеш
		} else {
			const value = func(...args);
			cache.push({
				hash,
				value
			});

			//Объектов в кеше должно быть не больше 5, если больше, то удалить первый с начала
			if (cache.length > 5) {
				cache.shift();
			}
			return "Вычисляем: " + value;
		}
	}

	return wrapper;
}

//Задача № 2 Декоратор debounce с моментальным вызовом и подсчётом количества вызовов
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;

	function wrapper(...args) {
		wrapper.allCounts++;

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		if (!timeoutId) {
			wrapper.count++;
			func(args);
		}

		timeoutId = setTimeout(() => {
			wrapper.count++;
			func(args);
		}, delay);
	}

	//Хранение количества всех вызовов декоратора и количество вызова декорированной функции
	wrapper.allCounts = 0;
	wrapper.count = 0;

	return wrapper;
}