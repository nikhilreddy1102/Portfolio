"use client";
import { useState } from "react";

const projects = [
  {
    title: "EC Partners Training",
    description: "Corporate training platform for scalable learning. URL: theecp.com",
    details: `The challenge was to build a scalable corporate training platform that 
    could deliver courses, resources, and learning paths seamlessly across devices. To 
    achieve this, I transformed Figma designs into responsive and modular components using Next.js 
    and Tailwind CSS, and set up CI/CD pipelines for continuous delivery and updates. By optimizing 
    performance and focusing on enterprise-ready scalability, I created a platform that not only supported 
    flexible training delivery but also enabled faster iteration cycles, reliable deployments, and a smooth
     rollout for corporate adoption.`,
  },
  {
    title: "Integrated Healthcare Data Security System (Research Project)",
    description: "Smart security for sensitive healthcare data—compliant, encrypted, and resilient.",
    details: `During my Master’s program, I led a research project aimed at addressing the 
    challenge of securing sensitive healthcare data while complying with HIPAA standards. 
    I designed a secure database prototype with AES-256 and TLS 1.3 encryption, integrated 
    role-based and attribute-based access control and applied graph-based algorithms to resolve 
    complex user permission hierarchies. To further strengthen the system, I implemented real-time 
    audit logging and anomaly detection using behavioral analytics. This project demonstrated how a 
    carefully engineered system can safeguard patient data, prevent unauthorized access and detect potential
     threats in real time, also proving the feasibility of combining strong cryptography with intelligent 
     monitoring for healthcare security.`,
  },
];

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div id="projects" className="w-full text-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 space-y-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center">Projects</h2>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setActive(idx)}
              className="cursor-pointer p-6 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="mt-2 text-sm text-white/70">{proj.description}</p>
            </div>
          ))}
        </div>

        {/* Popup modal */}
        {active !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setActive(null)} // click background closes modal
          >
            <div
              className="max-w-lg w-full bg-white text-black rounded-xl p-6 relative"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold mb-4">
                {projects[active].title}
              </h3>
              <p className="leading-relaxed">{projects[active].details}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
