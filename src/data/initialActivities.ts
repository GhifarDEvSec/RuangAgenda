import type { Activity } from '../types'

const initialActivities: Activity[] = [
  {
    id: 'kegiatan-1',
    title: 'Seminar Pemrograman Web',
    category: 'Akademik',
    date: '2026-05-20',
    description:
      'Mengikuti seminar tentang pengembangan antarmuka web modern dan praktik aksesibilitas di ruang kelas utama.',
    status: 'selesai',
  },
  {
    id: 'kegiatan-2',
    title: 'Rapat Divisi Acara',
    category: 'Organisasi',
    date: '2026-09-12',
    description:
      'Membahas susunan acara, pembagian tugas, dan kebutuhan perlengkapan untuk kegiatan kampus bulan depan.',
    status: 'belum',
  },
  {
    id: 'kegiatan-3',
    title: 'Belajar Basis Data',
    category: 'Pribadi',
    date: '2026-10-08',
    description:
      'Mengulang materi normalisasi tabel dan latihan menulis query gabungan untuk persiapan ujian tengah semester.',
    status: 'belum',
  },
  {
    id: 'kegiatan-4',
    title: 'Praktikum Struktur Data',
    category: 'Akademik',
    date: '2026-11-03',
    description:
      'Menyelesaikan laporan praktikum tentang implementasi antrean dan pengujian program bersama kelompok.',
    status: 'selesai',
  },
]

export default initialActivities
