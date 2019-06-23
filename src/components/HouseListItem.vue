<template lang="html">
  <p v-on:click="handleClick">{{house.name}}</p>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name:'house-list-item',
  props:['house'],
  methods:{
    handleClick: function(){
    eventBus.$emit('house-selected', this.house)
    }
  }
}
</script>

<style lang="css" scoped>
p:hover{
  cursor: pointer;
}
</style>
