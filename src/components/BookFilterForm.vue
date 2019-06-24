<template lang="html">
  <form class="search-bar" v-on:submit.prevent>
    <input type="text" v-model="search" placeholder="Search for book" v-on:keyup="searchBook">
  </form>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name:'book-filter-form',
  props:['books'],
  data(){
    return{
      search:'',
      selectedBook:{}
    }
  },
  methods:{
    searchBook: function(){
      let foundBook = this.books.find((book) => {
        // debugger
        return book.name.toLowerCase().includes(this.search)
      })
      this.selectedBook = foundBook
      eventBus.$emit('book-selected', this.selectedBook)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
