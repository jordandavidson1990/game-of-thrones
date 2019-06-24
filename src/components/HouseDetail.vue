<template lang="html">
  <div v-if="house" class="house-info">
  <h1 >{{house.name}}</h1>
  <p>Region: {{house.region}}</p>
  <p>Coat of Arms: {{house.coatOfArms}}</p>
  <p v-if="house.words">Words: {{house.words}}</p>
</div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name:'house-detail',
  data(){
    return{
      house: null
    }
  },
  mounted(){
    eventBus.$on('house-selected', (house) =>{
      // debugger
      this.house = house
    })
  }
}
</script>

<style lang="css" scoped>

.house-info{
    display: grid;
    justify-content: center;
    max-width: 50vw;
    margin: auto;
    background: #f5f5db;
    padding: 10px;
    border: 2px solid;
    margin-top: 10px;
    margin-bottom: 10px;}
</style>
