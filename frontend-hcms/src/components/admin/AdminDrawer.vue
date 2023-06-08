<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" @click.stop="rail = !rail" permanent style="background-color: #212121; color: white;">
    <v-list>
      <v-list-item prepend-icon="mdi-alpha-m-box" title="MoreCorp" subtitle="Kerja, Kerja, Tipes" />
    </v-list>
    <v-divider />
    <v-list density="compact" nav>
      <v-list-item v-for="([icon, title, href], i) in navAdmin" :key="i" :title="title" :prepend-icon="icon" :href="href" :value="title" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      rail: true,
      navAdmin: [
        [
          'mdi-monitor-dashboard',
          'Dashboard',
          '/admin/dashboard'
        ],
        [
          'mdi-file-certificate',
          'Lembaga Sertifikasi Kompetensi',
          '/admin/lembaga_sertifikasi_kompetensi'
        ]
      ]
    })
  }
</script>