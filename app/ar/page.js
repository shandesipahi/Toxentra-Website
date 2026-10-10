import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  FileText,
  Globe2,
  LineChart,
  Users,
  ArrowRight,
  FlaskConical,
  ClipboardCheck,
  Scale,
  Microscope,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "التميّز العلمي",
    text: "خبرة مدعومة بشهادة ERT، وزمالة ATS، والبحث الأكاديمي، والمعرفة بالمتطلبات التنظيمية.",
  },
  {
    icon: FileText,
    title: "معرفة بالمتطلبات التنظيمية",
    text: "معرفة شاملة بالمتطلبات التنظيمية العالمية بما يتوافق مع أطر EMA وFDA وOECD وISO وICH.",
  },
  {
    icon: Globe2,
    title: "منظور دولي",
    text: "ندعم عملاءنا في مختلف الأسواق والأنظمة التنظيمية بدقة علمية ونزاهة مهنية.",
  },
  {
    icon: LineChart,
    title: "نهج قائم على الأدلة",
    text: "قرارات تستند إلى بيانات موثوقة، وتقييم منهجي للمخاطر، واستدلال علمي رصين.",
  },
  {
    icon: Users,
    title: "استشارات مستقلة",
    text: "استشارات علمية موضوعية ومستقلة وسرّية، بعيدًا عن أي تضارب في المصالح التجارية.",
  },
];

const services = [
  {
    icon: FlaskConical,
    title: "التقييم السُّمّي",
    text: "تقييم علمي للمخاطر الصحية المحتملة المرتبطة بمنتجاتكم، من المواد الخام إلى التركيبة النهائية.",
  },
  {
    icon: ClipboardCheck,
    title: "استشارات سلامة المنتجات",
    text: "إعداد وتقييم وثائق السلامة لمنتجات التجميل والكيميائية والمكملات الغذائية.",
  },
  {
    icon: Scale,
    title: "الاستشارات التنظيمية",
    text: "إدارة الامتثال للوائح الوطنية والدولية الخاصة بالأدوية والأجهزة الطبية والقطاعات ذات الصلة.",
  },
  {
    icon: Microscope,
    title: "استشارات البحث والتطوير",
    text: "دعم علمي وتقني طوال دورة تطوير منتجكم، من الفكرة وحتى التقديم.",
  },
];

function Eyebrow({ children }) {
  return (
    <span className="text-xs font-semibold tracking-widest uppercase text-green">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <div dir="rtl" lang="ar" className="font-arabic">
    <>
      <Navbar active="home" locale="ar" />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
          viewBox="0 0 800 500"
          preserveAspectRatio="xMidYMid slice"
        >
          {[
            [60, 60], [180, 40], [300, 110], [120, 180], [260, 240],
            [420, 70], [520, 160], [640, 90], [700, 220], [420, 300],
          ].map(([x, y], i, arr) => (
            <g key={i}>
              {i < arr.length - 1 && (
                <line x1={x} y1={y} x2={arr[i + 1][0]} y2={arr[i + 1][1]} stroke="#173B4A" strokeWidth="1.5" />
              )}
              <circle cx={x} cy={y} r={i % 3 === 0 ? 6 : 4} fill={i % 2 === 0 ? "#2E8B57" : "#173B4A"} />
            </g>
          ))}
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>استشارات علم السموم وسلامة المنتجات</Eyebrow>
            <h1 className="text-4xl md:text-[2.75rem] leading-[1.15] font-bold font-serif mt-3 mb-6">
              <span className="text-navy-deep">شريكك في العلم</span><br />
              <span className="text-navy-deep"> </span>
              <span className="text-green">والسلامة</span>
              <span className="text-navy-deep"> والموافقات التنظيمية.</span>
            </h1>
            <div className="w-14 h-[3px] mb-6 bg-green" />
            <p className="text-slate-600 leading-relaxed mb-8 max-w-lg">
              تقدّم TOXENTRA خدمات استشارية متخصصة في علم السموم وسلامة المنتجات والشؤون التنظيمية لقطاعات الأدوية والأجهزة الطبية ومستحضرات التجميل والمواد الكيميائية والمكمّلات الغذائية.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ar/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] bg-green-dark"
              >
                اطلب استشارة <ArrowRight size={16} />
              </Link>
              <Link
                href="/ar/services"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2 border-navy text-navy transition-colors hover:bg-white"
              >
                استكشف خدماتنا
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl p-10 md:p-14 flex justify-center"
              style={{ background: "linear-gradient(135deg, #EDE7DA 0%, #F7F3EA 50%, #E4DED0 100%)" }}
            >
              <div className="w-full max-w-sm bg-white rounded-md shadow-xl p-8 relative" style={{ minHeight: 320 }}>
                <Image src="/logo.png" alt="TOXENTRA" width={112} height={24} className="h-6 w-auto mb-8" />

                <h3 className="text-xl font-bold font-serif leading-tight tracking-tight mb-2 text-navy-deep">
                  شريكك في العلم والسلامة والموافقات
                </h3>
                <p className="text-sm text-slate-500">
                  استشارات في علم السموم والشؤون التنظيمية لقطاعات الأدوية، والأجهزة الطبية، ومستحضرات التجميل، والمواد الكيميائية، والمكمّلات الغذائية.
                </p>
                <svg className="absolute bottom-0 left-0 w-full opacity-70" height="60" viewBox="0 0 400 60" preserveAspectRatio="none">
                  <path d="M0,40 C100,10 300,60 400,20 L400,60 L0,60 Z" fill="#2E8B57" opacity="0.15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-black/5 bg-white/60">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <Eyebrow>لماذا TOXENTRA؟</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold font-serif mt-3 text-navy-deep">
              أساس علمي راسخ يمكنك الاعتماد عليه
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustPoints.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-green text-green">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1.5 text-sm">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <Eyebrow>ماذا نقدّم؟</Eyebrow>
          <h2 className="text-3xl md:text-[2.25rem] font-bold font-serif mt-3 mb-4 leading-tight text-navy-deep">
            خدمات مصمّمة لمواكبة رحلة منتجك
          </h2>
          <p className="text-slate-600 leading-relaxed">
            من التقييم المبكر للسلامة وحتى الحصول على الموافقات التنظيمية النهائية، نجمع بين العلم والامتثال التنظيمي في كل مرحلة.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-white rounded-2xl border border-black/5 p-7 hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-5 border border-green text-green">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-navy-deep">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <Link
            href="/ar/services"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2 border-navy text-navy transition-colors hover:bg-white"
          >
            استعرض جميع الخدمات <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-white/60 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <Eyebrow>عن TOXENTRA</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-bold font-serif mt-3 mb-4 leading-tight text-navy-deep">
              حيث تلتقي الدقة العلمية بالمتطلبات التنظيمية.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              تجمع TOXENTRA بين التقييم السُّمّي وسلامة المنتجات والاستراتيجية التنظيمية، بما يساعد منتجاتك على الوصول إلى السوق بأمان وامتثال كامل للمتطلبات التنظيمية. ويعمل فريقنا جنبًا إلى جنب مع فرق البحث والتطوير والجودة والشؤون التنظيمية في قطاعات الأدوية والأجهزة الطبية ومستحضرات التجميل والمواد الكيميائية والمكمّلات الغذائية.
            </p>
          </div>
          <Link
            href="/ar/about"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border-2 border-navy text-navy transition-colors hover:bg-white self-start md:justify-self-end"
          >
            اعرف المزيد عنا <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mb-4">
            أطلق منتجك في السوق بثقة.
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            أخبرنا عن منتجك ومساره التنظيمي، وسيتواصل معك فريقنا لتحديد موعد للاستشارة.
          </p>
          <Link
            href="/ar/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg transition-transform hover:scale-[1.03] bg-green text-white"
          >
            تواصل معنا <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer locale="ar" />
    </>
    </div>
  );
}
