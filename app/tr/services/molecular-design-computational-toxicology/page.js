import {
  Activity, Atom, BookOpen, Cpu, FileText, FlaskConical, Search, ShieldAlert
} from "lucide-react";
import ServiceDetailLayout from "../../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Moleküler Tasarım ve Hesaplamalı Toksikoloji — TOXENTRA",
  description:
    "İlaç, tıbbi cihaz, kozmetik ve kimyasallar genelinde moleküler tasarımı, tahmine dayalı toksikolojiyi ve kanıta dayalı güvenlilik değerlendirmesini destekleyen ileri hesaplamalı yaklaşımlar.",
};

const services = [
  { icon: Atom, title: "Moleküler Docking Çalışmaları", text: "Etki mekanizması çalışmalarını, öncü molekül optimizasyonunu ve bilimsel hipotez oluşturmayı desteklemek için bileşikler ile biyolojik hedefler arasındaki moleküler etkileşimlerin hesaplamalı olarak öngörülmesi." },
  { icon: Cpu, title: "QSAR Modellemesi", text: "Moleküler yapıya dayalı toksikolojik uç noktaları ve fizikokimyasal özellikleri öngörmek için Nicel Yapı-Aktivite İlişkisi (QSAR) modellerinin uygulanması." },
  { icon: ShieldAlert, title: "Tahmine Dayalı Toksikoloji", text: "Bilimsel olarak desteklenen ve yerleşik hesaplamalı metodolojiler kullanılarak mutajenite, karsinojenite, cilt duyarlılılığı, hepatotoksisite ve diğer güvenlilikle ilgili toksikolojik tehlikelerin in silico olarak öngörülmesi." },
  { icon: Activity, title: "ADME Tahmini", text: "Farmakokinetik davranışın erken değerlendirilmesini ve bileşik optimizasyonunu desteklemek için emilim, dağılım, metabolizma ve atılım (ADME) özelliklerinin hesaplamalı değerlendirmesi." },
  { icon: FlaskConical, title: "Moleküler Özellik Analizi", text: "Ürün geliştirme ve güvenlilikle ilgili moleküler ağırlık, lipofilite, çözünürlük ve diğer moleküler tanımlayıcılar gibi fizikokimyasal özelliklerin değerlendirilmesi." },
  { icon: Search, title: "Sanal Tarama", text: "Biyolojik aktivite ve güvenlilikle ilgili özelliklere dayalı olarak moleküler kütüphanelerin hesaplamalı taranması yoluyla umut verici bileşiklerin belirlenmesi ve önceliklendirilmesi." },
  { icon: ShieldAlert, title: "Hesaplamalı Risk Değerlendirmesi", text: "Kanıt ağırlığı değerlendirmelerini ve regülasyon karar alma süreçlerini desteklemek için hesaplamalı toksikoloji verisinin maruziyet değerlendirmesi ve mevcut bilimsel kanıtla birleştirilmesi." },
  { icon: BookOpen, title: "In Silico Verinin Bilimsel Yorumlanması", text: "Bilimsel raporlar, regülasyon dokümantasyonu ve ürün geliştirme stratejileri için hesaplamalı bulguların eleştirel değerlendirmesi ve yorumlanması." },
  { icon: FileText, title: "Hesaplamalı Toksikoloji Raporları", text: "Hesaplamalı analizleri, toksikolojik tahminleri ve bunların ürün güvenliliği ile regülasyon başvuruları açısından önemini özetleyen kapsamlı bilimsel raporların hazırlanması." }
];

const whyUs = [
  "Hesaplamalı toksikolojide bağımsız bilimsel uzmanlık.",
  "Moleküler modellemenin toksikolojik risk değerlendirmesiyle birleştirilmesi.",
  "In silico verinin kanıta dayalı yorumlanması.",
  "Regülasyon odaklı bilimsel raporlama.",
  "Ürün inovasyonunu ve güvenliliğini destekleyen kişiselleştirilmiş hesaplamalı çözümler."
];

const faqs = [
  { q: "Hesaplamalı toksikoloji nedir?", a: "Hesaplamalı toksikoloji, kimyasalların, ilaçların, tıbbi cihazların ve tüketici ürünlerinin potansiyel güvenliliğini değerlendirmek için bilgisayar tabanlı modelleri ve öngörücü yöntemleri uygular. Bu yaklaşımlar, deneysel testten önce veya onunla birlikte bilimsel karar almayı destekler." },
  { q: "Moleküler docking nedir?", a: "Moleküler docking, bir molekülün biyolojik bir hedefle nasıl etkileşime girdiğini öngörmek için kullanılan hesaplamalı bir tekniktir; araştırmacıların bağlanma mekanizmalarını incelemesine ve bileşikleri ileri çalışma için önceliklendirmesine yardımcı olur." },
  { q: "QSAR nedir?", a: "Nicel Yapı-Aktivite İlişkisi (QSAR) modellemesi, moleküler yapıya dayalı olarak biyolojik veya toksikolojik özellikleri öngörür. QSAR, tehlike tanımlamasını desteklemek ve toksikolojik veri eksikliklerini gidermek için yaygın olarak kullanılır." },
  { q: "Hesaplamalı yöntemler laboratuvar testinin yerini alabilir mi?", a: "Hesaplamalı yaklaşımlar değerli bilimsel kanıt sağlar ve belirli deneysel çalışma ihtiyacını azaltabilir. Ancak genellikle bütünleşik bir bilimsel değerlendirmenin parçası olarak diğer kanıt kaynaklarıyla birlikte kullanılır ve amaçlanan regülasyon bağlamına göre uygulanmalıdır." },
  { q: "Öngörücü toksikoloji nedir?", a: "Öngörücü toksikoloji; deneysel veya klinik veri elde edilmeden önce potansiyel tehlikeleri tahmin etmek için hesaplamalı modelleri, toksikolojik veri tabanlarını ve bilimsel algoritmaları bir araya getirir." },
  { q: "TOXENTRA hesaplamalı toksikoloji projelerinde nasıl destek olur?", a: "TOXENTRA; moleküler docking, ADME öngörüsü, öngörücü toksikoloji, sanal tarama, hesaplamalı risk değerlendirmesi ve geçerli regülasyon gereklilikleriyle uyumlu bilimsel raporlar hazırlanması yoluyla bağımsız bilimsel destek sağlar." }
];

const related = [
  { title: "Toksikolojik Risk Değerlendirmesi", href: "/services/toxicological-risk-assessment" },
  { title: "Klinik ve Farmakolojik Değerlendirme", href: "/services/clinical-pharmacological-evaluation" },
  { title: "Bilimsel ve Toksikoloji Danışmanlığı", href: "/services/scientific-regulatory-consulting" }
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Moleküler Tasarım ve Hesaplamalı Toksikoloji"
      title="Hesaplamalı Bilimle Daha Güvenli Ürün Geliştirmeyi Hızlandırmak"
      subtitle="İlaç, tıbbi cihaz, kozmetik ve kimyasallar genelinde moleküler tasarımı, tahmine dayalı toksikolojiyi ve kanıta dayalı güvenlilik değerlendirmesini destekleyen ileri hesaplamalı yaklaşımlar."
      overview={[
    "Hesaplamalı yaklaşımlar; biyolojik aktivitenin, toksikolojik tehlikelerin ve moleküler etkileşimlerin deneysel testten önce erken öngörülmesini sağlayarak modern ürün geliştirmenin ayrılmaz bir parçası haline gelmiştir. Bu yöntemler bilinçli bilimsel karar almayı destekler, geliştirme süresini kısaltır ve gereksiz laboratuvar testlerini en aza indirirken daha verimli bir güvenlilik değerlendirmesine katkı sağlar.",
    "TOXENTRA'da, moleküler modelleme, hesaplamalı toksikoloji ve in silico güvenlilik değerlendirmesinde bağımsız bilimsel uzmanlık sunuyoruz. Hesaplamalı yöntemleri toksikolojik bilgi ve regülasyon bilimiyle bütünleştirerek; kuruluşların potansiyel riskleri değerlendirmesine, deneysel çalışmaları önceliklendirmesine ve ürün geliştirme boyunca bilimsel kanıtı güçlendirmesine yardımcı oluyoruz.",
    "İster yeni bir bileşik tasarlıyor, ister bileşen güvenliliğini değerlendiriyor ya da regülasyon dokümantasyonunu destekliyor olun; bilimsel ve regülasyon hedeflerinize özel, kanıta dayalı hesaplamalı çözümler sunuyoruz."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Daha güvenli ürün geliştirmeyi destekleyecek hesaplamalı çözümler mi arıyorsunuz?"
      ctaText="Hesaplamalı bilim; güvenliliği kanıta dayalı tahmin etmek, moleküler etkileşimleri anlamak ve bilimsel karar almayı güçlendirmek için güçlü araçlar sunar. TOXENTRA, araştırma, ürün geliştirme ve regülasyon süreçlerinde ihtiyaca özel, kanıta dayalı hesaplamalı toksikoloji hizmetleri sunar."
      locale="tr"
    />
  );
}
