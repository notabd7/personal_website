'use client'

import { useRef } from 'react'

import AboutMe from '../components/AboutMe'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  //const [activeSection, setActiveSection] = useState('home')
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const projects = [
    { id: 1, title: 'PacMan', description: 'designed and programmed PacMan. slowed ascent rate of a balloon with 5 kg of payloads and floated at 90000 feet twice', videoUrl: '/pacman_1.mp4' },
    {
      id: 2, 
      title: 'Enders Game', 
      description: 'wrote this in C, compiled to WebAssembly, and hosted on vercel, play it' +
        '<a href="https://enders-game-c.vercel.app/" style="text-decoration: underline;">here</a>',
      videoUrl: '/endersgame.mp4'
     },
    { id: 3, title: 'Sharing Excess (Work)', description: 'Built analytics tab for app.sharingexcess.com', videoUrl: '/work.mp4' },
    { id: 4, title: 'LearnIt', description: 'one place for students to come and study together', videoUrl: '/learnit.mp4' },
    { 
      id: 5, 
      title: 'HealthyZ', 
      description: 'make telehealth faster and personalized', 
      loomUrl: 'https://www.loom.com/embed/e71a347cc7744754a53c122af8e5fe35?sid=63130626-4543-4024-a0ea-808374c02109'
    },
    { id: 6, title: 'BrickBreaker', description: 'an arcade game on a CLUE board', videoUrl: '/brickbreaker_1.mp4' },
    { 
      id: 7, 
      title: 'Inferno OS', 
      description: 'playing with the inferno OS, not sure what I will do but stay tuned....', 
      giphyUrl: 'https://giphy.com/embed/M6bJf9VBmrN1qTtPyL'
    }
  ]

  // useEffect(() => {
  //   const handleScroll = () => {
  //     //const scrollPosition = window.scrollY + window.innerHeight / 2

  //     if (aboutRef.current && projectsRef.current) {
  //       const aboutTop = aboutRef.current.offsetTop
  //       const projectsTop = projectsRef.current.offsetTop

  //       // if (scrollPosition >= projectsTop) {
  //       //   setActiveSection('projects')
  //       // } else if (scrollPosition >= aboutTop) {
  //       //   setActiveSection('about')
  //       // } else {
  //       //   setActiveSection('home')
  //       // }
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <div className="min-h-screen">
      <div ref={aboutRef} className="py-16">
        <AboutMe />
      </div>
      <div ref={projectsRef} className="py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Builds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}