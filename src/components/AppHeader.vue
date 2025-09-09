<template>

 <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li>
          <details>
          <summary>Parent</summary>
          <ul class="p-3">
            <li><a>Exercice</a></li>
            <li><a>Lessons</a></li>
            <li><a>tp</a></li>
          </ul>
        </details>
        </li>
        <li><a>BITE</a></li>

      </ul>
    </div>
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><a>Bite</a></li>
      <li>
          <details>
          <summary>Parent</summary>
          <ul class="p-3">
            <li><a>Exercice</a></li>
            <li><a>Lessons</a></li>
            <li><a>tp</a></li>
          </ul>
        </details>
        </li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Button</a>
  </div>
</div>
</template>

<script setup lang='js'>
import { RouterLink } from 'vue-router';


</script>

<style scoped lang="css">
</style>