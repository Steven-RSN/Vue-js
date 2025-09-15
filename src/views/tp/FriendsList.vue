<template>
    <div>
        <h1>Liste d'amis</h1>
        <OneFriends v-for="ami in lesAmis" :key="ami.id" v-bind="ami" />

    </div>

</template>
<script setup>
import { ref } from 'vue';
import OneFriends from '../../components/OneFriends.vue'
import Databindingtruc from '../tp/Databinding.vue';


const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
]);
</script>