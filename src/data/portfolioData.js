export const personalInfo = {
  name: "SANIYA SARATKAR",
  shortName: "Saniya",
  title: "Data Analyst | Data Scientist | AI/ML Engineer",
  tagline: "Turning Data Into Insights. Building Intelligence Into Solutions.",
  availability: "Open to Entry-Level Opportunities | Data Analytics | Data Science | AI/ML",
  location: "Nagpur, Maharashtra, India",
  email: "saniyasaratkar1312@gmail.com",
  phone: "+91-7276253304",
  linkedin: "https://www.linkedin.com/in/saniya-saratkar-1624ba250/",
  github: "https://github.com/Saniya1312S",
  googleScholar: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en",
  profileImage: "./assets/profile.jpg",
  resumePdf: "./assets/Saniya_Saratkar_Resume.pdf",
  bio: "I'm an Artificial Intelligence and Data Science graduate passionate about transforming complex datasets into meaningful business insights and intelligent solutions. With hands-on experience across analytics, research, machine learning and AI applications, I combine analytical thinking with technical problem-solving to build solutions that create real-world value.",
  aboutExtended: "My journey spans intensive internship and research exposure at Deeptimaan Systems, IIT Kharagpur, ISRO National Remote Sensing Centre (NRSC), UC Berkeley, and Ignite Center. I operate comfortably across the end-to-end data lifecycle — from untangling messy raw databases and formulating quantitative metrics, to training rigorous statistical and ML models, creating interactive business intelligence dashboards, and communicating actionable strategic decisions to stakeholders."
};

export const heroMetrics = [
  { value: "$8,500", label: "UC Berkeley AI Scholarship", detail: "Merit-based international research grant" },
  { value: "20+", label: "Research Publications", detail: "Indexed across Google Scholar & Journals" },
  { value: "1.5M+", label: "Railway Journeys Analyzed", detail: "Simulated operational bottleneck study" },
  { value: "283K+", label: "Financial Records Audited", detail: "Fraud detection & risk exposure analytics" },
];

export const dataLifecycle = [
  {
    step: "01",
    title: "Business Problem Definition",
    desc: "Translating ambiguous organizational challenges into precise quantitative questions, measurable KPIs, and decision frameworks.",
    icon: "Target"
  },
  {
    step: "02",
    title: "Ingestion & Cleaning",
    desc: "Resolving missingness, structural anomalies, deduplication, and schema validation with SQL, Pandas, and automated pipelines.",
    icon: "Database"
  },
  {
    step: "03",
    title: "Exploratory Data Analysis",
    desc: "Uncovering latent patterns, statistical correlations, cohort behaviors, and distributional skews through rigorous hypothesis testing.",
    icon: "BarChart3"
  },
  {
    step: "04",
    title: "Statistical & ML Modeling",
    desc: "Developing predictive algorithms, time-series forecasts (ARIMA/SARIMA), classification engines, and leak-safe ML pipelines.",
    icon: "Cpu"
  },
  {
    step: "05",
    title: "Interactive BI Dashboards",
    desc: "Crafting executive-ready Power BI, Tableau, and custom analytics dashboards with dynamic drill-downs and DAX measures.",
    icon: "LayoutDashboard"
  },
  {
    step: "06",
    title: "Strategic Decision Support",
    desc: "Synthesizing analytical findings into plain-English stakeholder recommendations that drive revenue and eliminate waste.",
    icon: "TrendingUp"
  }
];

export const experiences = [
  {
    id: "deeptimaan",
    company: "Deeptimaan System",
    role: "Data Analyst / Data Science Intern",
    location: "Hyderabad, India",
    period: "Feb 2025 – Jan 2026",
    type: "Internship",
    summary: "Led big-data analysis on operational and customer databases, identifying behavior trends and automating KPI reporting.",
    highlights: [
      "Analysed 1,000,000+ customer and operational transaction records using advanced Python and SQL queries.",
      "Performed detailed user segmentation, cohort retention analysis, and behavioral clustering to guide commercial roadmap decisions.",
      "Engineered automated daily ETL validation workflows using n8n and containerized Docker scripts, eliminating repetitive spreadsheet processing.",
      "Reduced routine manual reporting effort by 21.25%, accelerating report distribution to cross-functional leadership."
    ],
    tech: ["Python", "SQL", "Pandas", "Data Validation", "n8n", "Docker", "ETL", "EDA"]
  },
  {
    id: "iit-kgp",
    company: "IIT Kharagpur",
    role: "Research Analyst Intern",
    location: "Kharagpur, India",
    period: "Mar 2025 – Aug 2025",
    type: "Research Internship",
    summary: "Conducted statistical time-series forecasting and econometric evaluation on 14+ years of ESG and market indicators.",
    highlights: [
      "Extracted, cleaned, and normalized 14+ years of longitudinal ESG and corporate financial datasets.",
      "Conducted extensive exploratory data analysis, stationarity testing, autocorrelation evaluation, and statistical significance modeling.",
      "Implemented ARIMA and SARIMA forecasting models to analyze volatility trends and corporate sustainability benchmarks.",
      "Produced publication-quality data visualizations, research charts, and audit documentation directly supporting academic journal submissions."
    ],
    tech: ["Python", "SQL", "Pandas", "Statistical Analysis", "Time-Series", "ARIMA", "SARIMA", "Matplotlib"]
  },
  {
    id: "isro-nrsc",
    company: "ISRO – National Remote Sensing Centre (NRSC)",
    role: "Project Intern",
    location: "Hyderabad, India",
    period: "May 2025 – Oct 2025",
    type: "Research & Development",
    summary: "Processed petabyte-scale satellite and remote sensing data to discover regional environmental dynamics.",
    highlights: [
      "Queried and processed large-scale multispectral satellite imagery using Google Earth Engine and the European Copernicus program.",
      "Engineered geospatial analytics pipelines in Python to identify regional land-cover shifts, vegetation anomalies, and environmental patterns.",
      "Built an analytical visualization prototype illustrating longitudinal ecological indicators across diverse climatic zones.",
      "Presented methodology and interactive prototype findings directly to senior ISRO scientists and technical stakeholders."
    ],
    tech: ["Google Earth Engine", "Python", "Geospatial Analysis", "Copernicus", "Satellite Imagery", "Data Visualization"]
  },
  {
    id: "uc-berkeley",
    company: "University of California, Berkeley",
    role: "Applied AI Intern & Scholar",
    location: "USA (Remote / Fellowship)",
    period: "July 2025",
    type: "Fellowship & Applied Research",
    summary: "Selected for prestigious international AI research scholarship; explored LLM workflows and evaluation benchmarks.",
    highlights: [
      "Awarded an $8,500 merit-based UC Berkeley AI Internship Scholarship following competitive technical screening.",
      "Investigated practical LLM-assisted workflows, prompt engineering architectures, and retrieval pipelines for high-precision tasks.",
      "Participated in exploratory data pipelines and empirical evaluation methods for generative AI applications.",
      "Collaborated with academic peers and AI researchers on structured benchmarking and error taxonomy analysis."
    ],
    tech: ["LLMs", "Prompt Engineering", "Applied AI", "Python", "Data Pipelines", "Model Evaluation"]
  },
  {
    id: "ignite-center",
    company: "Ignite Center",
    role: "AI Mentor",
    location: "New York, USA (Remote)",
    period: "Dec 2025 – Apr 2026",
    type: "Mentorship & Applied Projects",
    summary: "Mentored student researchers and collaborated with tech founders on AI-driven sustainability initiatives.",
    highlights: [
      "Guided aspiring student researchers through practical machine learning workflows, exploratory data analysis, and model validation.",
      "Contributed to ESG-focused analytical pipelines and predictive modeling for sustainability benchmarks.",
      "Partnered with startup founders and industry professionals to review technical architectures and unblock algorithmic hurdles.",
      "Facilitated hands-on problem-solving workshops covering SQL querying, Python libraries, and reproducible research standards."
    ],
    tech: ["AI Mentoring", "ESG Analytics", "Predictive Modeling", "Python", "Problem Solving", "Technical Strategy"]
  }
];

export const projectCategories = [
  "All",
  "Data Analytics",
  "Business Analytics",
  "Data Science",
  "Machine Learning",
  "AI / GenAI",
  "Research"
];

export const projects = [
  {
    id: "olist-marketing",
    title: "Olist Marketing Funnel & Lead Conversion Analytics",
    categories: ["Data Analytics", "Business Analytics"],
    period: "2025",
    problem: "E-commerce platforms face high acquisition expenditure without transparency into which channels actually drive closed merchant deals and sustainable revenue.",
    implementation: "Constructed an end-to-end sales funnel analysis integrating MySQL, Python, and Power BI. Modeled 8,000 Marketing-Qualified Leads (MQLs) through qualification, SDR outreach, and closing stages. Engineered DAX metrics for velocity, CAC-to-close ratio, and multi-touch channel attribution.",
    results: [
      "Tracked 8,000 MQLs yielding 842 closed deals (10.5% overall conversion rate)",
      "Identified Organic & Paid Search as the dominant driver, generating 55.3% of closed deals",
      "Diagnosed that segment conversion rates peaked in high-margin categories, formulating channel-reallocation recommendations"
    ],
    tech: ["MySQL", "Python", "Excel", "Power BI", "DAX", "Pandas", "NumPy"],
    github: "https://github.com/Saniya1312S/Olist-Marketing-Funnel-Lead-Conversion",
    demo: null,
    badge: "10.5% Conversion Rate",
    featured: true
  },
  {
    id: "railway-delay",
    title: "Indian Railway Operational Delay Analytics",
    categories: ["Data Analytics", "Business Analytics", "Data Science"],
    period: "2025",
    problem: "Regional rail networks suffer from compounding transit delays and operational bottlenecks, requiring fast analytical processing of multi-million record journey logs.",
    implementation: "Queried a comprehensive dataset of 1.5 million simulated railway journeys using DuckDB and Pandas for rapid in-memory aggregation. Segmented delays across 18 regional railway zones, train categories (Express, Superfast, Local), and seasons. Designed an interactive Power BI dashboard with delay heatmaps and root cause Pareto charts.",
    results: [
      "Processed 1.5M simulated journey records uncovering an aggregate 71.89% delay rate",
      "Isolated severe regional disparity: Eastern Railway (ER) recorded 89.32% delay vs South Western Railway (SWR) at 50.22%",
      "Identified seasonal vulnerability with delays surging to 92.82% during monsoon conditions, informing schedule buffer strategies"
    ],
    tech: ["Python", "DuckDB", "Pandas", "Power BI", "Data Visualization", "Root Cause Analysis"],
    github: "https://github.com/Saniya1312S/Railway-Operations-Analytics",
    demo: null,
    badge: "1.5M Records • DuckDB",
    featured: true
  },
  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud & Transaction Risk Analysis",
    categories: ["Data Analytics", "Data Science", "Machine Learning"],
    period: "2025",
    problem: "Extreme class imbalance in transaction logs makes fraud detection challenging, requiring sensitivity to subtle financial exposure patterns without excessive false alarms.",
    implementation: "Audited 283,726 credit card transaction records using Python and SQL. Built specialized feature representations capturing velocity, distance anomalies, and temporal spending spikes. Created an executive Power BI risk dashboard with DAX threshold alerting and financial exposure tracking.",
    results: [
      "Audited 283,726 transactions detecting 473 verified fraud cases (0.167% volume rate)",
      "Uncovered that fraud represented 0.233% of total transaction value ($ exposure)",
      "Formulated tiered anomaly verification rules that flagged high-risk transactions while minimizing merchant friction"
    ],
    tech: ["Python", "SQL", "Power BI", "DAX", "Exploratory Data Analysis", "Risk Analytics"],
    github: "https://github.com/Saniya1312S/Card-Fraud-Risk-Analysis",
    demo: null,
    badge: "283K Records • 0.167% Fraud Rate",
    featured: true
  },
  {
    id: "sign-assistant",
    title: "SignAssistant – Real-Time Indian Sign Language Translation",
    categories: ["Machine Learning", "AI / GenAI"],
    period: "2025",
    problem: "Over 63 million deaf and hard-of-hearing individuals in India face daily communication barriers due to the absence of accessible real-time sign language translation tools.",
    implementation: "Engineered an end-to-end edge-compatible gesture recognition engine using MediaPipe Hands (21 3D landmarks per hand) and a custom 226-dimensional invariant feature space (invariant to scale, tilt, screen position, and handedness). Built dual inference paths: Classical ML (HistGradientBoosting) and PyTorch Deep Learning (ISLLandmarkNet ResNet-MLP) with trilingual voiceover in English, Hindi (हिंदी), and Marathi (मराठी), plus a Gemini AI assistant.",
    results: [
      "99.44% test accuracy with Classical ML (HistGradientBoosting on 47,500+ samples)",
      "99.61% accuracy with custom PyTorch 4-layer ResNet-MLP architecture",
      "Sub-31ms edge latency running at 25–30 FPS on standard consumer CPUs without requiring a GPU",
      "Full automated CI test suite with 59 passing unit/integration tests"
    ],
    tech: ["Python", "PyTorch", "MediaPipe Hands", "Scikit-Learn", "Streamlit", "Gemini API", "WebRTC"],
    github: "https://github.com/Saniya1312S/isl-sign-language-app",
    demo: null,
    image: "./assets/project-images/isl-translator.png",
    badge: "99.61% Accuracy • 31ms Latency",
    featured: true
  },
  {
    id: "bac-motion-ai",
    title: "BacMotionAI – Bacterial Motility Under Chemical Stimuli",
    categories: ["Data Science", "Machine Learning", "Research"],
    period: "2025",
    problem: "Decoupling chemical chemotaxis from hydrodynamic and steric wall boundaries in microfluidic environments requires automated trajectory classification.",
    implementation: "Formulated a 4-class machine learning pipeline predicting chemical environment (none, attractant, repellent, antibiotic) from raw 2D bacterial (x, y) trajectories. Engineered 11 kinematic features (instantaneous velocity, turning angles, persistence length, mean squared displacement). Trained leak-safe cross-validated baselines and ensemble classifiers.",
    results: [
      "Evaluated on 2,400 simulated trajectories across 4 balanced experimental conditions",
      "Random Forest achieved 87.3% test accuracy (95% CI 84.2%–90.2%) with 0.873 macro-F1 and 0.977 ROC-AUC",
      "Gradient Boosting achieved 87.9% test accuracy; deployed full interactive client-side science explorer"
    ],
    tech: ["Python", "Scikit-Learn", "Random Forest", "Gradient Boosting", "NumPy", "Pandas", "GitHub CI"],
    github: "https://github.com/Saniya1312S/Bacterial-MotionAI-ML",
    demo: "https://Saniya1312S.github.io/Bacterial-MotionAI-ML/",
    image: "./assets/project-images/bacmotion-models.png",
    badge: "87.3% Test Acc • ROC-AUC 0.977",
    featured: true
  },
  {
    id: "medievidence",
    title: "MediEvidence – Retrieval-Augmented Clinical Evidence Assistant",
    categories: ["AI / GenAI", "Research"],
    period: "2025",
    problem: "Clinicians face information overload when consulting biomedical literature, while generic LLMs suffer from dangerous factual hallucinations without verifiable citations.",
    implementation: "Architected a grounded Clinical RAG system integrating Qdrant vector database, dense embeddings, and Ollama local LLMs. Designed a hybrid retrieval workflow with lexical BM25 reranking, out-of-domain query refusal protocols, and structured extraction of medical study sample sizes, endpoints, and confidence intervals.",
    results: [
      "100% evidence-grounded response generation with direct PubMed/journal DOI citations",
      "Implemented strict out-of-domain refusal guardrails preventing non-clinical hallucinated advice",
      "Built clean interactive frontend with real-time streaming citations and evidence cards"
    ],
    tech: ["Python", "FastAPI", "Qdrant Vector DB", "Ollama", "Embeddings", "RAG", "Biomedical NLP"],
    github: "https://github.com/Saniya1312S/MediEvidence-Retrieval-Augmented-Clinical-Evidence-Assistant",
    demo: "https://saniya1312s.github.io/MediEvidence-Retrieval-Augmented-Clinical-Evidence-Assistant/",
    badge: "Grounded Clinical RAG",
    featured: true
  },
  {
    id: "esg-forecasting",
    title: "ESG Indicators & Financial Market Forecasting",
    categories: ["Data Science", "Research"],
    period: "2025",
    problem: "Assessing whether corporate sustainability disclosures contain statistically meaningful alpha and volatility signals for long-term equity performance.",
    implementation: "Collected and structured 14+ years of multivariate ESG ratings paired with equity return indices. Evaluated stationarity (ADF tests), structural breaks, and cointegration. Developed ARIMA/SARIMA and multivariate regression models to study lead-lag relationships between governance scores and market resilience.",
    results: [
      "Identified significant inverse volatility correlation between high ESG disclosure and downside drawdown",
      "Validated time-series predictive persistence supporting peer-reviewed empirical publication",
      "Automated econometric data pipeline for continuous market index ingestion"
    ],
    tech: ["Python", "Pandas", "Statistical Inference", "ARIMA", "SARIMA", "Econometrics", "Time-Series"],
    github: "https://github.com/Saniya1312S/ESG-Forecasting-ML",
    demo: null,
    badge: "14+ Years Data • Time-Series",
    featured: false
  },
  {
    id: "frozen-shoulder",
    title: "Frozen Shoulder Angle Measurement with Computer Vision",
    categories: ["Machine Learning", "Research"],
    period: "2024",
    problem: "Adhesive capsulitis (frozen shoulder) rehabilitation assessment traditionally relies on manual goniometer measurements, which are prone to inter-clinician variance.",
    implementation: "Created a computer vision application utilizing MediaPipe Pose landmark estimation to automatically calculate glenohumeral abduction, flexion, and rotation angles from video. Integrated biomechanical angle calculators with Ayurveda rehabilitation milestones.",
    results: [
      "Sub-2-degree measurement error compared with physical clinical goniometer benchmarks",
      "Published research: 'Web-Based Application to Calculate the Angle of Frozen Shoulder Using AI and Machine Learning With Ayurveda Integration'",
      "Automated longitudinal range-of-motion recovery tracking across multi-week physiotherapy sessions"
    ],
    tech: ["Python", "OpenCV", "MediaPipe Pose", "Streamlit", "Biomechanical Modeling", "Healthcare AI"],
    github: "https://github.com/Saniya1312S/frozen_shoulder_angle",
    demo: null,
    badge: "Published Research • OpenCV",
    featured: false
  },
  {
    id: "stubble-burning",
    title: "Agricultural Stubble Burning Remote Sensing & Analytics",
    categories: ["Data Analytics", "Research"],
    period: "2025",
    problem: "Post-harvest crop residue burning across Northern India drives hazardous seasonal air quality degradation requiring rapid spatial-temporal monitoring.",
    implementation: "Processed multi-temporal thermal and optical satellite bands from Copernicus Sentinel and MODIS datasets in Google Earth Engine. Engineered automated fire hotspot detection algorithms and plume dispersal models correlated with regional wind vectors.",
    results: [
      "Mapped spatial clustering and temporal peak windows of stubble burning events across agricultural belts",
      "Quantified district-level thermal anomaly intensity, delivering actionable monitoring dashboards for environmental mitigation",
      "Visualized regional dispersal correlation with particulate matter (PM2.5) escalation"
    ],
    tech: ["Google Earth Engine", "Python", "Copernicus Sentinel", "MODIS", "Geospatial Analytics"],
    github: "https://github.com/Saniya1312S/Stubble_burning_Final",
    demo: null,
    badge: "Satellite Remote Sensing",
    featured: false
  },
  {
    id: "intel-form-assistant",
    title: "Intel AI Smart Form Filling Assistant",
    categories: ["AI / GenAI"],
    period: "2025",
    problem: "Manual administrative data entry from physical forms and unstructured scans introduces high error rates and bottlenecks in institutional workflows.",
    implementation: "Developed an intelligent document analysis and automated form-filling pipeline leveraging OCR, named-entity recognition (NER), and local inference models. Integrated Intel OpenVINO acceleration for real-time edge document field extraction.",
    results: [
      "Automated multi-field extraction with automated validation checks against expected regex schemas",
      "Optimized inference latency on Intel hardware architectures using OpenVINO runtime",
      "Built clean desktop assistant interface for one-click structured form completion"
    ],
    tech: ["Python", "Intel OpenVINO", "Computer Vision / OCR", "NLP", "Process Automation"],
    github: "https://github.com/Saniya1312S/intel-ai-form-filling-assistant",
    demo: null,
    badge: "Intel AI Acceleration",
    featured: false
  }
];

export const skillCategories = [
  {
    title: "Data Analytics & Core Methodologies",
    desc: "Analytical frameworks, data auditing, and statistical investigation",
    skills: [
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning & Imputation",
      "Data Validation & Profiling",
      "Business Analysis",
      "KPI Development & Tracking",
      "Statistical Analysis & Hypothesis Testing",
      "Trend & Seasonal Decomposition",
      "Root Cause Analysis",
      "Cohort & Retention Analysis",
      "Data Storytelling",
      "ETL / ELT Pipelines"
    ]
  },
  {
    title: "Business Intelligence & Reporting",
    desc: "Executive dashboards, reporting automation, and semantic modeling",
    skills: [
      "Power BI",
      "DAX (Data Analysis Expressions)",
      "Power Query (M)",
      "Data Modeling (Star / Snowflake)",
      "Tableau",
      "Microsoft Excel (VLOOKUP, XLOOKUP, Pivot)",
      "Google Sheets",
      "Executive KPI Reporting",
      "Automated Workflow Distribution (n8n)"
    ]
  },
  {
    title: "Programming & Databases",
    desc: "Production code, database querying, and data manipulation",
    skills: [
      "Python",
      "SQL",
      "MySQL",
      "DuckDB (In-Memory Analytics)",
      "Pandas",
      "NumPy",
      "REST APIs",
      "JSON / Data Structures"
    ]
  },
  {
    title: "Data Visualization",
    desc: "Visual clarity, storytelling charts, and perceptual design",
    skills: [
      "Power BI Dashboards",
      "Matplotlib",
      "Seaborn",
      "Tableau Visualizations",
      "Geospatial Mapping",
      "Interactive Plotting"
    ]
  },
  {
    title: "Machine Learning & Forecasting",
    desc: "Predictive algorithms, time-series modeling, and leak-safe evaluation",
    skills: [
      "Scikit-learn",
      "Linear & Logistic Regression",
      "Decision Trees & Random Forest",
      "Gradient Boosting / XGBoost",
      "Time-Series Forecasting (ARIMA / SARIMA)",
      "Feature Engineering & Selection",
      "Cross-Validation & ROC-AUC Analysis",
      "Model Evaluation & Error Auditing"
    ]
  },
  {
    title: "AI & Generative AI",
    desc: "Deep neural networks, computer vision, and LLM architectures",
    skills: [
      "PyTorch",
      "Natural Language Processing (NLP)",
      "Convolutional Neural Networks (CNN)",
      "Recurrent Networks / LSTM",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Gemini API",
      "MediaPipe (Hands & Pose)",
      "Qdrant Vector Database"
    ]
  },
  {
    title: "Developer Tools & Infrastructure",
    desc: "Version control, containerization, and interactive notebooks",
    skills: [
      "Git",
      "GitHub & GitHub Actions CI",
      "Docker",
      "Jupyter Notebook",
      "Google Colab",
      "Google Earth Engine",
      "VS Code",
      "Postman",
      "Linux / Bash"
    ]
  }
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Artificial Intelligence and Data Science",
  institution: "Adani Institute of Higher Education and Research (AIHER)",
  location: "Nagpur, Maharashtra, India",
  duration: "2022 – 2026",
  cgpa: "8.35 / 10.0",
  affiliationNote: "Formerly affiliated with Datta Meghe Institute of Higher Education and Research (DMIHER).",
  highlights: [
    "Rigorous curriculum spanning Advanced Statistical Inference, Machine Learning, Database Management Systems, Distributed Computing, and Deep Learning.",
    "Academic coursework complemented by five industry/research internships and authoring 20+ scholarly publications."
  ]
};

export const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    focus: "Data preparation, SQL querying, spreadsheet modeling, R, and Tableau dashboards",
    verified: true
  },
  {
    title: "Applied AI Internship & Merit Scholarship ($8,500)",
    issuer: "University of California, Berkeley",
    focus: "Applied AI development, LLM architectures, and prompt workflows",
    verified: true
  },
  {
    title: "AI for Everyone",
    issuer: "DeepLearning.AI",
    focus: "AI strategy, machine learning lifecycles, and enterprise AI transformation",
    verified: true
  },
  {
    title: "Data Mining",
    issuer: "University of Glasgow",
    focus: "Pattern recognition, cluster analysis, association rule mining, and data pipelines",
    verified: true
  },
  {
    title: "Deep Learning in Healthcare",
    issuer: "Johns Hopkins University",
    focus: "Biomedical neural network architectures, medical image classification, and clinical AI",
    verified: true
  },
  {
    title: "Intel 3-Month Technical Training (2025)",
    issuer: "Intel",
    focus: "Edge AI optimization, OpenVINO runtime, and hardware-accelerated computer vision",
    verified: true
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    focus: "Distributed systems, virtualization, cloud infrastructure, and resource scaling",
    verified: true
  },
  {
    title: "Internet of Things (IoT)",
    issuer: "NPTEL",
    focus: "Sensor networks, edge connectivity protocols, and IoT data streams",
    verified: true
  },
  {
    title: "Edge Machine Learning",
    issuer: "Technical Certification",
    focus: "Quantization, lightweight model deployment, and embedded intelligence",
    verified: true
  }
];

export const publications = [
  {
    id: "pub-1",
    title: "From 5G to 6G: The role of AI, machine learning, and deep learning in wireless systems",
    authors: "PM Gote, P Kumar, P Verma, P Yesankar, A Pawar, S Saratkar",
    venue: "International Conference on Sentiment Analysis and Deep Learning (ICSADL)",
    year: "2025",
    type: "Conference Paper",
    abstract: "Comprehensive analysis examining how neural network architectures, edge AI, and reinforcement learning optimize spectral efficiency, beamforming, and ultra-reliable low-latency communications in next-generation 6G cellular infrastructure.",
    scholarLink: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en"
  },
  {
    id: "pub-2",
    title: "Human–computer interaction in healthcare: Comprehensive review",
    authors: "M Langote, S Saratkar, P Kumar, P Verma, C Puri, S Gundewar, P Gourshettiwar",
    venue: "AIMS Bioengineering",
    year: "2024",
    type: "Journal Review",
    abstract: "Systematic investigation of modern HCI paradigms in healthcare, examining ambient intelligence, robotic surgical interfaces, clinical usability standards, and AI-assisted diagnostic visualization.",
    scholarLink: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en"
  },
  {
    id: "pub-3",
    title: "Web-Based Application to Calculate the Angle of Frozen Shoulder Using AI and Machine Learning With Ayurveda Integration",
    authors: "Saniya Y. Saratkar, et al.",
    venue: "ResearchGate / Scientific Proceedings",
    year: "2024",
    type: "Applied Research Paper",
    abstract: "Presents a real-time computer vision system utilizing MediaPipe Pose landmark triangulation to assess range of motion for adhesive capsulitis, correlated with clinical Ayurvedic rehabilitation milestones.",
    scholarLink: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en"
  },
  {
    id: "pub-4",
    title: "Digital Twin Framework for Personalized Medicine Development",
    authors: "Saniya Saratkar, et al.",
    venue: "Frontiers in Digital Health",
    year: "2025",
    type: "Journal Paper",
    abstract: "Explores the synthesis of high-frequency IoT patient telemetry, multi-modal clinical history, and machine learning models into dynamic, digital patient twins for personalized pharmacology and predictive monitoring.",
    scholarLink: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en"
  },
  {
    id: "pub-5",
    title: "The use of artificial intelligence in anesthesia: A systematic review of recent advancement and challenges",
    authors: "T Thute, S Saratkar",
    venue: "AIP Conference Proceedings",
    year: "2025",
    type: "Conference Review",
    abstract: "Reviews algorithmic models for real-time hemodynamic depth-of-anesthesia monitoring, automated drug infusion closed-loop control, and risk prediction in surgical theaters.",
    scholarLink: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en"
  },
  {
    id: "pub-6",
    title: "The impact of artificial intelligence in early disease detection: A review",
    authors: "S Saratkar, et al.",
    venue: "Biomedical Informatics Proceedings",
    year: "2025",
    type: "Systematic Review",
    abstract: "Assesses predictive machine learning classifiers applied to electronic health records and routine blood biomarker panels to identify preclinical onset of chronic and oncological pathologies.",
    scholarLink: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en"
  },
  {
    id: "pub-7",
    title: "Computational analysis of bacterial motility: Decoupling steric and hydrodynamic wall effects in microchannels",
    authors: "Saniya Saratkar, et al.",
    venue: "Biophysical Modeling & Data Systems",
    year: "2025",
    type: "Research Paper",
    abstract: "Examines 2D kinematic trajectories of swimming flagellated bacteria under chemical gradients and confinement, establishing classification benchmarks using supervised learning ensembles.",
    scholarLink: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en"
  },
  {
    id: "pub-8",
    title: "AI-Enhanced Imaging Techniques for Understanding Alzheimer's Progression",
    authors: "Saniya Y. Saratkar, et al.",
    venue: "Neuroimaging & Healthcare Informatics",
    year: "2024",
    type: "Research Paper",
    abstract: "Evaluates convolutional feature extractors on longitudinal MRI and PET scans to detect cortical atrophy and classify mild cognitive impairment progression trajectories.",
    scholarLink: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en"
  }
];

export const achievements = [
  {
    title: "UC Berkeley Applied AI Merit Scholarship",
    award: "$8,500 Merit Fellowship",
    desc: "Awarded after competitive international technical review for applied AI research and LLM workflow development at UC Berkeley.",
    icon: "Award"
  },
  {
    title: "Medico Engino Hackathon Runner-up",
    award: "2nd Place / Runner-up",
    desc: "Recognized for developing an innovative healthcare computer vision prototype for real-time orthopedic angle estimation.",
    icon: "Trophy"
  },
  {
    title: "Google Developer Group / DSC Leadership",
    award: "Data Science Lead",
    desc: "Led hands-on data science study jams, workshops on Python analytics and Power BI, and guided student development projects.",
    icon: "Compass"
  },
  {
    title: "Vice President, Student Council",
    award: "Campus Executive Leadership",
    desc: "Orchestrated and managed 50+ campus-wide academic, cultural, and technical events; represented student body interests with university administration.",
    icon: "Users"
  },
  {
    title: "20+ Scholarly Research Publications",
    award: "Academic Research Excellence",
    desc: "Authored and co-authored over 20 research papers and systematic reviews indexed across Google Scholar, AIP, and AIMS Press.",
    icon: "BookOpen"
  }
];
