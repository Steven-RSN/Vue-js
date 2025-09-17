<template>
    <div class="card bg-white w-96 shadow-lg rounded-xl border border-gray-200 overflow-hidden">
        <figure class="px-6 pt-6">
            <img :src="`https://i.pravatar.cc/150?u=${user.nom}`" alt="Avatar utilisateur"
                class="rounded-full w-24 h-24 object-cover mx-auto" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 v-if="user.nom!=='Regis'" class="card-title text-xl font-semibold text-gray-900">{{ user.nom }}</h2>
            
            <h2 v-else class="card-title text-xl font-semibold text-gray-900">{{ user.nom }} est un con</h2>
            <p class="text-gray-500 text-sm mb-3">Âge: <span class="font-medium text-gray-700">{{ user.age }}</span></p>
        </div>
    </div>
</template>

<script setup lang="js">
defineProps({
  user: {
    type: Object,

    //Sécurité:
    required: true, 
    validator:(valeur)=>{
      return typeof valeur.nom === 'string' && typeof valeur.age === 'number'
    }

  }
});

</script>
