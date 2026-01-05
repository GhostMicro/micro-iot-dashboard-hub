'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bot, Save, RefreshCcw, Database,
    Trash2, Terminal, Shield, Zap,
    Cpu, Activity, ChevronLeft, Brain,
    Sparkles, MessageSquare, History
} from 'lucide-react';
import { io, Socket } from 'socket.io-client';
import Link from 'next/link';

const GHOST_SECRET = "GHOST_99_ALPHA";

export default function NeuroLab() {
    const [socket, setSocket] = React.useState<Socket | null>(null);
    const [personas, setPersonas] = React.useState<any>({});
    const [memories, setMemories] = React.useState<any>({});
    const [selectedId, setSelectedId] = React.useState<string | null>("0");
    const [editPersona, setEditPersona] = React.useState<any>(null);
    const [saving, setSaving] = React.useState(false);

    React.useEffect(() => {
        const newSocket = io('http://localhost:8000', { auth: { token: GHOST_SECRET } });
        setSocket(newSocket);

        newSocket.on('connect', () => {
            newSocket.emit('get_personas');
            newSocket.emit('get_memories');
        });

        newSocket.on('personas_list', (data) => setPersonas(data));
        newSocket.on('memories_list', (data) => setMemories(data));

        return () => { newSocket.close(); };
    }, []);

    React.useEffect(() => {
        if (selectedId && personas[selectedId]) {
            setEditPersona({ ...personas[selectedId], id: selectedId });
        }
    }, [selectedId, personas]);

    const handleUpdate = () => {
        if (!socket || !editPersona) return;
        setSaving(true);
        socket.emit('update_persona', editPersona);
        setTimeout(() => {
            setSaving(false);
            socket.emit('get_personas');
        }, 500);
    };

    const clearAllMemories = () => {
        if (socket && confirm("Purge all neural memories? This cannot be undone.")) {
            socket.emit('clear_memories');
        }
    };

    if (!personas["0"]) return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-cyan-500 font-mono tracking-widest animate-pulse">
            CONNECTING_TO_BRAIN...
        </div>
    );

    return (
        <main className="min-h-screen relative p-10 flex flex-col items-center overflow-hidden">
            <div className="hub-bg" />
            <div className="hub-grid opacity-20" />
            <div className="scanline" />

            {/* Header */}
            <header className="w-full max-w-7xl flex justify-between items-center mb-16 relative z-10">
                <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                    <ChevronLeft size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Back to Hub</span>
                </Link>
                <div className="text-center">
                    <h1 className="text-5xl font-black italic tracking-tighter uppercase text-white">
                        Neuro_Config<span className="text-cyan-400">urator</span>
                    </h1>
                    <p className="text-[8px] font-black uppercase tracking-[0.6em] text-cyan-500/40 mt-2">Manage Ghost Ecosystem Intelligence Profiles</p>
                </div>
                <div className="w-32" /> {/* Spacer */}
            </header>

            <div className="w-full max-w-7xl grid grid-cols-12 gap-10 relative z-10">

                {/* Sidebar: Persona Slots */}
                <aside className="col-span-3 space-y-4">
                    <div className="flex items-center gap-2 mb-6 px-4">
                        <Cpu size={16} className="text-cyan-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Dash_Neural_Slots</span>
                    </div>
                    {Object.entries(personas).map(([id, p]: [string, any]) => (
                        <button
                            key={id}
                            onClick={() => setSelectedId(id)}
                            className={`w-full group p-6 glass-card rounded-3xl flex flex-col gap-2 text-left transition-all
                ${selectedId === id ? 'border-cyan-500/50 bg-cyan-500/5' : 'hover:border-white/10'}`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-[8px] font-bold opacity-40 uppercase">Dashboard_0{id}</span>
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: p.color }} />
                            </div>
                            <span className={`text-lg font-black italic uppercase tracking-tight transition-colors
                ${selectedId === id ? 'text-cyan-400' : 'text-zinc-400 group-hover:text-white'}`}>
                                {p.name}
                            </span>
                        </button>
                    ))}
                </aside>

                {/* Main Editor */}
                <section className="col-span-6 space-y-8">
                    <AnimatePresence mode="wait">
                        {editPersona && (
                            <motion.div
                                key={selectedId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="glass-card p-10 rounded-[50px] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-10 opacity-5">
                                    <Brain size={150} style={{ color: editPersona.color }} />
                                </div>

                                <div className="relative z-10 space-y-8">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h2 className="text-4xl font-black italic uppercase tracking-tighter" style={{ color: editPersona.color }}>
                                                Slot_Config: 0{selectedId}
                                            </h2>
                                            <p className="text-[10px] font-medium opacity-40 mt-1">MODIFYING_AI_CONTEXT_LAYER</p>
                                        </div>
                                        <button
                                            onClick={handleUpdate}
                                            disabled={saving}
                                            className="flex items-center gap-2 bg-cyan-500 text-black px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all active:scale-95 disabled:opacity-50"
                                        >
                                            {saving ? <RefreshCcw size={14} className="animate-spin" /> : <Save size={14} />}
                                            {saving ? 'Syncing...' : 'Sync to Core'}
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Persona Name</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-bold focus:border-cyan-500 outline-none"
                                                value={editPersona.name}
                                                onChange={(e) => setEditPersona({ ...editPersona, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest opacity-40">System Tag</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-bold focus:border-cyan-500 outline-none uppercase"
                                                value={editPersona.tag}
                                                onChange={(e) => setEditPersona({ ...editPersona, tag: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest opacity-40">System Core Instruction (The "Soul")</label>
                                        <textarea
                                            rows={6}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-sm font-medium focus:border-cyan-500 outline-none leading-relaxed"
                                            value={editPersona.instruction}
                                            onChange={(e) => setEditPersona({ ...editPersona, instruction: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Identity Color</label>
                                            <div className="flex gap-3">
                                                <input
                                                    type="color"
                                                    className="w-10 h-10 bg-transparent rounded-lg cursor-pointer border-none"
                                                    value={editPersona.color}
                                                    onChange={(e) => setEditPersona({ ...editPersona, color: e.target.value })}
                                                />
                                                <span className="font-mono text-[10px] flex items-center opacity-60 uppercase">{editPersona.color}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>

                {/* Right Info: Memories & Stats */}
                <aside className="col-span-3 space-y-6">
                    <div className="glass-card p-8 rounded-[40px] space-y-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <History size={16} className="text-purple-500" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Neural_Memories</span>
                            </div>
                            <button
                                onClick={clearAllMemories}
                                className="p-2 text-red-500/40 hover:text-red-500 transition-colors"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>

                        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 terminal-scroll">
                            {selectedId && memories[selectedId] ? (
                                memories[selectedId].map((m: string, i: number) => (
                                    <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-medium leading-relaxed opacity-70 italic">
                                        {m}...
                                    </div>
                                ))
                            ) : (
                                <div className="text-[10px] opacity-20 text-center py-20 italic">No impressions recorded for this slot.</div>
                            )}
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-[40px] border-cyan-500/20">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles size={16} className="text-cyan-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Evolution_Status</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between text-[9px] uppercase font-bold opacity-60">
                                <span>Core Model</span>
                                <span className="text-white">Gemini 1.5 Flash</span>
                            </div>
                            <div className="flex justify-between text-[9px] uppercase font-bold opacity-60">
                                <span>Cognitive Slots</span>
                                <span className="text-white">Active (8/8)</span>
                            </div>
                            <div className="flex justify-between text-[9px] uppercase font-bold opacity-60">
                                <span>Memory Type</span>
                                <span className="text-white">Episodic (Persistent)</span>
                            </div>
                        </div>
                    </div>
                </aside>

            </div>

            <footer className="mt-20 mb-10 opacity-10">
                <p className="text-[8px] font-black uppercase tracking-[1em]">GhostMicro Intelligence Distribution Layer</p>
            </footer>
        </main>
    );
}
