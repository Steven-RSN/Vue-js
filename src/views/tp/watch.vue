<template>
  <div class="flex flex-col bg-gray-200 shadow-xl rounded-lg p-5 my-5 items-center ">
    <div class="flex flex-row-reverse items-center gap-8 ">
      <button @click="reset" class="btn btn-outline border-1">reset</button>

      <h1 class="font-semibold">Compteur: {{ count }}</h1>
      <button @click="increm" class="btn btn-outline btn-success">+</button>
    </div>

    <video 
      class="py-15 rounded-xl overflow-hidden object-cover"
      width="500"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/cliquez.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo.
    </video>
  </div>
</template>
<script setup lang='js'>
import { ref, watch } from 'vue';

function increm() {
    count.value++
}
function reset() {
    count.value = 0
}

const count = ref(0)
watch(count, (newValue, oldValue) => {
    console.log(`Le compteur est passé de ${oldValue} a ${newValue} !`);
    if (newValue === 10) {
        alert("T'a cliqué salope !");
    }
})
</script>

<style scoped lang="scss"></style>