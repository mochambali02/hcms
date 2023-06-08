// Composables
import { createRouter, createWebHistory } from 'vue-router'

// Defaults
import AdminDefault from '@/layouts/default/admin/AdminDefault.vue'

// Views
import Dashboard from '@/views/admin/DashboardView.vue'
import LembagaSertifikasiKompetensi from '@/views/admin/LembagaSertifikasiKompetensiView.vue'

const routes = [
  {
    path: '/admin',
    component: AdminDefault,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'lembaga_sertifikasi_kompetensi',
        name: 'Lembaga Sertifikasi Kompetensi',
        component: LembagaSertifikasiKompetensi
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
