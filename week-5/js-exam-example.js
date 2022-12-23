// 1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių:
//  brand,
//  model,
//  year,
//  color,
//  fuelTypes: []
//  price // eurais

class Car {
    brand;
    model;
    year;
    color;
    fuelType = [];
    price;

    constructor(brand, model, year, color, fuelType, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelType = fuelType;
        this.price = price;
    }

    getFuelType() {
        if (this.fuelType.length === 1) {
            return this.fuelType[0];
        }
            return `${this.fuelType[0]} / ${this.fuelType[1]}`;
    }

    convertToUSD() {

        return this.price * 1.03;
    }

}

// 2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų

const cars = [
    new Car('audi', 'A6', 2013, 'red', ['diesel'], 1000),
    new Car('audi', 'A8', 2015, 'silver', ['electric'], 50_000),
    new Car('bmw', 'i8', 2018, 'blue', ['petrol', 'electric'], 60_000),
    new Car('bmw', '335', 2018, 'black', ['petrol'], 10_000),
    new Car('toyota', 'camry', 2001, 'gold', ['petrol'], 1500),
    new Car('honda', 'crv', 2016, 'white', ['diesel'], 15_000),
    new Car('tata', 'nano', 2015, 'blue', ['electric'], 15_000),
    new Car('tesla', 'model s', 2020, 'brown', ['electric'], 40_000),
];


// 3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)
// kaip 'string'ą atskirtą '/'.

console.log(cars.map((car) => car.getFuelType()));
console.log('-------')

// 4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:
//  Tayota Corola - dysel/electric
//  Nisan Bajam - petrol/gas
//  Kanagi BaBa - uranus
// ...

// 5. Atrinkite tik elektrinius automobilius

const allElectricCars = cars.filter(({fuelType}) => fuelType.includes('electric'));
console.table(allElectricCars);
console.log('-------')

// 6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai

const newerDiesels = cars.filter(({year, fuelType}) =>
    year > 2016 &&
    fuelType.includes('petrol') &&
    fuelType[1] !== 'electric');

console.table(newerDiesels);
console.log('-------')

// 7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai

console.table(cars.filter(({brand, year, fuelType}) => brand === 'audi' && year >= 2012 && year < 2016 && !fuelType.includes('diesel')));
console.log('-------')

// 8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį

let allElectricCarsPriceSum = 0;

for (let i = 0; i <allElectricCars.length; i += 1) {
    allElectricCarsPriceSum += allElectricCars[i].price;
}

console.log('all electric cars price sum:', allElectricCarsPriceSum);
console.log('-------')

// 9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę
let newerDieselsAvgPrice = 0;

for (let i = 0; i < newerDiesels.length; i += 1) {
    newerDieselsAvgPrice += newerDiesels[i].price;
}

console.log('newer diesels average price:', newerDieselsAvgPrice / newerDiesels.length);
console.log('-------')


// 10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:
//  * brand,
//  * model,
//  * price, // kaina doleriais [Number]
//  * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą

const reformattedCars = cars.map(car => {
    return {
        brand: car.brand,
        model: car.model,
        price: car.convertToUSD(),
        fuelType: car.getFuelType()
    };
});

console.table(reformattedCars)