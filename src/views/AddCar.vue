<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="brand" class="form-label">Brand</label>
      <input v-model="formData.brand" type="text" class="form-control" id="brand" aria-describedby="brand"/>
    </div>

    <div class="mb-3">
      <label for="model" class="form-label">Model</label>
      <input v-model="formData.model" type="text" class="form-control" id="model" aria-describedby="model"/>
    </div>

    <div class="mb-3">
      <label for="year" class="form-label">Year</label>
      <select v-model="formData.year">
        <option v-for="year in yearRange" :key="year">
          {{year}}
        </option>
      </select>
    </div>

    <div class="mb-3 form-check">
      <label class="form-label" for="max-speed">Max Speed </label>
      <input min=0 v-model="formData.maxSpeed" type="number" class="form-number-input" id="max-speed">
    </div>
    <div class="mb-3 form-check">
      <label class="form-label" for="doors">Number Of Doors </label>
      <input min=0 v-model="formData.numberOfDoors" type="number" class="form-number-input" id="doors">
    </div>
    <div class="mb-3 form-check">
      <label class="form-label" for="doors">Automatic </label>
      <input min=0 v-model="formData.isAutomatic" type="checkbox" class="form-check-label" id="is-automatic">
    </div>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary">
          <input v-model="formData.engine" type="radio" name="engine" value="diesel" id="diesel" autocomplete="off" checked> Diesel
        </label>
        <label class="btn btn-secondary">
          <input v-model="formData.engine" type="radio" name="engine" value="petrol" id="petrol" autocomplete="off"> Petrol
        </label>
        <label class="btn btn-secondary">
          <input v-model="formData.engine" type="radio" name="engine" value="electric" id="electric" autocomplete="off"> Electric
        </label>
        <label class="btn btn-secondary">
          <input v-model="formData.engine" type="radio" name="engine" value="hybrid" id="hybrid" autocomplete="off"> Hybrid
        </label>
      </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import carService from '../services/CarService'

export default {
  methods: {
    async onSubmit(){
      await carService.add(this.formData)
      this.$router.push('/cars');
    }
  },
  data(){
    return {
      formData: {
        brand: "",
        model: "",
        year: 2020,
        numberOfDoors: 0,
        maxSpeed: 0,
        isAutomatic: false,
        engine: 'asdf'
      }
    }
  },
  computed: {
    yearRange(){
      const years = []
      for (let i = 1990; i <= 2021; i++) {
        years.push(i)
      }
      return years;
    }
  }
}
</script>

<style>

</style>