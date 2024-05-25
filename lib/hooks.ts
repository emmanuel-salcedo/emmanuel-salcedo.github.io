import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName) {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection]);

  return { ref };
}
