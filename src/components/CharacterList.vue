<template lang="html">
  <div class="character-li">
    <character-item v-on:click="handleCharacterClick" :character="character" v-for="character in characters"></character-item>
  </div>
</template>

<script>
import CharacterItem from './CharacterItem'
export default {
  name:'character-item',
  props:['characters'],
  components:{
    "character-item":CharacterItem
  },
  methods:{
    handleCharacterClick: function(){
      // console.log('click',character);
    }
  }
}
</script>

<style lang="css" scoped>
.character-li{
  display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 2px solid;
    max-height: 25vh;
}
</style>
