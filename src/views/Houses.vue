<template lang="html">
<div class="">
  <h2>Houses</h2>
  <house-filter-form :houses="houses"></house-filter-form>
  <house-detail></house-detail>
  <div class="house-li">
  <ul >
    <house-list-item :house="house" v-on:click="handleClickHouse" v-for="(house, index) in houses" :key="index"></house-list-item>
  </ul>
</div>
</div>
</template>

<script>

import HouseFilterForm from '@/components/HouseFilterForm.vue'
import HouseDetail from '@/components/HouseDetail.vue'
import HouseListItem from '@/components/HouseListItem.vue'
export default {
  name:'houses',
  props:['houses'],
  components:{
    "house-filter-form":HouseFilterForm,
    "house-detail": HouseDetail,
    "house-list-item":HouseListItem
  },
  methods:{
    handleClickHouse: function(){
      console.log('click', house);
    }
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
