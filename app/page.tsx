const projects = [
  {
    title: "Islamic Community",
    url: "https://medzlis-bl.vercel.app/",
    desc: "Website for the Islamic community in Banja Luka",
  },
  {
    title: "Musafir BL",
    url: "https://halal-bl.vercel.app/?page=home",
    desc: "Guide for travelers to find halal food in Banja Luka",
  },
  {
    title: "Arijana Hairstylist",
    url: "https://frizerski-salon-arijana.org/",
    desc: "Website for a local hairstylist",
  },
  {
    title: "Seam Grill",
    url: "https://seam-grill.vercel.app/",
    desc: "Restaurant website for Seam Grill",
  },
  {
    title: "Handyman",
    url: "https://handyman-seven-xi.vercel.app/",
    desc: "Website for a handyman service",
  },
  {
    title: "Dea Steel",
    url: "https://dea-steel.vercel.app/",
    desc: "Company website for steel works",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.url} className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
