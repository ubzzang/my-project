<template>
  <TopHeader theme="sub"/>
  <div class="layout">
    <main class="sub-page">
      <LeftNavi/>
      <div class="content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup>
import TopHeader from '../components/TopHeader.vue'
import LeftNavi from '../components/LeftNavi.vue'
</script>