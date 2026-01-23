import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bike Insurance - Compare Bike Insurance Quotes Online",
  description: "Find affordable bicycle insurance in the UK. Compare policies for theft, damage, and personal accident cover for your bike.",
  keywords: ["bike insurance", "bicycle insurance", "cycle insurance UK", "bike theft insurance", "cycling insurance"],
  openGraph: {
    title: "Bike Insurance - Compare Bike Insurance Quotes Online",
    description: "Find affordable bicycle insurance in the UK. Compare policies for theft, damage, and personal accident cover for your bike.",
    url: "https://bikeinsurance.quest",
    siteName: "Bike Insurance",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bike Insurance - Compare Bike Insurance Quotes Online",
    description: "Find affordable bicycle insurance in the UK. Compare policies for theft, damage, and personal accident cover for your bike.",
  },
  alternates: { canonical: "https://bikeinsurance.quest" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bike Insurance",
              url: "https://bikeinsurance.quest",
              description: "Find affordable bicycle insurance in the UK. Compare policies for theft, damage, and personal accident cover for your bike.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
