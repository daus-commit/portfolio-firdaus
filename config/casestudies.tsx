export interface casestudiesInterface {
  repo: string;
  casestudiesDescription: string;
  casestudiesSolution: string;
  repoOwner: string;
}

export const casestudiesUnsorted: casestudiesInterface[] = [
  {
    repo: "All Project Related with AI LLM Gateway",
    casestudiesDescription: "Problem: API downtime or server failure from a single AI provider completely disrupts the system's text generation capabilities.",
    casestudiesSolution: "Solution: Implemented an automated multi-LLM fallback layer that immediately reroutes requests to a backup AI model if the primary model fails or goes offline.",
    repoOwner: "Firdaus Hakimi",
  },
  {
    repo: "VR Korban: Islamic Education",
    casestudiesDescription: "Problem: Severe performance lag and frame drops upon entering the VR environment due to the engine trying to render all 3D objects simultaneously.",
    casestudiesSolution: "Solution: Configured occlusion culling, level-of-detail (LOD) tracking, and distance-based pre-rendering to only render visible assets and preserve runtime performance.",
    repoOwner: "Firdaus Hakimi",
  },
  // {
  //   repo: "template-yii2Advance",
  //   casestudiesDescription:
  //     "Yii2 Advanced admin template featuring AdminLTE dashboard and mdmsoft RBAC permissions.",
  //   casestudiesSolution:
  //     "Problem: Lagging when entered into the VR Environment because the fully render items.",
  //   repoOwner: "daus-commit",
  // },
  // {
  //   repo: "template-yii2Advance",
  //   casestudiesDescription:
  //     "Yii2 Advanced admin template featuring AdminLTE dashboard and mdmsoft RBAC permissions.",
  //   casestudiesSolution:
  //     "Problem: Lagging when entered into the VR Environment because the fully render items.",
  //   repoOwner: "daus-commit",
  // },
  // {
  //   repo: "template-yii2Advance",
  //   casestudiesDescription:
  //     "Yii2 Advanced admin template featuring AdminLTE dashboard and mdmsoft RBAC permissions.",
  //   casestudiesSolution:
  //     "Problem: Lagging when entered into the VR Environment because the fully render items.",
  //   repoOwner: "daus-commit",
  // },
];

export const featuredcasestudies: casestudiesInterface[] =
  casestudiesUnsorted.slice(0, 3);

