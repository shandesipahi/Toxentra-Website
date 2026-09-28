import {
  Activity, BarChart3, BookOpen, FileText, GraduationCap, Search, ShieldAlert
} from "lucide-react";
import ServiceDetailLayout from "../../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Farmakovijilans — TOXENTRA",
  description:
    "Sinyal değerlendirmesi, yarar-risk değerlendirmesi ve pazarlama sonrası güvenliği destekleyen kanıta dayalı farmakovijilans desteği.",
};

const services = [
  { icon: Activity, title: "Sinyal Tespiti ve Sinyal Değerlendirmesi", text: "Spontan raporlama sistemlerini, yayımlanmış literatürü ve kanıta dayalı sinyal değerlendirme metodolojilerini kullanarak potansiyel güvenlilik sinyallerinin bilimsel değerlendirmesi." },
  { icon: BarChart3, title: "Orantısızlık Analizi", text: "Sinyal tespitini ve güvenlilik değerlendirmesini desteklemek için uluslararası kabul görmüş orantısızlık yöntemleri kullanılarak spontan raporlama veri tabanlarının istatistiksel değerlendirmesi." },
  { icon: ShieldAlert, title: "Yarar-Risk Değerlendirmesi", text: "Ürün yaşam döngüsü boyunca dengeli yarar-risk değerlendirmelerini desteklemek için mevcut güvenlilik ve klinik kanıtı bir araya getiren kapsamlı bilimsel değerlendirme." },
  { icon: BookOpen, title: "Bilimsel Literatür Değerlendirmesi", text: "Farmakovijilans faaliyetlerini ve güvenlik değerlendirmelerini destekleyen yayımlanmış güvenlilik verilerinin sistematik olarak incelenmesi ve eleştirel olarak yorumlanması." },
  { icon: Search, title: "Farmakovijilans Verilerinin Yorumlanması", text: "Güvenlik değerlendirmesini ve kanıta dayalı bilimsel karar alma süreçlerini desteklemek amacıyla farmakovijilans bulgularının bilimsel olarak yorumlanması." },
  { icon: ShieldAlert, title: "Tıbbi Cihaz Vijilansına Bilimsel Destek", text: "Uygun durumlarda, tıbbi cihazlara ilişkin pazarlama sonrası güvenlilik bilgilerinin ve vijilans verilerinin değerlendirilmesine yönelik bilimsel destek." },
  { icon: GraduationCap, title: "MedDRA Desteği ve Bilimsel Kodlama İlkeleri", text: "Doğru güvenlilik verisi yorumlanmasını ve tutarlılığı desteklemek için MedDRA terminolojisinin ve kodlama ilkelerinin uygun kullanımı konusunda bilimsel rehberlik." },
  { icon: GraduationCap, title: "Farmakovijilans Eğitimi", text: "Sanayi ve akademiye yönelik; farmakovijilans ilkeleri, sinyal tespiti, yarar-risk değerlendirmesi ve ilgili bilimsel konuları kapsayan profesyonel eğitim programları." },
  { icon: FileText, title: "Bilimsel Güvenlilik Raporları", text: "Sinyal değerlendirmesini, literatür taramasını, yarar-risk değerlendirmesini ve pazar sonrası güvenlilik dokümantasyonunu destekleyen bilimsel raporların hazırlanması." }
];

const whyUs = [
  "Farmakovijilans ve toksikolojide bağımsız bilimsel uzmanlık.",
  "Sinyal tespiti ve orantısızlık analizinde deneyim.",
  "Gerçek dünya güvenlilik verisinin kanıta dayalı yorumlanması.",
  "İlgili farmakovijilans gereklilikleriyle uyumlu bilimsel dokümantasyon.",
  "Sanayi, araştırma kuruluşları ve akademinin ihtiyaçlarına özel çözümler."
];

const faqs = [
  { q: "Farmakovijilans nedir?", a: "Farmakovijilans; ürün yaşam döngüsü boyunca advers etkilerin veya diğer ilaçla ilişkili sorunların tespit edilmesi, değerlendirilmesi, anlaşılması ve önlenmesine yönelik bilim ve uygulamadır." },
  { q: "Sinyal tespiti nedir?", a: "Sinyal tespiti; bir tıbbi ürün ile advers olay arasında potansiyel bir ilişkiye işaret edebilecek, daha ileri bilimsel değerlendirme gerektiren yeni veya değişen güvenlilik bilgisinin belirlenmesi sürecidir." },
  { q: "Orantısızlık analizi nedir?", a: "Orantısızlık analizi, belirli advers olayların belirli bir tıbbi ürün için beklenenden daha sık rapor edilip edilmediğini değerlendirerek spontan raporlama veri tabanlarındaki potansiyel güvenlilik sinyallerini belirlemek için kullanılan istatistiksel bir yaklaşımdır." },
  { q: "Yarar-risk değerlendirmesi neden önemlidir?", a: "Yarar-risk değerlendirmesi; bir tıbbi ürünün genel klinik yararlarının, yaşam döngüsü boyunca potansiyel risklerinden ağır basmaya devam edip etmediğini belirlemek için etkililik ve güvenlilikle ilgili mevcut kanıtı bir araya getirir." },
  { q: "MedDRA nedir?", a: "MedDRA (Regülasyon Faaliyetleri için Tıbbi Sözlük), farmakovijilans faaliyetlerinde advers olay bilgisinin kodlanması, analiz edilmesi ve iletilmesi için kullanılan uluslararası standartlaştırılmış tıbbi terminolojidir." },
  { q: "TOXENTRA farmakovijilans faaliyetlerinde nasıl destek olur?", a: "TOXENTRA; sinyal tespiti ve değerlendirmesi, orantısızlık analizleri, literatür değerlendirmesi, yarar-risk değerlendirmesi ve projeye özgü bilimsel güvenlilik raporlarının hazırlanması yoluyla bağımsız bilimsel destek sunar." }
];

const related = [
  { title: "Klinik ve Farmakolojik Değerlendirme", href: "/services/clinical-pharmacological-evaluation" },
  { title: "Toksikolojik Risk Değerlendirmesi", href: "/services/toxicological-risk-assessment" },
  { title: "Bilimsel ve Toksikoloji Danışmanlığı", href: "/services/scientific-regulatory-consulting" },
  { title: "Bilimsel Eğitimler", href: "/services/training-scientific-education" }
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Farmakovijilans"
      title="Bilimsel Farmakovijilansla İlaç Güvenliliğini İleriye Taşımak"
      subtitle="Sinyal değerlendirmesi, yarar-risk değerlendirmesi ve pazarlama sonrası güvenliği destekleyen kanıta dayalı farmakovijilans desteği."
      overview={[
    "Farmakovijilans, tıbbi ürünlerin klinik kullanıma girdikten sonra güvenliliğinin sürekli izlenmesi yoluyla halk sağlığının korunmasında önemli bir rol oynar. Gerçek yaşam güvenlilik verilerinin, bilimsel literatürün ve ortaya çıkan güvenlilik sinyallerinin analizi; potansiyel risklerin belirlenmesi ve bilimsel temelli regülasyon kararlarının desteklenmesi açısından önemli kanıtlar sağlar.",
    "TOXENTRA olarak, kanıta dayalı yöntemler ve güncel regülasyon gereklilikleri doğrultusunda bağımsız bilimsel farmakovijilans desteği sunuyoruz. Yaklaşımımız; güvenlilik verilerinin değerlendirilmesi, ortaya çıkan sinyallerin yorumlanması ve ürün yaşam döngüsü boyunca yarar-risk değerlendirmesine katkı sağlamak amacıyla farmakoloji, toksikoloji ve farmakoepidemiyolojiyi bir araya getirir.",
    "Sinyal değerlendirmesi, literatür değerlendirmesi veya farmakovijilans eğitimi için bilimsel desteğe ihtiyaç duyduğunuzda, ürün güvenliğini ve kanıta dayalı karar alma süreçlerini destekleyen ihtiyaçlarınıza özel çözümler sunuyoruz."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Bağımsız bilimsel uzmanlık mı arıyorsunuz?"
      ctaText="Farmakovijilans, yalnızca regülasyon gerekliliklerine uyumdan ibaret değildir; daha güvenli ilaçları ve bilimsel temelli karar alma süreçlerini destekleyen bilimsel bir disiplindir. TOXENTRA, her projenin bilimsel ihtiyaçlarına yönelik kanıta dayalı farmakovijilans desteği sunar."
      locale="tr"
    />
  );
}
