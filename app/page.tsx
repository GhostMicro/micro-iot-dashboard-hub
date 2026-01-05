'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Shield, Zap, Activity, Database,
  Cpu, Boxes, ChevronRight, Brain,
  Sparkles, Bot, Microscope, Radio,
  Ghost
} from 'lucide-react';

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
  { name: 'Neural Brain', url: 'http://localhost:8000', icon: Bot, color: '#bc13fe', desc: 'AI Core' },
  { name: 'Neuro Lab', url: '/neuro-lab', icon: Brain, color: '#00f2ff', desc: 'Personality Config' },
  { name: 'Library Hub', url: 'http://localhost:3010', icon: Boxes, color: '#ffffff', desc: 'Assets & Plugins' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020202] text-white p-6 md:p-12 lg:p-20 font-sans selection:bg-cyan-500/30">
      <div className="hub-bg" />
      <div className="hub-grid" />
      <div className="scanline" />

      {/* --- Optimized Header --- */}
      <header className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="flex items-center gap-3 mb-8 opacity-60">
          <Ghost size={20} className="text-cyan-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em]">System_Authorized</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-4">
          Ghost<span className="animated-gradient-text">_Hub</span>
        </h1>
        <p className="text-xs md:text-sm font-medium opacity-40 uppercase tracking-[0.3em] max-w-xl">
          Unified command interface for distributed neural nodes and autonomous hardware.
        </p>
      </header>

      {/* --- Grid Layout (Fixed) --- */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-32 relative z-10">
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
                <div className="text-[8px] font-bold text-white/30 uppercase tracking-widest mb-1">ID_0{theme.id}</div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">
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
      </section>

      {/* --- Systems Backbone --- */}
      <section className="max-w-7xl mx-auto pt-20 border-t border-white/5 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-6 bg-cyan-400" />
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">Core_Backbone</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_SYSTEMS.map((system, i) => (
            <motion.a
              key={i}
              href={system.url}
              target={system.url.startsWith('http') ? "_blank" : "_self"}
              whileHover={{ y: -5 }}
              className="group glass-card p-10 rounded-[40px] flex items-center gap-8 border border-white/5 hover:border-cyan-500/20"
            >
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
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="max-w-7xl mx-auto mt-40 mb-10 text-center opacity-10">
        <p className="text-[8px] font-black uppercase tracking-[1em]">GhostMicro Infrastructure // 2026</p>
      </footer>
    </main>
  );
}
