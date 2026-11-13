import React, { useState } from 'react';
import { Download, Printer, X, FileText, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';

export default function ResumeModal({ isOpen, onClose, initialTab = 'analyst' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between px-5 py-3 bg-slate-900 text-white border-b border-slate-800 gap-3">
          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-800 border border-slate-700">
            <button
              onClick={() => setActiveTab('analyst')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTab === 'analyst'
                  ? 'bg-sky-500 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Data Analyst Resume
            </button>
            <button
              onClick={() => setActiveTab('scientist')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTab === 'scientist'
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Data Scientist Resume
            </button>
          </div>
          
          {/* Actions: Print & Download PDF */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {activeTab === 'analyst' ? (
              <a
                href={profile.resumeDataAnalyst}
                download="Saniya_Saratkar_Data_Analyst_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF (DA)</span>
              </a>
            ) : (
              <a
                href={profile.resumeDataScientist}
                download="Saniya_Saratkar_Data_Scientist_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-sm transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF (DS)</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable 1-Page A4 Resume Sheet */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-slate-100 flex justify-center">
          <div 
            id="printable-resume" 
            className="w-full max-w-[800px] bg-white text-slate-900 p-6 sm:p-8 rounded-xl shadow-lg border border-slate-300 text-[12px] leading-relaxed font-sans"
          >
            {/* Header */}
            <div className="text-center pb-3 border-b-2 border-slate-900">
              <h1 className="text-2xl font-black tracking-tight text-slate-900 uppercase">
                Saniya Saratkar
              </h1>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-0.5">
                {activeTab === 'analyst' ? 'Data Analyst' : 'Data Scientist | AI/ML Engineer'}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-600 mt-2 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" /> Nagpur, Maharashtra, India
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-slate-500" /> +91-7276253304
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-500" /> {profile.email}
                </span>
                <span>&bull;</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                  LinkedIn
                </a>
                <span>&bull;</span>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                  GitHub
                </a>
                <span>&bull;</span>
                <a href={profile.googleScholar} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                  Google Scholar
                </a>
              </div>
            </div>

            {/* Content for Data Analyst Tab */}
            {activeTab === 'analyst' && (
              <div className="mt-4 space-y-4">
                {/* Summary */}
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5 mb-1.5">
                    Professional Summary
                  </h2>
                  <p className="text-slate-700 leading-snug">
                    Data Analyst skilled in SQL, Python, Excel and Power BI, with hands-on experience in data cleaning, EDA, dashboard development and business reporting. Experienced in identifying business trends, evaluating KPIs and translating data into actionable insights. Awarded an $8,500 UC Berkeley AI Scholarship.
                  </p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5 mb-1.5">
                    Technical Skills
                  </h2>
                  <ul className="space-y-1 text-slate-700">
                    <li><strong>SQL:</strong> Joins, CTEs, Window Functions, Aggregate Queries, Relational Schema Design.</li>
                    <li><strong>Python:</strong> Pandas, NumPy, Matplotlib, Seaborn, Automated Data Cleaning.</li>
                    <li><strong>BI &amp; Reporting:</strong> Power BI (DAX, Power Query, Data Modelling, KPI Dashboards), Tableau.</li>
                    <li><strong>Spreadsheets:</strong> Microsoft Excel (Pivot Tables, VLOOKUP, HLOOKUP, XLOOKUP, Charts), Google Sheets.</li>
                    <li><strong>Core Competencies:</strong> Data Cleaning, Validation, EDA, Statistical Analysis, KPI Reporting, Data Storytelling.</li>
                    <li><strong>Tools &amp; Workflow:</strong> MySQL, Jupyter, GitHub, Docker, n8n, Postman, JMeter.</li>
                  </ul>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5 mb-2">
                    Professional Experience
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>Deeptimaan Systems — Data Analyst Intern</span>
                        <span className="text-[11px] font-normal text-slate-600">Feb 2025 – Jan 2026 | Hyderabad, India</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 mt-1">
                        <li>Analysed 1M+ operational/customer records using Python and SQL to support executive decision-making.</li>
                        <li>Automated reporting workflows and reduced manual reporting effort by 21.25%.</li>
                        <li>Worked on CRM analytics, customer segmentation and social media sentiment analysis using ~50,000 records.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>IIT Kharagpur — Research Analyst Intern</span>
                        <span className="text-[11px] font-normal text-slate-600">Mar 2025 – Aug 2025 | Kharagpur, India</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 mt-1">
                        <li>Analysed 14+ years of ESG and financial data (~100,000 records across 50 companies) using Python and SQL.</li>
                        <li>Performed exploratory data analysis and time-series analysis and prepared reports and research documentation.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>ISRO NRSC — Project Intern</span>
                        <span className="text-[11px] font-normal text-slate-600">May 2025 – Oct 2025 | Hyderabad, India</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 mt-1">
                        <li>Analysed 200,000+ geospatial records using Google Earth Engine and Copernicus satellite telemetry.</li>
                        <li>Developed visualizations and an analytical prototype for research discussions.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Projects */}
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5 mb-1.5">
                    Selected Data Analytics Projects
                  </h2>
                  <div className="space-y-2">
                    <div>
                      <div className="font-bold text-slate-900">Olist Marketing Funnel &amp; Lead Conversion Analytics (MySQL, Python, Power BI)</div>
                      <p className="text-slate-700">Analysed 8,000 MQLs and 842 closed deals (10.5% conversion rate). Identified that search channels generated 55.3% of deals.</p>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Indian Railway Delay Analytics (Python, SQL, DuckDB, Power BI)</div>
                      <p className="text-slate-700">Analysed 1.5M simulated journeys across 45 attributes. Diagnosed 71.89% overall delay rate and regional disparities (ER: 89.32% vs SWR: 50.22%).</p>
                    </div>
                  </div>
                </div>

                {/* Education & Certifications */}
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5 mb-1">
                    Education &amp; Credentials
                  </h2>
                  <p className="text-slate-700">
                    <strong>B.Tech in Artificial Intelligence &amp; Data Science</strong> — AIHER, Nagpur (2022–2026) | CGPA: 8.35/10.0<br />
                    <strong>Certifications:</strong> Google Data Analytics Professional Certificate, UC Berkeley AI Internship ($8,500 Scholarship), Intel ML Training, 20+ Publications, GDG Data Science Head.
                  </p>
                </div>
              </div>
            )}

            {/* Content for Data Scientist Tab */}
            {activeTab === 'scientist' && (
              <div className="mt-4 space-y-4">
                {/* Summary */}
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5 mb-1.5">
                    Professional Summary
                  </h2>
                  <p className="text-slate-700 leading-snug">
                    Early-career Data Scientist and AI/ML practitioner with experience in Python, machine learning, statistical analysis, NLP, forecasting, computer vision and Generative AI. Worked on customer intelligence, ESG research, satellite data and applied AI projects. Awarded an $8,500 UC Berkeley AI Scholarship.
                  </p>
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5 mb-1.5">
                    Technical Skills
                  </h2>
                  <ul className="space-y-1 text-slate-700">
                    <li><strong>Languages &amp; Core:</strong> Python, SQL, C++, Statistical Analysis, Probability, Linear Algebra.</li>
                    <li><strong>Machine Learning:</strong> Scikit-Learn, Regression, Classification, Random Forest, XGBoost, Gradient Boosting, Model Evaluation.</li>
                    <li><strong>Deep Learning &amp; AI:</strong> PyTorch, CNN, LSTM, ResNet-MLP, OpenCV, MediaPipe Pose &amp; Hands.</li>
                    <li><strong>GenAI &amp; NLP:</strong> LLMs, RAG, Prompt Engineering, FastAPI, Qdrant Vector DB, Ollama, Tokenization, Sentiment NLP.</li>
                    <li><strong>Time-Series:</strong> ARIMA, SARIMA, Chronos Foundation Models, ADF Stationarity Tests, Econometrics.</li>
                    <li><strong>Infrastructure:</strong> Docker, Git/GitHub, Google Cloud Platform, Google Earth Engine, Linux.</li>
                  </ul>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5 mb-2">
                    Professional Experience
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>Deeptimaan Systems — Data Science Intern</span>
                        <span className="text-[11px] font-normal text-slate-600">Feb 2025 – Jan 2026 | Hyderabad, India</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 mt-1">
                        <li>Developed sentiment-analysis workflows using approximately 50,000 social media records.</li>
                        <li>Worked on CRM analytics, customer segmentation, NLP and customer intelligence.</li>
                        <li>Automated reporting and data validation pipelines via n8n and Docker, reducing manual effort by 21.25%.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>IIT Kharagpur — Research Analyst Intern</span>
                        <span className="text-[11px] font-normal text-slate-600">Mar 2025 – Aug 2025 | Kharagpur, India</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 mt-1">
                        <li>Analysed approximately 100,000 ESG and financial records covering 14 years and 50 companies.</li>
                        <li>Explored comparative forecasting workflows using ARIMA, SARIMA, LSTM and Chronos foundation models.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>UC Berkeley — Applied AI Intern</span>
                        <span className="text-[11px] font-normal text-slate-600">July 2025 | USA (Remote Fellowship)</span>
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700 mt-1">
                        <li>Explored LLM applications, prompt engineering and applied AI workflows.</li>
                        <li>Awarded an $8,500 merit-based UC Berkeley AI Internship Scholarship.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Projects */}
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5 mb-1.5">
                    Selected Data Science &amp; AI Projects
                  </h2>
                  <div className="space-y-2">
                    <div>
                      <div className="font-bold text-slate-900">SignAssistant: Real-Time Indian Sign Language Translation (PyTorch, MediaPipe, OpenCV)</div>
                      <p className="text-slate-700">Real-time gesture-to-speech engine achieving 99.61% DL accuracy at 31ms latency on consumer CPUs with trilingual voiceover.</p>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">MediEvidence: Clinical RAG Assistant (FastAPI, Qdrant, Ollama, PubMed)</div>
                      <p className="text-slate-700">Clinical retrieval-augmented assistant retrieving PubMed literature with 100% evidence-grounded responses and out-of-domain refusal.</p>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Bacterial Motion AI (Scikit-Learn, Random Forest, XGBoost)</div>
                      <p className="text-slate-700">Predicts 4 chemical stimuli from 2,400 swimming bacterial trajectories. Random Forest achieved 87.3% test accuracy and 0.977 ROC-AUC.</p>
                    </div>
                  </div>
                </div>

                {/* Education & Honors */}
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-0.5 mb-1">
                    Education &amp; Honors
                  </h2>
                  <p className="text-slate-700">
                    <strong>B.Tech in Artificial Intelligence &amp; Data Science</strong> — AIHER, Nagpur (2022–2026) | CGPA: 8.35/10.0<br />
                    <strong>Honors:</strong> $8,500 UC Berkeley AI Scholarship, 20+ Peer-Reviewed Publications on Google Scholar, Medico Engino Hackathon Runner-Up, GDG Data Science Head.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
