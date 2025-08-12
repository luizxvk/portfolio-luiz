import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950/80 backdrop-blur-md border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Luiz Guilherme
            </h3>
            <p className="text-slate-300 leading-relaxed">
              RPA Developer & Backend Developer especializado em automação de processos e desenvolvimento de soluções escaláveis.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 backdrop-blur-md bg-white/10 hover:bg-blue-600/20 border border-white/20 hover:border-blue-400/50 rounded-lg transition-all duration-300 transform hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-blue-400" />
              </a>
              <a
                href="https://github.com/luizxvk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 backdrop-blur-md bg-white/10 hover:bg-gray-600/20 border border-white/20 hover:border-gray-400/50 rounded-lg transition-all duration-300 transform hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-slate-300 group-hover:text-gray-300" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 backdrop-blur-md bg-white/10 hover:bg-green-600/20 border border-white/20 hover:border-green-400/50 rounded-lg transition-all duration-300 transform hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-slate-300 group-hover:text-green-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Competências
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors duration-300">
                  Contato
                </a>
              </li>
              <li>
                <a 
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-2 text-slate-300">
              <p>{personalInfo.location}</p>
              <p>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {personalInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-slate-300">
              <span>© {currentYear} Luiz Guilherme Diogo Garcia. </span>
              <span className="flex items-center ml-1">
                Feito com <Heart className="w-4 h-4 text-red-400 mx-1 fill-current" /> usando React & Tailwind CSS
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-slate-300 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105"
              aria-label="Voltar ao topo"
            >
              ↑ Topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;