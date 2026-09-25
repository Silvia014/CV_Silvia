import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silvia Guerra — Account / Data Analyst & AI Engineering Student" },
      {
        name: "description",
        content:
          "Portfolio of Silvia Guerra — Account / Data Analyst based in Seville, Spain. Revenue management, hospitality systems, data analysis, and AI engineering.",
      },
      {
        property: "og:title",
        content: "Silvia Guerra — Account / Data Analyst & AI Engineering Student",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Silvia Guerra — Account / Data Analyst based in Seville, Spain. Revenue management, hospitality systems, data analysis, and AI engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-foreground antialiased">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Reveal>
          <Expertise />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
