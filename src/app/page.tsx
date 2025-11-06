import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

/**
 * ✅ This page only renders Prismic content.
 * Metadata (title, description, OG image) is now handled globally
 * from `src/app/layout.tsx` so your Drippy cover image takes effect.
 */

export const dynamic = "force-static"; // ensures metadata from layout is used

export default async function Index() {
  // Fetch homepage content from Prismic
  const client = createClient();
  const home = await client.getByUID("page", "home");

  // Render all Prismic slices normally
  return <SliceZone slices={home.data.slices} components={components} />;
}
