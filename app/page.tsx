'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Zap, Activity, Database,
  Terminal, Layout, Cpu, Boxes,
  ChevronRight, Globe, Lock, Rocket,
  Sparkles, Bot, Microscope, Radio,
  Moon, Sun, Coffee, Ghost
} from 'lucide-react';

const THEMES = [
  { id: 1, name: 'Tactical HUD', port: 3000, color: '#00f2ff', icon: Shield, desc: 'High-Alert Combat Interface' },
  { id: 2, name: 'Industrial', port: 3001, color: '#facc15', icon: Zap, desc: 'Heavy Duty Engineering Console' },
  { id: 3, name: 'Matrix Bio', port: 3002, color: '#22c55e', icon: Activity, desc: 'Deep-Trace Neural Monitoring' },
  { id: 4, name: 'Minimal Lab', port: 3003, color: '#06b6d4', icon: Microscope, desc: 'Clinical Research & Diagnostics' },
  { id: 5, name: 'Synthwave', port: 3004, color: '#d946ef', icon: Radio, desc: 'Retro-Futuristic Data Stream' },
  { id: 6, name: 'Prismatic', port: 3005, color: '#8b5cf6', icon: Sparkles, desc: 'Multi-Spectral Intelligence' },
  { id: 7, name: 'Efficiency Pro', port: 3007, color: '#f97316', icon: Cpu, desc: 'Resource Optimization Hub' },
  { id: 8, name: 'Stark HUD', port: 3008, color: '#00d2ff', icon: Bot, desc: 'J.A.R.V.I.S Tactical Assistant' },
];

const CORE_SYSTEMS = [
  { name: 'Neural Brain', url: 'http://localhost:8000', icon: Bot, color: '#bc13fe', desc: 'AI Cognitive Core' },
  { name: 'Neuro Lab', url: '/neuro-lab', icon: Brain, color: '#00f2ff', desc: 'Intelligence Configuration & Memories' },
  { name: 'Library Hub', url: 'http://localhost:3010', icon: Boxes, color: '#ffffff', desc: 'Component & Plugin Registry' },
];

function Brain({ size, className }: { size: number, className: string }) {
  return <Bot size={size} className={className} />;
}

export default function Home() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative p-10 flex flex-col items-center">
      <div className="hub-bg" />
      <div className="hub-grid" />
      <div className="scanline" />

      {/* Hero Section */}
      <header className="w-full max-w-7xl flex flex-col items-center text-center mt-20 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 glass-card rounded-3xl mb-12 flex items-center gap-4 px-8 border-cyan-500/20"
        >
          <Ghost className="text-cyan-400 animate-pulse" size={24} />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500/60">Ghost_Ecosystem_Authorized_Access</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-8xl font-black italic tracking-tighter animated-gradient-text uppercase mb-6"
        >
          Central_Hub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="text-sm font-light max-w-2xl tracking-[0.2em] uppercase"
        >
          Unified Control Interface for Distributed Intelligence Nodes
        </motion.p>
      </header>

      {/* Dashboard Grid */}
      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {THEMES.map((theme, i) => (
          <motion.a
            key={theme.id}
            href={`http://localhost:${theme.port}`}
            target="_blank"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group glass-card p-8 rounded-[40px] flex flex-col gap-6 relative overflow-hidden"
          >
            <div className={`p-4 rounded-2xl bg-zinc-900 w-fit text-zinc-400 group-hover:text-white transition-colors`} style={{ color: theme.color }}>
              <theme.icon size={28} />
            </div>

            <div>
              <div className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Node_0{theme.id}</div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
                {theme.name}
              </h3>
              <p className="text-[10px] text-zinc-500 mt-2 font-medium leading-relaxed">
                {theme.desc}
              </p>
            </div>

            <div className="mt-8 flex justify-between items-center text-zinc-600 group-hover:text-cyan-500 transition-colors">
              <span className="text-[9px] font-black uppercase tracking-widest">Local_Port: {theme.port}</span>
              <ChevronRight size={18} />
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <theme.icon size={180} />
            </div>
          </motion.a>
        ))}
      </section>

      {/* Core Systems Section */}
      <section className="w-full max-w-7xl pt-20 border-t border-white/5">
        <div className="flex flex-col gap-2 mb-10">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500">Core_Infrastructure</span>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">System_Backbone</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CORE_SYSTEMS.map((system, i) => (
            <motion.a
              key={i}
              href={system.url}
              target="_blank"
              whileHover={{ x: 10 }}
              className="group flex items-center gap-8 p-10 glass-card rounded-[50px] border-l-4"
              style={{ borderLeftColor: system.color }}
            >
              <div className="p-6 bg-zinc-900 rounded-3xl group-hover:bg-white/10 transition-colors" style={{ color: system.color }}>
                <system.icon size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black italic uppercase tracking-tight mb-2">{system.name}</h3>
                <p className="opacity-50 text-sm">{system.desc}</p>
              </div>
              <ChevronRight className="opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={32} />
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="mt-40 mb-20 text-center opacity-20">
        <p className="text-[10px] font-black uppercase tracking-[1em]">GhostMicro Infrastructure // 2026</p>
      </footer>
    </main>
  );
}
