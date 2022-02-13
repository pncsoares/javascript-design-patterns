class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, age, phone, address) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

// if we need to fill just the address, we need to pass 2x undefined
const address = new Address(4100, 'Example street');
const user = new User('Bob', undefined, undefined, address);

console.log(user);