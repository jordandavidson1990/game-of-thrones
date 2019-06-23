<template lang="html">
  <div class="books-list">
    <h1>Books</h1>
    <button class="btn" v-if="selectedBook" v-on:click="handleClick" onClick = "this.style.visibility= 'hidden';">POV Characters</button>
    <div class="selected-book-container">

      <book-detail :povCharactersLink="povCharactersLink" v-if="chosenBook" :selectedBook="selectedBook"  :charactersObjects="povCharactersObjects"></book-detail>
      <div v-if="povObjects.length>0"class="character-list">
        <h3>Point of View Characters </h3>
        <character-item :key="index" v-for="(character,index) in povObjects" :character="character"></character-item>
      </div>
    </div>


    <select v-on:change="handleChange" v-model="chosenBook">
      <option disabled value="Pick a book">Pick a book...</option>
      <option v-for="(book, index) in books" :key="index" :value="book"
      >{{book.name}}</option>

    </select>
    <div class="book-list">
      <ul>
        <li v-for="(book, index) in books" :key="index" :book="book">{{book.name}}</li>
      </ul>
    </div>


    <!-- <book-detail :povCharactersLink="povCharactersLink" v-if="chosenBook"></book-detail> -->
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import BookDetail from '@/components/BookDetail'
import CharacterItem from '@/components/CharacterItem'
export default {
  name:'book-list',
  props:['books', 'selectedBook', 'povCharactersLink', 'povCharactersObjects'],
  components: {
    "book-detail": BookDetail,
    "character-item":CharacterItem
  },
  data(){
    return{
      chosenBook: null,
      povObjects:[]
    }
  },
  methods:{
    handleChange: function(){
      // debugger
      // for(const pov in this.povCharactersLink){
      //   fetch(this.povCharactersLink[pov])
      //   .then(res => res.json())
      //   .then(data => this.povObjects.push(data))
      //
      // }
      // eventBus.$emit('pov-selected', this.povObjects)
      eventBus.$emit('book-selected', this.chosenBook);
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
    // .then(data => this.povObjects.push(data))
    // console.log('povobject', this.povObjects);
    // eventBus.$emit('pov-selected',this.povObjects)

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
  padding: 25px;
  background-color: beige;
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

.selected-book-container{
  display: flex;
  max-width: 90%;
  margin: auto;
}

</style>
