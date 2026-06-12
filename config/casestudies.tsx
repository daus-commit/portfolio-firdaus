export interface casestudiesInterface {
  repo: string;
  casestudiesDescription: string;
  casestudiesSolution: string;
  casestudiesImpact: string;
  repoOwner: string;
}

export const casestudiesUnsorted: casestudiesInterface[] = [
  {
    repo: "All Project Related with AI LLM Gateway",
    casestudiesDescription: "Problem: Client reports of AI feature downtime caused by sudden server or API failures from a single LLM provider.",
    casestudiesSolution: "Solution: Engineered a multi-LLM fallback architecture that instantly reroutes requests to a secondary backup model if the primary model goes offline.",
    casestudiesImpact: "Impact: ",
    repoOwner: "Firdaus Hakimi",
  },
  {
    repo: "Virtual Reality(VR) Project",
    casestudiesDescription: "Problem: Severe performance lag and frame drops upon entering the VR environment due to the engine trying to render all 3D objects simultaneously.",
    casestudiesSolution: "Solution: Configured occlusion culling, level-of-detail (LOD) tracking, and distance-based pre-rendering to only render visible assets and preserve runtime performance.",
    casestudiesImpact: "Impact: ",
    repoOwner: "Firdaus Hakimi",
  },
  {
    repo: "Backend Project",
    casestudiesDescription: "Problem: Severe performance lag and frame drops upon entering the VR environment due to the engine trying to render all 3D objects simultaneously.",
    casestudiesSolution: "Solution: Configured occlusion culling, level-of-detail (LOD) tracking, and distance-based pre-rendering to only render visible assets and preserve runtime performance.",
    casestudiesImpact: "Impact: ",
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

