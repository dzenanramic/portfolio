// app/[lang]/page.tsx
import { getTranslations } from "../../lib/i18n";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Islamic Community",
    url: "https://medzlis-bl.vercel.app/",
    image: "/globe.svg",
    desc: {
      en: "Website for the Islamic community in Banja Luka.",
      de: "Webseite für die islamische Gemeinschaft in Banja Luka.",
      bs: "Web stranica za islamsku zajednicu u Banjoj Luci.",
    },
  },
  {
    title: "Halal BL",
    url: "https://halal-bl.vercel.app/?page=home",
    image: "/window.svg",
    desc: {
      en: "Guide for travelers to find halal food in Banja Luka.",
      de: "Reiseführer für Halal-Essen in Banja Luka.",
      bs: "Vodič za putnike gdje jesti halal u Banjoj Luci.",
    },
  },
  {
    title: "Arijana Hairstylist",
    url: "https://frizerski-salon-arijana.org/",
    image: "/file.svg",
    desc: {
      en: "Website for a local hairstylist.",
      de: "Webseite für eine Friseurin.",
      bs: "Web stranica za frizerski salon.",
    },
  },
  {
    title: "Seam Grill",
    url: "https://seam-grill.vercel.app/",
    image: "/vercel.svg",
    desc: {
      en: "Restaurant website for Seam Grill.",
      de: "Restaurant Webseite für Seam Grill.",
      bs: "Web stranica restorana Seam Grill.",
    },
  },
  {
    title: "Handyman",
    url: "https://handyman-seven-xi.vercel.app/",
    image: "/next.svg",
    desc: {
      en: "Website for a handyman service.",
      de: "Webseite für einen Handwerker.",
      bs: "Web stranica za majstora.",
    },
  },
  {
    title: "Dea Steel",
    url: "https://dea-steel.vercel.app/",
    image: "/globe.svg",
    desc: {
      en: "Company website for steel works.",
      de: "Firmenwebseite für Stahlbau.",
      bs: "Web stranica firme za čelične radove.",
    },
  },
];

// Define the correct types for Next.js 15
interface PageProps {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PortfolioPage({ params }: PageProps) {
  // Await the params Promise
  const { lang } = await params;
  const t = await getTranslations(lang);
  type Lang = "en" | "de" | "bs";
  const safeLang = (["en", "de", "bs"].includes(lang) ? lang : "en") as Lang;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* background glow effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-slate-300">{t.description}</p>
          <div className="mt-6 flex justify-center gap-3">
            {["en", "de", "bs"].map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-md transition-all ${
                  safeLang === l
                    ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg scale-105"
                    : "bg-slate-700/70 hover:bg-slate-600"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </header>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            {t.projects}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p) => (
              <div
                key={p.url}
                className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl hover:bg-slate-700/50"
              >
                <div className="p-4 bg-slate-900/60 rounded-full mb-4 group-hover:rotate-6 transition-transform">
                  <Image src={p.image} alt={p.title} width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="mb-6 text-slate-300">{p.desc[safeLang]}</p>
                <Link
                  href={p.url}
                  target="_blank"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                  {t.viewSite}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
