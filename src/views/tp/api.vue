<template>
  <!-- Bloc météo -->
  <div class="max-w-md mx-auto mt-8 p-6 bg-base-200 rounded-lg shadow-lg">
    <h2 class="text-3xl font-bold mb-6 text-center">SUPER Météo</h2>

    <div v-if="chargement" class="alert alert-info shadow-lg flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6 animate-spin" fill="none"
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <span>Chargement...</span>
    </div>

    <div v-else-if="erreur" class="alert alert-error shadow-lg flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M18.364 5.636l-1.414 1.414M6.343 17.657l-1.414 1.414M5.636 5.636l1.414 1.414M17.657 17.657l1.414 1.414M12 8v4m0 4h.01" />
      </svg>
      <span>{{ erreur }}</span>
    </div>

    <div v-else-if="data" class="space-y-4">
      <div class="text-center">
        <p class="text-5xl font-extrabold">{{ data.current_condition.tmp }} °C</p>
        <p class="text-lg text-gray-500 mt-1">Condition : {{ data.fcst_day_0.condition }}</p>
        <img :src="data.fcst_day_0.icon_big" alt="Icône météo" class="mx-auto mt-2" />
      </div>

      <div class="grid grid-cols-2 gap-4 text-center">
        <div class="p-4 bg-primary text-primary-content rounded-lg shadow">
          <p class="text-xl font-semibold">Max</p>
          <p class="text-3xl">{{ data.fcst_day_0.tmax }} °C</p>
        </div>
        <div class="p-4 bg-secondary text-secondary-content rounded-lg shadow">
          <p class="text-xl font-semibold">Min</p>
          <p class="text-3xl">{{ data.fcst_day_0.tmin }} °C</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Bloc Pokémon -->
  <div v-if="dataPoke"
    style="position: relative; border: 6px dashed #ff0055; background: yellow; font-family: 'Comic Sans MS'; font-size: 26px; color: purple; padding: 20px; margin-top: 40px; overflow: visible; max-width: 800px;">

    <h3
      style="text-align: center; font-weight: 900; text-decoration: underline wavy red; color: #ff0066; animation: clignote 1s infinite alternate;">
      Pokémon :
    </h3>

    <div style="padding: 10px;">
      <span v-for="poke in dataPoke.results" :key="poke.name" class="poke-name">
        {{ poke.name }}
      </span>
    </div>

    <!-- Fantômes Pokémon -->
    <div v-for="(ghost, index) in ghosts" :key="'ghost-' + index"
      :style="{
        position: 'absolute',
        top: ghost.top + 'px',
        left: ghost.left + 'px',
        fontSize: ghost.size + 'px',
        color: ghost.color,
        fontWeight: '900',
        textTransform: 'uppercase',
        opacity: ghost.opacity,
        userSelect: 'none',
        pointerEvents: 'none',
        animation: 'ghostFloat ' + ghost.duration + 's ease-in-out infinite, vibrationExtreme 0.1s infinite ease-in-out, couleurChange 2s infinite alternate, flouDynamique 0.2s infinite',
        animationDelay: ghost.delay + 's',
        zIndex: 1000,
        whiteSpace: 'nowrap',
        transformOrigin: 'center',
      }">
      {{ ghost.name }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const data = ref(null)
const dataPoke = ref(null)
const ghosts = ref([])
const chargement = ref(true)
const erreur = ref(null)

function random(min, max) {
  return Math.random() * (max - min) + min
}

async function ApiMeteo() {
  try {
    const res = await fetch('https://prevision-meteo.ch/services/json/toulouse')
    if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`)
    data.value = await res.json()
  } catch (e) {
    erreur.value = e.message
  }
}

async function ApiPokepoke() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`)
    const json = await res.json()
    dataPoke.value = json

    ghosts.value = dataPoke.value.results.slice(0, 15).map(poke => ({
      name: poke.name,
      top: random(0, 200),
      left: random(0, 600),
      size: random(20, 60),
      color: `hsl(${Math.floor(random(0, 360))}, 100%, 50%)`,
      opacity: random(0.3, 0.7),
      duration: random(4, 10),
      delay: random(0, 5),
    }))
  } catch (e) {
    console.error(e)
  }
}

onMounted(async () => {
  chargement.value = true
  await Promise.all([ApiMeteo(), ApiPokepoke()])
  chargement.value = false
})
</script>

<style scoped>
@keyframes clignote {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
}

@keyframes couleurChange {
  0% {
    color: #ff00ff;
  }

  25% {
    color: #00ffff;
  }

  50% {
    color: #ff6600;
  }

  75% {
    color: #00ff00;
  }

  100% {
    color: #ff00ff;
  }
}

@keyframes vibrationExtreme {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }

  10% {
    transform: translate(-10px, -10px) rotate(-2deg);
  }

  20% {
    transform: translate(2px, 2px) rotate(2deg);
  }

  30% {
    transform: translate(-10px, 10px) rotate(-12deg);
  }

  40% {
    transform: translate(2px, -30px) rotate(3deg);
  }

  50% {
    transform: translate(-6px, 4px) rotate(-3deg);
  }

  60% {
    transform: translate(2px, -2px) rotate(2deg);
  }

  70% {
    transform: translate(-1px, 4px) rotate(-10deg);
  }

  80% {
    transform: translate(1px, -4px) rotate(15deg);
  }

  90% {
    transform: translate(-20px, 30px) rotate(-2deg);
  }

  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

@keyframes ghostFloat {
  0%,
  100% {
    transform: translateX(0) translateY(0) rotate(0deg);
    opacity: 0.5;
  }

  50% {
    transform: translateX(100px) translateY(-30px) rotate(20deg);
    opacity: 1;
  }
}

@keyframes flouDynamique {
  0%,
  100% {
    filter: blur(0px);
  }

  50% {
    filter: blur(0px);
  }
}

.poke-name {
  display: inline-block;
  margin: 8px;
  padding: 10px 15px;
  background: linear-gradient(45deg, lime, yellow, orange, hotpink);
  color: black;
  border: 4px dotted cyan;
  font-weight: bold;
  text-transform: uppercase;
  user-select: text;

  /* Animations violentes ici */
  animation: vibrationExtreme 0.1s infinite ease-in-out, couleurChange 2s infinite alternate, flouDynamique 0.2s infinite;
  transform-origin: center;
}
</style>
