# Fibona Academy — Company Profile

Company profile stateless untuk Fibona Academy, dibuat menggunakan React + Vite dan Lucide React. Styling memakai CSS custom dengan Tailwind CSS v4 terpasang untuk pengembangan lanjutan.

## Menjalankan project

1. Install Node.js versi LTS.
2. Buka folder project di VS Code.
3. Jalankan:

```bash
npm install
npm run dev
```

4. Buka URL lokal yang tampil di terminal (umumnya `http://localhost:5173`).

Build produksi:

```bash
npm run build
npm run preview
```

Folder hasil build: `dist/`.

## Deploy gratis ke Cloudflare Pages

1. Upload isi folder ini ke repository GitHub (jangan upload `node_modules`).
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Pilih repository.
4. Framework preset: Vite.
5. Build command: `npm run build`.
6. Build output directory: `dist`.
7. Deploy. Cloudflare memberikan subdomain `*.pages.dev`.

## Data yang sudah dimasukkan dari dokumen

- Nama: Fibona Academy.
- Tagline: Small steps, infinite possibilities.
- Profil, filosofi Fibonacci, visi, misi F-I-B-O-N-A.
- Program SD, SMP, SMA, Private Learning, Prestasi & Olimpiade.
- Keunggulan, fokus semua mata pelajaran dan persiapan TKA.
- Kelas reguler dan private.
- Metode online dan offline sesuai dokumen.
- WhatsApp: 0857-9781-4770.
- Tema warna: biru tua dan emas.
- Nama pengajar Eullis Sholehah dan lokasi Yogyakarta diambil dari informasi percakapan sebelumnya.

## Konten placeholder yang WAJIB diperiksa sebelum publikasi

- Foto tutor dan galeri memakai foto ilustrasi dari Unsplash, bukan foto asli Fibona.
- Bio/pendidikan/pengalaman pengajar masih placeholder.
- Alamat lembaga belum tersedia.
- Instagram belum tersedia.
- Testimoni sepenuhnya fiktif dan diberi label demo; hapus/ganti dengan testimoni asli sebelum website dipublikasikan.
- Logo saat ini berupa wordmark sementara. Ganti dengan logo final dari tautan Canva yang ada di dokumen.
- Dokumen menyebut sistem online dan offline. Jika operasional awal hanya online, ubah copy pada bagian kontak/program.

## Catatan teknis

Website ini stateless: tidak menggunakan database, backend, login, dashboard, atau penyimpanan form. Tombol WhatsApp membuka chat ke nomor yang tercantum. Gambar Unsplash memerlukan internet saat halaman dibuka.


## Foto dan logo Fibona Academy
Aset resmi yang diberikan telah dipasang di `public/images/`:
- `logo-fibona.png`
- `eullis.jpg`
- `kegiatan-1.jpg` sampai `kegiatan-4.jpg`

Untuk mengganti foto ke depannya, timpa file dengan nama yang sama atau ubah path gambar di `src/App.jsx`.
