<template>
  <div>
    <h1>Dogs for adoption</h1>
    <b-table striped hover :items="dogs"></b-table>
  </div>
</template>

<script>
// @ is shortcut for src dir
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
