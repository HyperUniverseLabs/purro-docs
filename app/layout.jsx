import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: "Purro",
  description: "Purro documentation and blog",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.purro.xyz",
    siteName: "Purro",
    title: "Purro Documentation - DeFi Hub for Hyperliquid",
    description:
      "A comprehensive DeFi hub built specifically for the Hyperliquid ecosystem",
    images: [
      {
        url: "/purro-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Purro - DeFi Hub for Hyperliquid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purro - DeFi Hub for Hyperliquid",
    description:
      "A comprehensive DeFi hub built specifically for the Hyperliquid ecosystem",
    images: ["/purro-banner.jpg"],
    creator: "@purro_xyz",
  },
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={
      <div className="flex items-center gap-2">
        <Image src="/favicon.svg" alt="Logo" width={24} height={24} />
        <b>Purro</b>
      </div>
    }
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer>MIT {new Date().getFullYear()} © HyperUniverseLabs.</Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
