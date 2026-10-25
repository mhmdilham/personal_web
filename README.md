<div align="center">

# 🌐 Muhammad Ilham — Personal Portfolio

[![Astro](https://img.shields.io/badge/Astro_v5-%23BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v3-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-%23F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0AE448?style=for-the-badge)](./LICENSE)
[![Website](https://img.shields.io/badge/Live_Site-mhmdilham.me-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mhmdilham.me)

<p align="center">
  A modern, high-performance, and security-hardened personal portfolio website built with <b>Astro v5</b> and <b>Tailwind CSS</b>. Designed with a cyber-minimalist dark aesthetic, zero unnecessary client-side JavaScript, and strict enterprise security headers.
</p>

[**Explore Live Demo »**](https://mhmdilham.me) · [Report Bug](https://github.com/mhmdilham/personal_web/issues) · [Request Feature](https://github.com/mhmdilham/personal_web/issues)

</div>

---

## 📑 Daftar Isi / Table of Contents

- [✨ Fitur Utama (Key Features)](#-fitur-utama-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Struktur Proyek (Project Structure)](#-struktur-proyek-project-structure)
- [🚀 Memulai (Getting Started)](#-memulai-getting-started)
  - [Prasyarat](#prasyarat)
  - [Instalasi](#instalasi)
  - [Menjalankan Development Server](#menjalankan-development-server)
  - [Membangun untuk Produksi (Build)](#membangun-untuk-produksi-build)
- [🛡️ Konfigurasi Keamanan & Header HTTP](#️-konfigurasi-keamanan--header-http)
- [🤖 Optimasi SEO & AI Agent (LLMs.txt)](#-optimasi-seo--ai-agent-llmstxt)
- [📄 Lisensi (License)](#-lisensi-license)

---

## ✨ Fitur Utama (Key Features)

- **⚡ Performa Maksimal (Near 100 Lighthouse)**:
  - Menggunakan arsitektur statis Astro v5 (*Islands Architecture*) tanpa runtime JavaScript berlebih.
  - Critical CSS di-inline secara otomatis untuk *First Contentful Paint* (FCP) instan.
  - Font self-hosted via `@fontsource-variable/archivo` untuk mencegah layout shift (CLS).
- **🛡️ Keamanan Tingkat Tinggi (Grade A+ Security)**:
  - Header HTTP lengkap via `public/_headers` (HSTS Preload, X-Content-Type-Options: `nosniff`, X-Frame-Options: `DENY`, Strict Referrer-Policy).
  - Kebijakan Keamanan Konten (*Content Security Policy* / CSP) ketat tanpa `'unsafe-inline'` untuk script pihak ketiga.
  - Standar pelaporan kerentanan keamanan via `.well-known/security.txt`.
- **📬 Formulir Kontak Ramah Privasi & Bebas Spam**:
  - Integrasi Pageclip API tanpa mengekspos alamat email mentah di HTML publik, mencegah spamming dan scraper bot.
  - Lazy-loading interaktif via `public/init-form.js`.
- **🔍 SEO Modern & JSON-LD Terstruktur**:
  - Schema.org (`Person`, `WebSite`, `ProfilePage`) terintegrasi penuh.
  - OpenGraph cards (`og:image`, `twitter:card`) untuk preview media sosial yang kaya.
  - Otomatis menyediakan `sitemap.xml` dan `robots.txt`.
- **🤖 Siap AI & Agentic Web (LLMs.txt Ready)**:
  - Mendukung standar [llmstxt.org](https://llmstxt.org/) dengan file `/llms.txt` dan `/llms-full.txt` agar mudah dipahami oleh asisten AI dan web agent.
- **📱 Desain Responsif & Estetika Cyber Minimalist**:
  - Palet warna gelap elegan (`#050F16`) dengan aksen hijau cyber (`#0AE448`).
  - Standar aksesibilitas WCAG AA untuk kontras dan navigasi keyboard.

---

## 🛠️ Tech Stack

| Kategori | Teknologi | Deskripsi |
|---|---|---|
| **Framework** | [Astro v5](https://astro.build/) | Static Site Generator ultra-cepat berbasis komponen |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first CSS framework untuk styling responsif |
| **Typography** | [Archivo Variable](https://fontsource.org/fonts/archivo) | Modern geometric variable typography |
| **Contact Backend** | [Pageclip](https://pageclip.co/) | Serverless form endpoint yang aman & ringan |
| **Deployment / CDN** | [Cloudflare Pages](https://pages.cloudflare.com/) | Global edge network dengan proteksi DDoS bawaan |
| **Language** | TypeScript / HTML5 / CSS3 | Modern typed web standards |

---

## 📂 Struktur Proyek (Project Structure)

```text
personal_web/
├── public/                     # Aset statis & konfigurasi edge
│   ├── .well-known/
│   │   └── security.txt        # RFC 9116 security contact disclosure
│   ├── _headers                # Cloudflare Pages security & caching headers
│   ├── favicon.svg             # Favicon SVG
│   ├── init-form.js            # Lazy loader untuk form Pageclip (CSP-compliant)
│   ├── llms.txt                # Ringkasan data untuk AI / LLM crawler
│   ├── llms-full.txt           # Data lengkap portofolio format markdown untuk LLM
│   ├── og-image.png            # OpenGraph social share card
│   ├── pageclip.js             # Client library Pageclip
│   ├── robots.txt              # Aturan crawler mesin pencari
│   └── sitemap.xml             # XML sitemap untuk Google & Bing
├── src/
│   ├── components/             # Komponen UI Astro
│   │   ├── About.astro         # Bagian tentang saya & profil
│   │   ├── Experience.astro    # Riwayat pendidikan, magang, & organisasi
│   │   ├── FAQ.astro           # Pertanyaan yang sering diajukan
│   │   ├── Footer.astro        # Footer dengan status, lokasi, & tautan sosial
│   │   ├── Hero.astro          # Hero section dengan call-to-action
│   │   ├── Navbar.astro        # Navigasi responsif
│   │   ├── Now.astro           # /now section (fokus saat ini)
│   │   ├── Projects.astro      # Showcase proyek unggulan
│   │   └── Skills.astro        # Daftar keahlian teknis & tools
│   ├── layouts/
│   │   └── Layout.astro        # Base layout, metadata SEO, & schema JSON-LD
│   ├── pages/
│   │   ├── index.astro         # Halaman utama portofolio
│   │   └── privacy.astro       # Kebijakan privasi data formulir
│   └── styles/
│       └── global.css          # Global styling & custom utility classes
├── astro.config.mjs            # Konfigurasi Astro
├── tailwind.config.mjs         # Konfigurasi theme & warna Tailwind
├── package.json                # Dependensi & script NPM
└── LICENSE                     # Lisensi open-source MIT
```

---

## 🚀 Memulai (Getting Started)

### Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) versi `18.14.1` atau yang lebih baru.
- Manajer paket `npm` (atau `pnpm` / `yarn`).
- [Git](https://git-scm.com/).

### Instalasi

1. Clone repositori ini ke komputer lokal Anda:
   ```bash
   git clone https://github.com/mhmdilham/personal_web.git
   cd personal_web
   ```

2. Pasang semua dependensi proyek:
   ```bash
   npm install
   ```

### Menjalankan Development Server

Jalankan server lokal:
```bash
npm run dev
```

Buka peramban Anda di `http://localhost:4321` untuk melihat situs secara langsung. File yang diubah akan otomatis diperbarui (*hot reload*).

### Membangun untuk Produksi (Build)

Untuk meng-compile seluruh proyek menjadi file HTML/CSS statis murni:
```bash
npm run build
```

Hasil kompilasi akan berada di direktori `dist/`. Anda dapat mempratinjaunya secara lokal menggunakan:
```bash
npm run preview
```

---

## 🛡️ Konfigurasi Keamanan & Header HTTP

Proyek ini telah dikonfigurasi secara ketat untuk mendapatkan skor keamanan tertinggi pada scanner seperti Mozilla Observatory dan SecurityHeaders:

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: accelerometer=(), camera=(), geolocation=(), microphone=(), payment=()
Content-Security-Policy: default-src 'self'; script-src 'self' https://send.pageclip.co https://static.cloudflareinsights.com; ...
```

Konfigurasi ini didefinisikan dalam file `public/_headers` yang otomatis diterapkan saat dideploy ke **Cloudflare Pages**.

---

## 🤖 Optimasi SEO & AI Agent (LLMs.txt)

Website ini mendukung spesifikasi penemuan konten untuk model bahasa besar (LLM):
- **`/llms.txt`**: Struktur ringkas informasi diri, tautan penting, keahlian utama, dan proyek.
- **`/llms-full.txt`**: Dokumentasi teks lengkap tanpa format HTML yang dirancang untuk dibaca oleh asisten AI seperti Claude, ChatGPT, dan Perplexity saat menelusuri portofolio.

---

## 📄 Lisensi (License)

Source code proyek ini dirilis di bawah lisensi [MIT License](./LICENSE).

> **Catatan:** Konten personal, teks portofolio, logo, dan identitas pribadi adalah hak cipta milik **Muhammad Ilham**. Anda dipersilakan menggunakan basis kodingan ini sebagai template dengan tetap mencantumkan atribusi lisensi.

---

<div align="center">
  Dibuat dengan ❤️ oleh <a href="https://mhmdilham.me">Muhammad Ilham</a>
</div>
