import React from 'react';
import { Building, MapPin, Calendar, Award } from 'lucide-react';
import { aboutMe, certifications, languages } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio and Experience */}
          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Experiência Profissional</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Building className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{aboutMe.company}</h4>
                    <p className="text-blue-400 font-medium">{aboutMe.role}</p>
                    <div className="flex items-center text-slate-400 mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {aboutMe.period}
                    </div>
                  </div>
                </div>
                
                <div className="text-slate-300 leading-relaxed">
                  {aboutMe.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Idiomas</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-slate-300 font-medium">{lang.name}</span>
                    <span className="text-blue-400 font-semibold">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-blue-400 mr-3" />
                Certificações
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300 leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Formação</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-lg font-semibold text-white">
                    Tecnólogo em Tecnologia de Jogos Digitais
                  </h4>
                  <p className="text-blue-400 font-medium">UNINOVE</p>
                  <p className="text-slate-400">2023 – 2025</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-slate-300 text-sm">Anos de Experiência</div>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                <div className="text-slate-300 text-sm">Projetos Concluídos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;