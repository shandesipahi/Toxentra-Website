import {
  Activity, BookOpen, FileText, FlaskConical, Gauge, Layers, Repeat, Share2, TrendingUp
} from "lucide-react";
import ServiceDetailLayout from "../../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Klinik ve Farmakolojik Değerlendirme — TOXENTRA",
  description:
    "Ürün geliştirmeyi, regülasyon karar süreçlerini ve ürün güvenliliğini desteklemek için klinik kanıtı ve farmakolojik ilkeleri bir araya getiren bağımsız bilimsel değerlendirmeler.",
};

const services = [
  { icon: FileText, title: "Klinik Farmakoloji Raporları", text: "Regülasyon başvurularını, ürün geliştirmeyi ve bilimsel karar alma süreçlerini desteklemek için farmakolojik, toksikolojik ve klinik kanıtı bir araya getiren kapsamlı bilimsel raporların hazırlanması." },
  { icon: Activity, title: "Farmakokinetik (PK) Değerlendirme", text: "Sistemik maruziyeti anlamak ve ürün güvenlilik ile etkililik değerlendirmelerini desteklemek için emilim, dağılım, metabolizma ve atılım (ADME) özelliklerinin bilimsel değerlendirmesi." },
  { icon: TrendingUp, title: "Farmakodinamik (PD) Değerlendirme", text: "Ürün performansının bilimsel olarak anlaşılmasını desteklemek için farmakolojik mekanizmaların, biyolojik aktivitenin ve doza bağlı etkilerin değerlendirilmesi." },
  { icon: Share2, title: "İlaç-İlaç ve İlaç-Gıda Etkileşimi Değerlendirmesi", text: "Yayımlanmış kanıta ve farmakolojik ilkelere dayalı olarak farmakokinetiği, farmakodinamiği veya klinik sonuçları etkileyebilecek potansiyel etkileşimlerin bilimsel incelemesi." },
  { icon: Share2, title: "CYP450 Etkileşim Değerlendirmesi", text: "Potansiyel metabolik etkileşimleri belirlemek ve ürün güvenlilik değerlendirmelerini desteklemek için sitokrom P450 enzimlerini içeren metabolik yolakların değerlendirilmesi." },
  { icon: Gauge, title: "Doz-Yanıt ve Terapötik Aralık Analizi", text: "Mevcut bilimsel kanıt kullanılarak doza bağlı farmakolojik yanıtların ve terapötik maruziyet aralıklarının değerlendirilmesi." },
  { icon: Repeat, title: "Biyoyararlanım / Biyoeşdeğerlik Değerlendirmesi", text: "Uygun olduğunda ürün geliştirmeyi ve regülasyon dokümantasyonunu desteklemek için biyoyararlanım ve biyoeşdeğerlik verilerinin bilimsel yorumlanması." },
  { icon: Layers, title: "BCS Temelli Ürün Değerlendirmesi", text: "Formülasyon geliştirmeyi ve regülasyon stratejisini desteklemek için ürünlerin Biyofarmasötik Sınıflandırma Sistemi'ne (BCS) göre değerlendirilmesi." },
  { icon: FlaskConical, title: "Nutrasötik Bilimsel Değerlendirmesi", text: "Mevcut klinik, farmakolojik ve toksikolojik kanıt dikkate alınarak nutrasötiklerin, gıda takviyelerinin ve sağlıkla ilgili ürünlerin kanıta dayalı bilimsel değerlendirmesi." },
  { icon: BookOpen, title: "Literatür Taraması ve Kanıt Sentezi", text: "Regülasyon başvurularını, bilimsel raporları ve ürün geliştirme stratejilerini desteklemek için yayımlanmış bilimsel literatürün kapsamlı değerlendirmesi ve sentezi." }
];

const whyUs = [
  "Klinik farmakoloji ve toksikolojide bağımsız bilimsel uzmanlık.",
  "Yayımlanmış klinik verinin kanıta dayalı yorumlanması.",
  "Farmakolojik, toksikolojik ve regülasyon perspektiflerinin bütünleştirilmesi.",
  "Regülasyona hazır bilimsel dokümantasyon.",
  "Ürün geliştirmeyi ve pazara girişi destekleyen kişiselleştirilmiş değerlendirmeler."
];

const faqs = [
  { q: "Klinik ve farmakolojik değerlendirme nedir?", a: "Klinik ve farmakolojik değerlendirme; ürün güvenliliğini, etkililiğini ve regülasyon karar alma süreçlerini desteklemek için klinik kanıtı, farmakolojik veriyi ve yayımlanmış literatürü bir araya getiren bilimsel bir değerlendirmedir." },
  { q: "Klinik değerlendirme ne zaman gereklidir?", a: "Klinik değerlendirmeler; ürün geliştirme, regülasyon başvuruları, bilimsel dosya hazırlığı sırasında ya da ürün iddialarını veya güvenliliğini desteklemek için mevcut klinik kanıtın eleştirel olarak değerlendirilmesi gerektiğinde talep edilebilir." },
  { q: "Farmakokinetik ile farmakodinamik arasındaki fark nedir?", a: "Farmakokinetik, vücudun bir maddeyi nasıl emdiğini, dağıttığını, metabolize ettiğini ve eliminasyona uğrattığını tanımlarken; farmakodinamik, maddenin etkilerini oluşturmak için biyolojik sistemlerle nasıl etkileşime girdiğini açıklar." },
  { q: "İlaç etkileşimleri neden önemlidir?", a: "İlaç-ilaç ve ilaç-gıda etkileşimleri, sistemik maruziyeti veya farmakolojik aktiviteyi etkileyerek bir ürünün güvenliliğini ya da etkililiğini değiştirebilir. Bu etkileşimlerin değerlendirilmesi, bilinçli klinik ve regülasyon kararlarını destekler." },
  { q: "Biyofarmasötik Sınıflandırma Sistemi (BCS) nedir?", a: "Biyofarmasötik Sınıflandırma Sistemi (BCS), ilaç maddelerini çözünürlüklerine ve bağırsak geçirgenliklerine göre sınıflandırır. Formülasyon geliştirmeyi ve belirli regülasyon kararlarını desteklemek için yaygın olarak kullanılır." },
  { q: "TOXENTRA klinik ve farmakolojik değerlendirmede nasıl destek olur?", a: "TOXENTRA; klinik kanıt değerlendirmesi, farmakokinetik ve farmakodinamik değerlendirmeler, etkileşim analizi, BCS temelli değerlendirmeler, literatür taramaları ve regülasyona hazır bilimsel raporların hazırlanması yoluyla bağımsız bilimsel destek sağlar." }
];

const related = [
  { title: "Toksikolojik Risk Değerlendirmesi", href: "/services/toxicological-risk-assessment" },
  { title: "Farmakovijilans", href: "/services/pharmacovigilance" },
  { title: "Bilimsel ve Toksikoloji Danışmanlığı", href: "/services/scientific-regulatory-consulting" },
  { title: "Tıbbi Cihaz Güvenliliği", href: "/services/medical-device-safety" }
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Klinik ve Farmakolojik Değerlendirme"
      title="Ürün Geliştirmeyi Destekleyen Kanıta Dayalı Bilimsel Değerlendirme"
      subtitle="Ürün geliştirmeyi, regülasyon karar süreçlerini ve ürün güvenliliğini desteklemek için klinik kanıtı ve farmakolojik ilkeleri bir araya getiren bağımsız bilimsel değerlendirmeler."
      overview={[
    "Klinik ve farmakolojik değerlendirme; bir ürünün insan vücudunda nasıl davrandığını ve mevcut kanıtın ürünün güvenliliğini ve amaçlanan kullanımını destekleyip desteklemediğini anlamak için bilimsel temel sağlar. Bu değerlendirmeler; farmakokinetik ve farmakodinamik verileri yayımlanmış klinik kanıtla birleştirerek ürün geliştirme ve regülasyon değerlendirmesi boyunca bilinçli karar alınmasını destekler.",
    "TOXENTRA'da, güncel klinik kanıta, farmakolojik ilkelere ve uluslararası kabul görmüş metodolojilere dayalı bağımsız bilimsel değerlendirmeler sunuyoruz. Değerlendirmelerimiz; karmaşık bilimsel verileri regülasyon dokümantasyonuna ve ürün geliştirmeye uygun, net ve kanıta dayalı sonuçlara dönüştürerek ilaçları, tıbbi cihazları, gıda takviyelerini ve diğer sağlıkla ilgili ürünleri destekler.",
    "İster bilimsel bir dosya hazırlıyor, ister yayımlanmış kanıtı değerlendiriyor ya da farmakolojik verinin klinik önemini inceliyor olun; ürün güvenliliğini, regülasyon uyumunu ve başarılı pazara girişi desteklemek üzere tasarlanmış, kişiselleştirilmiş bilimsel çözümler sunuyoruz."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Bağımsız bilimsel uzmanlık mı arıyorsunuz?"
      ctaText="Klinik ve farmakolojik kanıt, ürün geliştirmede ve regülasyon karar alma süreçlerinde kritik bir rol oynar. TOXENTRA; bilimsel mükemmelliği, regülasyon uyumunu ve başarılı ürün geliştirmeyi destekleyen, kişiselleştirilmiş ve kanıta dayalı değerlendirmeler sunar."
      locale="tr"
    />
  );
}
