<template>
  <div>
    <PetTable
    species="cats"
    :pets="cats"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '../components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data () {
    return {}
  },
  computed: {
    // syntax for mapState is to use spread operator. Pass array of objects you want to access from vuex store
    ...mapState([
      'cats'
    ])
  }
}
</script>
