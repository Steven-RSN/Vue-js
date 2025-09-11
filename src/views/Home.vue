<template>
  <div class="min-h-screen flex flex-col bg-gray-100 shadow-xl rounded-lg p-5 my-5">
    <!-- Mon Header -->
    <header class="bg-gradient-to-r from-primary to-secondary text-white  text-center rounded-xl">
      <h1 class="wave-text from-primary  text-4xl font-extrabold  py-16 h-42 mb-6">Vue.js Pratique</h1>
      <p class="text-lg h-12  ">Explorez les exercices pour maîtriser Vue.js !</p>
    </header>



    <!-- les exercices ! -->
    <main class="flex-1 container mx-auto px-6 py-10">
      <div class="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="exercise in exercises" class="card bg-base-100 shadow-xl">

          <div class="card-body">

            <h2 class="card-title underline">{{ exercise.title }}</h2>

            <p class="text-sm text-gray-600">{{ exercise.description }}</p>

            <div class="card-actions justify-end mt-6">
              <router-link :to="{ path: exercise.link }">
                <div
                  class="p-[2px] bg-gradient-to-r from-primary to-secondary  rounded inline-block  hover:opacity-90 transition">
                  <button class="btn px-4 py-2 bg-white text-gray-800  hover:shadow-xl">
                    Démarrer
                  </button>
                </div>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </main>


  </div>

</template>




<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'

//Test:
const exercises = ref([
  { title: 'Compteur Réactif', description: 'Compteur interactif avec Vue.js.', link: '/tp/EventBinding' },
  { title: 'Formulaire Dynamique', description: 'Formulaires réactifs avec v-model.', link: '/tp/V-onInput' },
  { title: 'Liste Dynamique-card', description: 'Affichez une liste d\'éléments.', link: '/tp/Databinding' },
  { title: 'CLIQUEZ !', description: 'A définire.', link: '/tp/watch' },
  { title: 'Toggle Card', description: 'Gestion des styles de card dynamiquement, au click .', link: '/tp/styleDynamic' },
])

</script>

<style scoped>
/* Test */
.card {
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}


.wave-text {
  display: inline-block;
  animation: wave 2.5s infinite ease-in-out;
}

/* Merci GPT */
@keyframes wave {

  0%,
  100% {
    transform: translateY(0);
    text-shadow: 2px 4px 8px rgba(4, 29, 53, 0.4);
  }

  25% {
    transform: translateY(0px);
    text-shadow: 2px 4px 8px rgba(19, 48, 128, 0.6);
  }

  50% {
    transform: translateY(0);
    text-shadow: 2px 4px 8px rgba(29, 86, 159, 0.923);
  }

  75% {
    transform: translateY(0px);
    text-shadow: 2px 4px 8px rgba(74, 119, 244, 0.739);
  }
}
</style>
