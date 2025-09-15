<template>
  <div class="friend-card">
    <h2>{{ name }}</h2>
    <p>📞 {{ phone }}</p>
    <p>📧 {{ email }}</p>
    <p v-if="premium">⭐ Membre Premium</p>
    <hr />
  </div>
</template>

<script setup lang="js">
defineProps({
    name:String,
    phone:String,
    email:String,
    premium:Boolean,
})
</script>

<style scoped>
.friend-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}
</style>