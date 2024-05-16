import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "skzgf6cp",
  dataset: "production",
  apiVersion: "2022-12-15", // Or the latest API version
  useCdn: process.env.NODE_ENV === "production", // Use CDN for production
});