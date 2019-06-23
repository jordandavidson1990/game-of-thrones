<template lang="html">
  <form class="search-bar" v-on:submit.prevent>
    <input type="text" v-model="search" placeholder="Search for house" v-on:keyup="searchCountry">
  </form>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name:"house-filter-form",
  props:['houses'],
  data(){
    return{
      search:'',
      selectedHouse:{}
    }
  },
  methods:{
    searchCountry: function(){
      let foundHouse = this.houses.find((house) => {
        // debugger
        return house.name.toLowerCase().includes(this.search.toLowerCase())
      })
      this.selectedHouse = foundHouse
      eventBus.$emit('house-selected', this.selectedHouse)
    }
  }
}
// methods:{
//     searchCountry(){
//       let foundCountry = this.countries.find((country) => {
//         return country.name.toLowerCase().includes((this.search.toLowerCase()))
//       })
//       this.selectedCountry = foundCountry
//       eventBus.$emit('country-change', this.selectedCountry)
//     }
//   }
</script>

<style lang="css" scoped>
</style>
