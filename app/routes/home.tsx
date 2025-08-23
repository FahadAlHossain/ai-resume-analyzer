import type { Route } from "./+types/home";
import BgMain from "/assets/public/images/bg-main.svg";
import NavBar from "~/components/NavBar";
import { resumes } from "./../../constants/index";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAi" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-cover" style={{ backgroundImage: `url(${BgMain})` }}>
      <NavBar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-Powered feedback</h2>
        </div>
      </section>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume}></ResumeCard>
          ))}
        </div>
      )}
    </main>
  );
}
