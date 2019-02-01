/*function User(value) {
	this.name = value.trim();
}
User.prototype.sayHi = function() {
	alert(`Hi, my name's ${this.name}`);
}*/ //ES5

class User {
	constructor(value) {
		this.name = value.trim();
	}

	sayHi() {
		alert(`Hi, my name's ${this.name}!`);
	}
}

 export default class Admin extends User{ //класс Админ расширяет класс Пользователь
	constructor(firstname, lastname) {
		super(firstname); //вызываем параметр для класса Пользователь
		this.lastname = lastname.trim();
	}

	getName() {
		return this.name;
	}

	setName(value) {
		if (!value) return;
		this.name = value;
	}
}