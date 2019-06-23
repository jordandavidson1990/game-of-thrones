<template lang="html">
  <div class="character-li">
  <h3>{{character.name}}</h3>
  <p>Born: {{character.born}}</p>
</div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name:'character-item',
  props:['character'],
  mounted(){
    // console.log(character);
  }
}
</script>

<style lang="css" scoped>
.character-li{
  max-height: 47vh;
  overflow: scroll;
  border: 2px solid;
  max-width: 40vw;
  margin: auto;
  padding: 10px;
  background-color: beige;
}
</style>
