<template>
  <div class="flex flex-col justify-center items-center ">
    <div class="bg-base-100">
    
    </div>

    <input type="text" placeholder="placeholder" class="input input-info" v-model="saisie" />
    <h2 :class="input1(saisie)"> {{ saisie }}  </h2>






    <input type="text" placeholder="Info" class="input input-info" v-model="couleur" />
    <p :style="{ backgroundColor: couleur }">:{{ couleur }}</p>

  </div>

</template>

<script setup lang='js'>
import { ref } from 'vue';
const saisie = ref('')
const couleur=ref('')

function input1(text){
  if(text === 'hello'){
    return 'classHello'
  }else if(text === 'world'){
    return 'classWorld'
  }

}




// const daisyuiColors = [
//   "primary",
//   "primary-content",
//   "secondary",
//   "secondary-content",
//   "accent",
//   "accent-content",
//   "neutral",
//   "neutral-content",
//   "base-100",
//   "base-200",
//   "base-300",
//   "base-content",
//   "info",
//   "info-content",
//   "success",
//   "success-content",
//   "warning",
//   "warning-content",
//   "error",
//   "error-content"
// ];

</script>

<style scoped lang="css">
.classHello{
  background-color: aqua;
  color: black;
}

.classWorld{
  background-color: blueviolet;
  color: black;
}

</style>




  <!-- <ul class="flex flex-wrap space-around ":class="`bg-${saisie}`" > -->

      <!-- <ul class="flex flex-wrap" :style="{ backgroundColor: saisie }">
        <li>primary</li>
      </ul>-->