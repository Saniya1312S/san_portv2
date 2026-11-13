import React from 'react';
import { Terminal, Sparkles, Code2, Layers, CheckCircle2, Database, Cpu, Compass, BookOpen } from 'lucide-react';

export default function CodeSection({ 
  variant = "recruiter", 
  title = "How I Approach Data & Technology",
  subtitle = "A glimpse into my analytical workflow." 
}) {

  // SQL variant for Data Analyst / Business Analytics profile
  if (variant === 'sql' || variant === 'da') {
    const sqlLines = [
      { num: 1, type: 'comment', text: '-- saniya_analytics.sql (Enterprise Cohort & Revenue Analytics)' },
      { num: 2, type: 'blank', text: '' },
      { num: 3, type: 'keyword', text: 'WITH monthly_user_activity AS (' },
      { num: 4, type: 'body', text: '    SELECT' },
      { num: 5, type: 'body', text: '        user_id,' },
      { num: 6, type: 'body', text: '        DATE_TRUNC(\'month\', transaction_date) AS cohort_month,' },
      { num: 7, type: 'body', text: '        SUM(amount) AS monthly_spend,' },
      { num: 8, type: 'body', text: '        COUNT(transaction_id) AS tx_frequency' },
      { num: 9, type: 'body', text: '    FROM enterprise_transactions' },
      { num: 10, type: 'body', text: '    WHERE is_fraud = FALSE' },
      { num: 11, type: 'body', text: '    GROUP BY user_id, cohort_month' },
      { num: 12, type: 'keyword', text: '), ranked_segments AS (' },
      { num: 13, type: 'body', text: '    SELECT' },
      { num: 14, type: 'body', text: '        user_id, cohort_month, monthly_spend,' },
      { num: 15, type: 'string', text: '        DENSE_RANK() OVER (PARTITION BY cohort_month ORDER BY monthly_spend DESC) AS spend_rank,' },
      { num: 16, type: 'string', text: '        ROUND(AVG(monthly_spend) OVER (PARTITION BY user_id ORDER BY cohort_month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW), 2) AS rolling_3m_avg' },
      { num: 17, type: 'body', text: '    FROM monthly_user_activity' },
      { num: 18, type: 'keyword', text: ')' },
      { num: 19, type: 'keyword', text: 'SELECT' },
      { num: 20, type: 'body', text: '    cohort_month,' },
      { num: 21, type: 'body', text: '    COUNT(DISTINCT user_id) AS active_accounts,' },
      { num: 22, type: 'body', text: '    ROUND(SUM(monthly_spend), 2) AS total_revenue,' },
      { num: 23, type: 'string', text: '    ROUND(AVG(rolling_3m_avg), 2) AS customer_ltv_proxy' },
      { num: 24, type: 'body', text: 'FROM ranked_segments' },
      { num: 25, type: 'keyword', text: 'GROUP BY cohort_month ORDER BY cohort_month DESC;' }
    ];

    return (
      <section className="py-12 border-b border-slate-800/80 bg-gradient-to-b from-[#090B12] via-[#0d101d] to-[#090B12] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30 uppercase tracking-widest">
              <Database className="w-3.5 h-3.5" />
              <span>SQL ANALYTICAL PIPELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clean CTEs, window functions, and business cohort modeling in SQL.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl bg-[#0b0e17] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
            <div className="flex items-center justify-between px-4 py-3 bg-[#121624] border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-sky-400 font-sans font-semibold">saniya_analytics.sql</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>PostgreSQL 16</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-x-auto select-none space-y-0.5 bg-[#0b0e17]">
              {sqlLines.map((line) => (
                <div key={line.num} className="flex items-start gap-4">
                  <span className="text-[11px] text-slate-600 select-none w-6 text-right font-mono shrink-0">
                    {line.num}
                  </span>
                  <div className="flex-1 font-mono text-xs sm:text-sm">
                    {line.type === 'comment' && <span className="text-slate-500 italic">{line.text}</span>}
                    {line.type === 'keyword' && <span className="text-sky-400 font-bold">{line.text}</span>}
                    {line.type === 'string' && <span className="text-amber-300">{line.text}</span>}
                    {line.type === 'body' && <span className="text-slate-200">{line.text}</span>}
                    {line.type === 'blank' && <span>&nbsp;</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-2 bg-[#121624] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>UTF-8 &bull; 25 lines &bull; SQL</span>
              <span className="text-sky-400 font-bold">CTEs &rarr; Window Functions &rarr; Executive Aggregation</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Python DS/ML/AI variant for Data Science & AI profile
  if (variant === 'ds' || variant === 'ai') {
    const dsLines = [
      { num: 1, type: 'comment', text: '# saniya_ml_pipeline.py (Biomedical RAG & Predictive Modeling)' },
      { num: 2, type: 'blank', text: '' },
      { num: 3, type: 'keyword', text: 'import torch' },
      { num: 4, type: 'keyword', text: 'from qdrant_client import QdrantClient' },
      { num: 5, type: 'keyword', text: 'from sklearn.metrics import roc_auc_score, f1_score' },
      { num: 6, type: 'blank', text: '' },
      { num: 7, type: 'class', text: 'class ClinicalEvidencePipeline:' },
      { num: 8, type: 'def', text: '    def __init__(self, vector_db: QdrantClient):' },
      { num: 9, type: 'body', text: '        self.client = vector_db' },
      { num: 10, type: 'body', text: '        self.min_similarity_threshold = 0.88' },
      { num: 11, type: 'body', text: '        self.device = "cuda" if torch.cuda.is_available() else "cpu"' },
      { num: 12, type: 'blank', text: '' },
      { num: 13, type: 'def', text: '    def query_with_guardrails(self, clinical_prompt: str) -> dict:' },
      { num: 14, type: 'body', text: '        query_vector = self.embed(clinical_prompt)' },
      { num: 15, type: 'body', text: '        hits = self.client.search(collection="pubmed_literature", query=query_vector, limit=3)' },
      { num: 16, type: 'blank', text: '' },
      { num: 17, type: 'comment', text: '        # Strict deterministic refusal to prevent medical hallucination' },
      { num: 18, type: 'keyword', text: '        if not hits or hits[0].score < self.min_similarity_threshold:' },
      { num: 19, type: 'return', text: '            return {"status": "REFUSED", "reason": "No peer-reviewed PubMed evidence verified"}' },
      { num: 20, type: 'blank', text: '' },
      { num: 21, type: 'return', text: '        return {"evidence": hits[0].payload, "doi": hits[0].payload["doi"], "confidence": hits[0].score}' }
    ];

    return (
      <section className="py-12 border-b border-slate-800/80 bg-gradient-to-b from-[#090B12] via-[#0d101d] to-[#090B12] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              <span>AI &amp; MACHINE LEARNING PIPELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              PyTorch, Vector Search with Qdrant, and grounded clinical RAG guardrails.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl bg-[#0b0e17] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
            <div className="flex items-center justify-between px-4 py-3 bg-[#121624] border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-purple-400 font-sans font-semibold">saniya_ml_pipeline.py</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span>PyTorch 2.3 &bull; Qdrant RAG</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-x-auto select-none space-y-0.5 bg-[#0b0e17]">
              {dsLines.map((line) => (
                <div key={line.num} className="flex items-start gap-4">
                  <span className="text-[11px] text-slate-600 select-none w-6 text-right font-mono shrink-0">
                    {line.num}
                  </span>
                  <div className="flex-1 font-mono text-xs sm:text-sm">
                    {line.type === 'comment' && <span className="text-slate-500 italic">{line.text}</span>}
                    {line.type === 'keyword' && <span className="text-purple-400 font-bold">{line.text}</span>}
                    {line.type === 'class' && <span className="text-yellow-300 font-bold">{line.text}</span>}
                    {line.type === 'def' && <span className="text-sky-300 font-semibold">{line.text}</span>}
                    {line.type === 'return' && <span className="text-emerald-300 font-semibold">{line.text}</span>}
                    {line.type === 'body' && <span className="text-slate-200">{line.text}</span>}
                    {line.type === 'blank' && <span>&nbsp;</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4 py-2 bg-[#121624] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>UTF-8 &bull; 21 lines &bull; Python</span>
              <span className="text-purple-400 font-bold">Embed &rarr; Guardrail Check &rarr; Grounded Inference</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default Recruiter / General Workflow variant
  const codeLines = [
    { num: 1, type: 'comment', text: '# saniya_workflow.py' },
    { num: 2, type: 'blank', text: '' },
    { num: 3, type: 'class', text: 'class SaniyaAI:' },
    { num: 4, type: 'blank', text: '' },
    { num: 5, type: 'indent-prop', text: '    domains = [' },
    { num: 6, type: 'string', text: '        "Business Analytics",' },
    { num: 7, type: 'string', text: '        "Finance & ESG",' },
    { num: 8, type: 'string', text: '        "Healthcare Informatics",' },
    { num: 9, type: 'string', text: '        "Environmental Remote Sensing",' },
    { num: 10, type: 'string', text: '        "Artificial Intelligence"' },
    { num: 11, type: 'indent-prop', text: '    ]' },
    { num: 12, type: 'blank', text: '' },
    { num: 13, type: 'def', text: '    def transform(self, raw_data):' },
    { num: 14, type: 'blank', text: '' },
    { num: 15, type: 'body', text: '        clean_data = self.validate(raw_data)' },
    { num: 16, type: 'body', text: '        patterns = self.analyse(clean_data)' },
    { num: 17, type: 'body', text: '        predictions = self.model(patterns)' },
    { num: 18, type: 'body', text: '        insights = self.visualise(predictions)' },
    { num: 19, type: 'blank', text: '' },
    { num: 20, type: 'return', text: '        return self.create_impact(insights)' }
  ];

  return (
    <section className="py-12 border-b border-slate-800/80 bg-gradient-to-b from-[#090B12] via-[#0d101d] to-[#090B12] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/10 text-red-400 border border-red-500/30 uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" />
            <span>ANALYTICAL BLUEPRINT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl bg-[#0b0e17] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
          <div className="flex items-center justify-between px-4 py-3 bg-[#121624] border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-slate-400 font-sans">saniya_workflow.py</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Python 3.11</span>
            </div>
          </div>

          <div className="p-4 sm:p-6 overflow-x-auto select-none space-y-0.5 bg-[#0b0e17]">
            {codeLines.map((line) => (
              <div key={line.num} className="flex items-start gap-4">
                <span className="text-[11px] text-slate-600 select-none w-6 text-right font-mono shrink-0">
                  {line.num}
                </span>
                <div className="flex-1 font-mono text-xs sm:text-sm">
                  {line.type === 'comment' && <span className="text-slate-500 italic">{line.text}</span>}
                  {line.type === 'class' && (
                    <span>
                      <span className="text-purple-400 font-bold">class </span>
                      <span className="text-yellow-300 font-bold">SaniyaAI</span>
                      <span className="text-slate-300">:</span>
                    </span>
                  )}
                  {line.type === 'indent-prop' && <span className="text-sky-300 pl-4">{line.text}</span>}
                  {line.type === 'string' && <span className="text-emerald-300 pl-8">{line.text}</span>}
                  {line.type === 'def' && (
                    <span className="pl-4">
                      <span className="text-purple-400 font-bold">def </span>
                      <span className="text-blue-400 font-bold">transform</span>
                      <span className="text-slate-300">(self, raw_data):</span>
                    </span>
                  )}
                  {line.type === 'body' && <span className="text-slate-200 pl-8">{line.text}</span>}
                  {line.type === 'return' && (
                    <span className="pl-8">
                      <span className="text-purple-400 font-bold">return </span>
                      <span className="text-sky-300 font-semibold">self.create_impact(insights)</span>
                      <span className="inline-block w-1.5 h-3.5 bg-sky-400 ml-1 animate-pulse" />
                    </span>
                  )}
                  {line.type === 'blank' && <span>&nbsp;</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-2 bg-[#121624] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>UTF-8 &bull; 20 lines &bull; Python</span>
            <span className="text-emerald-400 font-bold">Validate &rarr; Analyse &rarr; Model &rarr; Visualise &rarr; Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
