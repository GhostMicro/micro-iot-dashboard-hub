'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Zap, Activity, Database,
  Terminal, Layout, Cpu, Boxes,
  ChevronRight, Globe, Lock, Rocket,
  Sparkles, Bot, Microscope, Radio,
  Moon, Sun, Coffee, Ghost, Brain
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

export default function Home() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative p-8 md:p-14 lg:p-20 flex flex-col items-center">
      <div className="hub-bg" />
      <div className="hub-grid" />
      <div className="scanline" />

      {/* Header Section */}
      <header className="w-full max-w-7xl flex flex-col items-center text-center mt-10 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 py-2 glass-card rounded-full mb-10 flex items-center gap-3 border-white/10"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400">GHOST_ECOSYSTEM_ACTIVE</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter animated-gradient-text uppercase">
            CENTRAL_HUB
          </h1>
          <div className="absolute -inset-2 blur-3xl bg-cyan-500/10 -z-10" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="text-[10px] md:text-xs font-bold mt-6 tracking-[0.5em] uppercase text-white"
        >
          Neural Link Authorized // Distributed Node Control
        </motion.p>
      </header>

      {/* Node Grid */}
      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 relative z-10">
        {THEMES.map((theme, i) => (
          <motion.a
            key={theme.id}
            href={`http://localhost:${theme.port}`}
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group glass-card p-10 rounded-[48px] flex flex-col gap-6 relative overflow-hidden border-white/5 hover:border-white/20 active:scale-95"
          >
            {/* Glow effect in background */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"
              style={{ backgroundColor: theme.color }}
            />

            <div
              className="p-5 rounded-2xl bg-white/5 w-fit transition-all group-hover:bg-white/10 group-hover:scale-110"
              style={{ color: theme.color, boxShadow: `0 0 20px ${theme.color}20` }}
            >
              <theme.icon size={32} />
            </div>

            <div className="flex-1">
              <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Node_0{theme.id}</div>
              <h3 className="text-3xl font-black italic uppercase tracking-tighter group-hover:text-white transition-colors">
                {theme.name}
              </h3>
              <p className="text-[11px] text-white/40 group-hover:text-white/70 mt-3 font-medium leading-relaxed transition-colors">
                {theme.desc}
              </p>
            </div>

            <div className="mt-8 flex justify-between items-center group-hover:translate-x-1 transition-transform">
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Access_Port</span>
                <span className="text-[12px] font-black text-white/80" style={{ color: `${theme.color}cc` }}>{theme.port}</span>
              </div>
              <ChevronRight size={24} className="text-white/20 group-hover:text-white transition-colors" />
            </div>
          </motion.a>
        ))}
      </section>

      {/* Backbone / Core Systems */}
      <section className="w-full max-w-7xl pt-24 border-t border-white/5 relative z-10">
        <div className="flex items-center justify-between mb-16">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">Backbone_Infrastructure</span>
            </div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">Neural_System_Registry</h2>
          </div>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="opacity-10 hidden md:block">
            <Boxes size={100} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_SYSTEMS.map((system, i) => (
            <motion.a
              key={i}
              href={system.url}
              target={system.url.startsWith('http') ? "_blank" : "_self"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (i * 0.1) }}
              className="group flex flex-col gap-8 p-12 glass-card rounded-[60px] border-white/5 hover:border-white/10 active:scale-[0.98]"
            >
              <div
                className="p-6 bg-white/5 rounded-3xl w-fit group-hover:bg-white/10 transition-all group-hover:rotate-6 shadow-xl"
                style={{ color: system.color, boxShadow: `0 10px 30px ${system.color}15` }}
              >
                <system.icon size={44} />
              </div>
              <div>
                <h3 className="text-3xl font-black italic uppercase tracking-tight mb-3 text-white">{system.name}</h3>
                <p className="opacity-40 text-xs font-medium leading-relaxed group-hover:opacity-70 transition-opacity">{system.desc}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-20 group-hover:opacity-100 transition-opacity">Connect_Now</span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="mt-48 mb-20 text-center relative z-10 w-full">
        <div className="w-20 h-px bg-white/10 mx-auto mb-10" />
        <p className="text-[9px] font-bold uppercase tracking-[1.5em] text-white/10">GhostMicro Infrastructure // Distributed intelligence layer</p>
      </footer>
    </main>
  );
}
