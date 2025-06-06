import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieBanner from "./components/CookieBanner";
import hr from '../../messages/hr.json'
import Head from "next/head";

const robotoMono = Roboto_Mono({subsets: ['latin']})

export const metadata: Metadata = {
  title: "PLK Galacticos",
  description: "Naš klub je zajednica sportaša diljem Hrvatske strastvenih za powerlifting. Težimo biti najjači i najtrofejniji powerlifting klub.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "SportsOrganization",
        "name": "Powerlifting Klub Galacticos",
        "url": "https://www.plkgalacticos.hr",
        "logo": "https://www.plkgalacticos.hr/images/logo/plk-galacticos-logo-bright.png",
        "description": "Naš klub je zajednica sportaša diljem Hrvatske strastvenih za powerlifting. Težimo biti najjači i najtrofejniji powerlifting klub.",
        "image": "https://www.plkgalacticos.hr/images/logo/plk-galacticos-logo-bright.png",
        "foundingDate": "2024-08-01",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Varaždin",
            "postalCode": "42000",
            "addressCountry": "HR"
          }
        },
        "contactPoint": [{
          "@type": "ContactPoint",
          "email": "plkgalacticos@gmail.com",
          "contactType": "customer support",
          "areaServed": "HR",
          "availableLanguage": ["Croatian", "English"]
        }],
        "member": [
            {
                "@type": "OrganizationRole",
                "member": {
                    "@type": "Person",
                    "name": "Marko Kuzmić",
                    "url": "https://www.plkgalacticos.hr/clanovi"
                },
                "startDate": "2024-08-01",
                "roleName": "President"
            },
            {
                "@type": "OrganizationRole",
                "member": {
                  "@type": "Person",
                  "name": "Ivan Lokas",
                  "url": "https://www.plkgalacticos.hr/clanovi"
                },
                "startDate": "2024-08-01",
                "roleName": "Vice president"
            }
        ],
        "event": [{
          "@type": "SportsEvent",
          "name": "Cibalae Open Kup",
          "startDate": "2025-03-07",
          "endDate": "2025-03-09",
          "location": {
            "@type": "Place",
            "name": "Sportska dvorana Lapovci",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ohridska ulica 21",
              "addressLocality": "Vinkovci",
              "postalCode": "32100",
              "addressCountry": "HR"
            }
          },
          "url": "https://www.plkgalacticos.hr/cibalae-open-kup",
          "offers": {
            "@type": "Offer",
            "url": "https://www.plkgalacticos.hr/cibalae-open-kup/registration",
            "availability": "https://schema.org/InStock",
            "price": "35.00",
            "priceCurrency": "EUR",
            "validFrom": "2025-02-01"
          },
          "sponsor": [{
            "@type": "Organization",
            "name": "Grad Vinkovci",
            "url": "http://www.grad-vinkovci.hr/"
          }, {
            "@type": "Organization",
            "name": "A7",
            "url": "https://www.a7europe.com/"
          }, {
            "@type": "Organization",
            "name": "Eluir",
            "url": "https://www.eluir.hr/"
          }, {
            "@type": "Organization",
            "name": "Turistička zajednica grada Vinkovaca",
            "url": "https://visitvinkovci.com/"
          }, {
            "@type": "Organization",
            "name": "Smells like PR",
            "url": "https://smellslikepr.com/"
          }, {
            "@type": "Organization",
            "name": "4ZA",
            "url": "https://www.4za.uk/"
          }, {
            "@type": "Organization",
            "name": "4rce",
            "url": "https://4rce.hr/"
          }, {
            "@type": "Organization",
            "name": "Nutrition shop",
            "url": "https://nutrition-shop.hr/"
          }, {
            "@type": "Organization",
            "name": "Tonimir transport international",
            "url": "https://tti-group.com/"
          }, {
            "@type": "Organization",
            "name": "Nutriteka",
            "url": "https://nutriteka.hr/"
          }, {
            "@type": "Organization",
            "name": "Avancus",
            "url": "https://avancus.com/"
          }, {
            "@type": "Organization",
            "name": "Jurcak Design",
            "url": "https://www.jurcakdesign.com/"
          }, {
            "@type": "Organization",
            "name": "Keramika Babić",
            "url": "https://www.emajstor.hr/keramika_babic_vl_marko_babic"
          }]
         
    }]
  }
  return (
    <html lang="hr">
      <head>
          <meta property="og:title" content="PLK Galacticos" />
          <meta property="og:description" content="Naš klub je zajednica sportaša diljem Hrvatske strastvenih za powerlifting. Težimo biti najjači i najtrofejniji powerlifting klub." />
          <meta property="og:image" content="https://www.plkgalacticos.hr/images/logo/plk-galacticos-logo-bright.png" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
          />
      </head>
      <GoogleAnalytics GA_MEASUREMENT_ID={"G-FFR9TEZ4BF"}></GoogleAnalytics>
      <body
        className={`${robotoMono.className}} antialiased`}
      > 
        {children}
        <CookieBanner></CookieBanner>
      </body>
    </html>
  );
}
