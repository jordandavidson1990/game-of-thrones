<template lang="html">
  <form class="search-bar" v-on:submit.prevent>
    <input type="text" v-model="search" placeholder="Search for house" v-on:keyup="searchHouse">
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
    searchHouse: function(){
      let foundHouse = this.houses.find((house) => {
        return house.name.toLowerCase().includes(this.search.toLowerCase())
      })
      this.selectedHouse = foundHouse
      eventBus.$emit('house-selected', this.selectedHouse)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
