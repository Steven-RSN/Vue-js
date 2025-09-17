<template>
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend class="fieldset-legend">Login</legend>

         <label class="label" for="toto">Nom</label>
        <input type="text" id='toto' class="input" placeholder="nom"
        v-model="nom" />

        <label class="label">Email</label>
        <input type="email" class="input" placeholder="Email"
        v-model="email" />

        <label class="label">Password</label>
        <input type="password" class="input" placeholder="Password" 
        v-model="passWord" />

        <label class="label">Num tel</label>
        <input type="text" class="input" placeholder="06-02-06-02-06" 
        v-model="phone"/>
        
        <button @click="getDataForm" class="btn btn-neutral mt-4">Login</button>
    </fieldset>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue';


const passWord=ref('')
const email=ref('')
const phone =ref('')
const nom =ref('')
const emit = defineEmits(['sendData'])

function getDataForm(){
    console.log('Email:', email.value);
    console.log('Password:', passWord.value);
    console.log('Phone:', phone.value);

    
    emit('sendData',{
        nom:nom.value,
        email:email.value,
        passWord:passWord.value,
        phone:phone.value,
    })
}

</script>
