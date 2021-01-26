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
}
const carService = new CarService();
export default carService;