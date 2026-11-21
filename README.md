# Tahap 3 dari 5: Daftar Kegiatan

## Konteks
Tahap 1 dan 2 selesai. Kerjakan hanya list rendering, conditional rendering, dan tampil atau sembunyi detail. Form, hapus, status, cari, dan filter dikerjakan di tahap lain. Setelah selesai, berhenti.

## Aturan
- Hanya git status dan git diff.
- Dilarang komentar dan tipe any. Ikuti desain di tokens.css dan components.css.
- Dilarang menyebut AI, agent, atau nama tool di berkas repo. Jangan membuat PROGRESS.md atau STRUCTURE.md.
- Satu komponen satu berkas, ekspor default, props bertipe interface. Teks Bahasa Indonesia.

## Syarat tugas yang dipenuhi tahap ini
- List rendering: ActivityList memakai map dengan key activity.id.
- Props: activities ke ActivityList, activity ke ActivityItem.
- useState dan event handling: showDetail pada ActivityItem.
- Conditional rendering: deskripsi hanya tampil saat detail dibuka, EmptyState saat data kosong.
- Fitur interaktif 1: tampilkan atau sembunyikan informasi.
- Reusable: Button dan Badge dipakai ulang.

## Berkas wajib
Dibuat: src/data/initialActivities.ts, src/components/ActivityItem.tsx, src/components/ActivityList.tsx, src/components/EmptyState.tsx.
Diubah: src/App.tsx, src/styles/components.css.

## Spesifikasi
- initialActivities: Activity[] berisi 4 kegiatan kampus realistis, kategori dan status bervariasi (minimal satu selesai), tanggal tahun berjalan.
- ActivityItem: props activity. Menampilkan judul, tanggal terformat Indonesia (20 Mei 2026), Badge kategori, Badge status (selesai bertone sukses, belum bertone peringatan). State lokal showDetail (useState); tombol "Lihat Detail" atau "Sembunyikan Detail" (Button) mengubahnya; deskripsi dirender hanya saat showDetail true; tombol punya aria-expanded.
- EmptyState: props message; ilustrasi SVG sederhana buatan sendiri dan teks.
- ActivityList: props activities. Kosong menampilkan EmptyState "Belum ada kegiatan"; selain itu ActivityItem lewat map dengan key activity.id, di dalam ul dan li.
- App: state activities (useState, nilai awal initialActivities), diteruskan ke ActivityList di section kegiatan. Judul section menampilkan jumlah kegiatan.
- CSS: kartu border tipis, satu kolom di mobile dan dua kolom mulai 768px, animasi muncul halus (mati pada reduced-motion), rapi di 360px sampai 1440px.

## Checkpoint
- [ ] Semua berkas wajib di atas ada
- [ ] npm run build berhasil
- [ ] Empat kegiatan tampil, detail membuka dan menutup
- [ ] Setiap item memakai key unik, EmptyState tampil bila data dikosongkan sementara lalu dikembalikan
- [ ] Tanpa komentar, any, atau penyebutan AI/agent
- [ ] .env tidak muncul di git status

## Laporan Akhir
Pohon direktori, hasil build, git status, saran commit: "feat: tampilkan daftar kegiatan". Tutup dengan "Tahap 3 selesai." lalu berhenti.