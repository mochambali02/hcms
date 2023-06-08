<template>
  <v-app>
    <admin-drawer />
    <admin-app-bar />
    <admin-view />
  </v-app>
</template>

<script setup>
  import AdminAppBar from '@/components/admin/AdminAppBar.vue'
  import AdminDrawer from '@/components/admin/AdminDrawer.vue'
  import AdminView from '@/views/admin/AdminView.vue'
</script>