
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
    async add(newCar) {
        const response = await http.post('cars', newCar);
        return response.data;
    }
    delete(carId) {
        return http.delete(`/cars/${carId}`);
    }
    async getById(carId) {
        const response = await http.get(`/cars/${carId}`);
        return response.data;
    }
    async update(carId) {
        const response = await http.get(`/cars/${carId}`);
        return response.data;
    }
}
const carService = new CarService();
export default carService;

// , data