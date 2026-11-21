# Tahap 4 dari 5: Tambah dan Hapus Kegiatan

## Konteks
Tahap 1 sampai 3 selesai. Kerjakan hanya form tambah dan hapus. Status, cari, dan filter dikerjakan di tahap lain. Setelah selesai, berhenti.

## Aturan
- Hanya git status dan git diff.
- Dilarang komentar, tipe any, dan dangerouslySetInnerHTML. Ikuti desain yang ada.
- Dilarang menyebut AI, agent, atau nama tool di berkas repo. Jangan membuat PROGRESS.md atau STRUCTURE.md.
- Satu komponen satu berkas, ekspor default, props bertipe interface. Teks Bahasa Indonesia.

## Syarat tugas yang dipenuhi tahap ini
- Fitur interaktif 2 dan 3: menambah data dan menghapus data.
- useState: nilai kolom form.
- Event handling: onChange, onSubmit, onClick hapus.
- Props: fungsi onAdd dan onDelete dikirim dari parent ke child.
- Conditional rendering: pesan validasi.

## Berkas wajib
Dibuat: src/components/ActivityForm.tsx.
Diubah: src/types.ts, src/App.tsx, src/components/ActivityList.tsx, src/components/ActivityItem.tsx, src/styles/components.css.

## Spesifikasi
- types.ts: tambah NewActivityInput = Omit<Activity, "id" | "status">.
- ActivityForm: props onAdd(NewActivityInput). Kolom terkontrol useState: Judul, Kategori (select), Tanggal (date), Deskripsi (textarea), masing-masing dengan label terhubung. onChange tiap kolom, onSubmit dengan preventDefault. Judul dan tanggal wajib, pesan kesalahan di bawah kolom. Setelah berhasil panggil onAdd lalu kosongkan form. Dirender di atas daftar dalam kartu "Tambah Kegiatan".
- App: handleAdd membuat Activity baru (id crypto.randomUUID, status "belum") di awal array dengan spread. handleDelete menghapus berdasarkan id dengan filter. Keduanya dikirim lewat props.
- ActivityList meneruskan onDelete ke ActivityItem. ActivityItem punya Button "Hapus" bervarian bahaya dengan aria-label berisi judul; klik memunculkan window.confirm, jika setuju memanggil onDelete(activity.id).
- CSS: form dua kolom mulai 640px, input tinggi minimal 44px, pesan kesalahan berwarna bahaya, rapi di 360px sampai 1440px.

## Checkpoint
- [ ] Semua berkas wajib di atas ada
- [ ] npm run build berhasil
- [ ] Tambah berfungsi dan tampil paling atas, validasi menolak kolom wajib kosong
- [ ] Hapus meminta konfirmasi; menghapus semua memunculkan EmptyState
- [ ] Tanpa komentar, any, atau penyebutan AI/agent
- [ ] .env tidak muncul di git status

## Laporan Akhir
Pohon direktori, hasil build, git status, saran commit: "feat: tambah dan hapus kegiatan". Tutup dengan "Tahap 4 selesai." lalu berhenti.