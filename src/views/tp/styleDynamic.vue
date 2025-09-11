<template>
    <div @click="selectCard('card1')" class="card bg-base-100 w-96 shadow-sm y-10" :class="classCard1">
        <div class="card-body items-center text-center">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>

    <!-- /Autre card : -->

    <div @click="selectCard('card2')" class="card bg-base-100 w-96 shadow-sm " :class="classCard2">

        <div class="card-body items-center text-center">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { computed, ref } from 'vue';

const selectedCard= ref();

function selectCard(card){
    selectedCard.value=card
}

const classCard1=computed(()=>{
    if(selectedCard.value ==='card1'){
        return 'styleA'
    }
    return 
})

const classCard2=computed(()=>{
    if(selectedCard.value === 'card2'){
        return 'styleB'
    }
    return
})

</script>

<style>
.styleA {
    border: 2px solid blue;
    background-color: #f3f9ff;
}

.styleB {
    border: 2px solid green;
    background-color: #f9fffa;
}
</style>