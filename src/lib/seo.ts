// Centralized SEO constants for BTech Aqua.
// Update SITE_URL if the primary domain changes.
export const SITE_URL = "https://btechaqua.com";
export const SITE_NAME = "BTech Aqua";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const TWITTER_HANDLE = "@BTechAqua";

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "BTech Aqua Systems",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "BTech Aqua manufactures high-capacity industrial reverse osmosis (RO) water purification systems for commercial, institutional and industrial customers.",
  foundingDate: "2015",
  sameAs: [
    "https://www.linkedin.com/company/btech-aqua",
    "https://www.facebook.com/btechaqua",
    "https://www.instagram.com/btechaqua",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-97311-81694",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  image: DEFAULT_OG_IMAGE,
  url: SITE_URL,
  telephone: "+91-97311-81694",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Estate, Sector 12",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    addressCountry: "IN",
  },
  areaServed: ["IN", "AE", "SA", "KE", "BD", "LK"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};
