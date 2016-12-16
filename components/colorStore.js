// MOBX store
// colorStore.js
import { extendObservable } from 'mobx';

class ColorStore {

 // MOBX mutates state directly in the store
 // good resource  http://www.robinwieruch.de/mobx-react/
  constructor() {
      extendObservable(this, {
        currentColor: '#eaf2f8',
        color1: '#eaf2f8',
        color2: '#eaf2f8',
        color3: '#eaf2f8',
        color4: '#eaf2f8',
        color5: '#eaf2f8',
        complimentary: ['#24E2E2', '#D82ED5'],
        sideBarBaseColor: '#eaf2f8',

        triad: ['#24E2E2', '#D82ED5', '#D8452E'],
        tetrad: ['#2ED0D8', '#D0662E', '#89D02E',
        '#BA2ED0'],
        monochrome: ['#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#CD5C5D', '#F08081', '#FA8073', '#E9967B', '#FFA07B' ],
        analagous: ['#24E2E2', '#80E6CC', '#0BE5AD'],
        currentFamily: {
          color1: '#CD5C5C',
          color2: '#F08080',
          color3: '#80E6CC',
          color4: '#0BE5AD',
          color5: '#24E2E2'
        }
      })
    }
    // MOBX mutates state directly in the store
    // good resource  http://www.robinwieruch.de/mobx-react/
}

const store = window.store = new ColorStore();
export default store;
export { ColorStore };
