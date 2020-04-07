import '../styles/styles.scss'
import 'lazysizes'

import Person from './modules/Person'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
 new MobileMenu();
 new StickyHeader();
let modal

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()

        if(typeof modal == "undefined"){
            import('./modules/Modal').then( x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)  
       
               } ).catch(()=> console.log('There was a problem')) 
        }else{
            modal.openTheModal()
        }
        
    })
})


if (module.hot) {
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