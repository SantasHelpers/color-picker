// MOBX store
// colorStore.js
import {  extendObservable } from 'mobx';

class ColorStore {

  constructor () {
    extendObservable(this, {
      currentColor: '#eaf2f8',
      color1: '#eaf2f8',
      color2: '#eaf2f8',
      color3: '#eaf2f8',
      color4: '#eaf2f8',
      color5: '#eaf2f8',
    })

  }
 // MOBX mutates state directly in the store
 // good resource  http://www.robinwieruch.de/mobx-react/

}

const store = window.store = new ColorStore();
export default store;
export {ColorStore};