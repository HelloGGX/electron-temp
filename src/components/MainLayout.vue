<template>
  <div class="flex h-screen bg-gray-100">
    <!-- SideBar -->
    <SideBar class="flex-shrink-0" />
    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-white shadow-md"></header>

      <!-- Page content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Add any global styles here if needed */
</style>
