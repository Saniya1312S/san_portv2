import React from 'react';
import NetflixRow from '../components/NetflixRow';
import NetflixCard from '../components/NetflixCard';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import { publications } from '../data/publications';
import { skillClusters } from '../data/skills';
import { certifications, achievements } from '../data/certifications';
import { profile } from '../data/profile';

export default function NetflixRowsContainer({
  currentPersona,
  onSelectProject,
  onOpenRecruiterView,
  onOpenResume,
  onOpenResearchLibrary
}) {
  // Define row content generators
  const renderRow1TopPicks = () => (
    <NetflixRow
      key="row-top-picks"
      title="ROW 1 — RECRUITER'S TOP PICKS"
      subtitle="Curated executive highlights: Core credentials, top case studies, and primary research"
      badge="Top Recommendations"
    >
      <NetflixCard
        title="Professional Executive Overview"
        category="Profile Summary"
        badge="B.Tech CGPA 8.35"
        desc="B.Tech graduate in AI & Data Science with 5 verified internships across data analytics, research, and machine learning."
        onClick={onOpenRecruiterView}
        accentColor="#E50914"
        actionLabel="Open 30s View"
        isSpecial={true}
      />

      <NetflixCard
        title="Deeptimaan Systems: CRM & Automation"
        category="Internship Highlight"
        badge="21.25% Effort Saved"
        desc="Analyzed 1M+ customer records via SQL, built sentiment analysis pipeline, and automated reporting via n8n & Docker."
        onClick={() => {
          const el = document.getElementById('experience');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        accentColor="#E50914"
        actionLabel="Explore Timeline"
      />

      <NetflixCard
        title="Olist Marketing Funnel & Lead Conversion"
        category="Business Analytics"
        badge="10.5% Conversion Rate"
        desc="Modeled 8,000 MQLs; discovered Search generated 55.3% of closed deals; built Power BI executive dashboard."
        onClick={() => onSelectProject(projects.find(p => p.id === 'olist-marketing'))}
        accentColor="#3b82f6"
        actionLabel="Inspect Case Study"
      />

      <NetflixCard
        title="SignAssistant: Indian Sign Language"
        category="AI & Machine Learning"
        badge="99.61% DL Accuracy"
        desc="Real-time edge gesture-to-speech translation with 226-dim geometric invariants and 31ms edge CPU latency."
        image="./assets/project-images/isl-translator.png"
        onClick={() => onSelectProject(projects.find(p => p.id === 'sign-assistant'))}
        accentColor="#8b5cf6"
        actionLabel="Inspect Case Study"
      />

      <NetflixCard
        title="Download 1-Page ATS Resume"
        category="Official Document"
        badge="DA & BA Formatted"
        desc="Recruiter-formatted 1-page PDF ready for immediate ATS parsing, review, printing, or download."
        onClick={onOpenResume}
        accentColor="#10b981"
        actionLabel="Preview Resume"
        isSpecial={true}
      />

      <NetflixCard
        title="20+ Scholarly Publications"
        category="Google Scholar Hub"
        badge="20+ Indexed Papers"
        desc="Co-author of research papers across 5G/6G wireless AI, healthcare HCI, and digital twin frameworks."
        onClick={onOpenResearchLibrary}
        accentColor="#06b6d4"
        actionLabel="Browse Library"
      />
    </NetflixRow>
  );

  const renderRow2DataAnalytics = () => (
    <NetflixRow
      key="row-analytics"
      title="ROW 2 — DATA ANALYTICS & BI COLLECTION"
      subtitle="SQL querying, exploratory data analysis, DuckDB in-memory pipelines, and executive dashboards"
      badge="Business Intelligence"
    >
      {projects
        .filter(p => p.categories.includes("Data Analytics") || p.categories.includes("Business Analytics"))
        .map((proj) => (
          <NetflixCard
            key={proj.id}
            title={proj.title}
            category={proj.primaryCategory}
            badge={proj.badge}
            desc={proj.summary}
            image={proj.image}
            onClick={() => onSelectProject(proj)}
            accentColor="#3b82f6"
            actionLabel="View Case Study"
          />
        ))}
      
      <NetflixCard
        title="Executive Power BI Dashboards"
        category="BI Specialization"
        badge="DAX & Power Query"
        desc="Semantic star-schema modeling, calculated measures, threshold alerts, and automated distribution."
        onClick={() => {
          const el = document.getElementById('skills');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        accentColor="#3b82f6"
        actionLabel="View BI Skills"
      />
    </NetflixRow>
  );

  const renderRow3AIandML = () => (
    <NetflixRow
      key="row-ai-ml"
      title="ROW 3 — AI & MACHINE LEARNING COLLECTION"
      subtitle="Custom neural networks, computer vision, clinical RAG architectures, and leak-safe ML pipelines"
      badge="Intelligent Systems"
    >
      {projects
        .filter(p => p.categories.includes("AI & Machine Learning") || p.categories.includes("Machine Learning") || p.categories.includes("Data Science"))
        .map((proj) => (
          <NetflixCard
            key={proj.id}
            title={proj.title}
            category={proj.primaryCategory}
            badge={proj.badge}
            desc={proj.summary}
            image={proj.image}
            onClick={() => onSelectProject(proj)}
            accentColor="#8b5cf6"
            actionLabel="View Case Study"
          />
        ))}
    </NetflixRow>
  );

  const renderRow4Research = () => (
    <NetflixRow
      key="row-research"
      title="ROW 4 — RESEARCH & INNOVATION"
      subtitle="Peer-reviewed scholarly publications, systematic reviews, and experimental preprints"
      badge="Academic Output"
    >
      {publications.slice(0, 6).map((pub) => (
        <NetflixCard
          key={pub.id}
          title={pub.title}
          category={pub.category}
          badge={`${pub.type} • ${pub.year}`}
          desc={pub.abstract}
          onClick={onOpenResearchLibrary}
          accentColor="#06b6d4"
          actionLabel="View Publication"
        />
      ))}

      <NetflixCard
        title="View All 20+ Publications"
        category="Full Research Library"
        badge="Search & Filter"
        desc="Explore Saniya's complete publication portfolio indexed across Google Scholar, AIP, and AIMS Bioengineering."
        onClick={onOpenResearchLibrary}
        accentColor="#06b6d4"
        actionLabel="Launch Library"
        isSpecial={true}
      />
    </NetflixRow>
  );

  const renderRow5Journey = () => (
    <NetflixRow
      key="row-journey"
      title="ROW 5 — PROFESSIONAL JOURNEY"
      subtitle="Chronological internships and research exposure across industry leaders and national institutes"
      badge="5 Practical Roles"
    >
      {experiences.map((exp) => (
        <NetflixCard
          key={exp.id}
          title={`${exp.company} — ${exp.role}`}
          category={exp.type}
          badge={exp.period.split('–')[0].trim()}
          desc={exp.context}
          onClick={() => {
            const el = document.getElementById('experience');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          accentColor={exp.color}
          actionLabel="View Contributions"
        />
      ))}
    </NetflixRow>
  );

  const renderRow6Skills = () => (
    <NetflixRow
      key="row-skills"
      title="ROW 6 — SKILLS & TECHNOLOGY STACKS"
      subtitle="Verified competencies across data pipelines, programming, business intelligence, and ML"
      badge="Zero Fake %"
    >
      {skillClusters.map((cluster) => (
        <NetflixCard
          key={cluster.id}
          title={cluster.title}
          category={`${cluster.skills.length} Verified Tools`}
          badge="Production Stack"
          desc={cluster.skills.slice(0, 6).join(", ") + "..."}
          onClick={() => {
            const el = document.getElementById('skills');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          accentColor={cluster.color}
          actionLabel="View Full Matrix"
        />
      ))}
    </NetflixRow>
  );

  const renderRow7Certifications = () => (
    <NetflixRow
      key="row-certifications"
      title="ROW 7 — CERTIFICATIONS & HONORS"
      subtitle="Industry credentials from Google, UC Berkeley, Intel, Johns Hopkins, and campus honors"
      badge="Verified Credentials"
    >
      {certifications.slice(0, 5).map((cert) => (
        <NetflixCard
          key={cert.id}
          title={cert.title}
          category={cert.issuer}
          badge={cert.badge}
          desc={cert.skills}
          onClick={() => {
            const el = document.getElementById('education');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          accentColor="#f59e0b"
          actionLabel="View Credential"
        />
      ))}

      {achievements.map((achieve) => (
        <NetflixCard
          key={achieve.id}
          title={achieve.title}
          category="Leadership & Honors"
          badge={achieve.award}
          desc={achieve.desc}
          onClick={() => {
            const el = document.getElementById('education');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          accentColor={achieve.color}
          actionLabel="View Honor"
        />
      ))}
    </NetflixRow>
  );

  const renderRow8ExploreMore = () => (
    <NetflixRow
      key="row-explore"
      title="ROW 8 — EXPLORE MORE &amp; CONNECT"
      subtitle="Direct contact channels, verified repositories, Google Scholar profile, and resume download"
      badge="Direct Action"
    >
      <NetflixCard
        title="Schedule Interview or Discussion"
        category="Direct Outreach"
        badge="Quick Response"
        desc="Saniya is available for entry-level Data Analyst, Business Analyst, and AI/ML Engineer opportunities."
        onClick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        accentColor="#E50914"
        actionLabel="Send Email"
        isSpecial={true}
      />

      <NetflixCard
        title="Explore GitHub Repositories"
        category="Source Code & CI"
        badge="10 Repositories"
        desc="Inspect all 10 open-source repositories, automated test suites, and clean documentation."
        onClick={() => window.open(profile.github, '_blank')}
        accentColor="#8b5cf6"
        actionLabel="Open GitHub"
      />

      <NetflixCard
        title="Connect on LinkedIn"
        category="Professional Network"
        badge="Verified Identity"
        desc="View professional endorsements, recommendations, and recent technical articles."
        onClick={() => window.open(profile.linkedin, '_blank')}
        accentColor="#3b82f6"
        actionLabel="Open LinkedIn"
      />

      <NetflixCard
        title="Google Scholar Citations"
        category="Academic Research"
        badge="Citations Profile"
        desc="View paper metrics, citation indices, and peer co-author collaborations."
        onClick={() => window.open(profile.googleScholar, '_blank')}
        accentColor="#06b6d4"
        actionLabel="Open Scholar"
      />
    </NetflixRow>
  );

  // Persona personalized row ordering:
  const getOrderedRows = () => {
    switch (currentPersona) {
      case 'analytics':
        return [
          renderRow2DataAnalytics(),
          renderRow1TopPicks(),
          renderRow5Journey(),
          renderRow6Skills(),
          renderRow3AIandML(),
          renderRow4Research(),
          renderRow7Certifications(),
          renderRow8ExploreMore()
        ];
      case 'ai':
        return [
          renderRow3AIandML(),
          renderRow1TopPicks(),
          renderRow4Research(),
          renderRow5Journey(),
          renderRow6Skills(),
          renderRow2DataAnalytics(),
          renderRow7Certifications(),
          renderRow8ExploreMore()
        ];
      case 'researcher':
        return [
          renderRow4Research(),
          renderRow1TopPicks(),
          renderRow3AIandML(),
          renderRow5Journey(),
          renderRow2DataAnalytics(),
          renderRow6Skills(),
          renderRow7Certifications(),
          renderRow8ExploreMore()
        ];
      case 'recruiter':
      default:
        return [
          renderRow1TopPicks(),
          renderRow2DataAnalytics(),
          renderRow3AIandML(),
          renderRow4Research(),
          renderRow5Journey(),
          renderRow6Skills(),
          renderRow7Certifications(),
          renderRow8ExploreMore()
        ];
    }
  };

  return (
    <section id="top-picks" className="py-12 bg-[#090b14] relative">
      {getOrderedRows()}
    </section>
  );
}
