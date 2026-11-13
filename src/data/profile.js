export const profile = {
  name: "SANIYA SARATKAR",
  shortName: "Saniya",
  // Recruiter headline: strictly Data Analyst | Data Scientist (no AI/ML Engineer in Recruiter headline)
  headline: "Data Analyst | Data Scientist",
  recruiterHeadline: "Data Analyst | Data Scientist",
  dataAnalystHeadline: "Data Analyst | Business Intelligence | Business Analytics",
  dataScienceHeadline: "Data Science & AI",
  tagline: "Turning Data Into Meaningful Insights.",
  summary: "B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in analytics, business intelligence, finance, healthcare and research. Passionate about exploring technology, continuously learning and building practical solutions that create meaningful impact",
  dataAnalystSummary: "Data Analyst skilled in SQL, Python, Excel, and Power BI, with hands-on experience in data cleaning, EDA, dashboard development, and business reporting. Experienced in identifying business trends, evaluating KPIs, performing statistical analysis, and translating complex data into actionable insights across multidisciplinary domains. Awarded an $8,500 UC Berkeley AI Scholarship.",
  dataScienceSummary: "I enjoy applying machine learning, deep learning, and modern AI techniques to solve practical problems. My work spans computer vision, natural language processing, forecasting, and retrieval-augmented generation, with a focus on building useful and scalable applications.",
  location: "Nagpur, India",
  availability: "Open to Entry-Level Opportunities",
  email: "saniyasaratkar1312@gmail.com",
  phone: "+91-7276253304",
  linkedin: "https://www.linkedin.com/in/saniya-saratkar-1624ba250/",
  github: "https://github.com/Saniya1312S",
  googleScholar: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en",
  portfolioHome: "https://saniya1312s.github.io/Saniya-Portfolio-/",
  profileImage: "./assets/profile.jpg",
  resumeDataAnalyst: "./assets/resumes/Saniya_Saratkar_Data_Analyst_Resume.pdf",
  resumeDataScientist: "./assets/resumes/Saniya_Saratkar_Data_Scientist_Resume.pdf",
  metrics: [
    { value: "$8,500", label: "UC Berkeley AI Scholarship", detail: "On-Campus Merit Fellowship" },
    { value: "1M+", label: "Customer & Operational Records", detail: "Deeptimaan Systems" },
    { value: "100K+", label: "Financial & ESG Records", detail: "IIT Kharagpur (14 Years, 50 Companies)" },
    { value: "200K+", label: "Satellite Geospatial Records", detail: "ISRO NRSC (Copernicus/GEE)" },
    { value: "20+", label: "Verified Publications", detail: "Google Scholar Indexed" }
  ],
  education: {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "Adani Institute of Higher Education and Research (AIHER), Nagpur",
    affiliationNote: "Datta Meghe Institute of Higher Education and Research (DMIHER)",
    duration: "2022–2026",
    cgpa: "8.35/10"
  }
};

// Exactly 5 Streaming-Service Style Profiles
export const profilesList = [
  {
    id: "recruiter",
    name: "Recruiter",
    title: "Recruiter",
    route: "/recruiter",
    avatar: "./assets/avatar-blue.png",
    characterLabel: "Professional woman in blazer",
    hoverDescription: "Fast-track 30–60s executive scan for technical recruiters & hiring managers",
    color: "#E50914",
    bgGradient: "from-blue-600 to-indigo-800"
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    title: "Data Analyst",
    route: "/data-analyst",
    avatar: "./assets/avatar-grey.png",
    characterLabel: "Woman with glasses and laptop",
    hoverDescription: "SQL, Python, Excel, Power BI, KPIs & business intelligence dashboards",
    color: "#38bdf8",
    bgGradient: "from-sky-500 to-blue-700"
  },
  {
    id: "data-science-ai",
    name: "Data Science & AI",
    title: "Data Science & AI",
    route: "/data-science-ai",
    avatar: "./assets/avatar-red.png",
    characterLabel: "Machine learning engineer with laptop",
    hoverDescription: "Machine learning, Deep Learning, NLP, RAG, computer vision & applied AI",
    color: "#8b5cf6",
    bgGradient: "from-purple-600 to-violet-900"
  },
  {
    id: "explorer",
    name: "Explorer",
    title: "Explorer",
    route: "/explorer",
    avatar: "./assets/avatar-yellow.png",
    characterLabel: "Creative tech explorer with headphones",
    hoverDescription: "Creative interactive discovery journey with full complete portfolio access",
    color: "#f59e0b",
    bgGradient: "from-amber-500 to-orange-700"
  },
  {
    id: "researcher",
    name: "Researcher",
    title: "Researcher",
    route: "/researcher",
    avatar: "./assets/avatar-green.png",
    characterLabel: "Academic researcher & scholar",
    hoverDescription: "Academic research domains, 20+ peer-reviewed publications & IEEE work",
    color: "#06b6d4",
    bgGradient: "from-teal-500 to-cyan-800"
  }
];
