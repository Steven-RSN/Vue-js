<template>
    <div>
        <div class="flex justify-center">
            <Form @send-data="handleData"></Form>

        </div>
        <h1>Liste d'amis</h1>
        <OneFriends v-for="ami in lesAmis" :key="ami.id" v-bind="ami" @delete="supprimerAmi"
        @togglePremium='changePremium' />
    </div>

</template>
<script setup>
import { ref } from 'vue';
import OneFriends from '../../components/OneFriends.vue'
import Form from '../../components/Form.vue'


function changePremium(id, value) {
    const ami = lesAmis.value.find(a => a.id === id)

    if (ami) {
        ami.premium = value
    }
}

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
        premium: false
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

//function de suppression
function supprimerAmi(id) {
    lesAmis.value = lesAmis.value.filter(ami => ami.id !== id)
}

function handleData(data){
    console.log(data)
    
    lesAmis.value.push({
        name:data.nom,
        email:data.email,
        passWord:data.passWord,
        phone:data.phone,
        premium: false, // par défaut !
    })

}
</script>