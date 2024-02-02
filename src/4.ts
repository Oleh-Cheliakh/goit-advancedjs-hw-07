class Key {
	private signature: number = Math.random();

	getSignature(): number {
		return this.signature;
	}
}

class Person {
	constructor(private key: Key) {
		this.key = key;
	}

	getKey(): number {
		return this.key.getSignature();
	}
}

abstract class House {
	door: boolean;
	key: Key;
	constructor(key: Key) {
		this.key = key;
	}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
