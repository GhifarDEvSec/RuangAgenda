# RuangAgenda

RuangAgenda adalah aplikasi Agenda Kegiatan Mahasiswa berbasis React dan Vite. Aplikasi ini membantu mahasiswa mencatat kegiatan akademik, organisasi, dan pribadi, lalu memantau statusnya dalam satu tampilan yang rapi.

## Identitas

- Nama: Nama Mahasiswa
- NIM: 0000000000

## Fitur

- Menampilkan daftar kegiatan dalam bentuk kartu.
- Menambah kegiatan baru melalui formulir dengan validasi kolom wajib.
- Menghapus kegiatan dengan konfirmasi.
- Mengubah status kegiatan antara belum dan selesai.
- Mencari kegiatan berdasarkan judul atau deskripsi.
- Memfilter kegiatan berdasarkan status: semua, belum, atau selesai.
- Menampilkan ringkasan total, belum, dan selesai.
- Membuka dan menyembunyikan detail kegiatan.
- Tampilan responsif dari layar ponsel sampai desktop.

## Teknologi

- React
- TypeScript
- Vite
- CSS murni
- Font Outfit

## Komponen

- `Navbar`: navigasi utama dengan menu responsif.
- `Header`: bagian pembuka berisi judul, ringkasan, nama, dan NIM.
- `About`: penjelasan aplikasi dan identitas pembuat.
- `Footer`: informasi aplikasi dan identitas mahasiswa.
- `Button`: tombol yang dapat dipakai ulang dengan beberapa varian.
- `Badge`: label kecil untuk kategori, status, dan ringkasan.
- `ActivityForm`: formulir terkontrol untuk menambah kegiatan.
- `ActivityList`: menampilkan daftar kegiatan atau keadaan kosong.
- `ActivityItem`: kartu kegiatan dengan detail, status, dan hapus.
- `FilterBar`: pencarian dan filter status kegiatan.
- `EmptyState`: tampilan saat data kegiatan kosong atau tidak cocok.

## Cara Menjalankan

1. Pasang dependensi.

   ```bash
   npm install
   ```

2. Salin berkas contoh environment.

   ```bash
   cp .env.example .env
   ```

3. Sesuaikan nama dan NIM pada `.env` bila diperlukan.

4. Jalankan server pengembangan.

   ```bash
   npm run dev
   ```

5. Buka alamat yang ditampilkan di terminal.

## npm Scripts

- `npm run dev`: menjalankan server pengembangan.
- `npm run build`: melakukan pemeriksaan TypeScript dan membangun aplikasi untuk produksi.
- `npm run preview`: menampilkan hasil build secara lokal.
- `npm run lint`: memeriksa kode dengan aturan lint proyek.

## Environment Variables

Berkas `.env` memuat konfigurasi berikut.

- `VITE_APP_NAME`: nama aplikasi yang tampil di antarmuka.
- `VITE_STUDENT_NAME`: nama mahasiswa pembuat.
- `VITE_STUDENT_NIM`: NIM mahasiswa pembuat.

Gunakan `.env.example` sebagai contoh. Berkas `.env` tidak disertakan dalam repositori.

## Build

Jalankan perintah berikut untuk membuat versi produksi.

```bash
npm run build
```

Hasil build tersimpan di folder `dist`. Untuk memeriksa hasilnya secara lokal, jalankan:

```bash
npm run preview
```
