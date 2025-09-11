<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <div class="card-body">
      <h2 class="card-title">{{ nom }}</h2>
      <input type="text" class="border border-black" v-model="nom">
      <p>{{ age }} ans</p>
      <p>Son nombre fétiche : {{ randomNumber() }}</p>
      <p>Son age +10 : {{ ageOlder() }} ans</p>
    </div>
    <figure>
      <img
        :src="photo"
        alt="name"
      />
    </figure>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

const nom = ref("José")
const age = ref(35)
const photo = ref("https://media1.tenor.com/m/FYku6l4S7JcAAAAd/or-yehuda-edgy.gif")

function ageOlder(){
  return age.value +10
}

function randomNumber(){
  return Math.random()
}
</script>

<style scoped lang="scss">
</style>