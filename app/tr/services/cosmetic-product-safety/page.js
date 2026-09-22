import {
  ClipboardCheck, FileText, Scale, ShieldAlert, ShieldCheck, Target
} from "lucide-react";
import ServiceDetailLayout from "../../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Kozmetik Ürün Güvenliliği (CPSR) — TOXENTRA",
  description:
    "Avrupa kozmetik mevzuatına ve uluslararası kabul görmüş bilimsel ilkelere uygun kozmetik ürün güvenlilik değerlendirmesi için bağımsız bilimsel destek.",
};

const services = [
  { icon: FileText, title: "Kozmetik Ürün Güvenlik Raporu (CPSR)", text: "(EC) No. 1223/2009 sayılı Kozmetik Ürünler Tüzüğü gereklilikleri doğrultusunda Kozmetik Ürün Güvenlik Raporlarının (CPSR) hazırlanması ve bilimsel olarak değerlendirilmesi." },
  { icon: ShieldAlert, title: "Bileşenlerin Toksikolojik Değerlendirmesi", text: "Kozmetik bileşenlerin mevcut toksikolojik veriler, yayımlanmış bilimsel literatür ve uluslararası kabul görmüş bilimsel görüşler doğrultusunda kapsamlı olarak değerlendirilmesi." },
  { icon: Scale, title: "Güvenlilik Sınırı (MoS) Hesaplamaları", text: "Kozmetik bileşenlerin sistemik maruziyet tahminleri ve toksikolojik referans noktaları esas alınarak Güvenlilik Sınırı (MoS) değerlerinin hesaplanması ve yorumlanması." },
  { icon: Target, title: "Maruziyet Değerlendirmesi", text: "Ürün türü, kullanım sıklığı, uygulama bölgesi, hedef popülasyon ve öngörülebilir kullanım koşulları dikkate alınarak tüketici maruziyetinin değerlendirilmesi." },
  { icon: ClipboardCheck, title: "Bileşen Etkileşimlerinin Değerlendirilmesi", text: "Bileşenlerin uyumluluğunun ve ürün formülasyonu ile bileşenlere kombine maruziyetten kaynaklanabilecek olası toksikolojik etkilerin bilimsel olarak değerlendirilmesi." },
  { icon: ShieldCheck, title: "SCCS Temelli Güvenlik Değerlendirmesi", text: "Uygun olduğu durumlarda, Tüketici Güvenliği Bilimsel Komitesi (SCCS) tarafından yayımlanan güncel görüşler, kılavuzlar ve bilimsel yöntemler doğrultusunda güvenlik değerlendirmelerinin yapılması." },
  { icon: ClipboardCheck, title: "Güvenlikle İlgili Etiket Bilgilerinin İncelenmesi", text: "Bileşen bildirimleri ve ilgili güvenlik ifadeleri dahil olmak üzere güvenlikle ilişkili etiket bilgilerinin bilimsel olarak incelenmesi." },
  { icon: FileText, title: "Bilimsel Güvenlik Dokümantasyonu", text: "Kozmetik ürün güvenliği değerlendirmesini destekleyen dokümantasyonun hazırlanması ve bilimsel olarak incelenmesi." }
];

const whyUs = [
  "Kozmetik toksikolojisi alanında bağımsız bilimsel uzmanlık.",
  "Uluslararası kabul görmüş yöntemlere dayalı, kanıta dayalı güvenlik değerlendirmeleri.",
  "Bileşen değerlendirmesinden nihai ürün güvenliğine kadar kapsamlı değerlendirme.",
  "İlgili regülasyon gereklilikleri dikkate alınarak hazırlanan bilimsel dokümantasyon.",
  "Üreticiler, ithalatçılar ve marka sahiplerinin ihtiyaçlarına özel destek."
];

const faqs = [
  { q: "Kozmetik Ürün Güvenlik Raporu (CPSR) nedir?", a: "Kozmetik Ürün Güvenlik Raporu (CPSR), bir kozmetik ürünün normal veya makul ölçüde öngörülebilir kullanım koşullarında insan sağlığı açısından güvenli olduğunu ortaya koyan bilimsel bir dokümandır. Avrupa kozmetik mevzuatı kapsamında gerekli olan Ürün Bilgi Dosyasının (PIF) temel bölümlerinden biridir." },
  { q: "Bir kozmetik ürün Avrupa pazarına sunulmadan önce CPSR zorunlu mudur?", a: "Evet. (EC) No. 1223/2009 sayılı Tüzük kapsamında, Avrupa pazarına sunulan her kozmetik ürün için ürün piyasaya sunulmadan önce bir Kozmetik Ürün Güvenlik Raporunun hazırlanması gerekir." },
  { q: "Bir kozmetik ürünün güvenliği nasıl değerlendirilir?", a: "Güvenlik değerlendirmesinde; bileşenlerin toksikolojik özellikleri, ürün formülasyonu, maruziyet koşulları, toksikolojik referans değerleri, Güvenlilik Sınırı (MoS) hesaplamaları ve mevcut bilimsel veriler birlikte değerlendirilerek ürünün tüketiciler açısından güvenli olup olmadığı belirlenir." },
  { q: "Güvenlilik Sınırı (MoS) nedir?", a: "Güvenlilik Sınırı (MoS), bir bileşenin toksikolojik referans noktası ile tahmini tüketici maruziyetini karşılaştırır. Kozmetik bileşenlerin kabul edilebilir güvenlilik sınırları içinde kullanıldığını değerlendirmede kullanılan temel bilimsel araçlardan biridir." },
  { q: "CPSR hazırlanması için hangi bilgiler gereklidir?", a: "CPSR hazırlanması için genellikle ürün bileşimi, bileşen özellikleri, üretim süreci, mikrobiyolojik kalite, stabilite, ambalaj, amaçlanan kullanım, maruziyet değerlendirmesi ve mevcut toksikolojik verilere ilişkin bilgiler gereklidir." },
  { q: "TOXENTRA kozmetik üreticilerine nasıl destek sağlar?", a: "TOXENTRA; bileşenlerin toksikolojik değerlendirmesi, maruziyet değerlendirmesi, Güvenlilik Sınırı (MoS) hesaplamaları, CPSR hazırlanması ve bilimsel literatür değerlendirmesi dahil olmak üzere kozmetik ürün geliştirme sürecinde bağımsız bilimsel destek sunar." }
];

const related = [
  { title: "Toksikolojik Risk Değerlendirmesi", href: "/services/toxicological-risk-assessment" },
  { title: "Bilimsel ve Toksikoloji Danışmanlığı", href: "/services/scientific-regulatory-consulting" },
  { title: "Klinik ve Farmakolojik Değerlendirme", href: "/services/clinical-pharmacological-evaluation" },
  { title: "Bilimsel Eğitimler", href: "/services/training-scientific-education" }
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Kozmetik Ürün Güvenliliği (CPSR)"
      title="Kozmetik Ürünler İçin Bilimsel Güvenlilik Değerlendirmesi"
      subtitle="Avrupa kozmetik mevzuatına ve uluslararası kabul görmüş bilimsel ilkelere uygun kozmetik ürün güvenlilik değerlendirmesi için bağımsız bilimsel destek."
      overview={[
    "Kozmetik ürünlerin güvenliliğini sağlamak, pazara sunulmadan önce yerine getirilmesi gereken temel bir gerekliliktir. Kapsamlı bir güvenlilik değerlendirmesi; normal ya da makul şekilde öngörülebilir kullanım koşullarında bir kozmetik ürünün tüketiciler için güvenli olduğunu göstermek amacıyla bileşenlerin toksikolojik özelliklerini, maruziyet koşullarını, ürün formülasyonunu, amaçlanan kullanımı ve güncel bilimsel kanıtları dikkate alır.",
    "TOXENTRA olarak, uluslararası kabul görmüş toksikolojik ilkeler ve Avrupa regülasyon gereklilikleri doğrultusunda kozmetik güvenlik değerlendirmelerine bağımsız bilimsel destek sunuyoruz. Değerlendirmelerimiz; bileşenlere özgü toksikolojik verileri, maruziyet değerlendirmesini ve kanıta dayalı bilimsel analizleri bir araya getirerek bilimsel açıdan güçlü Kozmetik Ürün Güvenlik Raporlarının (CPSR) ve ilgili güvenlik dokümantasyonunun hazırlanmasını destekler.",
    "İster yeni bir kozmetik formülasyon geliştiriyor, ister mevcut bir ürünü yeniden formüle ediyor ya da ürün güvenliğini değerlendiriyor olun; ürün güvenliğinin bilimsel olarak ortaya konulmasına yönelik ihtiyaçlarınıza özel bilimsel destek sunuyoruz."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Bağımsız bilimsel uzmanlık mı arıyorsunuz?"
      ctaText="Her kozmetik formülasyon kendine özgü güvenlik değerlendirmeleri gerektirir. TOXENTRA, ürün güvenliğini ve bilimsel temelli karar alma süreçlerini destekleyen kanıta dayalı bilimsel değerlendirmeler sunar."
      locale="tr"
    />
  );
}
