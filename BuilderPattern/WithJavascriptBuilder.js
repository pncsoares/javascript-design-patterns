class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, 
        {
            age, 
            phone = '111111111', // you can use defaults
            address 
        } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}


const address = new Address(4100, 'Example street');
let user = new User('Bob', { age: 10, address: new Address(4100, 'Example street') }); // the order of the fields does not matter

console.log(user);