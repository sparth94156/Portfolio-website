"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function PortfolioComponent() {
  const [activeSection, setActiveSection] = useState<keyof Section>("about");
  interface Section {
    about: JSX.Element;
    experience: JSX.Element;
    skills: JSX.Element;
    // Add other properties here
  }

  const sections = {
    about: (
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            A passionate front-end developer specializing in building dynamic
            and responsive web applications. With a strong foundation in web
            technologies and a keen interest in modern JavaScript frameworks, I
            love turning ideas into interactive digital experiences.
          </p>
        </CardContent>
      </Card>
    ),
    experience: (
      <Card>
        <CardHeader>
          <CardTitle>Work Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Intern at BluOcena.ai</strong>
              <ul className="list-disc pl-8">
                <li>
                  Enhanced user engagement by 25% through the implementation of
                  responsive design and optimized UI/UX elements using React and
                  TailwindCSS, improving the overall user experience across
                  multiple devices.
                </li>
                <li>
                  Reduced page load time by 30% by optimizing image assets and
                  refactoring code to leverage modern JavaScript techniques,
                  resulting in a smoother and faster user interface.
                </li>
                <li>
                  Achieved a 20% increase in customer retention by developing an
                  interactive dashboard with real-time data updates, utilizing
                  Redux for state management, and ensuring seamless navigation
                  across the application.
                </li>
                <li>
                  Conducted front-end testing with tools like Jest and Cypress,
                  ensuring high-quality code and reducing bugs by 15%.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Software Engineer Trainee at Happiest Minds Technologies
              </strong>
              <ul className="list-disc pl-8">
                <li>
                  Completed an intensive training program in Java, SDLC, and
                  SQL, gaining hands-on experience in software development and
                  database management.
                </li>
                <li>
                  Developed proficiency in Java programming, writing clean and
                  efficient code, and collaborating with a team to implement a
                  hands-on project during the training period.
                </li>
                <li>
                  Applied SQL skills to design, query, and manage databases,
                  ensuring data integrity and optimized performance in project
                  simulations and real-world team projects.
                </li>
              </ul>
            </li>
          </ul>
        </CardContent>
      </Card>
    ),
    skills: (
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Programming Languages: JavaScript, TypeScript, C++</li>
            <li>Libraries: React, Node.js, Redux</li>
            <li>Frameworks: Next.js, Tailwind CSS</li>
            <li>Databases: MongoDB, Firebase</li>
            <li>Styling: Shadcn, DaisyUI</li>
            <li>Testing: Jest , React Testing Library</li>
            <li>Version Control: Git</li>
          </ul>
        </CardContent>
      </Card>
    ),
    projects: (
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Prompt Sharing App</strong>
              <p>
                Built a full-stack prompt sharing platform using React, Next.js,
                and MongoDB. Implemented features such as user authentication,
                discovering, sharing, editing, and deleting AI prompts
              </p>
            </li>
            <li>
              <strong>Netflix Clone</strong>
              <p>
                Developed a dynamic movie browsing application with secure
                authentication using Firebase, and implemented sign-in/sign-up
                functionality with form validation, useRef hooks, and Redux
                store management.
              </p>
            </li>
          </ul>
        </CardContent>
      </Card>
    ),
    education: (
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            
            <li>
              <strong>Bachelor of Technology in Information Technology</strong>
              <p>Pranveer Singh Institute of Technology, Graduated 2023</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Parth Singh Pal</h1>
          <p className="text-xl text-gray-600">
            Frontend Developer & Engineer
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href={`https://github.com/sparth94156`}>
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            </Link>
            <Link href={`https://www.linkedin.com/in/parth-singh-pal-208636227/`}>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            </Link>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </header>

        <nav className="mb-8">
          <ul className="flex justify-center space-x-4">
            {Object.keys(sections).map((section) => (
              <li key={section}>
                <Button
                  variant={activeSection === section ? "default" : "outline"}
                  onClick={() => setActiveSection(section as keyof Section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <main>{sections[activeSection]}</main>
      </div>
    </div>
  );
}
