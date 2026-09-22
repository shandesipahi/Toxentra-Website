import {
  BookOpen, ClipboardCheck, FileText, GraduationCap, MessageSquare, Route, Search, Target, Users
} from "lucide-react";
import ServiceDetailLayout from "../../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Bilimsel ve Toksikoloji Danışmanlığı — TOXENTRA",
  description:
    "İlaç, tıbbi cihaz, kozmetik ve tüketici ürünlerinde ürün geliştirme ve güvenlik değerlendirmesini destekleyen bağımsız bilimsel ve toksikolojik danışmanlık.",
};

const services = [
  { icon: Target, title: "Bilimsel Strateji ve Regülasyon Gerekliliklerine Uyum", text: "Ürün türünü, hedef pazarı ve geçerli regülasyon gerekliliklerini dikkate alan bilimsel stratejilerin geliştirilmesi." },
  { icon: FileText, title: "Bilimsel Raporlama ve Dokümantasyon", text: "Ürün geliştirme ve güvenlik değerlendirmesini destekleyen teknik raporların, güvenlik değerlendirmelerinin ve literatür değerlendirmelerinin hazırlanması ve bilimsel olarak incelenmesi." },
  { icon: Search, title: "Bilimsel Eksiklik Analizi", text: "Mevcut veri ve geliştirme programlarındaki bilimsel ve teknik eksikliklerin belirlenmesi ve gerektiğinde ileri değerlendirmelere yönelik önerilerin sunulması." },
  { icon: Route, title: "Regülasyon Gerekliliklerinin Değerlendirilmesi", text: "Ürün güvenliği ve bilimsel değerlendirmeyle ilgili geçerli regülasyon gerekliliklerinin değerlendirilmesi." },
  { icon: BookOpen, title: "Bilimsel Literatür Değerlendirmesi", text: "Ürün güvenliği ve bilimsel değerlendirmeleri desteklemek amacıyla yayımlanmış bilimsel kanıtların kapsamlı ve eleştirel olarak değerlendirilmesi." },
  { icon: MessageSquare, title: "Uzman Bilimsel Görüş", text: "Toksikolojik, farmakolojik ve ürün güvenliğine ilişkin konuları ele alan bağımsız bilimsel görüşlerin hazırlanması." },
  { icon: Users, title: "Ürün Geliştirme Danışmanlığı", text: "Çalışma planlaması, toksikolojik değerlendirme ve ürün güvenliği değerlendirmesi dahil olmak üzere ürün geliştirme sürecinde bilimsel danışmanlık." },
  { icon: ClipboardCheck, title: "Bilimsel ve Teknik İnceleme", text: "Teknik bilgilerin tutarlılığını, bütünlüğünü ve ürün güvenliği açısından uygunluğunu değerlendirmek amacıyla bağımsız bilimsel inceleme." },
  { icon: GraduationCap, title: "Bilimsel Eğitimler", text: "Toksikoloji, ürün güvenliği, risk değerlendirmesi ve ilgili bilimsel konuları kapsayan profesyonel eğitim programları." }
];

const whyUs = [
  "Toksikoloji, farmakoloji ve ürün güvenliği alanlarında bağımsız bilimsel uzmanlık.",
  "Projeye özgü gerekliliklere yönelik kanıta dayalı danışmanlık.",
  "İlgili regülasyon gereklilikleri dikkate alınarak hazırlanan bilimsel raporlar.",
  "Ürün yaşam döngüsünün farklı aşamalarında bilimsel destek.",
  "Bilimsel kalite ve ürün güvenliğine odaklanan, uygulamaya yönelik ve kanıta dayalı yaklaşımlar."
];

const faqs = [
  { q: "Bilimsel ve toksikoloji danışmanlığı nedir?", a: "Bilimsel ve toksikoloji danışmanlığı; ürün geliştirme sürecinde ürün güvenliği, toksikolojik değerlendirme ve bilimsel karar alma süreçlerine kanıta dayalı destek sağlar." },
  { q: "Bilimsel güvenlik değerlendirmesi ne zaman başlamalıdır?", a: "Bilimsel güvenlik değerlendirmesi, ürün geliştirmenin erken aşamalarında ele alınmalıdır. Erken değerlendirme; veri ihtiyaçlarının belirlenmesine, test stratejilerinin planlanmasına ve ürün geliştirme sürecinde bilimsel temelli kararların alınmasına yardımcı olabilir." },
  { q: "TOXENTRA hangi ürün türlerini destekler?", a: "TOXENTRA; toksikolojik veya güvenlik değerlendirmesi gerektiren ilaçlar, tıbbi cihazlar, kozmetikler, gıda takviyeleri, kimyasallar ve diğer ürünler için bilimsel ve toksikoloji danışmanlığı sunar." },
  { q: "TOXENTRA mevcut bilimsel veri ve dokümantasyonu inceleyebilir mi?", a: "Evet. Veri eksikliklerini belirlemek ve ek değerlendirmeye ihtiyaç olup olmadığını değerlendirmek amacıyla mevcut bilimsel ve teknik bilgileri bağımsız olarak inceliyoruz." },
  { q: "Bilimsel eksiklik analizi nedir?", a: "Bilimsel eksiklik analizi, ürün güvenliği değerlendirmesini etkileyebilecek eksik bilgileri veya bilimsel sınırlılıkları belirlemek amacıyla mevcut verilerin değerlendirilmesidir." },
  { q: "TOXENTRA regülasyon gerekliliklerine nasıl destek sağlar?", a: "TOXENTRA; ilgili regülasyon gerekliliklerini dikkate alarak toksikolojik risk değerlendirmesi, literatür değerlendirmesi, bilimsel ve teknik inceleme ve uzman bilimsel görüşler yoluyla bilimsel destek sağlar." }
];

const related = [
  { title: "Toksikolojik Risk Değerlendirmesi", href: "/services/toxicological-risk-assessment" },
  { title: "Tıbbi Cihaz Güvenliliği", href: "/services/medical-device-safety" },
  { title: "Kozmetik Ürün Güvenliliği (CPSR)", href: "/services/cosmetic-product-safety" },
  { title: "Klinik ve Farmakolojik Değerlendirme", href: "/services/clinical-pharmacological-evaluation" }
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Bilimsel ve Toksikoloji Danışmanlığı"
      title="Bilimsel Bilgiyi Daha Güvenli Ürünlere Dönüştürmek"
      subtitle="İlaç, tıbbi cihaz, kozmetik ve tüketici ürünlerinde ürün geliştirme ve güvenlik değerlendirmesini destekleyen bağımsız bilimsel ve toksikolojik danışmanlık."
      overview={[
    "Başarılı ürün geliştirme; sağlam bilimsel kanıtlara, uygun güvenlik değerlendirmesine ve ilgili regülasyon gerekliliklerinin doğru anlaşılmasına dayanır. Bilimsel bilginin ürün güvenliğine yönelik sistematik bir yaklaşımla birleştirilmesi, ürün geliştirme sürecinde bilimsel temelli kararların alınmasını destekler.",
    "TOXENTRA olarak üreticilerin, araştırma kuruluşlarının ve yenilikçi şirketlerin ihtiyaçlarına yönelik bağımsız bilimsel ve toksikoloji danışmanlığı sunuyoruz. Yaklaşımımız; ürün geliştirmenin farklı aşamalarını desteklemek üzere toksikoloji, farmakoloji ve ürün güvenliği alanlarını bir araya getirir.",
    "Toksikolojik değerlendirme, bilimsel değerlendirme veya ürün geliştirme desteğine ihtiyaç duyduğunuzda, ihtiyaçlarınıza özel, uygulamaya yönelik ve kanıta dayalı bilimsel destek sunuyoruz."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Bağımsız bilimsel ve toksikoloji desteği mi arıyorsunuz?"
      ctaText="Ürün güvenliğine ilişkin kararlar, güvenilir bilimsel kanıtlara ve uygun toksikolojik değerlendirmelere dayanmalıdır. TOXENTRA, kuruluşların ürün güvenliğini değerlendirmelerine ve ürün geliştirme sürecinde kanıta dayalı kararlar almalarına yardımcı olmak amacıyla bağımsız bilimsel destek sunar."
      locale="tr"
    />
  );
}
