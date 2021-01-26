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
}
const carService = new CarService();
export default carService;