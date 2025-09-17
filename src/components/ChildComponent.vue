<template>
    <div>
        <button @click="sendMessage" class="btn btn-success">Envoyer un message au parent</button>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';
//On def l'evenement "send"
const emit = defineEmits(['send'])
function sendMessage(){
    emit('send',"bonjour depuis l'enfant !")
}
</script>