<template>
  <div id="app">

    <!-- <div class="snowflakes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </div> -->

    <h1>A Song of Ice and Fire</h1>
    <audio controls id="myVideo" autoplay loop hidden>
      <iframe src="../public/official-opening-credits-game-of-thrones-hbo.mp3" allow="autoplay" id="audio" style="display:none"></iframe>
<!--
    <source src="../public/official-opening-credits-game-of-thrones-hbo.mp3" type="audio/mp3"> -->
  Your browser does not support the audio element.
  </audio>
    <nav class="navbar-dark nav-pills">
      <router-link :to="{ name: 'home'}">Home</router-link>
      <router-link :to="{ name: 'books'}">Books</router-link>
      <router-link :to="{ name: 'houses'}">Houses</router-link>
    </nav>
    <router-view :selectedBook="selectedBook" :povCharactersLink="povCharactersLink"
    :povCharactersObjects="povCharactersObjects"
    :books="books"
    :houses="houses"
    id="view">
  </router-view>
</div>
</template>

<script>

import {eventBus} from './main.js'
// import CharacterItem from '@/components/CharacterItem'
// import BookDetail from '@/components/BookDetail.vue'
// import CharacterList from '@/components/CharacterList'
export default {
  name: 'app',
  data(){
    return{
      books:[],
      selectedBook: null,
      povCharactersLink:[],
      povCharactersObjects:[],
      selectedCharacter: null,
      houses:[],
      numbersArray:[]
    }
  },
  // components:{
  //   "book-detail":BookDetail,
  //   "character-item":CharacterItem,
  //   "character-list":CharacterList
  // },
  mounted(){
    fetch("https://www.anapioficeandfire.com/api/books")
    .then(res => res.json())
    .then(data => this.books = data)

    this.getHouses()

    eventBus.$on('book-selected', (book)=>{
      this.selectedBook = book;
      this.povCharactersLink = book.povCharacters
    })
    eventBus.$on('pov-selected', (pov) => {
      for(const x in pov){
        // console.log('pov', pov);
        this.povObjects.push(pov[x])
      };
    })
  },
  methods:{
    handleClick: function(){
      this.povCharactersObjects = []
      for(const pov in this.povCharactersLink){
        fetch(this.povCharactersLink[pov])
        .then(res => res.json())
        .then(data => this.povCharactersObjects.push(data))
      }
    },
    getHouses: function(){

      const promises = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44].map(num => {
        return fetch(`https://www.anapioficeandfire.com/api/houses?page=${num}&per_page=50`)
        .then(res => res.json())
      })
      // console.log(promises);
      Promise.all(promises)
      .then(data => this.houses = data.reduce((flat, toFlatten) =>
      flat.concat(toFlatten), []))
      .then(()=>this.sortHouses("name"))
    },
    sortHouses(property){
      this.houses.sort((a,b) => {
        return a[property] < b[property] ? -1 : 1
      })
    }
  }
}

  </script>

<style>
h1, h2, h3, h4, h5, p, a, li{
  font-family:'Game of Thrones'
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
nav{
  display: flex;
  justify-content: space-evenly;
}

body{
  background: url('../public/dragon-tyrion.jpg') no-repeat center center fixed;
  background-repeat: no-repeat;
  background-size: auto;
  position: relative;
   overflow: hidden;
   min-height: 100vh;
}
html {
   height: 100%;
}

body,
html {
   margin: 0;
   min-height: 100%;
   overflow-x: hidden;
   padding: 0
}
a{
  color:black;
  font-size: xx-large;
  background: #f5f5db;
  padding: 10px;
  margin: 10px;
  border-radius: 90px;
}

a:link{
  color:red;
}
a:hover{
  color:green;
  text-decoration:none;
}
ul{
  list-style-type: none
}

</style>
