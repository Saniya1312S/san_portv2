import React, { useState, useEffect } from 'react';

export default function CodeHeroPanel() {
  const codeLines = [
    { type: 'comment', text: '# saniya_workflow.py' },
    { type: 'blank', text: '' },
    { type: 'class', text: 'class SaniyaAI:' },
    { type: 'indent-prop', text: '    domains = [' },
    { type: 'string', text: '        "Business Analytics",' },
    { type: 'string', text: '        "Finance",' },
    { type: 'string', text: '        "Healthcare",' },
    { type: 'string', text: '        "Environmental Research",' },
    { type: 'string', text: '        "Artificial Intelligence"' },
    { type: 'indent-prop', text: '    ]' },
    { type: 'blank', text: '' },
    { type: 'def', text: '    def transform(self, raw_data):' },
    { type: 'body', text: '        clean_data = self.validate(raw_data)' },
    { type: 'body', text: '        patterns = self.analyse(clean_data)' },
    { type: 'body', text: '        predictions = self.model(patterns)' },
    { type: 'body', text: '        insights = self.visualise(predictions)' },
    { type: 'blank', text: '' },
    { type: 'return', text: '        return self.create_impact(insights)' }
  ];

  const [visibleCount, setVisibleCount] = useState(codeLines.length);

  return (
    <div className="w-full max-w-md rounded-2xl bg-[#0d1117] border border-slate-800 shadow-2xl overflow-hidden font-mono text-[11px] leading-relaxed text-slate-300">
      {/* Code Editor Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-slate-800">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-[10px] text-slate-400 font-sans">saniya_workflow.py</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-mono">Python 3.11</span>
      </div>

      {/* Code Body with Syntax Highlighting */}
      <div className="p-4 space-y-0.5 overflow-x-auto select-none">
        {codeLines.slice(0, visibleCount).map((line, idx) => {
          let lineContent = line.text;

          if (line.type === 'comment') {
            return <div key={idx} className="text-slate-500 italic">{lineContent}</div>;
          }
          if (line.type === 'class') {
            return (
              <div key={idx}>
                <span className="text-purple-400 font-bold">class </span>
                <span className="text-yellow-300 font-bold">SaniyaAI</span>
                <span className="text-slate-300">:</span>
              </div>
            );
          }
          if (line.type === 'string') {
            return (
              <div key={idx} className="pl-6 text-emerald-300">
                {lineContent}
              </div>
            );
          }
          if (line.type === 'def') {
            return (
              <div key={idx} className="pl-4">
                <span className="text-purple-400 font-bold">def </span>
                <span className="text-blue-400 font-bold">transform</span>
                <span className="text-slate-300">(self, raw_data):</span>
              </div>
            );
          }
          if (line.type === 'return') {
            return (
              <div key={idx} className="pl-8">
                <span className="text-purple-400 font-bold">return </span>
                <span className="text-sky-300 font-medium">self.create_impact(insights)</span>
              </div>
            );
          }

          return (
            <div key={idx} className={line.text.startsWith('    ') ? 'pl-4' : ''}>
              {lineContent}
            </div>
          );
        })}
      </div>

      {/* Editor Footer Status Bar */}
      <div className="px-4 py-1.5 bg-[#161b22] border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Production Pipeline</span>
        </span>
        <span>UTF-8 • LF</span>
      </div>
    </div>
  );
}
