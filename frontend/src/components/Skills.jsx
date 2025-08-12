import React from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Settings, 
  Cpu, 
  GitBranch,
  Server,
  Bot,
  Workflow
} from 'lucide-react';
import { skills } from '../data/mock';

const skillIcons = {
  // Languages
  Python: <Code2 className="w-6 h-6" />,
  Java: <Code2 className="w-6 h-6" />,
  JavaScript: <Code2 className="w-6 h-6" />,
  'C#': <Code2 className="w-6 h-6" />,
  
  // Frameworks
  'Spring Boot': <Server className="w-6 h-6" />,
  
  // Cloud
  AWS: <Cloud className="w-6 h-6" />,
  
  // DevOps
  Docker: <Settings className="w-6 h-6" />,
  Kubernetes: <Settings className="w-6 h-6" />,
  Jenkins: <Settings className="w-6 h-6" />,
  
  // RPA
  UiPath: <Bot className="w-6 h-6" />,
  'Automation Anywhere': <Bot className="w-6 h-6" />,
  'Blue Prism': <Bot className="w-6 h-6" />,
  'Power Automate': <Workflow className="w-6 h-6" />,
  
  // Tools
  GitLab: <GitBranch className="w-6 h-6" />,
  GitHub: <GitBranch className="w-6 h-6" />,
  Kafka: <Server className="w-6 h-6" />,
  
  // Database
  MongoDB: <Database className="w-6 h-6" />,
  DynamoDB: <Database className="w-6 h-6" />,
  MySQL: <Database className="w-6 h-6" />
};

const categoryColors = {
  Languages: 'from-blue-600 to-blue-400',
  Frameworks: 'from-green-600 to-green-400',
  Cloud: 'from-orange-600 to-orange-400',
  DevOps: 'from-purple-600 to-purple-400',
  RPA: 'from-red-600 to-red-400',
  Tools: 'from-yellow-600 to-yellow-400',
  Database: 'from-indigo-600 to-indigo-400'
};

const Skills = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Competências Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${categoryColors[category]} rounded-lg mr-4`}>
                  {category === 'Languages' && <Code2 className="w-6 h-6 text-white" />}
                  {category === 'Frameworks' && <Server className="w-6 h-6 text-white" />}
                  {category === 'Cloud' && <Cloud className="w-6 h-6 text-white" />}
                  {category === 'DevOps' && <Settings className="w-6 h-6 text-white" />}
                  {category === 'RPA' && <Bot className="w-6 h-6 text-white" />}
                  {category === 'Tools' && <GitBranch className="w-6 h-6 text-white" />}
                  {category === 'Database' && <Database className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between group hover:bg-white/5 p-3 rounded-lg transition-all duration-200">
                    <div className="flex items-center space-x-3">
                      <div className="text-slate-400 group-hover:text-blue-400 transition-colors duration-200">
                        {skillIcons[skill.name] || <Cpu className="w-5 h-5" />}
                      </div>
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Skills Highlight */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Especialidades</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['RPA Development', 'Backend Development', 'Cloud Computing', 'Microservices', 'DevOps', 'Process Automation'].map((specialty, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-blue-400/20 border border-blue-400/30 text-blue-300 font-medium rounded-full hover:from-blue-600/30 hover:to-blue-400/30 transition-all duration-300"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;