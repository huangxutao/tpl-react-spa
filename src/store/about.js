import { observable, action } from 'mobx';
import Ajax from '../helper/fetch';

class AboutStore {
    constructor () {
    
    }

    @action fetchData () {
        Ajax.get('/api/b.json').then((res) => {
            console.log('fetch data', res)
        })
    }
}

const aboutStore = new AboutStore();

export default aboutStore;
