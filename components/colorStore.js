// MOBX store
// colorStore.js
import {  extendObservable } from 'mobx';

class ColorStore {

  constructor () {
    extendObservable(this, {
      currentColor: null
    })

  }
 // MOBX mutates state directly in the store
 // good resource  http://www.robinwieruch.de/mobx-react/

}

const store = window.store = new ColorStore();
export default store;
export {ColorStore};