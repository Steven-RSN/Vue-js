<template>
  <div class="min-h-screen flex flex-col bg-base-200 text-base-content">

    <hello msg="msg-> Bite!" name="caca"></hello>

    <!-- Navbar en haut de la page -->

    <AppHeader />
    <!-- Conteneur principal du contenu, centré et responsive -->
    <main class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
      <!-- Ici on aura la router view -->
      <router-view></router-view>

    </main>
    <!-- Footer en bas de la page -->
    <AppFooter />
  </div>
</template>

<script setup lang="js">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import hello from './views/tp/hello.vue';
// import { ref } from 'vue'
// const array =["livre boba fett","livre de la jungle"]
// const compteur = ref(0)
// const result = ref(array[0])

// function toto(){
//   compteur.value++
//   result.value =array[compteur.value%array.length]
// }

</script>
