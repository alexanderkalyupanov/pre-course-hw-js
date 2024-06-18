let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passport23 = {};

for (let key in passportWithAddress) {
    passport23[key] = passportWithAddress[key]
}



passport23.city = "Bobryisk"
console.log(passportWithAddress.address.city)
console.log(passport23.city)
