<template>
  <div class="flex flex-col gap-5 p-5 max-w-md mx-auto shadow-sm rounded-lg bg-base-100">
    
   <h1 class="text-3xl font-bold  text-center">Mes super inputs</h1>
    <!-- 1er input !-->
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Input direct</legend>
      <input 
        v-model="input1" 
        type="text" 
        class="input input-bordered w-full" 
        placeholder="Tape ici..." 
      />
      <p class="mt-1 text-sm text-gray-600">-> {{ input1 }}</p>
    </fieldset>

<!-- 2eme input !-->
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Input ESC</legend>
      <input 
        v-model="testInput" 
        type="text" 
        class="input input-bordered w-full" 
        placeholder="Tape ici..."
        @keyup="ESCactivate" 
      />
      <p class="mt-1 text-sm text-gray-600">-> {{ input2 }}</p>
    </fieldset>

    <!-- buton alerte -->
    <button 
      @click="showAlert" 
      class="btn btn-primary"
    >
      Déclencher une alerte
    </button>


  </div>
</template>
<script setup lang='js'>    
import { ref } from 'vue';

const input1 = ref('')


const input2 = ref('');
const testInput = ref('');

function ESCactivate(event){
    if(event.key === "Escape"||event.key === "Esc"){
        input2.value = testInput.value;
        tempInput.value = '';
    }
}

function showAlert(){
    alert('Alerte déclenchée !');
}   




// const input1 = ref('');
// const input2 = ref('');
// const tempInput = ref('');

// function validateInput(){
//     input2.value = tempInput.value;
// }

// function showAlert(){
//     alert('Alerte déclenchée !');
// }   

</script>