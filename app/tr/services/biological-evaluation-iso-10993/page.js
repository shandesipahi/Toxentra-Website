import {
  BookOpen, ClipboardList, FileText, FlaskConical, Search, Share2, ShieldAlert, Target
} from "lucide-react";
import ServiceDetailLayout from "../../../../components/ServiceDetailLayout";

export const metadata = {
  title: "ISO 10993 — TOXENTRA",
  description:
    "ISO 10993'e uygun biyolojik değerlendirme ve biyouyumluluk için bilimsel destek.",
};

const services = [
  { icon: ClipboardList, title: "Biyolojik Değerlendirme Planı (BEP)", text: "Ürün yaşam döngüsü boyunca gereken biyolojik uç noktaları, değerlendirme stratejisini ve destekleyici kanıtı tanımlayan, risk odaklı Biyolojik Değerlendirme Planlarının geliştirilmesi." },
  { icon: FileText, title: "Biyolojik Değerlendirme Raporu (BER)", text: "ISO 10993-1'e uygun olarak toksikolojik, biyolojik, kimyasal ve klinik kanıtı bir araya getiren kapsamlı Biyolojik Değerlendirme Raporlarının hazırlanması." },
  { icon: Search, title: "ISO 10993 Eksiklik Analizi", text: "Regülasyon uyumunu desteklemek için eksik verilerin, dokümantasyon açıklarının ve gerekli ek kanıtların belirlenmesi." },
  { icon: FlaskConical, title: "Kimyasal Karakterizasyon", text: "ISO 10993-18 ilkelerine dayalı olarak malzeme bileşiminin, ekstrakte edilebilir ve sızabilir maddelerin bilimsel değerlendirilmesi." },
  { icon: ShieldAlert, title: "Ekstrakte Edilebilir ve Sızabilir Maddelerin Toksikolojik Risk Değerlendirmesi", text: "Belirlenen kimyasal bileşenlerin, uluslararası kabul görmüş toksikolojik yöntemler kullanılarak insan sağlığı açısından risk değerlendirmesi." },
  { icon: BookOpen, title: "Literatür Değerlendirmesi", text: "Biyolojik güvenliği desteklemek ve uygun durumlarda gereksiz biyolojik testleri azaltmak amacıyla yayımlanmış bilimsel verilerin kapsamlı değerlendirilmesi." },
  { icon: Target, title: "Biyouyumluluk Test Stratejisi", text: "Cihaz tipi, amaçlanan kullanım, temas süresi ve regülasyon beklentileri dikkate alınarak bilime dayalı test stratejilerinin geliştirilmesi." },
  { icon: Share2, title: "Biyolojik Testlerin Koordinasyonu", text: "Akredite laboratuvarlarla gerçekleştirilecek gerekli testlerin planlanması ve koordinasyonuna yönelik bilimsel destek." },
  { icon: FileText, title: "Bilimsel Biyolojik Değerlendirme Dokümantasyonu", text: "İlgili regülasyon gereklilikleriyle uyumlu biyolojik değerlendirme dokümantasyonunun hazırlanması ve bilimsel olarak incelenmesi." }
];

const whyUs = [
  "Regülasyon Bilgisi — ISO 10993 serisi, EU MDR 2017/745 ve biyolojik değerlendirmeye ilişkin FDA gereklilikleri konusunda bilgi.",
  "Kanıta Dayalı Yaklaşım — Gereksiz hayvan ve laboratuvar testlerini azaltmak için mevcut veri ve literatür kanıtına öncelik veriyoruz.",
  "Bağımsız Danışmanlık — Ticari laboratuvar çıkarlarından bağımsız, objektif ve bilim odaklı öneriler.",
  "Uluslararası Bakış Açısı — Farklı pazarlardaki regülasyon gerekliliklerini dikkate alan bilimsel yaklaşım."
];

const faqs = [
  { q: "Biyolojik Değerlendirme Raporu (BER) nedir?", a: "Biyolojik Değerlendirme Raporu (BER), bir tıbbi cihazın biyolojik güvenliliğinin yeterince değerlendirilip değerlendirilmediğini gösteren, ISO 10993-1'e uygun hazırlanmış bilimsel bir belgedir. Rapor, cihazın amaçlanan klinik kullanıma uygun olup olmadığını belirlemek için mevcut biyolojik, kimyasal ve toksikolojik bilgiyi bir araya getirir." },
  { q: "ISO 10993 ne zaman gereklidir?", a: "Bir tıbbi cihaz insan vücuduyla doğrudan veya dolaylı temas ettiğinde ISO 10993 dikkate alınmalıdır. Biyolojik değerlendirmenin kapsamı; cihazın niteliğine, temas süresine, malzemelerine, üretim sürecine ve amaçlanan klinik uygulamaya bağlıdır." },
  { q: "Tüm tıbbi cihazlar için biyouyumluluk testi gerekli midir?", a: "Her zaman gerekli değildir. ISO 10993 risk odaklı bir yaklaşım izler. Çoğu durumda, mevcut biyolojik veriler, kimyasal karakterizasyon, toksikolojik risk değerlendirmesi ve yayımlanmış literatür, ek laboratuvar testi yapılmadan biyolojik güvenliliği yeterince gösterebilir." },
  { q: "Literatür verileri biyolojik testin yerini alabilir mi?", a: "Uygun koşullarda evet. Yeterli bilimsel kanıt ve eşdeğer malzeme bilgisi mevcut olduğunda; bu yaklaşımın bilimsel olarak gerekçelendirilmiş ve regülasyon beklentileriyle uyumlu olması şartıyla, iyi belgelenmiş bir literatür değerlendirmesi toksikolojik değerlendirmeyle birleştirilerek ek biyolojik test ihtiyacını azaltabilir veya ortadan kaldırabilir." },
  { q: "BEP ile BER arasındaki fark nedir?", a: "Biyolojik Değerlendirme Planı (BEP), biyolojik güvenliliği değerlendirme stratejisini tanımlarken; Biyolojik Değerlendirme Raporu (BER) değerlendirme sürecini, destekleyici kanıtı ve biyolojik güvenliliğe ilişkin bilimsel sonuçları belgeler." },
  { q: "TOXENTRA biyolojik değerlendirmede nasıl destek olur?", a: "TOXENTRA; Biyolojik Değerlendirme Planları (BEP), Biyolojik Değerlendirme Raporları (BER), ISO 10993 eksiklik analizleri, toksikolojik risk değerlendirmeleri, literatür değerlendirmeleri ve projeye özel regülasyon dokümantasyonu dahil olmak üzere biyolojik değerlendirme sürecinin tamamında bilimsel destek sağlar." }
];

const related = [

];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="ISO 10993"
      title="Güvenli Tıbbi Cihazları Destekleyen Biyolojik Değerlendirme"
      subtitle="ISO 10993'e uygun biyolojik değerlendirme ve biyouyumluluk için bilimsel destek."
      overview={[
    "Biyolojik değerlendirme, tıbbi cihazların yaşam döngüsü boyunca biyolojik güvenliliğini değerlendirmek için kullanılan risk odaklı bir süreçtir. ISO 10993, yalnızca laboratuvar testlerine dayanmak yerine; malzeme karakterizasyonu, toksikolojik risk değerlendirmesi, literatür kanıtı ve gerektiğinde biyolojik testi bir araya getiren kapsamlı bir değerlendirmeyi teşvik eder.",
    "TOXENTRA, üreticilere biyolojik değerlendirme süreci boyunca bağımsız bilimsel destek sağlar. Yaklaşımımız; tıbbi cihazların biyolojik güvenliliğinin gösterilmesine yardımcı olurken, bilimsel olarak gerekçelendirildiğinde gereksiz testlerden kaçınmak için güncel bilimsel kanıtı, regülasyon beklentilerini ve uluslararası kabul görmüş standartları bir araya getirir.",
    "İster yeni bir cihaz geliştiriyor, ister mevcut bir ürünü güncelliyor ya da regülasyon dokümantasyonu hazırlıyor olun; ISO 10993 ve geçerli regülasyon gereklilikleriyle uyumlu, kişiselleştirilmiş bilimsel çözümler sunuyoruz."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Biyolojik değerlendirme konusunda desteğe mi ihtiyacınız var?"
      ctaText="Cihazınız hakkında bize bilgi verin, test odaklı ya da literatür odaklı doğru değerlendirme stratejisini önerelim."
      locale="tr"
    />
  );
}
