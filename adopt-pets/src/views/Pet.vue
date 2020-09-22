<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    // syntax for mapState is to use spread operator. Pass array of objects you want to access from vuex store
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    // this is like passing in this['cats']
    // this gets correct animal
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>
