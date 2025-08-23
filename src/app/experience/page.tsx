// src/app/experience/page.tsx
"use client";

import Experience from "../components/Experience";

export default function ExperiencePage() {
  return (
    <main className="w-screen h-[calc(100dvh-var(--nav-h))] bg-white flex items-center justify-center overflow-hidden">
      {/* pt-16 offsets your sticky navbar height; adjust if your nav is taller/shorter */}
      <Experience />
    </main>
  );
}
