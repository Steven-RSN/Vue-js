<template>
  <div class="flex flex-col bg-gray-200 shadow-xl rounded-lg p-5 my-5 items-center ">
    <div class="my-5 flex flex-row-reverse items-center gap-8 ">
      <button @click="reset" class="btn btn-outline border-1">reset</button>

      <h1 class="font-semibold">Compteur: {{ count }}</h1>
      <button @click="increm" class="btn btn-outline btn-success">+</button>
    </div>

    <img
      :src="src"
      class=" my-10  shadow-xl rounded-xl"
      width="400"
    >
    <audio ref="audioPlayer" src="/sons/la-chatte-a-ta-mère-la-race-la-pute-!-morsay,-message-à-interne-made-with-Voicemod.mp3" preload="auto" autoplay></audio>
  </div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue';

function increm() {
    count.value++
}

const count = ref(0)
const src=ref('/cliquez-putaclic.gif')
watch(count, (newValue, oldValue) => {
    console.log(`Le compteur est passé de ${oldValue} a ${newValue} !`);
    if (newValue === 1) {
      src.value ='/morsay-baise.gif'
      return src 
    }else if(newValue===0){
      src.value ='/cliquez-putaclic.gif'
    }
})

function reset() {
  count.value = 0;
  if (audioPlayer.value) {
    audioPlayer.value.currentTime = 0; // Retour au début
    audioPlayer.value.play().catch(() => {
      console.log('Lecture audio bloquée par le navigateur');
    });
  }
}
</script>

<style scoped lang="scss"></style>