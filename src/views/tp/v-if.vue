<template>
  <div class="flex justify-center">
    <fieldset class=" fieldset bg-base-200 border-gray-300 rounded-box w-xs border p-4">
      <legend class="fieldset-legend ">Mes super film</legend>

      <label class="label">Nom du film</label>
      <input v-model="film" type="text" class="input" placeholder="Entrez un nom de film" />
      <button @click="ajoutfilm" class="btn btn-secondary mt-4">Ajouter</button>
      <p v-if="films.length === 0"> Pas de films.. ..sorry</p>
      <ul v-else class="list-none space-y-2 mt-4 w-full">
        <li v-for="(film, index) in films" :key="index"
          class="flex justify-between items-center p-2 bg-base-300 rounded-lg shadow cursor-pointer">
          <span><strong>Film #{{ index + 1 }}:</strong> {{ film }}</span>

          <span @click="sup(index)"
            class="bg-red-400 border border-red-600 text-white py-1 px-2 rounded hover:bg-red-300 transition">
            X
          </span>
        </li>
      </ul>


    </fieldset>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';


const films = ref([]);
let film = ref('');
const ajoutfilm = function () {
  if (film.value !== '') {
    films.value.push(film.value)
    console.log('film bien ajouté')
    film.value = ''
  }
}

const sup = function (index) {
  films.value.splice(index, 1)
}


</script>

<style scoped lang="css"></style>