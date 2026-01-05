'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Zap, Activity, Database,
  Cpu, Boxes, ChevronRight, Brain,
  Sparkles, Bot, Microscope, Radio,
  Ghost
} from 'lucide-react';
import Link from 'next/link';

const THEMES = [
  { id: 1, name: 'Tactical HUD', port: 3000, color: '#00f2ff', icon: Shield, desc: 'Combat Interface' },
  { id: 2, name: 'Industrial', port: 3001, color: '#facc15', icon: Zap, desc: 'Engineering Console' },
  { id: 3, name: 'Matrix Bio', port: 3002, color: '#22c55e', icon: Activity, desc: 'Neural Monitoring' },
  { id: 4, name: 'Minimal Lab', port: 3003, color: '#06b6d4', icon: Microscope, desc: 'Research & Diagnostics' },
  { id: 5, name: 'Synthwave', port: 3004, color: '#d946ef', icon: Radio, desc: 'Retro Data Stream' },
  { id: 6, name: 'Prismatic', port: 3005, color: '#8b5cf6', icon: Sparkles, desc: 'Quantum Intelligence' },
  { id: 7, name: 'Efficiency Pro', port: 3007, color: '#f97316', icon: Cpu, desc: 'Resource Optimization' },
  { id: 8, name: 'Stark HUD', port: 3008, color: '#00d2ff', icon: Bot, desc: 'J.A.R.V.I.S Assistant' },
];

const CORE_SYSTEMS = [
  { name: 'Genesis Core', url: 'http://localhost:8000', icon: Bot, color: '#bc13fe', desc: 'Neural Intelligence (AI)' },
  { name: 'Neuro Lab', url: '/neuro-lab', icon: Brain, color: '#00f2ff', desc: 'Intelligence Configuration' },
  { name: 'Library Hub', url: 'http://localhost:3010', icon: Boxes, color: '#ffffff', desc: 'Assets & Plugins' },
];

export default function Home() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#020202] text-white p-6 md:p-12 lg:p-20 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      <div className="hub-bg" />
      <div className="hub-grid" />
      <div className="scanline" />

      {/* Optimized Header */}
      <header className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="flex items-center gap-3 mb-8 opacity-60">
          <Ghost size={20} className="text-cyan-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em]">System_Genesis_Authorized</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-4">
          Ghost<span className="animated-gradient-text">_Hub</span>
        </h1>
        <p className="text-xs md:text-sm font-medium opacity-40 uppercase tracking-[0.3em] max-w-xl">
          Central management for Genesis Neural Core and distributed automation nodes.
        </p>
      </header>

      {/* Grid Layout - Forced Grid with Style Object to prevent Tailwind bypass */}
      <div
        className="max-w-7xl mx-auto mb-32 relative z-10"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}
      >
        {THEMES.map((theme, i) => (
          <motion.a
            key={theme.id}
            href={`http://localhost:${theme.port}`}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group relative block glass-card p-8 rounded-[32px] overflow-hidden border border-white/5 hover:border-white/20 transition-all active:scale-[0.98]"
          >
            {/* Background Glow */}
            <div
              className="absolute -top-10 -right-10 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity"
              style={{ backgroundColor: theme.color }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div
                className="mb-6 p-4 rounded-2xl bg-white/5 w-fit"
                style={{ color: theme.color }}
              >
                <theme.icon size={28} />
              </div>

              <div>
                <div className="text-[8px] font-bold text-white/30 uppercase tracking-widest mb-1">NODE_0{theme.id}</div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2 group-hover:text-white transition-colors">
                  {theme.name}
                </h3>
                <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-tighter group-hover:text-white/60 transition-colors">
                  {theme.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-black font-mono text-white/20 group-hover:text-white/50 transition-colors">
                  PORT_{theme.port}
                </span>
                <ChevronRight size={18} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Systems Backbone */}
      <div className="max-w-7xl mx-auto pt-20 border-t border-white/5 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-6 bg-cyan-400" />
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">Core_Command</h2>
        </div>

        <div
          className="grid gap-6"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}
        >
          {CORE_SYSTEMS.map((system, i) => {
            const isExternal = system.url.startsWith('http');
            const Content = (
              <div className="flex items-center gap-8 w-full h-full">
                <div
                  className="p-5 bg-white/5 rounded-2xl transition-all group-hover:scale-110"
                  style={{ color: system.color }}
                >
                  <system.icon size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-1">{system.name}</h3>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/40">{system.desc}</p>
                </div>
              </div>
            );

            return isExternal ? (
              <a
                key={i}
                href={system.url}
                target="_blank"
                className="group glass-card p-10 rounded-[40px] flex border border-white/5 hover:border-cyan-500/20 transition-all"
              >
                {Content}
              </a>
            ) : (
              <Link
                key={i}
                href={system.url}
                className="group glass-card p-10 rounded-[40px] flex border border-white/5 hover:border-cyan-500/20 transition-all"
              >
                {Content}
              </Link>
            )
          })}
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-40 mb-10 text-center opacity-10">
        <p className="text-[8px] font-black uppercase tracking-[1em]">GhostMicro Infrastructure // Genesis Core</p>
      </footer>
    </main>
  );
}
