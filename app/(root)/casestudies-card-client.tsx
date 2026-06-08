"use client";

import dynamic from "next/dynamic";
import React from "react";

import { casestudiesInterface } from "@/config/casestudies";

const CasestudiesCard = dynamic(() => import("@/components/casestudies/casestudies-card"));

export default function CasestudiesCardClient({
  casestudies,
}: {
  casestudies: casestudiesInterface[];
}) {
  return <CasestudiesCard casestudies={casestudies} />;
}

