

<template>
  <div>
    <h2>Je suis le parent</h2>
     <ChildComponent @send="recevoirMessage"></ChildComponent>
    <p> le message de l'enfant: {{ message }} </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue'
const message=ref('')

function recevoirMessage(leMessage:any){
    message.value=leMessage
}
</script>