// src/app/layout.js
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata = {
  title: "Career Sponsorship | Premium British Career Services",
  description:
    "Your skills are not the problem — your presentation is. Career Sponsorship helps you land your dream role with ATS-optimised CVs, LinkedIn revamping, interview coaching and more.",
  keywords:
    "career sponsorship, CV writing, LinkedIn revamping, interview coaching, British career services, job applications, ATS resume",
  authors: [{ name: "Career Sponsorship" }],
  robots: "index, follow",
  openGraph: {
    title: "Career Sponsorship | Premium British Career Services",
    description:
      "Your skills are not the problem — your presentation is. Transform your career with British precision.",
    url: "https://careersponsorship.uk",
    siteName: "Career Sponsorship",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Sponsorship | Premium British Career Services",
    description:
      "Transform your career with British precision and elegance.",
  },
};

// IMPORTANT: viewport MUST be separate (NOT inside metadata)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&family=Space+Grotesk:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className="min-h-screen bg-white antialiased font-body">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}