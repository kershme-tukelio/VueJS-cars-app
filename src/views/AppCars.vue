<template>
  <div>
      <table class="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Max Speed</th>
            <th scope="col">Automatic</th>
            <th scope="col">Engine</th>
            <th scope="col">Doors</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="car in cars" :key="car.id">
                <td>{{car.id}}</td>
                <td>{{car.brand}}</td>
                <td>{{car.model}}</td>
                <td>{{car.year}}</td>
                <td>{{car.maxSpeed}}</td>
                <td>{{car.isAutomatic}}</td>
                <td>{{car.engine}}</td>
                <td>{{car.numberOfDoors}}</td>
                <td><button @click="deleteCar(car)" >Delete</button></td>
            </tr>
        </tbody>
        </table>
  </div>
</template>

<script>
import carService from '../services/CarService';

export default {
    methods: {
        async deleteCar(car) {
            await carService.delete(car.id);
            this.cars = this.cars.filter((c) => c.id !== car.id)
            console.log('CAR DELETED');
        }
    },
    data(){
        return {
            cars: []
        }
    },
    async created(){
        this.cars = await carService.getAll();
    }
}
</script>

<style>

</style>