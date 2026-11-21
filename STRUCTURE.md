# STRUCTURE

```
WEB 7/
├── .env
├── .env.example
├── .gitignore
├── .oxlintrc.json
├── PROGRESS.md
├── README.md
├── STRUCTURE.md
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── favicon.svg
└── src/
    ├── App.tsx
    ├── main.tsx
    └── vite-env.d.ts
```

- `.env`: menyimpan nilai konfigurasi Vite lokal dan tidak masuk Git.
- `.env.example`: contoh konfigurasi env yang wajib masuk Git.
- `.gitignore`: mengatur berkas dan folder yang diabaikan Git.
- `.oxlintrc.json`: konfigurasi aturan lint proyek.
- `PROGRESS.md`: catatan status pengerjaan tahap 1.
- `STRUCTURE.md`: dokumentasi struktur direktori dan fungsi berkas.
- `index.html`: halaman HTML utama dengan bahasa Indonesia dan judul aplikasi.
- `package.json`: daftar dependensi dan script proyek.
- `package-lock.json`: pengunci versi dependensi npm.
- `tsconfig.json`: konfigurasi TypeScript utama dengan referensi proyek.
- `tsconfig.app.json`: konfigurasi TypeScript strict untuk kode aplikasi.
- `tsconfig.node.json`: konfigurasi TypeScript untuk berkas konfigurasi Vite.
- `vite.config.ts`: konfigurasi Vite dengan plugin React.
- `public/favicon.svg`: ikon kalender aplikasi.
- `src/App.tsx`: menampilkan nama aplikasi, nama mahasiswa, dan NIM dari env.
- `src/main.tsx`: merender App ke root di dalam StrictMode.
- `src/vite-env.d.ts`: mendefinisikan tipe tiga variabel environment Vite.
