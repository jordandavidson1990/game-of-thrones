<template lang="html">
  <div class="books-list">
    <h1>Books</h1>
    <button class="btn" v-if="selectedBook" v-on:click="handleClick" >POV Characters</button>
    <div class="selected-book-container">

      <book-detail :povCharactersLink="povCharactersLink" v-if="chosenBook" :selectedBook="selectedBook"  :charactersObjects="povCharactersObjects"></book-detail>
      <div v-if="povObjects.length>0"class="character-list">
        <h3>Point of View Characters </h3>
        <character-item :key="index" v-for="(character,index) in povObjects" :character="character"></character-item>
      </div>
    </div>
    <div class="book-search">
      <select v-on:change="handleChange" v-model="chosenBook">
        <option disabled value="Pick a book">Pick a book...</option>
        <option v-for="(book, index) in books" :key="index" :value="book"
        >{{book.name}}</option>

      </select>
      <book-filter-form v-model="chosenBook" v-on:change="handleSearch" class="filter-search" :books="books"></book-filter-form>
    </div>
    <div class="book-list">
      <ul>
        <book-list-item v-for="(book, index) in books" :key="index" :book="book" ></book-list-item>
      </ul>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import BookDetail from '@/components/BookDetail'
import CharacterItem from '@/components/CharacterItem'
import BookListItem from '@/components/BookListItem'
import BookFilterForm from '@/components/BookFilterForm'

export default {
  name:'book-list',
  props:['books', 'selectedBook', 'povCharactersLink', 'povCharactersObjects'],
  components: {
    "book-detail": BookDetail,
    "character-item":CharacterItem,
    "book-list-item":BookListItem,
    "book-filter-form":BookFilterForm
  },
  data(){
    return{
      chosenBook: null,
      povObjects:[]
    }
  },
  methods:{
    handleChange: function(){
      this.povObjects=[]
      eventBus.$emit('book-selected', this.chosenBook);
    },
    handleSearch: function(){
      console.log('click');
    },
    handleClick: function(){
      // this.povObjects = []
      for(const pov in this.povCharactersLink){
        fetch(this.povCharactersLink[pov])
        .then(res => res.json())
        .then(data => this.povObjects.push(data))

      }
      eventBus.$emit('pov-selected', this.povObjects)
    }
  }
}

</script>

<style lang="css" scoped>
.book-list{
  max-height: 47vh;
  overflow: scroll;
  border: 2px solid;
  max-width: 40vw;
  margin: auto;
  padding: 10px;
  background-color: beige;

}
.btn{
  background-color: beige;
  padding: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.character-list{
  max-height: 28vh;
  overflow: scroll;
  border: 2px solid;
  max-width: 40vw;
  margin: auto;
  padding: 25px;
  background-color: beige;
  list-style: none;
  font-size: xx-small;
  margin-bottom: 10px;
}
select{
  position: relative;
  font-family: ariel;
  background-color: beige;
  margin: 10px;
  width: 40vw;
  height: 6vw;
  text-align: center;
  font-style: italic;
}
form.search-bar.filter-search{
  position: relative;
  font-family: ariel;
  background-color: beige;
  margin: 10px;
  width: 40vw;
  height: 6vw;
  text-align: center;
  font-style: italic;
}

.selected-book-container{
  display: flex;
  max-width: 90%;
  margin: auto;
}

.book-search{
  display: flex;
  width: 90%;
  margin: auto;
}

</style>
