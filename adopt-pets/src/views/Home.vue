<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend</h1>
    {{ getAllCats.length }}
    {{ animalsCount }}
    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>
    <!-- .prevent prevents the default page reload -->
    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select id="input-3" :options="['cats', 'dogs']" required v-model="formData.species"></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input id="input-2" type="number" v-model="formData.age" required placeholder="Enter age"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      // model all diff form inputs
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  // this goes in computed because we are watching for changes
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },
  methods: {
    // mapState goes in computed because we are watching for changes in state but not in static methods
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name, age
        }
      }
      this.addPet(payload)
      // reset form after submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
