import Script from 'next/script';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ayana Izumi",
    "alternateName": "Ayana Izumi AI WhatsApp Bot",
    "url": "https://ayana.izumi.id",
    "description": "Ayana Izumi adalah AI WhatsApp Bot yang bisa ngobrol, nyanyi, ngomong, dan bikin gambar keren. Teman AI paling gemes di WhatsApp!",
    "inLanguage": "id-ID",
    "publisher": {
      "@type": "Organization",
      "name": "Latent Space Explorer",
      "url": "https://ayana.izumi.id"
    },
    "creator": {
      "@type": "Person",
      "name": "PGRjoystick"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ayana.izumi.id/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Ayana Izumi",
      "description": "AI-powered WhatsApp bot yang bisa chat, nyanyi, voice message, dan image generation",
      "applicationCategory": "ChatApplication",
      "operatingSystem": "WhatsApp",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1000"
      }
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
