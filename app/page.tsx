const projects = [
  {
    title: "Islamska zajednica",
    url: "https://medzlis-bl.vercel.app/",
    desc: "Web stranica za Islamsku zajednicu u Banjoj Luci",
  },
  {
    title: "Musafir BL",
    url: "https://halal-bl.vercel.app/?page=home",
    desc: "Vodič za putnike za pronalazak hrane pogodne za muslimane u Banjoj Luci",
  },
  {
    title: "Arijana Frizerski salon",
    url: "https://frizerski-salon-arijana.org/",
    desc: "Web stranica za lokalni frizerski salon",
  },
  {
    title: "Pite pod sačem",
    url: "https://pite-pod-sacem.vercel.app/",
    desc: "Web stranica buregdžinice",
  },
  {
    title: "Majstor",
    url: "https://handyman-seven-xi.vercel.app/",
    desc: "Web stranica za usluge majstora",
  },
  {
    title: "Dea Steel",
    url: "https://dea-steel.vercel.app/",
    desc: "Web stranica firme za čelične konstrukcije",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f4ecd8] text-gray-900 p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center tracking-wide border-b-4 border-gray-800 pb-4">
          Moji Projekti
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.url}
              className="bg-[#fffdf5] p-6 rounded-lg border-2 border-gray-800 shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.desc}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-gray-800 hover:decoration-dotted font-semibold"
              >
                Posjeti stranicu →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Kontakt sekcija */}
      <div className="max-w-4xl mx-auto mt-16 text-center border-t-2 border-gray-800 pt-8">
        <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
        <p className="mb-2">
          <a
            href="tel:+38766129230"
            className="text-blue-700 underline underline-offset-4 hover:text-blue-900"
          >
            📞 +387 66 129 230
          </a>
        </p>
        <p>
          <a
            href="mailto:dzenan.ramic1210@gmail.com"
            className="text-blue-700 underline underline-offset-4 hover:text-blue-900"
          >
            ✉️ dzenan.ramic1210@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
