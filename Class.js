//class  Class1 {
//    constructor(initValue) {
//        this.classprop=initValue;
//    }
//    method1 (){
//        console.log("method called");
//    }
//    getClassProp(){
//        console.log("Class property is ->",this.classprop);
//    }
//}
//const  obj = new Class1("initValue");
//obj.method1();
//obj.getClassProp();

//Try to call another class method from one class

//class One {
 //   write(){
 //       console.log("Yes! I did!");
 //   }
//}

//class Two {
//    constructor() {
//        this.one = new One();
//    }

//    tryingMethod(){
//        this.one.write();
//    }
//}

//var x = new Two();
//x.tryingMethod();

//anohther exampale
//class Mammal {
//    constructor(name) {
//        this.name = name;
//    }
//    eats() {
//        return `${this.name} eats Food`;
 //   }
//}

//class Dog extends Mammal {
//    constructor(name, owner) {
//        super(name);
//        this.owner = owner;
//    }
//    eats() {
//        return `${this.name} eats Chicken`;
 //   }
//}

//let myDog = new Dog("Spot", "John");
//console.log(myDog.eats());

//Extend the class
//class DateFormatter extends Date {

//    getFormattedDate() {
//        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//        return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
//    }

//}

//console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate())

//spread operator in javascript
 //function sum(x,y,z){
 //   return x+y+z;
// }
// const number = [1,2,3];

//console.log(sum(...number));
//console.log(sum.apply(null,number));

// This is just another exampale
//function sum(a,b,c){
//    return a*b*c;
//}
//  const number = [2,8,3];
//console.log(sum(...number));
//console.log(sum.apply(null,number));
