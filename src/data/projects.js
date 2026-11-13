export const projects = [
  // ==========================================
  // DATA ANALYTICS (EXACTLY 3)
  // ==========================================
  {
    id: "olist-marketing",
    category: "analytics",
    categoryLabel: "DATA ANALYTICS",
    title: "Olist Marketing Funnel & Lead Conversion Analytics",
    shortDescription: "Analysed 8,000 marketing-qualified leads and 842 closed deals to evaluate funnel efficiency, customer acquisition channels, and sales-cycle velocity.",
    technologies: ["MySQL", "Excel", "Power BI"],
    image: "./assets/project-images/olist-dashboard.png",
    github: "https://github.com/Saniya1312S/Olist-Marketing-Funnel-Lead-Conversion",
    demo: null,
    badge: "10.5% Conv • 55.3% Search Deals",
    funFact: "Search intent generated 55.3% of all closed deals, beating paid social channels by over 3x!",
    learningStage: "Stage 1: Business Intelligence & SQL",
    highlights: [
      "8,000 MQL leads analyzed with 842 closed deals",
      "10.5% overall lead-to-deal conversion rate",
      "Search (organic & paid) contributed 55.3% of all closed deals",
      "Identified that sales cycles varied by 40% across merchant business segments"
    ],
    problem: "E-commerce marketplace platforms incur high merchant acquisition costs without clear visibility into which marketing channels produce active sellers versus dropouts.",
    approach: "Joined MQL and closed-deals data in MySQL, cleaned nulls and timestamps, conducted cohort conversion tracking, and developed an executive Power BI dashboard.",
    tools: "MySQL 8, Microsoft Excel, Power BI.",
    result: "Demonstrated that search intent produces 55.3% of all merchant deals at a 10.5% conversion rate, recommending reallocation of marketing budget away from high-churn social traffic."
  },
  {
    id: "railway-operations",
    category: "analytics",
    categoryLabel: "DATA ANALYTICS",
    title: "Indian Railway Delay & Operations Analytics",
    shortDescription: "Analysed 1.5M simulated railway journeys across 45 operational attributes to identify transit bottlenecks, regional delay disparities, and seasonal disruptions.",
    technologies: ["Python", "SQL", "Excel", "Power BI"],
    accentTheme: { primary: "#0284c7", secondary: "#0d9488", amber: "#f59e0b" },
    image: "./assets/project-images/railway-dashboard.png",
    github: "https://github.com/Saniya1312S/Railway-Operations-Analytics",
    demo: null,
    badge: "1.5M Records • 71.89% Overall Delay",
    funFact: "Monsoon operations caused delay rates to skyrocket to 92.82% compared to 48.6% in summer!",
    learningStage: "Stage 1: Large-Scale Operational Analytics",
    isSimulatedDataset: true,
    highlights: [
      "1.5M simulated journeys analyzed across 45 operational attributes",
      "71.89% overall system-wide delay rate across the network",
      "Eastern Railway (ER): 89.32% delay rate vs South Western Railway (SWR): 50.22%",
      "Monsoon delay rate escalated to 92.82% vs 48.6% in summer operations"
    ],
    problem: "Regional railway networks face compounding train delays across shared tracks and complex junctions, requiring high-throughput analysis of multi-million journey logs.",
    approach: "Utilized SQL analytical pipelines for fast aggregation across 1.5M rows, performed seasonal time-series decomposition in Python & Excel, and designed an executive Power BI operations dashboard.",
    tools: "Python, SQL, Excel, Power BI.",
    result: "Isolated high-risk corridors (ER at 89.32% delay) and showed track congestion and monsoon weather (92.82% delay) as leading operational vulnerabilities."
  },
  {
    id: "card-fraud-risk",
    category: "analytics",
    categoryLabel: "DATA ANALYTICS",
    title: "Card Fraud Risk Analysis",
    shortDescription: "Analysed 283,726 payment transactions to uncover fraud concentration patterns, compare transaction amounts, and build an interactive fraud surveillance dashboard.",
    technologies: ["Python", "SQL", "Power BI"],
    accentTheme: { primary: "#dc2626", secondary: "#991b1b", highlight: "#f87171" },
    image: "./assets/project-images/fraud-dashboard.png",
    github: "https://github.com/Saniya1312S/Card-Fraud-Risk-Analysis",
    demo: null,
    badge: "283K Records • 0.167% Fraud Rate",
    funFact: "Even though fraud was only 0.167% of transactions, high-dollar fraud over 500 units accounted for 52.4% of total financial loss!",
    learningStage: "Stage 2: Risk Scoring & EDA",
    highlights: [
      "Audited 283,726 transactions with 473 verified fraud cases (0.167% fraud rate)",
      "0.233% total fraud value rate across transaction volumes",
      "Transactions over 500 currency units accounted for 52.4% of total fraud monetary exposure",
      "Quiet hours contained 21% of fraud cases within only 4% of total transaction volume"
    ],
    problem: "Severe class imbalance (0.167% fraud) makes detecting fraudulent transactions difficult without creating excessive false positives for legitimate cardholders.",
    approach: "Conducted statistical exploratory analysis in Python, engineered velocity and amount flags in SQL, and formulated risk-tiered surveillance in Power BI with KPI alerting.",
    tools: "Python, SQL, Power BI.",
    result: "Demonstrated that fraud volume and monetary exposure tell different stories; established tiered review thresholds that protect 52.4% of high-dollar exposure while minimizing user friction."
  },

  // ==========================================
  // DATA SCIENCE & AI (7 PROJECTS)
  // ==========================================
  {
    id: "sign-assistant",
    category: "ai",
    categoryLabel: "DATA SCIENCE & AI",
    title: "SignAssistant: Real-Time Sign Language Translation",
    shortDescription: "Real-time Indian Sign Language (ISL) gesture-to-text and speech translation application powered by MediaPipe hand tracking, deep learning, and multi-lingual voiceover.",
    technologies: ["Python", "MediaPipe", "CNN", "LSTM", "Deep Learning", "Random Forest", "API Integration"],
    image: "./assets/project-images/isl-translator.png",
    github: "https://github.com/Saniya1312S/isl-sign-language-app",
    demo: null,
    badge: "Real-Time Edge AI • Multi-Lingual Speech",
    funFact: "Runs smoothly at 25–30 FPS on a standard laptop CPU using a custom 226-dim geometric invariant hand vector!",
    learningStage: "Stage 3: Edge Computer Vision & Deep Learning",
    highlights: [
      "Real-time Indian Sign Language gesture-to-text and speech synthesis",
      "Robust 3D hand tracking with 226-dim geometric invariants via MediaPipe",
      "Ultra-low latency edge inference running smoothly at 25–30 FPS on consumer hardware",
      "Multi-lingual voice output in English, Hindi, and Marathi with API integration"
    ],
    problem: "Deaf and hard-of-hearing individuals encounter major communication barriers due to the lack of real-time Indian Sign Language interpreters and heavy hardware requirements.",
    approach: "Extracted 21 3D hand coordinates via MediaPipe Hands, engineered rotation and scale invariant features, and trained dual classical ML and deep learning architectures (CNN, LSTM, Random Forest).",
    tools: "Python, MediaPipe, CNN, LSTM, Deep Learning, Random Forest, API Integration.",
    result: "Delivered real-time gesture-to-speech translation on standard laptop CPUs with automated multi-lingual text-to-speech without requiring external discrete GPUs."
  },
  {
    id: "medievidence",
    category: "ai",
    categoryLabel: "DATA SCIENCE & AI",
    title: "MediEvidence: Clinical Evidence Assistant",
    shortDescription: "Retrieval-augmented clinical evidence assistant querying peer-reviewed biomedical literature with Qdrant vector database and local LLMs with PubMed citations.",
    technologies: ["Python", "FastAPI", "Qdrant", "Ollama", "RAG", "LLMs"],
    image: "./assets/project-images/medievidence-preview.png",
    github: "https://github.com/Saniya1312S/MediEvidence-Retrieval-Augmented-Clinical-Evidence-Assistant",
    demo: "https://saniya1312s.github.io/MediEvidence-Retrieval-Augmented-Clinical-Evidence-Assistant/",
    badge: "Clinical RAG • Qdrant Vector DB",
    funFact: "Includes strict deterministic refusal mechanisms so it refuses out-of-domain non-medical queries to avoid dangerous hallucinations!",
    learningStage: "Stage 4: Advanced GenAI & Vector RAG",
    highlights: [
      "100% evidence-grounded responses citing verified PubMed research and clinical trial endpoints",
      "Deterministic out-of-domain refusal mechanisms preventing misleading advice",
      "Interactive web application with streaming responses and citation inspection cards"
    ],
    problem: "Clinicians face information overload reviewing biomedical research, while generic commercial LLMs produce hazardous hallucinations without verifiable clinical citations.",
    approach: "Constructed an end-to-end RAG architecture with FastAPI, embedded PubMed literature into Qdrant vector database, and implemented strict prompt guardrails and cosine similarity thresholds.",
    tools: "Python, FastAPI, Qdrant, Ollama, RAG, LLMs.",
    result: "Achieved strictly grounded clinical answers with clickable PubMed DOI citations, completely refusing unverified non-clinical or ambiguous queries."
  },
  {
    id: "esg-forecasting",
    category: "ai",
    categoryLabel: "DATA SCIENCE & AI",
    title: "ESG & Financial Market Forecasting",
    shortDescription: "Empirical econometric and machine learning time-series research evaluating risk predictability across 14 years and 50 corporate entities.",
    technologies: ["Python", "Machine Learning", "ARIMA", "SARIMA", "LSTM", "GRU"],
    image: "./assets/project-images/esg-model-comparison.png",
    github: "https://github.com/Saniya1312S/ESG-Forecasting-ML",
    demo: null,
    badge: "100K Records • 14 Years • 50 Companies",
    funFact: "Tested 14 historical years of corporate disclosures with 24 passing unit tests comparing ARIMA against GRU networks!",
    learningStage: "Stage 3: Deep Time-Series Forecasting",
    highlights: [
      "Analyzed ~100,000 multi-attribute records across 14 years and 50 companies",
      "Identified statistically significant correlation between governance transparency and lower downside drawdown",
      "Benchmarked classical ARIMA/SARIMA against recurrent neural networks (LSTM, GRU)",
      "24 passing unit tests with reproducible statistical scripts"
    ],
    problem: "Determining whether corporate ESG ratings provide forward predictive signals or risk-mitigation benefits for institutional equity portfolios.",
    approach: "Standardized 14-year longitudinal disclosures, conducted ADF stationarity tests, and evaluated statistical time-series models against deep learning recurrent architectures (LSTM, GRU).",
    tools: "Python, Machine Learning, ARIMA, SARIMA, LSTM, GRU.",
    result: "Benchmarked time-series models across 50 enterprises, demonstrating that combined econometric and recurrent neural network models improve multi-horizon risk forecasting."
  },
  {
    id: "bac-motion-ai",
    category: "ai",
    categoryLabel: "DATA SCIENCE & AI",
    title: "Bacterial Motion AI",
    shortDescription: "Supervised machine learning pipeline predicting 4 chemical stimuli conditions directly from swimming bacterial (x, y) coordinates and trajectory features.",
    technologies: ["Python", "Scikit-Learn", "Random Forest", "XGBoost"],
    image: "./assets/project-images/bacmotion-models.png",
    github: "https://github.com/Saniya1312S/Bacterial-MotionAI-ML",
    demo: "https://saniya1312s.github.io/Bacterial-MotionAI-ML/",
    badge: "87.3% Test Acc • Published Research",
    paperLink: "https://scholar.google.com/citations?user=wh5CzfAAAAAJ&hl=en",
    paperTitle: "Computational Analysis of Bacterial Motility Trajectories under Chemical Stimuli using Machine Learning",
    funFact: "Predicted chemical conditions with 87.3% accuracy directly from raw swimming coordinates without manual human bias!",
    learningStage: "Stage 2: Supervised Machine Learning in Biophysics",
    highlights: [
      "Evaluated 2,400 trajectories across 4 experimental classes with 11 physical features",
      "Random Forest achieved 87.3% test accuracy (95% CI 84.2%–90.2%) and 0.977 ROC-AUC",
      "Published research paper connected to computational biophysics and machine learning",
      "Deployed interactive science explorer with live trajectory simulation"
    ],
    problem: "Distinguishing chemical chemotaxis from physical wall collisions in microscopic bacterial movement is challenging and prone to manual researcher bias.",
    approach: "Extracted 11 kinematic features (mean speed, directional persistence, turning angle variance) from raw coordinates and benchmarked 5 classifiers with leak-safe cross-validation.",
    tools: "Python, Scikit-Learn, Random Forest, XGBoost.",
    result: "Reached 87.3% test accuracy and 0.977 ROC-AUC, published research findings, and deployed an interactive client-side browser explorer with live simulation."
  },
  {
    id: "frozen-shoulder",
    category: "ai",
    categoryLabel: "DATA SCIENCE & AI",
    title: "Frozen Shoulder Angle Measurement with Computer Vision",
    shortDescription: "Biomechanical computer vision system tracking glenohumeral movement angles and rehabilitation recovery milestones from standard video cameras.",
    technologies: ["OpenCV", "MediaPipe Pose", "Python", "Streamlit"],
    image: "./assets/project-images/frozen-shoulder.png",
    github: "https://github.com/Saniya1312S/frozen_shoulder_angle",
    demo: "https://frozenshoulderangle.streamlit.app/",
    badge: "IEEE Published • Live Streamlit App",
    paperLink: "https://doi.org/10.1109/ICICT64420.2025.11005192",
    paperTitle: "IEEE ICICT 2025: Web-Based Application to Calculate the Angle of Frozen Shoulder Using AI and Machine Learning",
    funFact: "Achieved sub-2-degree measurement margin of error compared against physical clinical goniometers, now published in IEEE proceedings!",
    learningStage: "Stage 3: Applied Healthcare Computer Vision",
    highlights: [
      "Live interactive Streamlit application deployed at frozenshoulderangle.streamlit.app",
      "Sub-2-degree measurement margin of error compared against physical clinical goniometers",
      "Published in peer-reviewed IEEE ICICT proceedings (DOI: 10.1109/ICICT64420.2025.11005192)",
      "Automated range-of-motion recovery tracking across rehabilitation sessions"
    ],
    problem: "Adhesive capsulitis (frozen shoulder) rehabilitation progress is traditionally measured using manual physical goniometers, which suffer from high inter-examiner variability.",
    approach: "Leveraged OpenCV and MediaPipe Pose to capture 3D anatomical skeletal landmarks and calculated vector angles across shoulder, elbow, and hip vertices in real time.",
    tools: "OpenCV, MediaPipe Pose, Python, Streamlit.",
    result: "Validated sub-2-degree accuracy and published research findings in IEEE conference proceedings, providing an objective telehealth rehabilitation tracker with a live Streamlit demo."
  },
  {
    id: "stubble-burning",
    category: "ai",
    categoryLabel: "DATA SCIENCE & AI",
    title: "Agricultural Stubble Burning Remote Sensing & Analytics",
    shortDescription: "Environmental remote sensing pipeline analyzing agricultural crop residue fires across Northern India using satellite multi-spectral telemetry and GEE.",
    technologies: ["Google Earth Engine", "Python", "Copernicus Sentinel", "Folium"],
    image: "./assets/project-images/stubble-burning.jpg",
    github: "https://github.com/Saniya1312S/Stubble_burning_Final",
    demo: null,
    badge: "500 High-Risk Alerts • GEE Telemetry",
    funFact: "Monitored 500 active high-risk fire coordinates across agricultural belts using multi-spectral satellite thermal anomalies!",
    learningStage: "Stage 2: Satellite Remote Sensing & Geospatial Analytics",
    highlights: [
      "Processed multi-spectral thermal anomaly data across agricultural belts in Punjab and Haryana",
      "Built early warning geospatial risk dashboard monitoring 500 active high-risk burning hotspots",
      "Integrated automated email alerting with GeoJSON boundaries for environmental authorities"
    ],
    problem: "Post-harvest crop residue burning creates hazardous seasonal air pollution, requiring automated spatial-temporal hotspot monitoring and early alerting.",
    approach: "Extracted Copernicus Sentinel and thermal sensor telemetry via Google Earth Engine, calculated spatial cluster densities, and built an interactive Streamlit & Folium monitoring dashboard.",
    tools: "Google Earth Engine, Python, Copernicus Sentinel, Folium.",
    result: "Delivered an automated spatial monitoring dashboard that visualizes active thermal hotspots and triggers targeted stakeholder alerts."
  },
  {
    id: "intel-ai-form-assistant",
    category: "ai",
    categoryLabel: "DATA SCIENCE & AI",
    title: "Intel AI Form Filling Assistant for Indian Citizen Services",
    shortDescription: "AI-powered optical character recognition and entity extraction pipeline that processes scanned Indian citizen IDs (Aadhaar, PAN) and auto-populates government PDF application forms directly in-browser.",
    technologies: ["Python", "Flask", "OpenCV", "Tesseract OCR", "Tesseract.js", "pdf-lib", "Bootstrap 5"],
    image: "./assets/project-images/intel-ai-assistant.png",
    github: "https://github.com/Saniya1312S/intel-ai-form-filling-assistant",
    demo: "https://saniya1312s.github.io/intel-ai-form-filling-assistant/",
    badge: "OCR & PDF Automation • Live Demo",
    funFact: "Runs 100% in-browser using Tesseract.js and pdf-lib so zero personal citizen data ever leaves the user's local device!",
    learningStage: "Stage 3: Full-Stack OCR & Document AI",
    highlights: [
      "Automated document scanning, OCR text extraction, and entity recognition from Indian IDs (Aadhaar, PAN)",
      "Client-side private processing via Tesseract.js and pdf-lib with zero server data leakage",
      "Auto-populates standardized citizen service PDF application forms in under 3 seconds",
      "Working live demo running client-side on GitHub Pages"
    ],
    problem: "Citizens frequently struggle with complex, repetitive paper and PDF forms when applying for services, leading to entry errors and lengthy queues.",
    approach: "Constructed an automated OCR pipeline with OpenCV image thresholding, Tesseract text extraction, regex entity extraction for names, dates, and ID numbers, and programmatic PDF coordinate mapping.",
    tools: "Python, Flask, OpenCV, Tesseract OCR, Tesseract.js, pdf-lib, Bootstrap 5.",
    result: "Deployed an end-to-end browser demo enabling instant ID upload, automated verification, and 1-click filled PDF download."
  }
];
