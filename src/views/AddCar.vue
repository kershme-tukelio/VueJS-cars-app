<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="brand" class="form-label">Brand </label>
      <input required v-model="formData.brand" type="text" class="form-control" id="brand" aria-describedby="brand"/>
    </div>

    <div class="mb-3">
      <label for="model" class="form-label">Model </label>
      <input required v-model="formData.model" type="text" class="form-control" id="model" aria-describedby="model"/>
    </div>

    <div class="mb-3">
      <label for="year" class="form-label">Year </label>
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
      <label class="form-label" for="number-of-doors">Number Of Doors </label>
      <input required min=0 v-model="formData.numberOfDoors" type="number" class="form-number-input" id="number-of-doors">
    </div>
    <div class="mb-3 form-check">
      <label class="form-label" for="is-automatic">Automatic </label>
      <input min=0 v-model="formData.isAutomatic" type="checkbox" class="form-check-label" id="is-automatic">
    </div>

      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary">
          <input v-model="formData.engine" type="radio" name="engine" value="diesel" id="diesel" autocomplete="on" checked> Diesel
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
      </div><br/><br/>
    <button @click="preview()" type="button" class="btn btn-primary"> Preview form </button>
    <button type="reset" class="btn btn-primary"> Reset form </button> <br/><br/>
    <button type="submit" class="btn btn-primary"> Submit </button>
  </form>
</template>

<script>
import carService from '../services/CarService'

export default {
  methods: {
    async onSubmit(){
      await carService.add(this.formData)
      this.$router.push('/cars');
    },
    preview() {
      alert(
        'Brand: ' + this.formData.brand + '\n' +
        'Model: ' + this.formData.model + '\n' +
        'Year: ' + this.formData.year + '\n' +
        'Number 0f doors: ' + this.formData.numberOfDoors + '\n' +
        'Max speed: ' + this.formData.maxSpeed + '\n' +
        'Automatic: ' + this.formData.isAutomatic + '\n' +
        'Engine: ' + this.formData.engine
      )
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
  },
  created() {
    
  }
}
</script>

<style>

</style>