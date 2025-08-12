import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = ({ darkMode, toggleDarkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main content with glassmorphism */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Name and title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4">
              {personalInfo.title}
            </p>
            <div className="flex items-center justify-center text-slate-400 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              {personalInfo.location}
            </div>
          </div>

          {/* Bio snippet */}
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-slate-300 text-lg leading-relaxed">
              3+ anos de experiência em desenvolvimento RPA e backend, especializado em automação de processos 
              e desenvolvimento de microserviços com tecnologias modernas.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Ver Projetos
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 transform hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
            <a
              href="https://github.com/luizxvk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 transform hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 transform hover:scale-110 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20">
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;