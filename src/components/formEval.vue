<template>
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend class="fieldset-legend">Login</legend>

        <label class="label">Nom</label>
        <input type="text" class="input" placeholder="Email" v-model="nom" />

        <label class="label">Age</label>
        <input type="number" class="input" placeholder="Password" v-model.number="age" />

        <button @click="sendDataFrom" class="btn btn-neutral mt-4">Login</button>
    </fieldset>
</template>

<script setup lang="js">
import { ref, defineEmits } from 'vue';

const emit=defineEmits({

    addUser:(payload) => {

        return typeof payload.nom==='string' && typeof payload.age==='number' // test sécurité
    }
});
const nom = ref('');
const age = ref('');

function sendDataFrom() {
    console.log("Dans l'enfant", nom.value, '&', age.value)
    if (!nom.value || nom.value.trim() === '') { return }
    if (!age.value || isNaN(age.value) || age.value <= 0) { return }

    emit('addUser', {
        nom: nom.value,
        age: age.value,
    })

}

</script>