import '../styles/styles.scss'
import Person from './modules/Person'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();


if (module.hot){
    module.hot.accept()
}








/* EXERCISE LESSON 39-40 
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
*/