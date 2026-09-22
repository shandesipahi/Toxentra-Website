import {
  Activity, ClipboardCheck, ClipboardList, FileText, Scale, ShieldAlert, Stethoscope, Target
} from "lucide-react";
import ServiceDetailLayout from "../../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Tıbbi Cihaz Güvenliliği — TOXENTRA",
  description:
    "Ürün geliştirme, regülasyon onayı ve pazar sonrası gözetim boyunca tıbbi cihazların güvenlilik değerlendirmesi için bağımsız bilimsel destek.",
};

const services = [
  { icon: ShieldAlert, title: "Tıbbi Cihaz Toksikolojik Değerlendirmesi", text: "Hasta maruziyetiyle ilişkili potansiyel riskleri belirlemek için cihaz malzemelerinin, bileşenlerinin, üretim kalıntılarının, ekstrakte edilebilir ve sızabilir maddelerin kapsamlı toksikolojik değerlendirmesi." },
  { icon: Stethoscope, title: "Klinik Değerlendirme Desteği", text: "Klinik değerlendirme faaliyetlerini desteklemek ve tıbbi cihazların güvenlilik ile performansını göstermek için yayımlanmış klinik kanıtın bilimsel incelemesi ve yorumlanması." },
  { icon: Target, title: "Biyolojik Güvenlilik Stratejisi", text: "Ürün yaşam döngüsü boyunca ISO 10993 ilkelerini, toksikolojik kanıtı ve cihaza özel risk değerlendirmesini bir araya getiren, bilime dayalı biyolojik güvenlilik stratejilerinin geliştirilmesi." },
  { icon: ClipboardCheck, title: "Malzeme Güvenliliği İncelemesi", text: "Regülasyon başvurusundan önce potansiyel toksikolojik endişeleri belirlemek için hammaddelerin, katkı maddelerinin, renklendiricilerin ve üretim maddelerinin bilimsel değerlendirmesi." },
  { icon: Activity, title: "Pazar Sonrası Güvenlilik Desteği", text: "Sürekli güvenlilik izlemesini ve regülasyon uyumunu desteklemek için pazar sonrası güvenlilik bilgisinin, literatürün ve vijilans verilerinin bilimsel değerlendirmesi." },
  { icon: ClipboardList, title: "Risk Yönetimi Desteği", text: "Genel tıbbi cihaz risk yönetimi sürecinin bir parçası olarak biyolojik ve toksikolojik risklerin belirlenmesi, değerlendirilmesi ve belgelenmesi için bilimsel destek." },
  { icon: FileText, title: "Regülasyon Dokümantasyonu", text: "Biyolojik güvenliliği, toksikolojik değerlendirmeyi ve regülasyon başvurularını destekleyen teknik dokümantasyonun hazırlanması ve bilimsel incelenmesi." },
  { icon: Scale, title: "MDR Uyum Desteği", text: "Biyolojik güvenlilik ve toksikolojik değerlendirmeyle ilgili geçerli Tıbbi Cihaz Regülasyonu (MDR) gerekliliklerine uyumu göstermek için bilimsel destek." }
];

const whyUs = [
  "Tıbbi cihaz güvenliliğinde bağımsız bilimsel uzmanlık.",
  "Uluslararası regülasyon beklentileriyle uyumlu, risk odaklı değerlendirmeler.",
  "Toksikolojik değerlendirme ve biyolojik değerlendirmede deneyim.",
  "Regülasyona hazır bilimsel dokümantasyon.",
  "Ürün yaşam döngüsünün tamamında kişiselleştirilmiş destek."
];

const faqs = [
  { q: "Tıbbi cihaz güvenlilik değerlendirmesi nedir?", a: "Tıbbi cihaz güvenlilik değerlendirmesi; malzemeler, biyolojik riskler, toksikolojik tehlikeler, klinik kanıt ve amaçlanan kullanım dahil olmak üzere hasta güvenliliğini etkileyebilecek tüm faktörlerin bilimsel değerlendirmesidir. Bir cihazın amaçlanan kullanım koşullarında güvenli olduğunun gösterilmesini destekler." },
  { q: "Biyolojik değerlendirme, cihaz güvenliliğini göstermek için yeterli midir?", a: "Her zaman değildir. Biyolojik değerlendirme, cihaz güvenliliğinin önemli bir bileşenidir; ancak üreticilerin cihaza ve geçerli regülasyon gerekliliklerine bağlı olarak toksikolojik değerlendirmelere, klinik değerlendirmeye, risk yönetimi dokümantasyonuna ve pazar sonrası güvenlilik faaliyetlerine de ihtiyacı olabilir." },
  { q: "Bir tıbbi cihaz için toksikolojik değerlendirme ne zaman gereklidir?", a: "Toksikolojik değerlendirme, hastaların cihaz malzemelerinden salınan kimyasallara, üretim kalıntılarına, bozunma ürünlerine veya ekstrakte edilebilir/sızabilir maddelere maruz kalabileceği durumlarda genellikle gereklidir. Değerlendirme, bu maruziyetlerin kabul edilebilir bir risk düzeyinde olup olmadığının belirlenmesine yardımcı olur." },
  { q: "TOXENTRA, MDR uyumunu nasıl destekler?", a: "TOXENTRA; geçerli MDR gerekliliklerine uyuma katkı sağlayan toksikolojik değerlendirmelerin, biyolojik güvenlilik dokümantasyonunun, literatür taramalarının, risk değerlendirmelerinin ve regülasyona hazır raporların hazırlanmasında bilimsel destek sağlar." },
  { q: "Pazar sonrası güvenliliğin rolü nedir?", a: "Tıbbi cihaz güvenliliği pazar onayıyla sona ermez. Pazar sonrası gözetim ve vijilans faaliyetleri; yeni güvenlilik bilgilerinin belirlenmesine, potansiyel risklerin değerlendirilmesine ve cihaz yaşam döngüsü boyunca ürün güvenliliğinin sürekli gösterilmesine yardımcı olur." },
  { q: "TOXENTRA hem yeni hem de mevcut tıbbi cihazları destekleyebilir mi?", a: "Evet. Hem yeni geliştirilen tıbbi cihazlar hem de değişen regülasyon beklentilerini karşılamak için dokümantasyon güncellemesi, eksiklik analizi ya da ek bilimsel kanıta ihtiyaç duyan mevcut ürünler için bilimsel destek sağlıyoruz." }
];

const related = [
  { title: "Biyolojik Değerlendirme (ISO 10993)", href: "/services/biological-evaluation-iso-10993" },
  { title: "Toksikolojik Risk Değerlendirmesi", href: "/services/toxicological-risk-assessment" },
  { title: "Klinik ve Farmakolojik Değerlendirme", href: "/services/clinical-pharmacological-evaluation" },
  { title: "Bilimsel ve Regülasyon Danışmanlığı", href: "/services/scientific-regulatory-consulting" }
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Tıbbi Cihaz Güvenliliği"
      title="Tıbbi Cihaz Yaşam Döngüsü Boyunca Bilimsel Güvenlilik"
      subtitle="Ürün geliştirme, regülasyon onayı ve pazar sonrası gözetim boyunca tıbbi cihazların güvenlilik değerlendirmesi için bağımsız bilimsel destek."
      overview={[
    "Tıbbi cihazların güvenliliğini sağlamak, biyolojik değerlendirmenin ötesine geçen, çok disiplinli ve risk odaklı bir yaklaşım gerektirir. Üreticiler; ürün yaşam döngüsünün tamamında toksikolojik değerlendirme, biyolojik güvenlilik, klinik kanıt, risk yönetimi ve regülasyon dokümantasyonunu bir araya getirerek cihazlarının amaçlanan kullanım için güvenli olduğunu göstermelidir.",
    "TOXENTRA'da, üreticilerin tıbbi cihaz güvenliliğine ilişkin uluslararası regülasyon beklentilerini karşılamasını desteklemek için bağımsız bilimsel uzmanlık sunuyoruz. Değerlendirmelerimiz güncel bilimsel kanıta, uluslararası kabul görmüş standartlara ve regülasyon kılavuzlarına dayanır; kuruluşların sağlam teknik dokümantasyon hazırlamasına ve ürün güvenliliğini güvenle göstermesine yardımcı olur.",
    "İster yenilikçi bir cihaz geliştiriyor, ister mevcut bir ürünü güncelliyor ya da pazara giriş için dokümantasyon hazırlıyor olun; regülasyon uyumunu ve hasta güvenliliğini destekleyen, kişiselleştirilmiş bilimsel çözümler sunuyoruz."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Bağımsız bilimsel uzmanlık mı arıyorsunuz?"
      ctaText="Tıbbi cihaz güvenliliği, ürün yaşam döngüsü boyunca bilimsel açıdan sağlam, risk odaklı karar alınmasını gerektirir. TOXENTRA; üreticilerin güvenliliği göstermesine, regülasyon beklentilerini karşılamasına ve sağlam teknik dokümantasyon hazırlamasına yardımcı olacak kişiselleştirilmiş bilimsel destek sunar."
      locale="tr"
    />
  );
}
