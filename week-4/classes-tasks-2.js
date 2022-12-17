console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
    class Player {
        constructor(name, age, height, weight) {
            this.name = name;
            this.age = age;
            this.height = height;
            this.weight = weight;
        }

        getAge() {
            return `${this.name} is age ${this.age}`;
        }

        getHeight() {
            return `${this.name} is ${this.height}cm`;
        }

        getWeight() {
            return `${this.name} weighs ${this.weight}kg`;
        }
    }

    player1 = new Player('Patrick Mahomes', 24, 188, 104);
    player2 = new Player('Jimmy Garoppolo', 28, 188, 102);
    player3 = new Player('Julio Jones', 31, 191, 100);

    console.log(player1.getAge(), '<--expected result: Patrick Mahomes is age 24');
    console.log(player1.getHeight(), '<--expected result: Patrick Mahomes is 188cm');
    console.log(player1.getWeight(), '<--expected result: Patrick Mahomes weighs 104kg');

    console.log(player2.getAge(), '<--expected result: Jimmy Garoppolo is age 28');
    console.log(player2.getHeight(), '<--expected result: Jimmy Garoppolo is 188cm');
    console.log(player2.getWeight(), '<--expected result: Jimmy Garoppolo weighs 102kg');

    console.log(player3.getAge(), '<--expected result: Julio Jones is age 31');
    console.log(player3.getHeight(), '<--expected result: Julio Jones is 191cm');
    console.log(player3.getWeight(), '<--expected result: Julio Jones weighs 100kg');
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
    class Calculator {
        add = (num1, num2) => num1 + num2;

        subtract = (num1, num2) => num1 - num2;

        multiply = (num1, num2) => num1 * num2;

        divide = (num1, num2) => num1 / num2;
    }

    const calculator = new Calculator();
    console.log(calculator.add(5, 5), "<-- expected result: 10");
    console.log(calculator.add(20, 5), "<-- expected result: 25");
    console.log(calculator.subtract(30, 5), "<-- expected result: 25");
    console.log(calculator.subtract(100, 5), "<-- expected result: 95");
    console.log(calculator.multiply(5, 5), "<-- expected result: 25");
    console.log(calculator.multiply(100, 5), "<-- expected result: 500");
    console.log(calculator.divide(10, 5), "<-- expected result: 2");
    console.log(calculator.divide(100, 5), "<-- expected result: 20");
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
    class Employee {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.fullname = `${this.firstname} ${this.lastname}`;
            this.email = (`${this.firstname}.${this.lastname}@company.com`).toLowerCase();
        }
    }

    emp1 = new Employee("John", "Smith");
    emp2 = new Employee("Mary", "Sue");
    emp3 = new Employee("Antony", "Walker");
    emp4 = new Employee("Joshua", "Senoron");

    console.log(emp1.firstname, "<-- Expected result: John");
    console.log(emp1.lastname, "<-- Expected result: Smith");
    console.log(emp1.fullname, "<-- Expected result: John Smith");
    console.log(emp1.email, "<-- Expected result: john.smith@company.com");
    console.log(emp2.firstname, "<-- Expected result: Mary");
    console.log(emp2.lastname, "<-- Expected result: Sue");
    console.log(emp2.fullname, "<-- Expected result: Mary Sue");
    console.log(emp2.email, "<-- Expected result: mary.sue@company.com");
    console.log(emp3.firstname, "<-- Expected result: Antony");
    console.log(emp3.lastname, "<-- Expected result: Walker");
    console.log(emp3.fullname, "<-- Expected result: Antony Walker");
    console.log(emp3.email, "<-- Expected result: antony.walker@company.com");
    console.log(emp4.firstname, "<-- Expected result: Joshua");
    console.log(emp4.lastname, "<-- Expected result: Senoron");
    console.log(emp4.fullname, "<-- Expected result: Joshua Senoron");
    console.log(emp4.email, "<-- Expected result: joshua.senoconsole.log");
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        compareAge(other) {
            if (other.age > this.age) {
                return `${other.name} is older than me.`;
            } else if (other.age < this.age) {
                return `${other.name} is younger than me.`;
            } else {
                return `${other.name} is the same age as me.`;
            }
        }
    }

    p1 = new Person("Samuel", 24);
    p2 = new Person("Joel", 36);
    p3 = new Person("Lily", 24);

    console.log(p1.compareAge(p2), "<-- Expected result: Joel is older than me.");
    console.log(p1.compareAge(p3), "<-- Expected result: Lily is the same age as me.");

    console.log(p2.compareAge(p1), "<-- Expected result: Samuel is younger than me.");
    console.log(p2.compareAge(p3), "<-- Expected result: Lily is younger than me.");

    console.log(p3.compareAge(p1), "<-- Expected result: Samuel is the same age as me.");
    console.log(p3.compareAge(p2), "<-- Expected result: Joel is older than me.");
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
    class Circle {
        constructor(rad) {
            this.rad = rad;
        }

        getArea = () => Math.PI * this.rad ** 2;
        getPerimeter = () => 2 * Math.PI * this.rad;
    }

    let q = new Circle(4.44);
    console.log(q.getArea(), '<-- Expected result: 61.93210093580775');
    console.log(q.getPerimeter(), '<-- Expected result: 27.897342763877365');

    // for testing purpose:
    function round(number) {
        const factor = Math.pow(10, 5);

        return Math.round(number * factor) / factor;
    }

    let circo = new Circle(20);
    console.log(round(circo.getArea()), '<-- Expected result: 1256.63706');
    console.log(round(circo.getPerimeter()), '<-- Expected result: 125.66371');

    let circo1 = new Circle(2);
    console.log(round(circo1.getArea()), '<-- Expected result: 12.56637');
    console.log(round(circo1.getPerimeter()), '<-- Expected result: 12.56637');

    let circo2 = new Circle(4.4);
    console.log(round(circo2.getArea()), '<-- Expected result: 60.82123');
    console.log(round(circo2.getPerimeter()), '<-- Expected result: 27.64602');
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
    class Name {
        #fname;
        #lname;
        fullname;
        initials;

        constructor(fname, lname) {
            this.lname = lname;
            this.fname = fname;
            this.fullname = `${this.#fname} ${this.#lname}`
            this.initials = `${this.#fname.substr(0, 1)}.${this.#lname.substr(0, 1)}`;

        }


        set fname(name) {
            if (typeof name === 'string') {
                this.#fname = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
            } else console.error(`${name} must be string`);
        }

        get fname() {
            return this.#fname;
        }

        set lname(name) {
            if (typeof name === 'string') {
                this.#lname = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
            } else console.error(`${name} must be string`);
        }

        get lname() {
            return this.#lname;
        }

    }

    a1 = new Name("john", "SMITH")
    console.log(a1.fname, "<-- expected result: John")
    console.log(a1.lname, "<-- expected result: Smith")
    console.log(a1.fullname, "<-- expected result: John Smith")
    console.log(a1.initials, "<-- expected result: J.S")

    a2 = new Name("sARah", "fRolliE")
    console.log(a2.fname, "<-- expected result: Sarah")
    console.log(a2.lname, "<-- expected result: Frollie")
    console.log(a2.fullname, "<-- expected result: Sarah Frollie")
    console.log(a2.initials, "<-- expected result: S.F")
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
    class IceCream {
        constructor(flavor, numSprinkles) {
            this.flavor = flavor;
            this.numSprinkles = numSprinkles;
        }
    }

    function sweetestIceCream(arr) {
        let sweetSum = 0;
        for (const iceCream in arr) {
            let sweetness = 0;

            if (arr[iceCream].flavor === "Plain") {
                sweetness = 0 + arr[iceCream].numSprinkles;
            } else if (arr[iceCream].flavor === "Vanilla" || arr[iceCream].flavor === "ChocolateChip") {
                sweetness = 5 + arr[iceCream].numSprinkles;
            } else if (arr[iceCream].flavor === "Strawberry" || arr[iceCream].flavor === "Chocolate") {
                sweetness = 10 + arr[iceCream].numSprinkles;
            }

            if (sweetSum < sweetness) {
                sweetSum = sweetness;
            }
        }

        return sweetSum;
    }

    ice1 = new IceCream("Chocolate", 13);
    ice2 = new IceCream("Vanilla", 0);
    ice3 = new IceCream("Strawberry", 7);
    ice4 = new IceCream("Plain", 18);
    ice5 = new IceCream("ChocolateChip", 3);
    ice6 = new IceCream("Chocolate", 23);
    ice7 = new IceCream("Strawberry", 0);
    ice8 = new IceCream("Plain", 34);
    ice9 = new IceCream("Plain", 81);
    ice10 = new IceCream("Vanilla", 12);

    console.log(sweetestIceCream([ice1, ice2, ice3, ice4, ice5]), '<-- Expected result: 23');
    console.log(sweetestIceCream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]), '<-- Expected result: 34');
    console.log(sweetestIceCream([ice10, ice10, ice6, ice8, ice4]), '<-- Expected result: 34');
    console.log(sweetestIceCream([ice2, ice10, ice6, ice9, ice7]), '<-- Expected result: 81');
    console.log(sweetestIceCream([ice10, ice6, ice4, ice1, ice7, ice8, ice6]), '<-- Expected result: 34');
    console.log(sweetestIceCream([ice3, ice1]), '<-- Expected result: 23');
    console.log(sweetestIceCream([ice6, ice7, ice5, ice4, ice3]), '<-- Expected result: 33');
    console.log(sweetestIceCream([ice4, ice8, ice9]), '<-- Expected result: 81');
    console.log(sweetestIceCream([ice5, ice7]), '<-- Expected result: 10');

}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
    class OnesThreesNines {
        constructor(num) {
            this.ones = Math.floor(num / 1);
            this.threes = Math.floor(num / 3);
            this.nines = Math.floor(num / 9);
        }
    }

    let testVAr = new OnesThreesNines(25);
    console.log(testVAr.ones, '<-- Expected result: 25');
    console.log(testVAr.threes, '<-- Expected result: 8');
    console.log(testVAr.nines, '<-- Expected result: 2');
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
    class User {
        static userCount = 0;

        constructor(user) {
            User.userCount += 1;
            this.username = user;
        }
    }

    console.log(User.userCount, '<-- Expected userCount result: 0');

    const u1 = new User("johnsmith10");
    console.log(User.userCount, '<-- Expected userCount result: 1');
    console.log(u1.username, "<-- Expected created username: johnsmith10");


    const u2 = new User("marysue1989");
    console.log(User.userCount, '<-- Expected userCount result: 2');
    console.log(u2.username, "<-- Expected created username: marysue1989");

    const u3 = new User("milan_rodrick");
    console.log(User.userCount, '<-- Expected userCount result: 3');
    console.log(u3.username, "<-- Expected created username: milan_rodrick");

}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
    class Book {

        constructor(title, author) {
            this.title = title;
            this.author = author;
        }

        getTitle() {
            return `Title: ${this.title}`;
        }

        getAuthor() {
            return `Author: ${this.author}`;
        }
    }

    const PP = new Book('Pride and Prejudice', 'Jane Austen');
    const H = new Book('Hamlet', 'William Shakespeare');
    const WP = new Book('War and Peace', 'Leo Tolstoy');

    console.log(PP.title, "<-- Expected result: Pride and Prejudice")
    console.log(PP.author, "<-- Expected result: Jane Austen")
    console.log(PP.getTitle(), '<-- Expected result: Title: Pride and Prejudice')
    console.log(PP.getAuthor(), '<-- Expected result: Author: Jane Austen')

    console.log(H.title, "<-- Expected result: Hamlet")
    console.log(H.author, "<-- Expected result: William Shakespeare")
    console.log(H.getTitle(), '<-- Expected result: Title: Hamlet')
    console.log(H.getAuthor(), '<-- Expected result: Author: William Shakespeare')

    console.log(WP.title, "<-- Expected result: War and Peace")
    console.log(WP.author, "<-- Expected result: Leo Tolstoy")
    console.log(WP.getTitle(), '<-- Expected result: Title: War and Peace')
    console.log(WP.getAuthor(), '<-- Expected result: Author: Leo Tolstoy')
}
console.groupEnd();