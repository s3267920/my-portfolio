<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <header class='header grid-rows-1  mt-8 ml-12 mb-8 '>
    <h1 class='title p-5 max-w-[400px] text-7xl bg-white rounded-lg shadow-md relative flex flex-col '>
      <span class="font-semibold text-cyan-950">陳柔妡</span>
      <span class="text-4xl text-right text-cyan-800">Lucy Chen</span>
    </h1>
    <div class="wrapper">
      <nav>
        <RouterLink class="rounded-sm" to="/">All</RouterLink>
        <RouterLink class="rounded-sm" to="/about">About</RouterLink>
        <RouterLink class="rounded-sm" to="/skills">Skills</RouterLink>
        <RouterLink class="rounded-sm" to="/experience">Experience</RouterLink>
        <RouterLink class="rounded-sm" to="/other">Other</RouterLink>
      </nav>
    </div>
  </header>
  <main className='main grid p-10'>
    <RouterView />
  </main>
</template>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
<style scoped lang="scss">
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: var(--color-cyan-light);
    font-weight: bold;
    transition: color 0.3s ease-in-out, background-color 0.5s ease-in-out;

    &:hover {
      color: var(--vt-c-white);
      background-color: var(--color-cyan-06);
    }
  }
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
}
</style>
