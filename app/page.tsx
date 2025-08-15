"use client"

import { useState, useEffect } from "react"
import { Download, Instagram, Linkedin, Github, Heart, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const professions = [
    "UI/UX Designer",
    "Front End Developer",
    "Scrum Master/Project Manager",
    "Social Media Management",
  ]

  const [currentProfession, setCurrentProfession] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession((prev) => (prev + 1) % professions.length)
    }, 1000) // Change every second

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", handleClick))

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick))
    }
  }, [])

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/cv.pdf" // Assuming CV is uploaded as cv.pdf in public folder
    link.download = "Tsinat_Mekonnen_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white scroll-smooth">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-pink-400/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Tsinat
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium">
                Home
              </a>
              <a
                href="#education"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium"
              >
                Education
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-full hover:from-pink-500 hover:to-purple-600 transition-all duration-300 font-medium shadow-lg hover:shadow-pink-400/25"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-pink-400 hover:text-pink-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">
                Hi, I'm <span className="text-pink-400">Tsinat Mekonnen</span>
              </h1>
              <p className="text-xl text-gray-300 font-medium">Computer Science Graduate</p>
              <h2 className="text-2xl md:text-3xl text-pink-400 font-semibold min-h-[2.5rem] flex items-center">
                <span className="animate-pulse">{professions[currentProfession]}</span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Welcome to my creative space! I'm a passionate digital professional who loves building responsive
              websites, creating great user experiences, and crafting effective social media strategies. Let's make
              something amazing together!
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-6 py-3 bg-transparent rounded-full transition-all duration-300"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/tsinat-mekonnen-90076228a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Let's Connect
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/profile-photo.jpg"
              alt="Tsinat Mekonnen - Computer Science Graduate"
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-pink-400/30 hover:border-pink-400/50 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-pink-400 to-purple-500"></div>

          {/* High School */}
          <div className="relative flex items-center mb-16">
            <div className="w-1/2 pr-8 text-right">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-pink-400 rounded-2xl p-6 shadow-xl hover:shadow-pink-400/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-pink-400 mb-2">Lideta Catholic (Cathedral) School</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I completed my high school education at Lideta Catholic (Cathedral) School, where I developed a strong
                  foundation in mathematics and sciences. During my time there, my involvement in extracurricular
                  activities enhanced my leadership and teamwork skills. My experiences there significantly shaped my
                  academic and personal growth.
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
            <div className="w-1/2 pl-8">
              <span className="text-pink-400 font-semibold">2015-2021</span>
            </div>
          </div>

          {/* University */}
          <div className="relative flex items-center mb-16">
            <div className="w-1/2 pr-8 text-right">
              <span className="text-pink-400 font-semibold">2022-2025</span>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
            <div className="w-1/2 pl-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-pink-400 rounded-2xl p-6 shadow-xl hover:shadow-pink-400/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-pink-400 mb-2">Addis Ababa University</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I am currently pursuing a degree in Software Engineering at Addis Ababa University. I am actively
                  involved in various projects and collaborative group work, which has enhanced my practical skills and
                  understanding of software engineering principles. This experience is further sharpening my
                  problem-solving abilities and technical expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Internship */}
          <div className="relative flex items-center">
            <div className="w-1/2 pr-8 text-right">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-pink-400 rounded-2xl p-6 shadow-xl hover:shadow-pink-400/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-pink-400 mb-2">Internship</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  During my internship at Prodigy Info Tech, I worked on designing and developing web applications. My
                  tasks included coding responsive user interfaces, integrating APIs, and optimizing website
                  performance. I utilized technologies such as HTML, CSS, JavaScript, and various frameworks such as
                  React.js to build dynamic and user-friendly solutions.
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
            <div className="w-1/2 pl-8">
              <span className="text-pink-400 font-semibold">2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Prodigy InfoTech */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-pink-400 rounded-2xl p-6 shadow-xl hover:shadow-pink-400/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-pink-400 mb-2">Remote Web Development Intern</h3>
                <p className="text-purple-300 font-semibold mb-2">Prodigy InfoTech – Remote | 2024</p>
                <ul className="text-gray-300 text-sm leading-relaxed space-y-1">
                  <li>• Developed interactive web pages as part of real-world web development tasks</li>
                  <li>• Practiced responsive design principles and UI optimization</li>
                  <li>• Completed assigned front-end development tasks using HTML, CSS, and JavaScript</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Osiosis InfoTech */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-pink-400 rounded-2xl p-6 shadow-xl hover:shadow-pink-400/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-pink-400 mb-2">Remote Web Development Intern</h3>
                <p className="text-purple-300 font-semibold mb-2">Osiosis InfoTech – Remote | 2024</p>
                <ul className="text-gray-300 text-sm leading-relaxed space-y-1">
                  <li>• Participated in front-end development projects under mentorship</li>
                  <li>• Improved practical skills in creating user-friendly web interfaces</li>
                  <li>• Gained experience in remote collaboration and task management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pagumeap PLC */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-pink-400 rounded-2xl p-6 shadow-xl hover:shadow-pink-400/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-pink-400 mb-2">
                  Social Media Manager & Web Development Team Member
                </h3>
                <p className="text-purple-300 font-semibold mb-2">Pagumeap PLC – Addis Ababa, Ethiopia | 2023</p>
                <ul className="text-gray-300 text-sm leading-relaxed space-y-1">
                  <li>• Managed content and engagement for the company's social media platforms</li>
                  <li>• Collaborated with developers to improve the user interface of the company website</li>
                  <li>• Supported both technical and marketing teams, bridging communication between them</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-pink-400">Technical Skills</h3>
            <div className="space-y-4">
              {[
                "Web Development (HTML, CSS, JavaScript, React)",
                "SQL Database Management",
                "UI/UX Design (Figma)",
                "Software Development Life Cycle (SDLC)",
                "Basic AI Understanding",
                "Git Version Control",
                "Responsive Web Design",
                "Problem Solving",
                "Documentation Skills",
                "Testing & Quality Assurance",
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-pink-400">Professional Skills</h3>
            <div className="space-y-4">
              {[
                "Communication",
                "Teamwork",
                "Creativity",
                "Adaptability",
                "Scrum Project Management",
                "Analytical Thinking",
                "Collaboration",
                "Presentation Skills",
                "Leadership",
                "Time Management",
                "Languages: Amharic (Fluent), English (Proficient)",
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Let's Work Together
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300 text-lg mb-8">
            I'm always excited to take on new challenges and collaborate on innovative projects. Whether you need UI/UX
            design, front-end development, project management, or social media strategy - let's create something amazing
            together!
          </p>

          <div className="flex justify-center">
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8 py-3 bg-transparent rounded-full transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <div className="text-center">
              <div className="text-pink-400 font-semibold">Email</div>
              <div className="text-gray-300">tsinatmekonnen2871@gmail.com</div>
            </div>
            <div className="text-center">
              <div className="text-pink-400 font-semibold">Phone</div>
              <div className="text-gray-300">+251 913431414</div>
            </div>
            <div className="text-center">
              <div className="text-pink-400 font-semibold">Location</div>
              <div className="text-gray-300">Addis Ababa, Ethiopia</div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-pink-400 mb-6">Connect with me</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/tsinat-mekonnen-90076228a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-pink-400 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-400/25"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/tsinat160?igsh=MWJ6bXZtamo4cnEyZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-pink-400 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-400/25"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Tsinat16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-pink-400 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-400/25"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
