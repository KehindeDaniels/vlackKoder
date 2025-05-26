import { projects } from "@/lib/data/projectData";
import { getMdxProjectBySlug } from "@/lib/mdx";
// import { projects } from "@/data/projectData";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const { content } = await getMdxProjectBySlug(params.slug);

  return (
    <section className="max-w-5xl mx-auto py-20 px-4 space-y-10">
      <div>
        <p className="text-sm text-muted-foreground">Case • {project.title}</p>
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {project.description}
        </p>
        {project.liveLink && (
          <a
            href={project.liveLink}
            className="inline-block mt-4 bg-[hsl(var(--yellow))] text-black font-medium px-5 py-2 rounded-full hover:brightness-110"
            target="_blank"
          >
            Visit {project.title} →
          </a>
        )}
      </div>

      <Image
        src={project.image}
        alt={`${project.title} preview`}
        className="rounded-xl border border-border shadow-md"
        width={1200}
        height={700}
        priority
      />

      <article className="prose-mdx">{content}</article>
    </section>
  );
}
