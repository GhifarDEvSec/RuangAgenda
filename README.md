# Instruksi Agent: React 1 dari 5 (Inisialisasi Proyek)

## 1. Konteks

Aplikasi web "Agenda Kegiatan Mahasiswa" dengan React, Vite, dan TypeScript untuk tugas Component-Based UI Development. Pekerjaan dibagi 5 tahap. Sekarang hanya mengerjakan tahap 1. Jangan membuat komponen atau fitur milik tahap lain. Setelah selesai, berhenti dan tunggu perintah.

## 2. Aturan

- Jangan menjalankan git add, commit, branch, switch, merge, push, pull. Hanya git status dan git diff yang diperbolehkan.
- Jangan deploy.
- Dilarang menulis komentar di kode apa pun (TS, TSX, CSS, HTML, konfigurasi).
- Dilarang memakai tipe any.
- Teks antarmuka Bahasa Indonesia.
- Folder kerja adalah hasil git clone repo kosong. Buat proyek langsung di root folder ini, bukan di subfolder. Jangan menghapus folder .git.

## 3. Stack

Vite versi stabil terbaru dengan template react-ts, React, TypeScript strict, npm. Buat proyek tanpa mode interaktif (misalnya npm create vite@latest . -- --template react-ts) dan pilih opsi yang tidak memulai server otomatis.

## 4. Spesifikasi

### Berkas akhir
```
index.html
package.json
package-lock.json
tsconfig.json (dan tsconfig turunan bawaan template)
vite.config.ts
.gitignore
.env
.env.example
PROGRESS.md
STRUCTURE.md
public/favicon.svg
src/main.tsx
src/App.tsx
src/vite-env.d.ts
```

### index.html
- lang="id", meta viewport, title "Agenda Kegiatan Mahasiswa", favicon dari public/favicon.svg.

### .env (tidak boleh masuk Git)
```
VITE_APP_NAME=Agenda Kegiatan Mahasiswa
VITE_STUDENT_NAME=Nama Mahasiswa
VITE_STUDENT_NIM=0000000000
```
.env.example berisi sama persis dan wajib masuk Git. Dilarang menaruh password, token, atau API key di sini. vite-env.d.ts memperluas ImportMetaEnv dengan tiga variabel itu.

### .gitignore
```
node_modules
dist
.env
.env.local
.env.*.local
*.log
.DS_Store
.vscode/*
!.vscode/extensions.json
```

### src/App.tsx dan src/main.tsx
- main.tsx merender App di dalam StrictMode.
- App hanya menampilkan satu elemen berisi nilai VITE_APP_NAME, VITE_STUDENT_NAME, dan VITE_STUDENT_NIM sebagai bukti env terbaca. Belum ada komponen lain.

### public/favicon.svg
Ikon sederhana kalender atau centang, satu warna utama.

### Pembersihan
Hapus App.css, index.css bawaan, assets/react.svg, public/vite.svg, dan isi contoh template. Pastikan tidak ada rujukan ke berkas yang dihapus. Biarkan tsconfig strict aktif dan script bawaan (dev, build, preview, lint).

### PROGRESS.md dan STRUCTURE.md
PROGRESS.md: nomor tahap, status, berkas dibuat, diubah, dihapus, hal belum selesai. STRUCTURE.md: pohon direktori dan satu baris fungsi tiap berkas penting.

## 5. Checkpoint

- [ ] npm install tanpa error
- [ ] npm run dev menampilkan nama aplikasi, nama, dan NIM dari env
- [ ] npm run build berhasil
- [ ] .env tidak muncul di git status, .env.example muncul
- [ ] Tidak ada komentar dan tidak ada any

## 6. Laporan Akhir

Tampilkan pohon direktori, hasil npm run build, keluaran git status (hanya baca), dan saran commit tanpa menjalankannya: "chore: inisialisasi proyek React Vite TypeScript". Tutup dengan: "React 1 selesai. Menunggu perintah lanjut React 2." Lalu berhenti.