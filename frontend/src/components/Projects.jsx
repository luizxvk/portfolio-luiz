import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Star, Code } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const technologies = ['All', 'Python', 'Java', 'AWS', 'RPA', 'Spring Boot'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(activeFilter.toLowerCase()) ||
          (activeFilter === 'RPA' && ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Power Automate'].some(rpaTech => tech.includes(rpaTech)))
        )
      );

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Seleção de projetos desenvolvidos com foco em automação RPA, desenvolvimento backend e integração com serviços em nuvem.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === tech
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl'
                  : 'backdrop-blur-md bg-white/10 border border-white/20 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Project header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <Code className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <div className="flex items-center text-slate-400 text-sm mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(project.updated_at).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                  </div>
                  
                  {project.stars > 0 && (
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{project.stars}</span>
                    </div>
                  )}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-400 text-xs font-medium rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Language indicator */}
                {project.language && (
                  <div className="flex items-center space-x-2 mb-4">
                    <div className={`w-3 h-3 rounded-full ${
                      project.language === 'Python' ? 'bg-yellow-400' :
                      project.language === 'Java' ? 'bg-orange-500' :
                      project.language === 'JavaScript' ? 'bg-yellow-300' :
                      project.language === 'C#' ? 'bg-purple-500' :
                      project.language === 'Shell' ? 'bg-green-500' :
                      'bg-blue-400'
                    }`}></div>
                    <span className="text-slate-400 text-sm">{project.language}</span>
                  </div>
                )}
              </div>

              {/* Project actions */}
              <div className="px-6 pb-6">
                <div className="flex space-x-3">
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-slate-300 hover:text-white font-medium rounded-lg transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Código</span>
                  </a>
                  
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              Nenhum projeto encontrado para o filtro "{activeFilter}".
            </p>
          </div>
        )}

        {/* GitHub link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/luizxvk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <Github className="w-6 h-6" />
            <span>Ver todos os projetos no GitHub</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;