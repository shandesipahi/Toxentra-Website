import {
  Cpu, FileText, Gauge, Layers, Scale, Search, ShieldAlert
} from "lucide-react";
import ServiceDetailLayout from "../../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Toksikolojik Risk Değerlendirmesi — TOXENTRA",
  description:
    "Uluslararası kabul görmüş regülasyon ilkelerine uygun olarak ilaç, tıbbi cihaz, kozmetik, kimyasal ve tüketici ürünlerini destekleyen kanıta dayalı toksikolojik risk değerlendirmeleri.",
};

const services = [
  { icon: ShieldAlert, title: "İnsan Sağlığı Risk Değerlendirmesi", text: "Kimyasallar, hammaddeler, safsızlıklar ve bitmiş ürünlerle ilişkili potansiyel sağlık risklerini belirlemek için tehlike tanımlaması, maruziyet değerlendirmesi ve risk karakterizasyonunu bir araya getiren kapsamlı toksikolojik değerlendirmeler." },
  { icon: Scale, title: "Güvenlik Marjı (MoS)", text: "Ürün güvenlilik değerlendirmelerini desteklemek için toksikolojik referans noktaları ve tahmini insan maruziyetine dayalı Güvenlik Marjı (MoS) değerlerinin hesaplanması ve bilimsel yorumlanması." },
  { icon: Layers, title: "Benzer Maddelerden Veri Aktarımı (Read-Across) ve Kanıtların Ağırlığı (WoE)", text: "Toksikolojik veri eksikliklerinin giderilmesi amacıyla mevcut bilimsel verilerden yararlanılarak read-across yaklaşımlarının geliştirilmesi ve Kanıtların Ağırlığı (WoE) değerlendirmelerinin yapılması." },
  { icon: Cpu, title: "QSAR Değerlendirmesi", text: "Toksikolojik sonlanım noktalarını öngörmek ve deneysel verilerin sınırlı olduğu durumlarda destekleyici kanıt sağlamak amacıyla uluslararası kabul görmüş hesaplamalı toksikoloji modellerinin kullanılması." },
  { icon: Gauge, title: "Toksikolojik Kaygı Eşiği (Threshold of Toxicological Concern, TTC)", text: "Toksikolojik verilerin sınırlı olduğu maddeler için, uluslararası kabul görmüş bilimsel ilkeler doğrultusunda Toksikolojik Kaygı Eşiği (TTC) yaklaşımına dayalı risk değerlendirmesi." },
  { icon: Search, title: "Safsızlık Değerlendirmesi", text: "Safsızlıkların, bozunma ürünlerinin, işlem kaynaklı kontaminantların ve ekstrakte edilebilir/sızabilir maddelerin potansiyel toksikolojik önemini belirlemek için bilimsel değerlendirme." },
  { icon: FileText, title: "Bilimsel Raporlar", text: "Regülasyon başvuruları, teknik dokümantasyon ve ürün güvenlilik dosyaları için uygun, net, bilimsel açıdan sağlam ve regülasyona hazır toksikolojik raporların hazırlanması." }
];

const whyUs = [
  "Toksikoloji ve risk değerlendirmesinde bağımsız bilimsel uzmanlık.",
  "Uluslararası regülasyon beklentileriyle uyumlu, kanıta dayalı değerlendirmeler.",
  "İlaç, tıbbi cihaz, kozmetik ve kimyasallar genelinde deneyim.",
  "Şeffaf, bilimsel olarak gerekçelendirilmiş karar alma.",
  "Regülasyon ve ürün geliştirme ihtiyaçlarına özel, projeye özgü çözümler."
];

const faqs = [
  { q: "Toksikolojik risk değerlendirmesi nedir?", a: "Toksikolojik risk değerlendirmesi, bir maddeye veya ürüne maruziyetin amaçlanan kullanım koşullarında sağlık riski oluşturup oluşturmadığını belirleme sürecidir. Kanıta dayalı güvenlilik kararlarını desteklemek için tehlike tanımlaması, maruziyet değerlendirmesi ve risk karakterizasyonunu birleştirir." },
  { q: "Toksikolojik risk değerlendirmesi ne zaman gereklidir?", a: "Toksikolojik risk değerlendirmesi; ürün geliştirme, regülasyon başvuruları, biyolojik değerlendirmeler, kozmetik ürün güvenliği değerlendirmeleri, kimyasal madde kayıt süreçleri veya bir maddeye potansiyel insan maruziyetinin bilimsel olarak değerlendirilmesi gereken durumlarda gerekli olabilir." },
  { q: "Güvenlik Marjı (MoS) nedir?", a: "Güvenlik Marjı (MoS), bir toksikolojik referans değeri ile tahmini insan maruziyetini karşılaştıran nicel bir ölçüttür. Beklenen maruziyetin kabul edilebilir bir güvenlik sınırı içinde kalıp kalmadığını belirlemek için yaygın olarak kullanılır." },
  { q: "Read-Across nedir?", a: "Read-across, doğrudan deneysel verinin sınırlı olduğu durumlarda, hedef maddenin güvenliliğini öngörmek için yapısal veya biyolojik olarak benzer maddelerden elde edilen toksikolojik bilgiyi kullanan, bilimsel olarak kabul görmüş bir yaklaşımdır." },
  { q: "QSAR laboratuvar çalışmalarının yerini alabilir mi?", a: "QSAR modelleri, tehlike değerlendirmesi için değerli destekleyici bilgi sağlar ve belirli durumlarda ek test ihtiyacını azaltabilir. Ancak genellikle deneysel verinin tek başına yerini almak yerine, destekleyici bir Kanıt Ağırlığı yaklaşımının parçası olarak değerlendirilmelidir." },
  { q: "TOXENTRA toksikolojik risk değerlendirmesinde nasıl destek olur?", a: "TOXENTRA; tehlikenin tanımlanması, maruziyet değerlendirmesi, Güvenlilik Sınırı (MoS) hesaplamaları, Read-Across, Kanıtların Ağırlığı (WoE) ve QSAR değerlendirmeleri ile toksikolojik raporların hazırlanması dahil olmak üzere risk değerlendirme sürecinin tüm aşamalarında bağımsız bilimsel destek sunar." }
];

const related = [
  { title: "Biyolojik Değerlendirme (ISO 10993)", href: "/services/biological-evaluation-iso-10993" },
  { title: "Tıbbi Cihaz Güvenliliği", href: "/services/medical-device-safety" },
  { title: "Bilimsel ve Toksikoloji Danışmanlığı", href: "/services/scientific-regulatory-consulting" }
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Toksikolojik Risk Değerlendirmesi"
      title="Bilime Dayalı Risk Değerlendirmesiyle İnsan Sağlığını Korumak"
      subtitle="Uluslararası kabul görmüş regülasyon ilkelerine uygun olarak ilaç, tıbbi cihaz, kozmetik, kimyasal ve tüketici ürünlerini destekleyen kanıta dayalı toksikolojik risk değerlendirmeleri."
      overview={[
    "Toksikolojik risk değerlendirmesi, bir kimyasal madde, materyal veya ürüne maruziyetin, amaçlanan kullanım koşullarında insan sağlığı açısından risk oluşturup oluşturmayacağını değerlendirmek için kullanılan bilimsel bir süreçtir. Tehlikenin tanımlanması, doz-yanıt değerlendirmesi, maruziyetin tahmini ve risk karakterizasyonu aşamalarını bir araya getirerek ürün güvenliği ve regülasyon süreçlerinde bilimsel temelli kararların alınmasını destekler.",
    "TOXENTRA'da, ürüne özgü regülasyon gerekliliklerine uygun, bağımsız ve bilime dayalı toksikolojik değerlendirmeler sunuyoruz. Değerlendirmelerimiz; ürün geliştirmeyi, regülasyon başvurularını ve pazar sonrası güvenlilik değerlendirmelerini desteklemek için güncel bilimsel bilgiyi, uluslararası kabul görmüş metodolojileri ve kanıta dayalı yaklaşımları bir araya getirir.",
    "İlaç, tıbbi cihaz, kozmetik, gıda takviyesi veya kimyasal ürün geliştiriyor olmanızdan bağımsız olarak; şeffaf, bilimsel olarak gerekçelendirilmiş ve regülasyon gerekliliklerine uygun risk değerlendirmeleri sunarak ürün yaşam döngüsü boyunca güvenilir kararların alınmasını destekliyoruz."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Bağımsız bilimsel uzmanlık mı arıyorsunuz?"
      ctaText="Her ürün kendine özgü toksikolojik ve regülasyon zorlukları taşır. Uzmanlarımız; ürün güvenliliğini, regülasyon uyumunu ve başarılı ürün geliştirmeyi desteklemek üzere tasarlanmış, kişiselleştirilmiş ve kanıta dayalı çözümler sunar."
      locale="tr"
    />
  );
}
