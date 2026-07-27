# TOXENTRA Website (Next.js)

Bu proje TOXENTRA'nın yeni web sitesinin Next.js (App Router) + Tailwind CSS
ile hazırlanmış hâlidir. 4 sayfa içerir: Home (`/`), About Us (`/about`),
Services (`/services`), Contact (`/contact`).

## Yerelde çalıştırmak için

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Contact formu — e-posta gönderimi (Resend)

Contact formu `/api/contact` adında bir API route'a bağlı ve gerçek e-posta
göndermek için [Resend](https://resend.com) kullanıyor. Çalışması için:

1. [resend.com](https://resend.com) üzerinden ücretsiz bir hesap açın.
2. Bir API key oluşturun.
3. Projenin kök dizininde `.env.local` adında bir dosya oluşturup şunu ekleyin:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
4. Vercel'e deploy ederken aynı değişkeni **Project Settings → Environment
   Variables** kısmından da eklemeniz gerekir (yerel `.env.local` dosyası
   Vercel'e otomatik taşınmaz).
5. **Önemli:** `app/api/contact/route.js` içinde gönderen adres
   (`FROM_EMAIL`) `info@toxentra.com` olarak ayarlı. Resend, bu adresin
   çalışması için **toxentra.com alan adının Resend hesabınızda doğrulanmış**
   olmasını şart koşar (Resend panelinde Domains → Add Domain, ardından
   verilen DNS kayıtlarını (TXT/CNAME) alan adınızın DNS ayarlarına
   eklemeniz gerekir). Alan adı doğrulanana kadar gönderim başarısız olur;
   test için geçici olarak Resend'in `onboarding@resend.dev` adresini
   kullanabilirsiniz. Mesajların gideceği kutu (`TO_EMAIL`) da aynı
   dosyada, `info@toxentra.com` olarak ayarlı.

API key eklenmeden form denenirse, kullanıcıya hata mesajı gösterilir
(sessizce başarısız olmaz).

## Vercel'e yayınlamak

**En kolay yol — GitHub üzerinden:**

1. Bu klasörü bir GitHub deposuna push edin.
2. [vercel.com](https://vercel.com) üzerinden "Add New Project" ile bu depoyu
   içe aktarın. Vercel, Next.js projesini otomatik algılar; ek ayar
   gerekmez.
3. `RESEND_API_KEY` ortam değişkenini ekleyin (yukarıya bakın).
4. "Deploy" butonuna basın. Her yeni push'ta site otomatik güncellenir.

**Vercel CLI ile:**

```bash
npm install -g vercel
vercel        # önizleme deploy
vercel --prod # canlıya alma
```

## Yapı

```
app/
  layout.js               -> ortak <html>/<body>, sayfa metadata
  globals.css              -> Tailwind + global stiller
  page.js                   -> Ana sayfa (/)
  about/page.js               -> About Us (/about)
  services/page.js             -> Services (/services)
  contact/page.js               -> Contact (/contact)
  contact/ContactForm.js         -> form (client component, /api/contact'a POST atar)
  api/contact/route.js            -> form gönderimini Resend ile e-postaya çeviren API route
components/
  Navbar.js   -> tüm sayfalarda kullanılan üst menü
  Footer.js   -> tüm sayfalarda kullanılan alt bilgi
  Logo.js     -> gerçek logo dosyalarını kullanan bileşenler
public/
  logo.png        -> açık zeminler için (navbar, hero kartları)
  logo-light.png   -> koyu zemin için (footer)
```

## Henüz yapılmayanlar / bilerek bırakılanlar

- **"Learn More"** (Services) ve **"Scientific Resources" / "Projects"**
  bağlantıları şimdilik `#` — bu sayfaların içerikleri netleşince
  eklenecek.
- Ana sayfadaki hero görseli şu an mevcut toxentra.com'daki görselin
  doğrudan URL'sine bağlı (`www.toxentra.com/wp-content/uploads/...`).
  WordPress kaldırılırsa bu görsel de `public/` klasörüne taşınmalı.
