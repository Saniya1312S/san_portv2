# Saniya Saratkar — Professional Portfolio Website 2.0
> **Netflix-Inspired Entry × Minimal Professional Portfolio × Data Storytelling**

[![Live Deployment](https://img.shields.io/badge/GitHub%20Pages-Live%20Deploy-success)](https://saniya1312s.github.io/Saniya-Portfolio-/)
![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen)
![Resumes](https://img.shields.io/badge/Resumes-2%20Separate%20ATS%20PDFs-red)

A complete, responsive, personal portfolio website built for **Saniya Saratkar** (Data Analyst | Data Scientist | AI/ML Engineer), combining:
1. **A Netflix-Inspired Profile Selection Entry:** ("Who's Watching?") featuring exactly 5 personas: *Recruiter*, *Data Analyst*, *Data Science & AI*, *Explorer*, and *Researcher*.
2. **A Minimal, Modern Professional Showcase:** Concise, recruiter-friendly content with zero long paragraphs, zero fake percentages, and balanced visual hierarchy.
3. **A Chronological Professional Roadmap:** 5 industry internships and research appointments ending with Ignite Center as the final experience.
4. **Curated 9-Project Explorer:** Exactly 3 Data Analytics projects + 6 Data Science & AI projects with real screenshots, quantified metrics, and GitHub links (no dates/years).
5. **Two Separate 1-Page ATS Resumes:** Dedicated Data Analyst and Data Scientist resumes available as printable, selectable PDFs and editable HTML source files.
6. **Scholarly Research Library:** 20+ verified publications indexed on Google Scholar (`wh5CzfAAAAAJ`).

---


---

## 🎨 Visual Identity & Architecture

| Aspect | Specification |
|---|---|
| **Palette** | Background: `#090B12`, Cards: `#111827` / `#151B2B`, Accents: `#E50914` (Netflix Red), `#38BDF8` (Cyan), `#8B5CF6` (Violet) |
| **Typography** | Inter / Manrope for readable body copy; JetBrains Mono for small code tags & metrics |
| **Entry Screen** | Netflix-style "Who's Watching?" profile selector (5 personas) |
| **Hero Snapshot** | Strictly 5 core items: SQL, Python, Power BI, Excel, Machine Learning |
| **Roadmap Order** | Deeptimaan Systems → IIT Kharagpur → ISRO NRSC → UC Berkeley → Ignite Center (Final) |
| **Project Explorer** | 9 Total: 3 Data Analytics + 6 Data Science & AI (Filters: ALL PROJECTS, DATA ANALYTICS, DATA SCIENCE & AI) |
| **Skills Section** | Workflow (Collect → Clean → Analyse → Build → Visualise → Communicate) + 5 Skill Groups |
| **Resumes** | 2 Separate 1-page A4 ATS PDFs: `Saniya_Saratkar_Data_Analyst_Resume.pdf` & `Saniya_Saratkar_Data_Scientist_Resume.pdf` |

---

## 📊 Selected 9 Projects & Excluded Candidate Report

### 1. Data Analytics (Exactly 3)
1. **Olist Marketing Funnel & Lead Conversion Analytics:** (MySQL, Python, Excel, Power BI) — 8,000 MQLs, 842 closed deals, 10.5% conversion rate, Search generated 55.3% of deals.
2. **Indian Railway Operations Analytics:** (Python, SQL, DuckDB, Power BI) — 1.5M simulated journey records across 45 attributes, 71.89% overall delay rate, ER 89.32% vs SWR 50.22% (clearly labeled simulated).
3. **Card Fraud Risk Analysis:** (Python, SQL, Power BI, DAX) — 283,726 transactions, 473 fraud cases (0.167% fraud rate), 52.4% of fraud value in transactions >500.

### 2. Data Science & AI (Exactly 6)
1. **SignAssistant:** (MediaPipe, PyTorch ResNet-MLP, Scikit-Learn, OpenCV) — Real-time gesture-to-speech translation with 99.61% DL accuracy at 31ms edge latency.
2. **MediEvidence:** (FastAPI, Qdrant Vector DB, Ollama, PubMed RAG) — Clinical RAG assistant with 100% evidence-grounded responses and out-of-domain refusal.
3. **Bacterial Motion AI:** (Python, Scikit-Learn, Random Forest, XGBoost) — Motility classification across 2,400 trajectories with 87.3% test accuracy and 0.977 ROC-AUC.
4. **Frozen Shoulder Angle Measurement:** (OpenCV, MediaPipe Pose, Streamlit) — Range-of-motion computer vision tracking published in IEEE conference proceedings.
5. **ESG & Financial Market Forecasting:** (Python, statsmodels, LSTM, Amazon Chronos) — 14-year longitudinal analysis across 50 companies with comparative time-series benchmarks.
6. **Agricultural Stubble Burning Remote Sensing:** (Google Earth Engine, Copernicus Sentinel, Python, Folium) — Multi-spectral satellite telemetry and H3 geospatial early warning risk bands.


---

## 🛠️ How to Run Locally

```bash
# 1. Clone repository
git clone https://github.com/Saniya1312S/Saniya-Portfolio-.git
cd Saniya-Portfolio-

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev -- --host 127.0.0.1 --port 5173

# 4. Run production build
npm run build
```

---

## 🚀 GitHub Pages Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. When pushed to the `main` branch, it automatically builds the Vite application and deploys it to GitHub Pages.

1. In your GitHub repository settings, navigate to **Pages**.
2. Under **Build and deployment**, set the source to **GitHub Actions**.
3. Push changes to `main` — deployment will execute and publish the site to `https://saniya1312s.github.io/Saniya-Portfolio-/`.
