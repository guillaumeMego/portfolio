import Link from "next/link";

export default function BlogPage() {
  // À remplacer par une vraie liste d'articles plus tard
  const articles = [
    {
      title: "Bienvenue sur le blog !",
      slug: "bienvenue",
      excerpt:
        "Retrouvez ici mes conseils, retours d'expérience et tutoriels sur le web, le SEO, la photo et la création digitale.",
      date: "2024-06-01",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-foreground">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 mt-8 text-center">
        Blog
      </h1>
      <p className="text-lg text-muted-foreground mb-12 text-center">
        Conseils, retours d&apos;expérience, tutoriels et inspirations autour du
        web, du SEO, de la photo et de la création digitale.
      </p>
      <div className="space-y-8">
        {articles.map((a) => (
          <div key={a.slug} className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 mt-8">
              <Link href={`/blog/${a.slug}`}>{a.title}</Link>
            </h2>
            <p className="text-sm text-muted-foreground mb-2">{a.date}</p>
            <p className="mb-2">{a.excerpt}</p>
            <Link
              href={`/blog/${a.slug}`}
              className="text-primary hover:underline font-medium"
            >
              Lire l&apos;article
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
