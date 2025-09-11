<template>
    <div class="flex justify-center ">
        <div
            class="flex flex-col bg-base-100 h-50 w-150 shadow-sm gap-10 items-center rounded-xl shadow-xl">

            <div class="flex bg-base-100 h-50 w-150 shadow-sm gap-10 items-center justify-center">

                <button @click="decre" class="btn btn-outline btn-error ">-</button>
                <h1 class="font-bold">Le nombre : {{ count }}</h1>
                <button @click="increm" class="btn btn-outline btn-success">+</button>

            </div>

            <p class="font-semibold text-gray-400 ">{{ prout }}</p>

        </div>
    </div>
</template>

<script setup lang='js'>
import { ref, computed } from 'vue';
const count = ref(0)
function increm() {
    count.value++
}
function decre() {
    count.value--
}

let username = ref('')
let prout = computed(() => {
    console.log("ok")
    if (username.value == "") {
        return 'Test de le fonction'
    } else {
        return 'Autre test'
    }
})

</script>

<style scoped lang="scss"></style>