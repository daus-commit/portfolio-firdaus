import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import CasestudiesCard from "@/components/casestudies/casestudies-card";
import { casestudiesUnsorted } from "@/config/casestudies";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Case studies and experiments.",
};

export default function CaseStudiesPage() {
  return (
    <PageContainer
      title="Case Studies"
      description="Case studies and experiments."
    >
      <CasestudiesCard
        casestudies={casestudiesUnsorted}
      />
    </PageContainer>
  );
}
