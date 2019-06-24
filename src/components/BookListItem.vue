<template lang="html">
  <p v-on:click="handleClick">{{book.name}}</p>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name:'book-list-item',
  props:['book'],
  methods:{
    handleClick: function(){
      eventBus.$emit('book-selected', this.book)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
