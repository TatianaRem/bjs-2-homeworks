class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;

	}

	// Метод позволяет испорченное издание подклеить или улучшить его состояние
	fix() {
		this.state *= 1.5;
	}

	// Контроль состояния книг (нельзя улучшить новые и подклеивать уничтоженные)
	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}

	}

	// Чтение свойства state
	get state() {
		return this._state;
	}
}

// Отличается типом от базового печатного издания
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

// Создание классов для разных жанров произведений
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	//Добавение книги в хранилище
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	//Поиск книги по ключу (тип, автор, название, год выпуска)
	findBookBy(type, value) {
		for (const book of this.books) {
			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}

	//Запрос книги, если не найдена, то метод удаляет книгу из хранилища. Если найдена, то метод удаляет книгу из хранилища и возвращает ее
	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			const book = this.books[i];
			if (book.name === bookName) {
				this.books.splice(i, 1);
				return book;
			}
		}
		return null;
	}
}