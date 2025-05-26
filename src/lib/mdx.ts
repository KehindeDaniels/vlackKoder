import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export async function getMdxProjectBySlug(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "src/content/projects",
    `${slug}.mdx`
  );

  const source = fs.readFileSync(filePath, "utf-8");

  const { content, frontmatter } = await compileMDX<{
    title: string;
    subtitle?: string;
    tech?: string[];
    image?: string;
    previewUrl?: string;
  }>({
    source,
    options: { parseFrontmatter: true },
  });

  return { content, frontmatter };
}
