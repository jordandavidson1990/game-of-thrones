<template lang="html">
<div class="">
  <h2>Houses</h2>
  <house-filter-form :houses="houses"></house-filter-form>
  <house-detail></house-detail>
  <div class="house-li">
  <ul >
    <li v-for="house in houses">{{house.name}}</li>
  </ul>
</div>
</div>
</template>

<script>

import HouseFilterForm from '@/components/HouseFilterForm.vue'
import HouseDetail from '@/components/HouseDetail.vue'
export default {
  name:'houses',
  props:['houses'],
  components:{
    "house-filter-form":HouseFilterForm,
    "house-detail": HouseDetail
  },
  data(){
    return{
      selectedHouse: ''
    }
  }
}
</script>

<style lang="css" scoped>
.house-li{
    max-height: 47vh;
    overflow: scroll;
    border: 2px solid;
    max-width: 40vw;
    margin: auto;
    padding: 25px;
    background-color: beige;
    list-style: none;
}
li{
  list-style: none;
}
</style>
