import axios from 'axios'
const TOWN_REST_API_URL = 'http://localhost:8080/api/towns';

class TownService{
    getTowns(){
        return axios.get(TOWN_REST_API_URL);
    }
}

export default new TownService();