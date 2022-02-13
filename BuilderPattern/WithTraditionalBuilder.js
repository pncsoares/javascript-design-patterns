class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

class UserBuilder {
    constructor(name) {
        this.name = new User(name);
    }

    setAge(age) {
        this.user.age = age;
        return this;
    }
    
    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }

    setAddress(address) {
        this.user.address = address;
        return this;
    }

    build() {
        return this.user;
    }
}

let address = new Address(4100, 'Example street');
let user = new UserBuilder('Bob').setAge(10)
                                 .setPhone('111111111')
                                 .setAddress(address)
                                 .build();

console.log(user);