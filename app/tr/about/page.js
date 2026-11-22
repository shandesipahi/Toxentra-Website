import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Eye,
  Gem,
  Users,
  FlaskConical,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Microscope,
  Settings,
  TestTube,
  Share2,
  MessageCircle,
  GraduationCap,
  Check,
  Pill,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Hakkımızda — TOXENTRA",
  description:
    "Toxentra, ürün güvenliliğine yönelik bilimsel destek sunan bağımsız bir toksikoloji ve ürün güvenliliği danışmanlık şirketidir.",
};

const values = [
  "Bilimsel Mükemmellik",
  "Dürüstlük ve Bağımsızlık",
  "Kalite ve Titizlik",
  "İşbirliği ve Saygı",
  "Güvenliliğe Bağlılık",
];

const stats = [
  { icon: Pill, big: "İlaç" },
  { icon: HeartPulse, big: "Tıbbi Cihaz" },
  { icon: Sparkles, big: "Kozmetik" },
  { icon: FlaskConical, big: "Kimyasallar ve Nutrasötikler" },
];

const whatWeDo = [
  [
    "Toksikolojik Risk Değerlendirmesi",
    "Biyolojik Değerlendirme (ISO 10993)",
    "Kozmetik Ürün Güvenliliği (CPSR)",
    "Farmasötik Toksikoloji",
  ],
  [
    "Çevresel Risk Değerlendirmesi (ERA)",
    "QSAR ve Read-Across Değerlendirmesi",
    "Bilimsel ve Toksikolojik Raporlar",
    "Farmakovijilans",
  ],
  [
    "Test Stratejisi Tasarımı",
    "Laboratuvar Çalışmalarının Koordinasyonu",
  ],
];

const research = [
  {
    icon: Microscope,
    title: "Yenilikçi Risk Değerlendirmesi",
    text: "İleri toksikolojik yaklaşım ve metodolojilerin geliştirilmesi",
  },
  {
    icon: Settings,
    title: "Tıbbi Cihaz Güvenliliği",
    text: "Biyolojik değerlendirme ve biyouyumluluk stratejileri",
  },
  {
    icon: TestTube,
    title: "Formülasyon ve Ürün Güvenliliği",
    text: "Yeni farmasötik ve kozmetik formülasyonların güvenlilik değerlendirmesi.",
  },
  {
    icon: Share2,
    title: "İşbirlikçi Araştırma",
    text: "Bilimsel ilerleme için akademi ve sanayi işbirlikleri.",
  },
];

const leadership = [
  "Avrupa Kayıtlı Toksikolog (ERT)",
  "Akademik Araştırmacı ve Öğretim Üyesi",
  "Uluslararası Bilimsel Yayınlar",
  "Toksikolojik Risk Değerlendirmesi, Tıbbi Cihaz Güvenliliği ve Regülasyon Toksikolojisi Uzmanı",
];

function Eyebrow({ children, className = "" }) {
  return (
    <span className={`text-xs font-semibold tracking-widest uppercase text-green ${className}`}>
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar active="about" locale="tr" />

      {/* FOUNDER */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16">
        <Eyebrow>HAKKIMIZDA · KURUCUMUZ</Eyebrow>
        <h1 className="text-4xl md:text-[2.75rem] leading-[1.15] font-bold font-serif mt-3 mb-6 text-navy-deep max-w-3xl">
          Bir toksikolog tarafından kuruldu. İki on yıllık bilimin üzerine{" "}
          <span className="text-green">inşa edildi</span>.
        </h1>
        <div className="w-14 h-[3px] mb-14 bg-green" />

        <div className="grid md:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-center pb-20">
          <div>
            <div className="relative">
              <Image
                src="/hande-sipahi.jpg"
                alt="Prof. Dr. Hande Sipahi"
                width={782}
                height={984}
                priority
                className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-navy-deep">
              Prof. Dr. Hande Sipahi
              <span className="text-green">, PhD, ERT, ATS</span>
            </h2>
            <p className="text-green font-medium text-sm mt-1 mb-5">Kurucu ve Bilimsel Direktör</p>
            <p className="text-slate-600 leading-relaxed mb-8">
              <strong className="font-semibold text-navy-deep">Farmasötik toksikoloji alanında 20 yılı aşkın akademik ve sektörel deneyime sahip olan</strong> Prof. Dr. Hande Sipahi, <strong className="font-semibold text-navy-deep">TOXENTRA’nın kurucusu ve bilimsel direktörüdür</strong>. <strong className="font-semibold text-navy-deep">Sağlık Bilimleri Üniversitesi Eczacılık Fakültesi Toksikoloji Anabilim Dalı Başkanı</strong> olarak görev yapan Sipahi’nin başlıca uzmanlık alanları <strong className="font-semibold text-navy-deep">toksikolojik risk değerlendirmesi, ürün güvenliliği, biyouyumluluk ve farmakovijilanstan</strong> oluşmaktadır. <strong className="font-semibold text-navy-deep">Avrupa Kayıtlı Toksikolog (ERT)</strong> unvanına sahip olup <strong className="font-semibold text-navy-deep">Academy of Toxicological Sciences (ATS) Fellow’udur</strong>.
            </p>
            <ul className="flex flex-col items-start gap-3 mb-10">
              {[
                "Avrupa Kayıtlı Toksikolog (ERT)",
                "Academy of Toxicological Sciences (ATS) Fellow’u",
                "TİTCK Klinik Değerlendirme Komisyonu eski üyesi",
                "EUROTOX, IUTOX ve Türk Toksikoloji Derneği üyesi",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-navy-deep"
                >
                  <Check size={16} className="text-green shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/tr/contact#form"
              className="inline-flex items-center gap-2 rounded-full bg-green-dark px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Danışmanlık Talep Edin <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BİLİMSEL BAŞARILAR */}
      <section className="bg-navy-deep">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.2em] font-semibold text-[#7ED3A0] mb-10">
            BİLİMSEL BAŞARILAR
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {[
              ["150+", "Hakemli yayın"],
              ["30+", "Araştırma projesi"],
              ["100+", "Bilimsel güvenlilik değerlendirmesi"],
              ["20+", "Yıllık akademik ve sektörel deneyim"],
            ].map(([n, l], i) => (
              <div key={l} className={`px-6 ${i > 0 ? "lg:border-l lg:border-white/20" : ""}`}>
                <div className="text-5xl md:text-6xl font-bold font-serif text-white">
                  {n.replace("+", "")}
                  <span className="text-[#4FBF80]">+</span>
                </div>
                <div className="text-slate-300 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TOXENTRA (moved below founder) */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>Toxentra Hakkında</Eyebrow>
          <h2 className="text-4xl md:text-[2.75rem] leading-[1.15] font-bold font-serif mt-3 mb-6">
            <span className="text-navy-deep">Bağımsız Bilim.</span>
            <br />
            <span className="text-navy-deep">Kanıta Dayalı Çözümler.</span>
            <br />
            <span className="text-green">Daha Güvenli Ürünler.</span>
          </h2>
          <div className="w-14 h-[3px] mb-6 bg-green" />
          <p className="text-slate-600 leading-relaxed mb-5">
            Toxentra; bilimsel yaklaşım, kanıta dayalı karar alma ve uluslararası regülasyonlar doğrultusunda ürün güvenliğini geliştirmeyi amaçlayan bağımsız bir toksikoloji danışmanlık şirketidir.
          </p>
          <p className="text-slate-600 leading-relaxed">
            İlaç, tıbbi cihaz, kozmetik, kimya ve biyoteknoloji şirketlerine; ürün geliştirme ve test stratejilerinden toksikolojik risk ve güvenlik değerlendirmelerine kadar ürün yaşam döngüsünün farklı aşamalarında bilimsel destek sunuyoruz.
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-10"
          style={{ background: "linear-gradient(145deg, #0E2933 0%, #16394A 45%, #1B4A42 100%)" }}
        >
          {/* soft green glow accents */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(46,139,87,0.35) 0%, rgba(46,139,87,0) 70%)" }}
          />
          <div
            className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(46,139,87,0.18) 0%, rgba(46,139,87,0) 70%)" }}
          />

          {/* scientific molecular-node backdrop */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMidYMid slice"
          >
            {[
              [40, 60], [140, 30], [230, 90], [90, 160], [200, 220],
              [340, 50], [430, 140], [380, 260], [460, 340], [300, 320],
              [180, 380], [80, 300], [60, 430], [260, 440], [400, 430],
            ].map(([x, y], i, arr) => (
              <g key={i}>
                {i < arr.length - 1 && (
                  <line x1={x} y1={y} x2={arr[i + 1][0]} y2={arr[i + 1][1]} stroke="#2E8B57" strokeWidth="1" />
                )}
                <circle cx={x} cy={y} r={i % 3 === 0 ? 4.5 : 2.5} fill={i % 2 === 0 ? "#2E8B57" : "#FFFFFF"} />
              </g>
            ))}
          </svg>

          {/* subtle top border sheen */}
          <div
            className="absolute top-0 left-0 w-full h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)" }}
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.big} className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl sm:aspect-square flex flex-col justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 border border-green text-green">
                    <Icon size={20} />
                  </div>
                  <div className={`font-extrabold mb-1.5 sm:mb-2 text-green tracking-tight ${s.label ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl leading-snug"}`}>
                    {s.big}
                  </div>
                  {s.label && (
                    <div className="text-sm font-bold text-navy-deep leading-snug">{s.label}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10">
        <div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green text-green">
            <Target size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2 text-navy-deep">Misyonumuz</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Müşterilerimizin güvenli ve etkili ürünler geliştirmelerini destekleyen, bağımsız ve kanıta dayalı toksikoloji ve bilimsel destek sunmak.
          </p>
        </div>
        <div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green text-green">
            <Eye size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2 text-navy-deep">Vizyonumuz</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Ürün güvenliği alanında güvenilir ve bilim odaklı bir çözüm ortağı olmak.
          </p>
        </div>
        <div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green text-green">
            <Gem size={24} />
          </div>
          <h3 className="font-bold text-lg mb-3 text-navy-deep">Değerlerimiz</h3>
          <ul className="space-y-1.5">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-green" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white/60 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow>Hikayemiz</Eyebrow>
            <h2 className="text-3xl md:text-[2.25rem] font-bold font-serif mt-3 mb-6 leading-tight text-navy-deep">
              Merkezde Bilim, Her Kararda Etki.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
              <p>
                Ürünleri pazara sunmanın karmaşıklığını — ve her adımda güvenlilik değerlendirmesinin kritik önemini — biliyoruz.
              </p>
              <p>
                Çok disiplinli yaklaşımımız; müşterilerimizin ihtiyaçlarına özel, güvenilir ve kanıta dayalı çözümler sunmak amacıyla toksikoloji, farmakoloji ve ürün güvenliği alanlarındaki bilimsel bilgiyi bir araya getirir.
              </p>
            </div>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl p-10 md:p-14 flex justify-center"
            style={{ background: "linear-gradient(135deg, #EDE7DA 0%, #F7F3EA 50%, #E4DED0 100%)" }}
          >
            <div className="w-full max-w-sm bg-white rounded-md shadow-xl p-8 relative" style={{ minHeight: 360 }}>
              <Image src="/logo.png" alt="TOXENTRA" width={112} height={24} className="h-6 w-auto mb-8" />
              <h3 className="text-2xl font-bold font-serif leading-tight mb-2 text-navy-deep">
                TOXICOLOGICAL
                <br />
                RISK ASSESSMENT
              </h3>
              <p className="text-sm text-slate-500 mb-8">Bilim. Değerlendirme. Güven.</p>
              <ul className="space-y-1.5 text-sm text-slate-600">
                {["ISO 10993", "ICH", "EMA", "FDA", "OECD"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <svg className="absolute bottom-0 left-0 w-full opacity-70" height="60" viewBox="0 0 400 60" preserveAspectRatio="none">
                <path d="M0,40 C100,10 300,60 400,20 L400,60 L0,60 Z" fill="#2E8B57" opacity="0.15" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Eyebrow>Ne Yapıyoruz</Eyebrow>
        <h2 className="text-3xl md:text-[2.25rem] font-bold font-serif mt-3 mb-10 leading-tight max-w-xl text-navy-deep">
          Toksikoloji ve Ürün Güvenliği Hizmetleri
        </h2>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-4 bg-white rounded-2xl border border-black/5 p-10">
          {whatWeDo.map((col, i) => (
            <ul key={i} className="space-y-4">
              {col.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={17} className="shrink-0 mt-0.5 text-green" />
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/tr/services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2 border-navy text-navy transition-colors hover:bg-white"
          >
            Tüm Hizmetleri Görüntüle <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* RESEARCH & INNOVATION */}
      <section className="bg-white/60 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Eyebrow>Araştırma ve İnovasyon</Eyebrow>
              <p className="text-slate-600 leading-relaxed mt-3">
                Toxentra, toksikoloji bilimini ileriye taşıyan, daha güvenli ürünleri ve daha iyi risk değerlendirmesini destekleyen bilimsel projeler yürütür ve bunlara katılır.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border-2 border-green text-green-dark shrink-0 transition-colors hover:bg-white"
            >
              Projelerimizi Görüntüleyin <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {research.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title}>
                  <Icon size={26} className="mb-4 text-green" />
                  <h4 className="font-semibold text-sm mb-1.5 text-navy-deep">{r.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA + LEADERSHIP */}
      <section className="bg-navy-deep">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14">
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-green text-green">
              <MessageCircle size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif text-white mb-3 leading-tight">
                Ürün Güvenliliğinizi Birlikte İlerletelim
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
                İster geliştirmenin erken aşamalarında olun, ister pazara girişe hazırlanıyor olun, yolculuğunuzda yanınızdayız.
              </p>
              <Link
                href="/tr/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] bg-green"
              >
                Bize Ulaşın <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div>
            <Eyebrow>Liderlik Ekibimiz</Eyebrow>
            <div className="flex gap-5 mt-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-green text-green">
                <GraduationCap size={22} />
              </div>
              <ul className="space-y-2.5 text-sm text-slate-200">
                {leadership.map((l) => (
                  <li key={l} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-green" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="tr" />
    </>
  );
}
