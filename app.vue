<script setup>
// onmounted hook裡面寫就無法做到seo 優化
</script>

<template>
  <header class="w-full h-[10vh] bg-red-300">
    <NuxtLink to="/">index</NuxtLink>
    <br />
    <NuxtLink to="/about">about</NuxtLink>
    <br />
    <NuxtLink to="/project">project</NuxtLink>
  </header>
  <main><NuxtPage></NuxtPage></main>

  <div>
    <div><p class="text-red-500">asdfasd</p></div>
  </div>
</template>
