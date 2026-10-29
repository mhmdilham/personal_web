<div align="center">

# 🌐 Muhammad Ilham — Personal Website

[![Astro](https://img.shields.io/badge/Astro_v5-%23BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v3-%2338B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-%23F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Website](https://img.shields.io/badge/Live_Site-mhmdilham.me-0AE448?style=flat-square&logo=googlechrome&logoColor=white)](https://mhmdilham.me)

<p align="center">
  Repositori kode sumber untuk situs web dan portofolio profesional pribadi <b>Muhammad Ilham</b>.
</p>

[**Kunjungi Situs (Live) »**](https://mhmdilham.me) · [Domain Alternatif](https://mhmdilham.web.id)

</div>

---

## 📌 Tentang Website Ini

Repositori ini memuat kode sumber untuk situs web dan portofolio pribadi saya sebagai mahasiswa Informatika di Universitas Teknologi Yogyakarta (UTY) yang berfokus pada **Web & Mobile Development (Astro, Flutter, dan Modern Web)**.

Situs ini dibangun dengan pendekatan minimalis, performa instan (*near-instant loading*), arsitektur keamanan tingkat tinggi (*enterprise-grade HTTP security headers*), serta perlindungan privasi penuh tanpa mengekspos data pribadi mentah ke publik.

---

## 🛠️ Spesifikasi & Arsitektur Teknis

- **Core Framework**: [Astro v5](https://astro.build/) (Static Site Generation dengan *zero client-side JS runtime overhead*).
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) dengan tema gelap modern (*cyber-minimalist* `#050F16` dan aksen `#0AE448`).
- **Tipografi**: `@fontsource-variable/archivo` (self-hosted variable font untuk mencegah Cumulative Layout Shift).
- **Infrastruktur & CDN**: [Cloudflare Pages](https://pages.cloudflare.com/) dengan edge network global dan proteksi DDoS.
- **Keamanan & Header HTTP**:
  - HSTS Preload (`max-age=31536000; includeSubDomains; preload`).
  - Strict Content Security Policy (CSP) tanpa `'unsafe-inline'` pada script eksternal.
  - Proteksi XSS, MIME-sniffing, dan anti-clickjacking (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`).
  - Standar pengungkapan keamanan RFC 9116 via `.well-known/security.txt`.
- **Formulir Kontak**: Integrasi endpoint Pageclip yang aman tanpa mengekspos alamat email di berkas publik (mencegah scraping dan bot spam).
- **Optimasi AI & Mesin Pencari**:
  - Schema.org Structured Data (`Person`, `WebSite`, `ProfilePage`).
  - OpenGraph & Twitter Card metadata.
  - Standar [llmstxt.org](https://llmstxt.org/) (`/llms.txt` & `/llms-full.txt`) agar konten portofolio dapat diindeks dan dibaca secara optimal oleh AI/LLM agent.

---

## 📂 Komponen & Struktur Halaman

- **Hero & Status**: Perkenalan ringkas, spesialisasi, dan status ketersediaan proyek.
- **About**: Latar belakang akademik Informatika UTY dan fokus pengembangan.
- **Experience**: Rekam jejak pendidikan, magang, dan kegiatan organisasi.
- **Projects**: Showcase proyek web dan aplikasi mobile yang telah dikembangkan.
- **Skills**: Rincian teknologi, bahasa pemrograman, dan tools yang dikuasai.
- **Now (`/now`)**: Fokus dan hal yang sedang dipelajari atau dikerjakan saat ini.
- **Contact Form**: Formulir pesan langsung ke inbox pribadi yang aman dan terlindungi dari bot.
- **Privacy Policy (`/privacy`)**: Kebijakan privasi penanganan data formulir kontak.

---
