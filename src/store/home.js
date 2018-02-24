import { observable, action } from 'mobx';
import Ajax from '../helper/fetch';

class HomeStore {
    constructor () {
    
    }

    @action fetchData () {
        Ajax.get('/api/a.json').then((res) => {
            console.log('fetch data', res)
        })
    }
}

const homeStore = new HomeStore();

export default homeStore;
