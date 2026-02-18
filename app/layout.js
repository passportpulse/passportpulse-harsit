import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import ClientLayout from "./components/ClientLayout";
import Script from "next/script";

export const dynamic = 'force-dynamic';

export const metadata = {
  metadataBase: new URL("https://www.passportpulse.com"),
  title: {
    template: "%s | Passport Pulse",
    default: "Best Web Development & Digital Marketing Company | Passport Pulse",
  },
  description:
    "Passport Pulse is the best web development & digital marketing company, specializing in custom software (Next.js, MERN), SEO, and business automation.",
  keywords: [
    "Passport Pulse",
    "best web development company",
    "digital marketing company",
    "custom software",
    "business automation",
    "digital agency",
    "Next.js developer",
    "MERN stack",
  ],
  openGraph: {
    title: "Best Web Development & Digital Marketing Company | Passport Pulse",
    description:
      "Passport Pulse is the best web development & digital marketing company.",
    url: "https://www.passportpulse.com",
    siteName: "Passport Pulse",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Passport Pulse - Web Development & Digital Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development & Digital Marketing Company | Passport Pulse",
    description:
      "Passport Pulse is the best web development & digital marketing company.",
    images: ["/og-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/pp-logo.png",
    shortcut: "/pp-logo.png",
    apple: "/pp-logo.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth`}
      suppressHydrationWarning={true}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5S2FD62GZD"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5S2FD62GZD');
          `}
        </Script>
        <Script id="lead-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-16545789933/9tSMCPu_2MwbEO3v0tE9'
            });
          `}
        </Script>
      </head>

      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
