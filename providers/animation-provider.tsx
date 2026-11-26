"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProviderProps {
  children: ReactNode;
}

// Respect the OS "reduce motion" setting for every framer-motion animation.
export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};
