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
      <label class="form-label" for="max-speed">Max Speed</label>
      <input min=0 v-model="formData.maxSpeed" type="number" class="form-number-input" id="max-speed">
    </div>
    <div class="mb-3 form-check">
      <label class="form-label" for="doors">Number Of Doors</label>
      <input min=0 v-model="formData.doors" type="number" class="form-number-input" id="doors">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit(){

    }
  },
  data(){
    return {
      formData: {
        brand: "",
        model: "",
        year: 2020,
        doors: 0,
        maxSpeed: 0
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