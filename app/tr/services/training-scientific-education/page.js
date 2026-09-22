import {
  
} from "lucide-react";
import ServiceDetailLayout from "../../../../components/ServiceDetailLayout";

export const metadata = {
  title: "Bilimsel Eğitimler — TOXENTRA",
  description:
    "Sağlık ve yaşam bilimleri alanında toksikoloji, farmakovijilans ve ürün güvenliliği konularındaki uzmanlığı güçlendirmek için tasarlanmış profesyonel eğitim programları.",
};

const services = [

];

const whyUs = [
  "Deneyimli profesyoneller tarafından verilen eğitimler.",
  "Güncel uluslararası kılavuzları yansıtan, kanıta dayalı içerik.",
  "Gerçek dünya vaka çalışmalarıyla desteklenen pratik öğrenme.",
  "Kurumsal ihtiyaçlara ve katılımcı deneyimine göre kişiselleştirilmiş programlar.",
  "Yerinde veya çevrimiçi formatlarla esnek sunum."
];

const faqs = [
  { q: "TOXENTRA'nın eğitim programları kimler için tasarlanmıştır?", a: "Programlarımız, toksikoloji, ürün güvenliği ve ilgili alanlarda çalışan profesyoneller ve araştırmacılar için tasarlanmıştır." },
  { q: "Eğitim programları kişiselleştiriliyor mu?", a: "Evet. Her kurumun ihtiyaçları farklıdır ve eğitim içeriği hedef kitleye, konu alanına ve öğrenme hedeflerine göre uyarlanabilir." },
  { q: "Eğitim çevrimiçi verilebilir mi?", a: "Evet. TOXENTRA, müşteri tercihlerine ve kurumsal gerekliliklere bağlı olarak hem çevrimiçi hem de yerinde eğitim programları sunar." },
  { q: "Pratik vaka çalışmaları dahil mi?", a: "Evet. Uygun olduğunda, eğitim programlarımız bilgi aktarımını kolaylaştırmak ve katılımcı etkileşimini artırmak için bilimsel vaka çalışmaları ve pratik uygulamalar içerir." },
  { q: "TOXENTRA kuruma özel kurslar geliştirebilir mi?", a: "Evet. Kuruluşların ihtiyaçları ve öğrenme hedefleri doğrultusunda belirli bilimsel ve teknik konulara yönelik özelleştirilmiş eğitim programları tasarlamak için kuruluşlarla yakın iş birliği içinde çalışıyoruz." }
];

const related = [
  { title: "Farmakovijilans", href: "/services/pharmacovigilance" },
  { title: "Bilimsel ve Toksikoloji Danışmanlığı", href: "/services/scientific-regulatory-consulting" },
  { title: "Tıbbi Cihaz Güvenliliği", href: "/services/medical-device-safety" },
  { title: "Toksikolojik Risk Değerlendirmesi", href: "/services/toxicological-risk-assessment" }
];

export default function Page() {
  return (
    <ServiceDetailLayout
      eyebrow="Bilimsel Eğitimler"
      title="Bilimsel Bilgiyle Profesyonelleri Güçlendirmek"
      subtitle="Sağlık ve yaşam bilimleri alanında toksikoloji, farmakovijilans ve ürün güvenliliği konularındaki uzmanlığı güçlendirmek için tasarlanmış profesyonel eğitim programları."
      overview={[
    "Sürekli eğitim, yaşam bilimleri alanında yüksek ürün güvenliliği, regülasyon uyumu ve mesleki yeterlilik standartlarını korumak için gereklidir. Bilimsel bilgi ve regülasyon beklentileri gelişmeye devam ettikçe, kuruluşların güncel bilimsel gelişmeleri gerçek dünya uygulamalarına dönüştüren pratik ve kanıta dayalı eğitime ihtiyacı vardır.",
    "TOXENTRA olarak, sanayi ve akademiye yönelik bilimsel eğitimler ve mesleki eğitim programları sunuyoruz. Programlarımız; güncel bilimsel verileri, uygulamaya yönelik örnekler ve ilgili regülasyon gereklilikleriyle bir araya getirerek katılımcıların toksikoloji ve ürün güvenliği alanlarındaki bilgi birikimlerini geliştirmelerini destekler.",
    "İster yerinde ister çevrimiçi verilsin, eğitim programlarımız her kuruluşun ve katılımcı grubunun özel ihtiyaçlarına göre kişiselleştirilir."
      ]}
      services={services}
      whyUs={whyUs}
      faqs={faqs}
      related={related}
      ctaTitle="Mesleki eğitim yoluyla bilimsel bilginizi geliştirin."
      ctaText="Güçlü bilimsel bilgi, ürün güvenliğini ve bilimsel temelli karar alma süreçlerini destekler. TOXENTRA, kuruluşların bilimsel bilgi birikimlerini güçlendirmelerine ve sürekli mesleki gelişimi desteklemelerine yardımcı olan, uygulamaya yönelik ve kanıta dayalı eğitimler sunar."
      locale="tr"
    />
  );
}
