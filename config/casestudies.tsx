export interface casestudiesInterface {
  repo: string;
  casestudiesDescription: string;
  casestudiesSolution: string;
  repoOwner: string;
}

export const casestudiesUnsorted: casestudiesInterface[] = [
  {
    repo: "template-laravel12-with-ai",
    casestudiesDescription:
      "Problem: Server Ai that I intalled from LLM Gateaway sometimes got down.",
    casestudiesSolution:
      "Problem Solving: Setting the pre-rendering for the distant object by keeping the performance.",
    repoOwner: "daus-commit",
  },
  {
    repo: "VR Korban: Islamic Education",
    casestudiesDescription:
      "Problem: Lagging when entered into the VR Environment because the project fully render all items.",
    casestudiesSolution:
      "Problem Solving: Setting the pre-rendering for the distant object by keeping the performance.",
    repoOwner: "daus-commit",
  },
  {
    repo: "template-yii2Advance",
    casestudiesDescription:
      "Yii2 Advanced admin template featuring AdminLTE dashboard and mdmsoft RBAC permissions.",
    casestudiesSolution:
      "Problem: Lagging when entered into the VR Environment because the fully render items.",
    repoOwner: "daus-commit",
  },
  {
    repo: "laporan-akhir-template",
    casestudiesDescription:
      "Web application featuring an optimized media gallery and an OpenRouter.ai LLM text generator.",
    casestudiesSolution:
      "Problem: Lagging when entered into the VR Environment because the fully render items.",
    repoOwner: "daus-commit",
  },
  {
    repo: "laravel-vue-template",
    casestudiesDescription:
      "Laravel and Vue.js admin starter template featuring an AdminLTE layout and Spatie RBAC.",
    casestudiesSolution:
      "Problem: Lagging when entered into the VR Environment because the fully render items.",
    repoOwner: "farezhelmi",
  },
];

export const featuredcasestudies: casestudiesInterface[] =
  casestudiesUnsorted.slice(0, 3);

