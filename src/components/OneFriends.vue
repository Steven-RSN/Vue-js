<template>
  <div class="friend-card ">
    <h2>{{ name }}</h2>
    <p>📞 {{ phone }}</p>
    <p>📧 {{ email }}</p>
    <p v-if="premium===true">⭐ Membre Premium</p>
    <p v-else>Pas membre Premium</p>
    <hr />
    <button class="btn btn-error my-3" @click="handleDelete">X</button>

    
    <button v-if="premium===false" @click="changeInPremium" class="btn btn-warning mx-4"> Passer en premium</button>
    <button v-else-if ="premium ===true" @click="changeInPremium" class="btn btn-error mx-4" >Enlever le premium !</button>
  </div>
</template>

<script setup lang="js">
import { defineEmits } from 'vue'
const props = defineProps({
    id:String,
    name:String,
    phone:String,
    email:String,
    premium:Boolean,
})

const emit = defineEmits(['delete','togglePremium'])

function handleDelete(){
  emit('delete',props.id)
}

//Ne modifient plus directement la prop !
function changeInPremium(){
 // props.premium=false
  emit('togglePremium', props.id, !props.premium)
}


</script>

<style scoped>
.friend-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}
</style>