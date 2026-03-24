<script setup>
import TopHeader from '../components/TopHeader.vue';
</script>

<!-- MainLayout.vue -->
<template>
  <TopHeader theme="main"/>
  <main>
    <RouterView />
  </main>
</template>