class Student {
    name = "";
    age = 0;
    constructor(naam) {
        this.name = naam;
    }
    print() {
        console.log(this.age, this.name);
    }
}
S1 = new Student("guvi");
S2 = new Student("love");
S1.print();
S2.print();