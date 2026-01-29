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
  { id: 1, name: 'Tactical HUD', url: 'https://micro-iot-dashboard-1.vercel.app/', color: '#00f2ff', icon: Shield, desc: 'Combat Interface', screenshot: '/screenshots/dashboard_1.png' },
  { id: 2, name: 'Industrial', url: 'https://micro-iot-dashboard-2.vercel.app/', color: '#facc15', icon: Zap, desc: 'Engineering Console', screenshot: '/screenshots/dashboard_2.png' },
  { id: 3, name: 'Matrix Bio', url: 'https://micro-iot-dashboard-3.vercel.app/', color: '#22c55e', icon: Activity, desc: 'Neural Monitoring', screenshot: '/screenshots/dashboard_3.png' },
  { id: 4, name: 'Minimal Lab', url: 'https://micro-iot-dashboard-4.vercel.app/', color: '#06b6d4', icon: Microscope, desc: 'Research & Diagnostics', screenshot: '/screenshots/dashboard_4.png' },
  { id: 5, name: 'Synthwave', url: 'https://micro-iot-dashboard-5.vercel.app/', color: '#d946ef', icon: Radio, desc: 'Retro Data Stream', screenshot: '/screenshots/dashboard_5.png' },
  { id: 6, name: 'Prismatic', url: 'https://micro-iot-dashboard-6.vercel.app/', color: '#8b5cf6', icon: Sparkles, desc: 'Quantum Intelligence', screenshot: '/screenshots/dashboard_6.png' },
  { id: 7, name: 'Efficiency Pro', url: 'https://micro-iot-dashboard-7.vercel.app/', color: '#f97316', icon: Cpu, desc: 'Resource Optimization', screenshot: '/screenshots/dashboard_7.png' },
  { id: 8, name: 'Stark HUD', url: 'https://micro-iot-dashboard-8.vercel.app/', color: '#00d2ff', icon: Bot, desc: 'J.A.R.V.I.S Assistant', screenshot: '/screenshots/dashboard_8.png' },
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
    <main className="min-h-screen bg-[#0a0a0b] text-slate-200 p-6 md:p-12 lg:p-20 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      <div className="hub-bg" />
      <div className="hub-grid" />
      <div className="scanline" />

      {/* Optimized Header */}
      <header className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="flex items-center gap-3 mb-8 opacity-60">
          <Ghost size={20} className="text-cyan-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">System_Genesis_Authorized</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none mb-4">
          Ghost<span className="animated-gradient-text">_Hub</span>
        </h1>
        <p className="text-xs md:text-sm font-medium opacity-40 uppercase tracking-[0.3em] max-w-xl text-slate-400">
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
            href={theme.url}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group relative block glass-card p-8 rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 transition-all active:scale-[0.98]"
          >
            {/* Dashboard Preview Image - High Visibility */}
            <div className="relative w-full h-32 mb-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5 group-hover:border-white/20 transition-all">
              <img
                src={theme.screenshot}
                alt={theme.name}
                className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity duration-500 filter saturate-150 brightness-110 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              <div
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/40 backdrop-blur-md shadow-lg border border-white/5"
                style={{ color: theme.color }}
              >
                <theme.icon size={20} />
              </div>
            </div>

            {/* Background Glow */}
            <div
              className="absolute -top-10 -right-10 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity"
              style={{ backgroundColor: theme.color }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div>
                <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">NODE_0{theme.id}</div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {theme.name}
                </h3>
                <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-tighter group-hover:text-slate-300 transition-colors">
                  {theme.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-black font-mono text-slate-600 group-hover:text-slate-400 transition-colors uppercase tracking-widest">
                  STATUS_ONLINE
                </span>
                <ChevronRight size={18} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Systems Backbone */}
      <div className="max-w-7xl mx-auto pt-20 border-t border-white/5 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-6 bg-cyan-500" />
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">Core_Command</h2>
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
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-1 text-white">{system.name}</h3>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-400">{system.desc}</p>
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
        <p className="text-[8px] font-black uppercase tracking-[1em] text-slate-600">GhostMicro Infrastructure // Genesis Core</p>
      </footer>
    </main>
  );
}
