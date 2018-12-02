const axios = require('axios');

export default {
    getList() {
        return axios.get('https://dog.ceo/api/breeds/list');
    },
    getIMG(name) {
        let url = 'https://dog.ceo/api/breed/' + name + '/images/random';
        return axios.get(url);
    }
}