<template>

    <div class="flex justify-center">
        <formEval @addUser="sendUserData"></formEval>

    </div>
    <div class="flex justify-center">
        <CardEval :user="userData"></CardEval>
    </div>

</template>
<script setup lang="js">
import formEval from '../../components/formEval.vue';
import CardEval from '../../components/CardEval.vue';
import { ref } from 'vue';

const userData = ref('')

function sendUserData(data){
    console.log('Dans le parent:',data)
    userData.value = data;
}


</script>
