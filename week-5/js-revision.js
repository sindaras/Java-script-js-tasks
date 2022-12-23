/*
------------------------------------ 1 Dalis ------------------------------------
    1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
    - name
    - surname
    - age
    - height
    - weight
    - sex
2. Panaudojant array.forEach:
- Atspausdinti kiekvieną elementą
- Atspausdinti kiekvieno elemento pilną vardą
- Atspausdinti kiekvieno elemento kūno masės indeksą
3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
    - kurių vardas ilgesnis nei 6 simboliai
- kurių svoris didesnis nei 80kg
- kurie aukštesni nei 185cm
4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
- ūgius
- svorius
- ūgius, svorius ir amžius : [{height, weight, age}, ...]
- KMI indeksus
- KMI indeksus ir amžius
5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
- svorių vidurkį
- ūgio vidurkį
------------------------------------ 2 Dalis ------------------------------------
    0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
    Person klasėje:
    - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
- sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg
2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
3. Atrinkti vaikus, su antsvoriu (KMI > 30)
4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]
 */

// part 1.1

const people = [
    {name: 'Elonas', surname: 'Stulpas', age: 22, height: 181, weight: 75, sex: 'male'},
    {name: 'Laura', surname: 'Lauriene', age: 20, height: 175, weight: 65, sex: 'female'},
    {name: 'Renaldas', surname: 'Reknosas', age: 45, height: 190, weight: 85, sex: 'male'},
    {name: 'Matas', surname: 'Bolda', age: 43, height: 180, weight: 90, sex: 'female'},
    {name: 'Minedas', surname: 'Milka', age: 35, height: 176, weight: 88, sex: 'male'},
    {name: 'Paulius', surname: 'Kovys', age: 75, height: 162, weight: 71, sex: 'male'},
    {name: 'Aidas', surname: 'Peila', age: 15, height: 185, weight: 79, sex: 'male'},
    {name: 'Povilas', surname: 'Smilga', age: 18, height: 155, weight: 60, sex: 'female'},
];

// part 1.2

people.forEach((person) => console.log(person));
people.forEach(({name, surname}) => console.log(`${name} ${surname}`));
people.forEach(({weight, height}) => console.log(weight / ((height / 100) ** 2)));

// part 1.3

const getLongNameOwners = people.filter(({name}) => name.length > 6);
const getHeavierThan80kgPerson = people.filter(({weight}) => weight > 80);
const getTallPeople = people.filter(({height}) => height > 185);

console.table(getLongNameOwners);
console.table(getHeavierThan80kgPerson);
console.table(getTallPeople);

// part 1.4

const heights = people.map(({height}) => height);
const weights = people.map(({weight}) => weight);
const arrayOfHeightsWeightsAges = people.map(({height, weight, age}) =>
    ({height, weight, age}));
const BMIs = people.map(({weight, height}) => weight / ((height / 100) ** 2));
const bmiIndexAndAge = people.map(({weight, height, age}) => {
    const bmiIndex = weight / ((height / 100) ** 2);
    return {
        bmiIndex: bmiIndex,
        age: age,
    };
});

console.log(heights);
console.log(weights);
console.log(arrayOfHeightsWeightsAges);
console.log(BMIs);
console.log(bmiIndexAndAge);

// part 1.5

const weightSum = people.reduce((prevSum, {weight}) => (prevSum + weight), 0);
const weightAvg = weightSum / people.length;

const heightSum = people.reduce((prevSum, {height}) => (prevSum + height), 0);
const heightAvg = heightSum / people.length;

console.log(weightAvg);
console.log(heightAvg);

// part 2.0

class Person {
    name;
    surname;
    age;
    height;
    weight;
    sex;

    constructor({name, surname, age, height, weight, sex}) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
    }

    getBMI() {
        return this.weight / ((this.height / 100) ** 2);
    }

    toString() {
        return `${this.name} ${this.surname}, age: ${this.age}, height: ${this.height}, weight: ${this.weight}, sex: ${this.sex}.`
    }
}

const newPeople = people.map(person => new Person(person));
console.table(newPeople);

// part 2.1

const womenUnder20AndWeightsLess70 = newPeople.filter(({age, weight, sex}) => age < 20 && weight < 70 && sex === 'female');
console.table(womenUnder20AndWeightsLess70);

// part 2.2

const menOlderThan25WithBMIUnder18andHalf = newPeople.filter((person) =>
    person.age > 25 && person.sex === 'male' && person.getBMI() < 18.5);

console.table(menOlderThan25WithBMIUnder18andHalf);

// part 2.3

const obeseKids = newPeople.filter((person) => person.age < 18 && person.getBMI() > 30);
console.table(obeseKids);

// part 2.4

const obeseOlderPeople = newPeople.filter((person) => person.age >= 65 && person.getBMI() > 30);
console.table(obeseOlderPeople);

// part 2.5

const notSoHealthyPeople = newPeople.filter((person) => person.getBMI() < 18.5 && person.getBMI() > 25);
console.table(notSoHealthyPeople);