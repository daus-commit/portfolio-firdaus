export interface casestudiesInterface {
  repo: string;
  casestudiesDescription: string;
  casestudiesSolution: string;
  casestudiesImpact: string;
  repoOwner: string;
}

export const casestudiesUnsorted: casestudiesInterface[] = [
  {
    repo: "Backend Project",
    casestudiesDescription: "Problem: Slow data retrieval and high server resource usage during complex role-based access control (RBAC) permission checks.",
    casestudiesSolution: "Solution: Optimized MySQL queries and implemented database indexing alongside Spatie-integrated caching mechanisms.",
    casestudiesImpact: "Impact: Reduced API response times by 60% and significantly lowered CPU load during peak traffic.",
    repoOwner: "Firdaus Hakimi",
  },
  {
    repo: "LLM Gateaway Project",
    casestudiesDescription: "Problem: Client reports of AI feature downtime caused by sudden server or API failures from a single LLM provider.",
    casestudiesSolution: "Solution: Engineered a multi-LLM fallback architecture that instantly reroutes requests to a secondary backup model if the primary model goes offline.",
    casestudiesImpact: "Impact: Achieved 99.9% uptime for AI features and restored client confidence by eliminating service interruptions.",
    repoOwner: "Firdaus Hakimi",
  },
  {
    repo: "Virtual Reality(VR) Project",
    casestudiesDescription: "Problem: Severe performance lag and frame drops upon entering the VR environment due to the engine trying to render all 3D objects simultaneously.",
    casestudiesSolution: "Solution: Configured occlusion culling, level-of-detail (LOD) tracking, and distance-based pre-rendering to only render visible assets.",
    casestudiesImpact: "Impact: Increased frame rates by 40%, ensuring a smooth, motion-sickness-free educational experience for Meta Quest 3 users.",
    repoOwner: "Firdaus Hakimi",
  },
  {
    repo: "Frontend Project",
    casestudiesDescription: "Problem: Low user engagement and high bounce rates due to slow initial page loads and unoptimized media assets.",
    casestudiesSolution: "Solution: Implemented lazy loading for images, code splitting for scripts, and optimized Blade templates for faster rendering.",
    casestudiesImpact: "Impact: Improved Google Lighthouse performance scores and created a more responsive, high-converting user interface.",
    repoOwner: "Firdaus Hakimi",
  },
  {
    repo: "SEO Performance Project",
    casestudiesDescription: "Problem: Low organic search visibility and poor crawlability caused by missing meta tags, unstructured content, and slow page speeds.",
    casestudiesSolution: "Solution: Implemented structured data, optimized meta tags, and improved Core Web Vitals through asset minification and lazy loading.",
    casestudiesImpact: "Impact: Increased organic traffic by 60%, achieved higher Google Search rankings, and improved Lighthouse SEO scores from 65 to 98.",
    repoOwner: "Firdaus Hakimi",
  },
];

export const featuredcasestudies: casestudiesInterface[] =
  casestudiesUnsorted.slice(0, 3);













  