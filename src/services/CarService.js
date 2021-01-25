
import http from '/BaseService.js'

class CarService {
    async getCars(){
        try {
            const response = await http.get('cars');
            console.log(response);
        }
        catch(error) {
            console.log(error);
        }
    }
}