import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "myParser" },
    { name: "description", content: "Tailor to your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className='main-section'>
        <div className='page-heading'>
          <h1>Tailor Your Resume in Seconds</h1>
          <h2>Analyze your resume against any job description and get instant, AI-driven tips to stand out.</h2>
        </div>


      {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map(resume => (
                <ResumeCard key={resume.id} resume={resume}></ResumeCard>
            ))}
          </div>
      )}
    </section>
  </main>;
}
