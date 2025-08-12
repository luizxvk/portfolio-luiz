// Mock data for portfolio - will be replaced with GitHub API integration later

export const personalInfo = {
  name: "Luiz Guilherme Diogo Garcia",
  title: "RPA Developer | Backend Developer", 
  location: "Indaiatuba – SP, Brasil",
  email: "luizguilherme011@gmail.com",
  linkedin: "https://linkedin.com/in/luizdiogogarcia",
  phone: "(19) 99269-7215",
  cvUrl: "https://customer-assets.emergentagent.com/job_luiz-portfolio/artifacts/sktinimk_CV_LuizGuilherme_2025_vf%20%281%29.pdf"
};

export const aboutMe = {
  bio: `Profissional com 3 anos de experiência em desenvolvimento de soluções RPA e backend, com atuação sólida em projetos corporativos de grande escala. Especializado em automações utilizando Automation Anywhere, UiPath, Blue Prism, Power Automate e SAP BTP.

Em transição para desenvolvimento backend com Java, trabalhando com Spring Boot, AWS (EKS, DynamoDB, KMS), Kafka, API Gateway (Apigee), e ferramentas como GitLab, GitHub e Jenkins. Forte domínio de boas práticas de desenvolvimento, testes, versionamento e integração contínua.`,
  experience: "3+ anos de experiência",
  company: "NTT DATA",
  role: "RPA Developer | Python/Java Backend Developer",
  period: "Junho/2022 – Atual"
};

export const skills = [
  { name: "Python", level: "Pleno", category: "Languages" },
  { name: "Java", level: "Pleno", category: "Languages" },
  { name: "JavaScript", level: "Intermediate", category: "Languages" },
  { name: "C#", level: "Intermediate", category: "Languages" },
  { name: "Spring Boot", level: "Advanced", category: "Frameworks" },
  { name: "AWS", level: "Advanced", category: "Cloud" },
  { name: "Docker", level: "Advanced", category: "DevOps" },
  { name: "Kubernetes", level: "Advanced", category: "DevOps" },
  { name: "Jenkins", level: "Advanced", category: "DevOps" },
  { name: "UiPath", level: "Expert", category: "RPA" },
  { name: "Automation Anywhere", level: "Expert", category: "RPA" },
  { name: "Blue Prism", level: "Advanced", category: "RPA" },
  { name: "Power Automate", level: "Advanced", category: "RPA" },
  { name: "GitLab", level: "Advanced", category: "Tools" },
  { name: "GitHub", level: "Advanced", category: "Tools" },
  { name: "Kafka", level: "Intermediate", category: "Tools" },
  { name: "MongoDB", level: "Intermediate", category: "Database" },
  { name: "DynamoDB", level: "Intermediate", category: "Database" },
  { name: "MySQL", level: "Intermediate", category: "Database" }
];

// Mock GitHub projects - will be replaced with real GitHub API data
export const projects = [
  {
    id: 1,
    name: "Enterprise RPA Automation",
    description: "Automated business processes using UiPath and Automation Anywhere, improving efficiency by 60% in data processing workflows.",
    technologies: ["Python", "UiPath", "Automation Anywhere", "AWS S3"],
    github_url: "https://github.com/luizxvk",
    demo_url: null,
    stars: 8,
    language: "Python",
    updated_at: "2024-12-15"
  },
  {
    id: 2,
    name: "Microservices Backend API",
    description: "Java Spring Boot microservice with AWS EKS deployment, DynamoDB integration, and Kafka messaging.",
    technologies: ["Java", "Spring Boot", "AWS", "DynamoDB", "Kafka"],
    github_url: "https://github.com/luizxvk",
    demo_url: null,
    stars: 12,
    language: "Java",
    updated_at: "2024-12-10"
  },
  {
    id: 3,
    name: "Data Processing Pipeline",
    description: "Python-based data processing pipeline with AWS S3 integration, pandas for data manipulation, and Docker containerization.",
    technologies: ["Python", "AWS S3", "Pandas", "Docker", "Jenkins"],
    github_url: "https://github.com/luizxvk",
    demo_url: null,
    stars: 15,
    language: "Python",
    updated_at: "2024-12-08"
  },
  {
    id: 4,
    name: "Blue Prism Automation Suite",
    description: "Comprehensive automation solution using Blue Prism for financial processes, reducing manual work by 80%.",
    technologies: ["Blue Prism", "C#", "MySQL", "Windows"],
    github_url: "https://github.com/luizxvk",
    demo_url: null,
    stars: 6,
    language: "C#",
    updated_at: "2024-11-25"
  },
  {
    id: 5,
    name: "Cloud Infrastructure Manager",
    description: "AWS infrastructure management tool with Kubernetes orchestration and CI/CD pipeline integration.",
    technologies: ["AWS", "Kubernetes", "Jenkins", "GitLab", "Docker"],
    github_url: "https://github.com/luizxvk",
    demo_url: null,
    stars: 9,
    language: "Shell",
    updated_at: "2024-11-20"
  },
  {
    id: 6,
    name: "API Gateway Integration",
    description: "REST API development with Apigee gateway integration, implementing authentication and rate limiting.",
    technologies: ["Java", "Spring Boot", "Apigee", "Swagger", "Postman"],
    github_url: "https://github.com/luizxvk",
    demo_url: null,
    stars: 7,
    language: "Java",
    updated_at: "2024-11-15"
  }
];

export const certifications = [
  "Automation Anywhere Certified Professional",
  "Bot Developer A360",  
  "Blue Prism Foundation Training",
  "Python: Avançando na Orientação a Objetos – Alura",
  "Python: Avançando na Linguagem – Alura",
  "Comunicação e Oratória Profissional",
  "Microsserviços com Java - Java JRE e JDK"
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "English", level: "Advanced" },
  { name: "Español", level: "Basic" }
];