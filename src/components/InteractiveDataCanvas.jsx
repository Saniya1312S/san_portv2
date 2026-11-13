import React, { useEffect, useRef } from 'react';

export default function InteractiveDataCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes configuration
    const nodeCount = 38;
    const nodes = [];
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#60a5fa'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        isMetricNode: i % 7 === 0
      });
    }

    let mouse = { x: null, y: null, maxDist: 120 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const maxDistance = 110;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background telemetry grid lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        // Bounce
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.maxDist) {
            const force = (mouse.maxDist - dist) / mouse.maxDist;
            node.x -= (dx / dist) * force * 1.5;
            node.y -= (dy / dist) * force * 1.5;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.45;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulsingRadius = node.radius + Math.sin(node.pulse) * 0.8;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulsingRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = node.color === '#8b5cf6' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(59, 130, 246, 0.15)';
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulsingRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Metric label on special nodes
        if (node.isMetricNode) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulsingRadius + 4, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden glass-panel border border-slate-700/50 dark:border-navy-700/60 shadow-2xl flex flex-col justify-between p-6">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair z-0" />
      
      {/* Top telemetry bar */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-400 bg-navy-950/60 dark:bg-navy-900/70 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700/40">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="font-semibold text-slate-200">ANALYTICS ENGINE</span>
        </div>
        <span className="text-cyan-400 font-semibold tracking-wider">LIVE TELEMETRY</span>
      </div>

      {/* Real-time floating KPI cards */}
      <div className="relative z-10 grid grid-cols-2 gap-3 my-auto pointer-events-none">
        <div className="glass-panel p-3.5 rounded-xl border border-blue-500/30 bg-navy-900/80 dark:bg-navy-900/80 backdrop-blur-md">
          <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">Model Accuracy</div>
          <div className="text-2xl font-bold text-white mt-0.5 font-mono">99.61%</div>
          <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
            <span className="text-emerald-400">↑ 0.8%</span> ResNet-MLP Deep Learning
          </div>
        </div>

        <div className="glass-panel p-3.5 rounded-xl border border-violet-500/30 bg-navy-900/80 dark:bg-navy-900/80 backdrop-blur-md">
          <div className="text-[10px] font-mono text-violet-400 uppercase tracking-wider">Inference Speed</div>
          <div className="text-2xl font-bold text-white mt-0.5 font-mono">31 ms</div>
          <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
            <span className="text-emerald-400">⚡ Real-time</span> Edge CPU Execution
          </div>
        </div>

        <div className="glass-panel p-3.5 rounded-xl border border-cyan-500/30 bg-navy-900/80 dark:bg-navy-900/80 backdrop-blur-md">
          <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Records Processed</div>
          <div className="text-2xl font-bold text-white mt-0.5 font-mono">1.5M+</div>
          <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
            <span className="text-blue-400">DuckDB</span> Simulated Transit Logs
          </div>
        </div>

        <div className="glass-panel p-3.5 rounded-xl border border-emerald-500/30 bg-navy-900/80 dark:bg-navy-900/80 backdrop-blur-md">
          <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Effort Saved</div>
          <div className="text-2xl font-bold text-white mt-0.5 font-mono">21.25%</div>
          <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
            <span className="text-emerald-400">Automated</span> n8n & Docker Pipeline
          </div>
        </div>
      </div>

      {/* Bottom status strip */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-navy-950/60 dark:bg-navy-900/70 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700/40">
        <div className="flex items-center gap-2">
          <span className="text-slate-300">Stack:</span>
          <span className="text-blue-400">Python</span>
          <span>•</span>
          <span className="text-violet-400">SQL</span>
          <span>•</span>
          <span className="text-cyan-400">Power BI</span>
          <span>•</span>
          <span className="text-emerald-400">PyTorch</span>
        </div>
        <span className="text-slate-400 hidden sm:inline">Nagpur, India</span>
      </div>
    </div>
  );
}
