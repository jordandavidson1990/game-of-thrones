<template lang="html">
  <div class="">
    <div class="book-list" v-if="selectedBook">
    <h2>{{selectedBook.name}}</h2>
    <p>Number of Pages: {{selectedBook.numberOfPages}}</p>
    <p>Author: {{selectedBook.authors[0]}}</p>
  </div>

  <ul>
    <div class="character-li" v-if="charactersObjects">

  <character-item :key="index" v-for="(character,index) in povObjects" :character="character"></character-item>
</div>
</ul>
</div>
</template>

<script>
import CharacterItem from './CharacterItem'
import {eventBus} from '../main.js'
export default {
  name:'book-detail',
  props:['povCharactersLink', 'charactersObjects','selectedBook', 'book'],
  components:{
    "character-item":CharacterItem
  },
  data(){
    return{
    characterIndex:[],
    povObjects:[]
  }
  },
  mounted(){
    eventBus.$on('pov-selected', (objectsArray) => {
      // debugger
      if(objectsArray.length>0){
      for(const character in objectsArray){
        this.povObjects.push(objectsArray[character])
      }}
    })
  },
  methods:{
    onClick: function(){
      for(const character in this.povCharactersLink){
        const yep = this.povCharactersLink[character].substr(49)
        this.characterIndex.push(yep)}
      }
    }
  }

</script>
<style lang="css" scoped>

.character-li{
  max-height: 47vh;
  overflow: scroll;
  /* border: 2px solid; */
  max-width: 40vw;
  margin: auto;
  padding: 10px;
  /* background-color: beige; */
}
.book-list{
      display: grid;
      justify-content: center;
      max-width: 50vw;
      margin: auto;
      background: #f5f5db;
      padding: 10px;
      border: 2px solid;
      margin-top: 10px;
      margin-bottom: 10px;
}
</style>
