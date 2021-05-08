import axios from 'axios'
const TOWN_REST_API_URL = 'http://localhost:8080/api/towns';

class TownService{
     getTowns(){
        return axios.get(TOWN_REST_API_URL);
    }

    getFamousForFood(){
        return axios.get('http://localhost:8080/api/famousforfood');
    }

    getFamousForMoma(){
        return axios.get('http://localhost:8080/api/famousformoma');
    }

    getFamousForFoodAndBeer(){
        return axios.get('http://localhost:8080/api/famousforfoodandbeer');
    }

    getFamousForNotConsistingFoodAndBeer(){
        return axios.get('http://localhost:8080/api/famousfornotfoodandbeer');
    }

    getMayorParty(){
        return axios.get('http://localhost:8080/api/mayorparty');
    }
}

export default new TownService();