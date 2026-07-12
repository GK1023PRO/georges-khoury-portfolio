import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Georges Khoury Portfolio",
    short_name: "GK Portfolio",
    description:
      "DevOps, cloud, infrastructure, cybersecurity, networking, backend, and full-stack engineering portfolio.",
    start_url: "/",
    scope: "/",
    display: "standalone",
  
    background_color: "#0a0d12",
    theme_color: "#22e0a4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}