/*
function Person(fullName, favColor){
    this.name = fullName;
    this.favourateColor = favColor;
    this.greet = function(){
        console.log(`My name is ${fullName} and my favourateColor is ${favColor}` )
    }
}
export default Person;
*/
class Person {
    constructor(name, favorateColor){
    this.name = name;
    this.favorateColor = favorateColor;
    }
    greet(){
        console.log(`My name is ${this.name} and my favourateColor is ${this.favorateColor}` )
    }
}
export default Person;
