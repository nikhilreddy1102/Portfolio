"use client";

import BackgroundSpotlight from "../components/BackgroundSpotlight";

export default function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50">
      <BackgroundSpotlight />
    </div>
  );
}
