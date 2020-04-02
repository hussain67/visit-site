import '../styles/styles.scss'
import Person from './modules/Person'
if (module.hot){
    module.hot.accept()
}

class Adult extends Person{
    payTaxes(){
        console.log(this.name + 'pay zero tex')
    }
}
let shahid = new Person('shahid', 'blue');
console.log(shahid.greet());
let hussain = new Adult('hussain', 'Green')
hussain.greet();
hussain.payTaxes();
