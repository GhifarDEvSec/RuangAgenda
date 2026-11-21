# Tahap 2 dari 5: Layout dan Komponen Dasar

## Konteks
Tahap 1 selesai. Kerjakan hanya tipe data, layout, komponen reusable, dan CSS dasar. Daftar, form, dan filter dikerjakan di tahap lain. Setelah selesai, berhenti.

## Aturan
- Hanya git status dan git diff.
- Dilarang komentar, tipe any, framework CSS, pustaka komponen, dan sumber eksternal (CDN, Google Fonts).
- Dilarang menyebut AI, agent, atau nama tool di berkas repo. Jangan membuat PROGRESS.md atau STRUCTURE.md.
- Satu komponen satu berkas, nama berkas sama dengan nama komponen, ekspor default, props bertipe interface.
- Teks antarmuka Bahasa Indonesia. Hanya sentuh berkas tahap ini.

## Syarat tugas yang dipenuhi tahap ini
- Minimal 5 komponen di file berbeda: Navbar, Header, About, Footer, Button, Badge (6 komponen).
- Reusable: Button dan Badge menerima props sehingga dipakai ulang di banyak tempat.
- Props: App mengirim data ke Navbar, Header, About, Footer.
- useState dan event handling: tombol menu di Navbar.
- Conditional rendering: menu mobile tampil atau tersembunyi.
- List rendering: tautan Navbar dirender dengan map dan key.
- Navigasi jelas, nama dan NIM tampil.

## Dependensi
```
npm install @fontsource-variable/outfit
```
Impor di main.tsx. Font Outfit dengan fallback sans-serif.

## Berkas wajib
Dibuat:
```
src/types.ts
src/config.ts
src/components/Navbar.tsx
src/components/Header.tsx
src/components/About.tsx
src/components/Footer.tsx
src/components/ui/Button.tsx
src/components/ui/Badge.tsx
src/styles/tokens.css
src/styles/base.css
src/styles/components.css
```
Diubah: src/App.tsx, src/main.tsx.

## Spesifikasi
- types.ts: ActivityId = string; ActivityStatus = "belum" | "selesai"; ActivityCategory = "Akademik" | "Organisasi" | "Pribadi"; interface Activity (id, title, category, date YYYY-MM-DD, description, status).
- config.ts: membaca tiga variabel env, mengekspor appConfig (appName, studentName, studentNim). Satu-satunya tempat membaca import.meta.env.
- Button: props label, onClick, variant ("utama" | "netral" | "bahaya"), type, disabled, elemen button.
- Badge: props text, tone ("sukses" | "peringatan" | "netral"), elemen span.
- Navbar: props appName dan links (array interface NavLink: label, href). Tautan Beranda (#beranda), Kegiatan (#kegiatan), Tentang (#tentang) dirender dengan map dan key. Di bawah 768px menu disembunyikan dan dibuka tombol menu memakai useState; menu menutup setelah tautan diklik.
- Header (id beranda): props studentName, studentNim. Judul besar, kalimat singkat, nama dan NIM.
- About (id tentang): penjelasan singkat aplikasi, nama dan NIM pembuat.
- Footer: props appName, studentName, studentNim.
- App: Navbar, Header, section kosong id kegiatan berjudul "Daftar Kegiatan", About, Footer. Data dari appConfig dikirim sebagai props.

## Desain
Latar biru sangat gelap, kartu sedikit lebih terang dengan border tipis, satu aksen lime, teks terang kontras minimal 4.5:1. Judul besar dengan satu kata berwarna aksen. Hover halus, dimatikan pada prefers-reduced-motion. Bukan tampilan template bawaan.
- tokens.css: warna, radius, bayangan, jarak, font fluid (clamp).
- base.css: reset ringan, container maksimum 1100px (padding 16px, 24px di tablet ke atas), tanpa scroll horizontal, scroll-behavior smooth (mati pada reduced-motion), fokus keyboard jelas, navbar sticky.
- components.css: semua komponen, rapi di 360px, 768px, 1024px, 1440px, target sentuh minimal 44px.

## Checkpoint
- [ ] Semua berkas wajib di atas ada (periksa dengan ls)
- [ ] npm run build berhasil
- [ ] Navigasi menggulir ke tiga bagian, menu mobile berfungsi
- [ ] Nama dan NIM tampil di header, About, footer
- [ ] Tanpa scroll horizontal, komentar, any, atau penyebutan AI/agent
- [ ] .env tidak muncul di git status

## Laporan Akhir
Pohon direktori, hasil build, git status, saran commit: "feat: tambah layout dan komponen dasar". Tutup dengan "Tahap 2 selesai." lalu berhenti.