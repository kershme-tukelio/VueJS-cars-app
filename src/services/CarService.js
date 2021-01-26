import http from './BaseService';

class CarService {
    async getAll(){
        try {
            const response = await http.get('cars')    
            return response.data     
        } catch (error) {
            console.log(error)
        }
        
    }
    add(newCar) {
        return http.post('cars', newCar)
    }
}
const carService = new CarService();
export default carService;