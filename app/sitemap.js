const BASE_URL = "https://toxentra.com";

const services = [
  "biological-evaluation-iso-10993",
  "toxicological-risk-assessment",
  "medical-device-safety",
  "cosmetic-product-safety",
  "clinical-pharmacological-evaluation",
  "pharmacovigilance",
  "molecular-design-computational-toxicology",
  "scientific-regulatory-consulting",
  "training-scientific-education",
];

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const servicePages = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
