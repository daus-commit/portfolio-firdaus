export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "template-laravel12-with-ai",
    contibutionDescription: "Laravel 12 admin template with Filament CRUD, Spatie RBAC, and OpenRouter AI generation.",
    repoOwner: "daus-commit",
    link: "https://github.com/daus-commit/template-laravel12-with-ai.git",
  },
  {
    repo: "template-yii2Advance",
    contibutionDescription: "Yii2 Advanced admin template featuring AdminLTE dashboard and mdmsoft RBAC permissions.",
    repoOwner: "daus-commit",
    link: "https://github.com/daus-commit/template-yii2Advance.git",
  },
  {
    repo: "laporan-akhir-template",
    contibutionDescription: "Web application featuring an optimized media gallery and an OpenRouter.ai LLM text generator.",
    repoOwner: "daus-commit",
    link: "https://github.com/daus-commit/laporan-akhir-template.git",
  },
  {
    repo: "laravel-vue-template",
    contibutionDescription: "Laravel and Vue.js admin starter template featuring an AdminLTE layout and Spatie RBAC.",
    repoOwner: "farezhelmi",
    link: "https://github.com/farezhelmi/laravel-vue-template.git",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
