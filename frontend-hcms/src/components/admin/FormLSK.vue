<template>
  <v-container fluid style="width: 98%; background-color: #ececec; border-radius: 8px; margin-top: 16px;">
    <v-row align="center" no-gutters>
      <v-container fluid>
        <v-row>
          <v-list-item>
            <h2>
              Lembaga Sertifikasi Kompetensi
            </h2>
          </v-list-item>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-text-field clearable label="Nama LSK" variant="solo" />
          </v-col>
          <v-col cols="2">
            <v-text-field clearable label="Nomor Telephone" variant="solo" />
          </v-col>
          <v-col cols="2">
            <v-text-field clearable label="Email" variant="solo" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field clearable label="Alamat" variant="solo" />
          </v-col>
        </v-row>
        <v-row style="width: fit-content;">
          <v-col>
            <v-btn prepend-icon="mdi-magnify" variant="tonal">
              Cari
            </v-btn>
          </v-col>
          <v-col>
            <v-btn prepend-icon="mdi-file-plus" variant="tonal">
              Tambah Data
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-divider />
    <v-row align="center" no-gutters>
      <v-container fluid>
        <v-row>
          <v-container style="width: fit-content; margin-right: 0px; padding: 0px auto;">
            <v-col style="padding: 0px">
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" prepend-icon="mdi-file-export" variant="tonal">
                    Export to File
                  </v-btn>
                </template>
                <v-card min-width="fit-content">
                  <v-list density="compact" nav>
                    <v-list-item v-for="([icon, title], i) in exportToFile" :key="i" :title="title" :prepend-icon="icon" :value="title" />
                  </v-list>
                </v-card>
              </v-menu>
            </v-col>
          </v-container>
        </v-row>
        <v-row>
          <v-container fluid>
            <v-table fixed-header height="60vh">
              <thead>
                <tr>
                  <th class="text left" style="text-align: center;">
                    No
                  </th>
                  <th class="text left" style="text-align: center;">
                    Nama LSK
                  </th>
                  <th class="text left" style="text-align: center;">
                    Nomor Telephone
                  </th>
                  <th class="text left" style="text-align: center;">
                    Email
                  </th>
                  <th class="text left" style="text-align: center;">
                    Alamat
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in dataLSK" :key="item.namaLSK">
                  <td style="text-align: center;">
                    {{ item.nomorDataLSK }}
                  </td>
                  <td style="text-align: center;">
                    {{ item.namaLSK }}
                  </td>
                  <td style="text-align: center;">
                    {{ item.nomorTelephoneLSK }}
                  </td>
                  <td style="text-align: center;">
                    {{ item.emailLSK }}
                  </td>
                  <td style="text-align: center;">
                    {{ item.alamatLSK }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-container>
        </v-row>
        <v-row>
          <v-container style="width: fit-content; margin-right: 0px; padding: 0px auto;">
            <v-pagination v-model="page" :length="15" :total-visible="7" />
          </v-container>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      page: 1,
      dataLSK: [
        {
          nomorDataLSK: 1,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 2,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 3,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 4,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 5,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 6,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 7,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 8,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 9,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 10,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 11,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 12,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 13,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 14,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 15,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 16,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 17,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 18,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 19,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
        {
          nomorDataLSK: 20,
          namaLSK: 'Lingkungan Hidup Lestari',
          nomorTelephoneLSK: '08811158811',
          emailLSK: 'example@gmail.com',
          alamatLSK: 'Gedung PT PLN (Persero), Area Lenteng Agung Lantai 2, Jalan Raya Tanjung Barat No. 55 Jakarta Selatan'
        },
      ],
      exportToFile: [
        [
          'mdi-file-excel',
          'Export to Excel'
        ],
        [
          'mdi-file-pdf-box',
          'Export to PDF'
        ],
      ]
    })
  }
</script>